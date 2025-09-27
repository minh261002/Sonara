import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const stats = [
        { value: 2, suffix: '+', label: 'Happy Users' },
        { value: 99.69, suffix: '%', label: 'Uptime' },
        { value: 2, suffix: 'min', label: 'Setup Time' },
        { value: 50, suffix: 'hrs', label: 'Saved Per Month' }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1
        }
    }

    return (
        <section className='py-20 bg-background'>
            <div className='max-w-6xl mx-auto px-4'>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='grid md:grid-cols-4 gap-8 mb-20 pb-16'
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            className='text-center group'
                        >
                            <motion.div
                                className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent mb-2'
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "backOut"
                                }}
                            >
                                {stat.value}{stat.suffix}
                            </motion.div>
                            <p className='text-muted-foreground'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default StatsSection