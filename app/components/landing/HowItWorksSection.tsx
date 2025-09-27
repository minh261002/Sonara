import React from 'react'
import { motion } from 'framer-motion'

function HowItWorksSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const stepVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1
        }
    }

    const numberVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0
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
                        How It {' '}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">
                            Works
                        </span>

                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get Started in minutes with our simple 3-step-process
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='grid md:grid-cols-3 gap-12'
                >
                    <motion.div
                        variants={stepVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.2 }
                        }}
                        className='text-center group'
                    >
                        <motion.div
                            variants={numberVariants}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className='w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary bg-card/50 text-primary flex items-center justify-center text-2xl font-bold group-hover:bg-primary/10 transition-all duration-300'
                        >
                            1
                        </motion.div>
                        <h3 className='text-2xl font-semibold text-foreground mb-4'>Connect Calendar</h3>
                        <p className='text-muted-foreground text-lg leading-relaxed'>
                            Link your Google Calendar and we&apos;ll automatically detect your meetings
                        </p>
                    </motion.div>
                    <motion.div
                        variants={stepVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.2 }
                        }}
                        className='text-center group'
                    >
                        <motion.div
                            variants={numberVariants}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className='w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary bg-card/50 text-primary flex items-center justify-center text-2xl font-bold group-hover:bg-primary/10 transition-all duration-300'
                        >
                            2
                        </motion.div>
                        <h3 className='text-2xl font-semibold text-foreground mb-4'>Bot Joins Meeting</h3>
                        <p className='text-muted-foreground text-lg leading-relaxed'>
                            Our AI bot automatically joins and records your meetings with full transcription
                        </p>
                    </motion.div>
                    <motion.div
                        variants={stepVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.2 }
                        }}
                        className='text-center group'
                    >
                        <motion.div
                            variants={numberVariants}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className='w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary bg-card/50 text-primary flex items-center justify-center text-2xl font-bold group-hover:bg-primary/10 transition-all duration-300'
                        >
                            3
                        </motion.div>
                        <h3 className='text-2xl font-semibold text-foreground mb-4'>Get Insights</h3>
                        <p className='text-muted-foreground text-lg leading-relaxed'>
                            Receive summaries, action items, and push them to your faviourite tools instantly
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorksSection