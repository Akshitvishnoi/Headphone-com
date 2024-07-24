import React from 'react'
import Headphone from '../assets/headphone.png';
import Headphone2 from '../assets/headphone2.png';
import Headphone3 from '../assets/headphone3.png';
import { SiWhatsapp } from "react-icons/si";
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const fadeup = (delay) => {
    return {
        hidden: {
            y: 100,
            opacity: 0.5
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            y: 50,
            opacity: 0.5,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut
            },

        },
    };

};

const headphoneData = [
    {
        id: 1,
        image: Headphone,
        title: "Headphone Wireless",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        price: "$100",
        modal: "Dark Brown",
        bgcolor: "#8b5958"
    },
    {
        id: 2,
        image: Headphone2,
        title: "Headphone Wireless 2",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        price: "$100",
        modal: "lime green",
        bgcolor: "#638153"
    },
    {
        id: 1,
        image: Headphone3,
        title: "Headphone Wireless 3",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        price: "$100",
        modal: "ocean blue",
        bgcolor: "#5d818c"
    },
];
const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };
    return (
        <>
            <section className="bg-brandDark text-white font-varela">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                    {/* brand info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                        <div className='text-center space-y-5 md:text-left'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 10,
                                        mixBlendMode: "difference",
                                        rotate: -720,

                                    }}>
                                    <motion.h1
                                        key={activeData.id}
                                        variants={fadeup(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-3xl lg:text-6xl font-bold font-varela'>
                                        {activeData.title}
                                    </motion.h1>
                                </UpdateFollower>

                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={fadeup(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-sm leading-loose text-white/70'>{activeData.subtitle}
                                </motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgcolor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 6,
                                        rotate: -720,
                                        backgroundElement: <div>
                                            <img src={activeData.image} />
                                        </div>
                                    }}>
                                    <motion.button
                                        key={activeData.id}
                                        variants={fadeup(0.3)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        style={{ backgroundColor: activeData.bgcolor }}
                                        className='px-4 py-2 inline-block rounded-sm font-normal'>
                                        Buy and listen
                                    </motion.button>
                                </UpdateFollower>
                            </AnimatePresence>

                            {/* Headphone list separator */}
                            <div className='flex justify-center md:justify-start items-center gap-4 !mt-24'>
                                <div className="w-10 h-1 bg-white my-5 mx-auto md:mx-0"></div>
                                <p>Top Headphones For You</p>
                                <div className="w-10 h-1 bg-white my-5 mx-auto md:mx-0"></div>
                            </div>
                            {/* Headphone list switcher */}
                            <div className='grid grid-cols-3 gap-10'>
                                {headphoneData.map((item) => {
                                    return (
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: item.bgcolor,
                                                zIndex: 9999,
                                                followSpeed: 0.5,
                                                scale: 5,
                                                text: "view details",
                                                textFontSize: "3px",
                                            }}>
                                            <div
                                                key={item.id}
                                                onClick={() => handleActiveData(item)}
                                                className='grid grid-cols-2 place-items-center cursor-pointer'>
                                                <div>
                                                    <img src={item.image} alt="" className='w-[200px]' />
                                                </div>
                                                <div className='space-y-2'>
                                                    <p className='font-bold text-base'>{item.price}</p>
                                                    <p className='text-sm font-normal text-nowrap'>{item.modal}</p>
                                                </div>
                                            </div>
                                        </UpdateFollower>

                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* hero image */}
                    <div className='flex flex-col justify-end items-center'>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeData.id}
                                variants={fadeup(0.5)}
                                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{
                                    opacity: 0, y: 100, scale: 0.9,
                                    transition: { duration: 0.2 },
                                }}
                                transition={{ duration: 0.4, ease: easeInOut, delay: 0.2 }}
                                src={activeData.image}
                                alt=""
                                className='w-[300px] md:w-[400px] xl:w-[550px]' />
                        </AnimatePresence>

                    </div>
                    {/* whatsapp icon */}
                    <div className="fixed bottom-10 right-10 text-3xl text-white hover:rotate-[360deg] duration-500 mix-blend-difference z-[99999]">
                        <a href="">
                            <SiWhatsapp />
                        </a>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero