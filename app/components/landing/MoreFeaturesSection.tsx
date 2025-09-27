import { Download, Settings } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function MoreFeaturesSection() {
    const features = [
        {
            icon: Download,
            title: "Complete Meeting Exports",
            description: "Download audio MP3, transcripts, summaries, and action items."
        },
        {
            icon: Settings,
            title: "Full Customization",
            description: "Customize bot name, image and toggle bot participation"
        },
        {
            icon: Download,
            title: "Meeting Analytics",
            description: "Track meeting patterns, participation rates, and productivity."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1
        }
    }

    return (
        <section className='py-10 bg-background'>
            <div className='max-w-6xl mx-auto px-4'>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='text-center mb-12'
                >
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                        Plus{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">
                            More Features
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need for complete meeting management
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='grid md:grid-cols-3 gap-8'
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className='bg-card/50 border border-border rounded-xl p-6 hover:bg-card/70 hover:border-border/80 transition-all cursor-pointer'
                        >
                            <motion.div
                                className='w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4'
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <feature.icon className='w-6 h-6 text-blue-400' />
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

export default MoreFeaturesSection