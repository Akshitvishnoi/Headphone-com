import { UpdateFollower } from 'react-mouse-follower';
import Headphone4 from '../assets/headphone4.png';
import { motion } from 'framer-motion';
import { fadeUp } from './Services';

const Banner = () => {
    return (
        <>
            <section>
                <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                    {/* banner image */}
                    <div>
                        <motion.img
                            initial={{ opacity: 0, x: -100, rotate: -180 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                            src={Headphone4} alt='' className='w-[300px] md:w-[400px] mx-auto' />
                    </div>
                    {/* banner text */}
                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                            <motion.h1
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            className='text-3xl lg:text-4xl font-semibold font-poppins uppercase'>
                                The Latest headphone with latest technology
                            </motion.h1>
                            <motion.p
                            variants={fadeUp(0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis officia architecto iure animi eaque doloribus harum culpa. Adipisci, recusandae pariatur. Laudantium voluptatibus illo velit aliquam obcaecati, minima totam ab minus.
                            </motion.p>
                            <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.7,
                                scale: 6,
                                mixBlendMode: "difference",
                                
                            }}
                            >
                                <motion.button
                                variants={fadeUp(1.3)}
                                initial="hidden"
                                whileInView={"show"}
                                className='border-2 border-red-400 text-red-400 px-6 py-2 rounded-md hover:bg-red-400 hover:text-white'>
                                    shop now
                                </motion.button>
                            </UpdateFollower>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner