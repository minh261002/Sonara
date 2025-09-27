import { Bot, Calendar, Mail, MessageSquare, Share2, Slack } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const features = [
    {
        icon: Bot,
        title: "AI Meeting Summaries",
        description: "Automatic meeting summaries and action items after each meeting",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Calendar,
        title: "Smart Calendar Integration",
        description: "Connect Google Calendar and bots automatically join meetings",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Mail,
        title: "Automated Email Reports",
        description: "Receive beautiful email summaries with action items",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: MessageSquare,
        title: "Chat with Meetings",
        description: "Ask questions about meetings using our RAG pipeline",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: Share2,
        title: "One-Click Integrations",
        description: "Push action items to Slack, Asana, Jira and Trello",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Slack,
        title: "Slack bot Integration",
        description: "Install our Slack Bot to ask questions and share insights",
        color: "text-pink-400",
        bgColor: "bg-pink-500/10",
    },
]

function FeaturesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className='py-20 bg-background'>
            <div className='max-w-6xl mx-auto px-4'>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                        Everything you need for{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">
                            Smarter Meetings
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
                        From AI summaries to seamless integrations, we&apos;ve got every aspect covered.
                    </p>

                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className='bg-card/50 border border-border rounded-xl p-6 hover:bg-card/70 hover:border-border/80 transition-all cursor-pointer'
                        >
                            <motion.div
                                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </motion.div>
                            <h3 className='text-xl font-semibold text-foreground mb-2'>
                                {feature.title}
                            </h3>
                            <p className='text-muted-foreground'>
                                {feature.description}
                            </p>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default FeaturesSection