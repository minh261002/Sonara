"use client"

import React from 'react'
import { useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from './app-sidebar'

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSignedIn } = useAuth()
    const pathname = usePathname()

    const showSidebar = pathname !== "/" && !(pathname.startsWith("/meeting/") && !isSignedIn)

    if (!showSidebar) {
        return <div className='min-h-screen'>{children}</div>
    }

    return (
        <SidebarProvider defaultOpen={true}>
            <div className='w-full flex h-screen'>
                <AppSidebar />
                <main className='flex-1 overflow-auto'>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default ConditionalLayout