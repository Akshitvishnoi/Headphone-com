import { MdPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrFacebookOption, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import Cards from '../assets/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white pt-12 pb-8">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {/* company details */}
                        <motion.div 
                         initial={{ opacity: 0, y: 100}}
                         whileInView={{ opacity: 1, y: 0}}
                         transition={{ duration: 0.6, delay: 0.2 }}

                        className="space-y-6">
                            <h1 className="text-3xl font-bold uppercase">Playing</h1>
                            <p className="text-sm max-w-[300px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero cumque hic deleniti! Explicabo, in
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius officiis animi, voluptates amet ducimus.
                            </p>
                            <div>
                                <button className="flex items-center gap-2 ">
                                    <MdPhone />
                                    +91 123456789
                                </button>
                                <button className="flex items-center gap-2 mt-2">
                                    <FaMapLocationDot />
                                    Address Lorem ipsum dolor sit.
                                </button>
                            </div>
                        </motion.div>
                        {/* footer details */}
                        <motion.div
                         initial={{ opacity: 0, y: 100}}
                         whileInView={{ opacity: 1, y: 0}}
                         transition={{ duration: 0.6, delay: 0.4 }}

                        className="space-y-6">
                            <h1 className="text-4xl font-bold">
                                Quick Links
                            </h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <button className="text-left">
                                        <ul className="space-y-2">
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact us</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </button>
                                </div>
                                <div>
                                    <button className="text-left">
                                        <ul className="space-y-2 ">
                                            <li>Setting</li>
                                            <li>Help</li>
                                            <li>Create account</li>
                                            <li>Write For Us</li>
                                        </ul>
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                        {/* social details */}
                        <motion.div 
                         initial={{ opacity: 0, y: 100}}
                         whileInView={{ opacity: 1, y: 0}}
                         transition={{ duration: 0.6, delay: 0.6 }}

                        className="space-y-6">
                            <h1 className="text-4xl font-bold">Follow us on </h1>
                            <div className="flex items-center gap-4">
                                <button><GrInstagram className="text-3xl hover:scale-125 duration-500" /></button>
                                <button><GrFacebookOption className="text-3xl hover:scale-125 duration-500" /></button>
                                <button><GrLinkedin className="text-3xl hover:scale-125 duration-500" /></button>
                                <button><GrTwitter className="text-3xl hover:scale-125 duration-500" /></button>
                            </div>
                            <div className="space-y-2">
                                <button className="text-left">
                                    Payments Methods
                                    <img src={Cards} alt="" className="w-[80%]" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    {/* copyright */}
                    <p className="text-white text-center mt-8 border-t-2 pt-8">
                        © 2022 Playing. All rights reserved 
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer