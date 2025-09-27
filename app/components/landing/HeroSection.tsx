'use client'

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs"
import { ArrowRight, Bot, CheckCircle, ChevronRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
    const { isSignedIn } = useUser()
    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50"
            >
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary-foreground" />

                            </div>
                            <span className="text-xl font-bold text-foreground">Sorana</span>

                        </motion.div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <ThemeToggle />
                            {isSignedIn ? (
                                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                    <Link href="/home">Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <SignInButton mode="modal">
                                        <Button variant="outline" className="bg-transparent border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                            Sign In
                                        </Button>
                                    </SignInButton>

                                    <SignUpButton mode="modal">
                                        <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                            Get Started
                                        </Button>
                                    </SignUpButton>
                                </>

                            )}

                        </motion.div>

                    </div>
                </div>

            </motion.nav>

            <section className="py-20 px-4 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative mx-auto flex w-fit items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#3b82f61f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#3b82f63f] mb-8"
                    >
                        <span
                            className={cn(
                                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#3b82f6]/50 via-[#1d4ed8]/50 to-[#3b82f6]/50 bg-[length:300%_100%] p-[1px]",
                            )}
                            style={{
                                WebkitMask:
                                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "destination-out",
                                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                maskComposite: "subtract",
                                WebkitClipPath: "padding-box",
                            }}
                        />
                        <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                        <AnimatedGradientText className="text-sm font-medium text-muted-foreground">
                            AI-Powered Meeting Assistant
                        </AnimatedGradientText>
                        <ChevronRight
                            className="ml-1 w-4 h-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                    >
                        Transform Your Meetings with{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">AI Magic</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground"
                    >
                        Automatic summaries, action items, and intelligent insights for every meeting.
                        Never miss important details again.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        {isSignedIn ? (
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4" >
                                <Link href="/home" className="group">
                                    <span>Dashboard</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />

                                </Link>
                            </Button>
                        ) : (
                            <SignUpButton mode="modal">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 group cursor-pointer">
                                    <span>Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </SignUpButton>
                        )}

                        <Button variant="outline" size="lg" className="bg-transparent border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground px-8 py-4 cursor-pointer">
                            <Play className="w-5 h-5 mr-2" />
                            <span>Watch Demo</span>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Setup in 2 minutes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Free forever plan</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}