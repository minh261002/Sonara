import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const integrations = [
    { name: "Slack", image: "slack.png" },
    { name: "Asana", image: "asana.png" },
    { name: "Jira", image: "jira.png" },
    { name: "Trello", image: "trello.png" },
    { name: "Google Calendar", image: "gcal.png" }
]

function IntegrationsSection() {
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
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1
        }
    }

    return (
        <section className='py-20 bg-black'>
            <div className='max-w-6xl mx-auto px-4'>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Seamless{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  bg-clip-text text-transparent">
                            Integrations
                        </span>
                    </h2>
                    <p className="text-lg bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,163,175,0.3)]">
                        Connect with the tools you aldready use and love
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='flex flex-wrap justify-center items-center gap-8 md:gap-12'
                >
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className='text-center group cursor-pointer'
                        >
                            <motion.div
                                className='w-16 h-16 mx-auto mb-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-800/50 transition-all duration-300 group-hover:bg-white/10 group-hover:border-gray-700'
                                whileHover={{
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Image
                                    src={`/${integration.image}`}
                                    alt={`${integration.name} logo`}
                                    width={64}
                                    height={64}
                                    className='w-full h-full object-contain'
                                />
                            </motion.div>
                            <motion.p
                                className='text-sm font-medium text-white'
                                whileHover={{ color: "#60a5fa" }}
                            >
                                {integration.name}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default IntegrationsSection