import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { prisma } from "@/lib/db";

type ClerkEmailAddress = {
  id: string;
  email_address: string;
};

type ClerkUserCreatedEvent = {
  object: "event";
  type: "user.created";
  data: {
    id: string;
    primary_email_address_id: string | null;
    email_addresses: ClerkEmailAddress[];
    first_name: string | null;
    last_name: string | null;
  };
};

type ClerkWebhookEvent = ClerkUserCreatedEvent;

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const headers = {
      "svix-id": request.headers.get("svix-id") ?? "",
      "svix-timestamp": request.headers.get("svix-timestamp") ?? "",
      "svix-signature": request.headers.get("svix-signature") ?? "",
    };

    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Missing Clerk webhook secret" },
        { status: 500 }
      );
    }

    const wh = new Webhook(webhookSecret);

    try {
      wh.verify(payload, headers);
    } catch {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event: ClerkWebhookEvent = JSON.parse(payload);
    console.log("Clerk webhook received", event.type);

    if (event.type === "user.created") {
      const {
        id,
        email_addresses,
        primary_email_address_id,
        first_name,
        last_name,
      } = event.data;

      const primaryEmail = email_addresses.find(
        (email) => email.id === primary_email_address_id
      )?.email_address;

      const newUser = await prisma.user.create({
        data: {
          id,
          clerkId: id,
          email: primaryEmail ?? null,
          name: [first_name, last_name].filter(Boolean).join(" "),
        },
      });

      console.log("User created", newUser.id, newUser.email);
      return NextResponse.json({ message: "User created successfully" });
    }

    return NextResponse.json({ message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error", error);
    return NextResponse.json({ message: "Webhook failed" }, { status: 500 });
  }
}
