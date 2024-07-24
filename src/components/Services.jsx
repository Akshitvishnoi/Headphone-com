// my-project\src\components\Services.jsx
import { UpdateFollower } from "react-mouse-follower";
import obj1 from "../assets/obj1.png";
import obj2 from "../assets/obj2.png";
import obj3 from "../assets/obj3.png";
import { motion } from "framer-motion";


export const fadeUp =(delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

const ServicesData = [
    {
        id: 1,
        title: "SECURITY",
        image: obj1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        delay: 0.5,
    },
    {
        id: 2,
        title: "GURANTEE",
        image: obj2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        delay: 0.8,
    },
    {
        id: 1,
        title: "AFFORDABILITY",
        image: obj3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        delay: 1.1,
    },
]
const Services = () => {
    return (
        <>
            <section className="bg-gray-200 font-poppins py-8">
                <div className="container py-14">
                    <motion.h1
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    className="text-4xl font-bold text-center pb-8">Services</motion.h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
                        {ServicesData.map((data) => (
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    scale: 8,
                                    mixBlendMode: "hard-light",
                                    rotate: 360,
                                    backgroundElement: (
                                        <div>
                                            <img src={data.image} alt="" />
                                        </div>
                                    ),
                                }}
                            >
                                <motion.div
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                
                                className="flex flex-col items-center justify-center p-5 mx-auto mx-w-[300px] shadow-lg rounded-xl bg-gray-400">
                                    <img src={data.image} alt="" className="w-[100px] mb-4" />
                                    <div className="text-center space-y-2">
                                        <h1 className="text-2xl font-bold">{data.title}</h1>
                                        <p className="text-black/75 text-center text-sm">{data.desc}</p>
                                    </div>
                                </motion.div>
                            </UpdateFollower>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Services