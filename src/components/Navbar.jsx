import { IoMdMenu } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion"

const NavbarMenu = [
    {
        id: 1,
        title: "home",
        link: "#"
    },
    {
        id: 2,
        title: "catogories",
        link: "#"
    },
    {
        id: 3,
        title: "About",
        link: "#"
    },
    {
        id: 4,
        title: "Blog",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    }
];
const Navbar = () => {
    return (
        <>
            <div className="bg-brandDark text-white/70 py-4 font-varela">
                <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration:1, delay:0.5}}
                 className="container flex justify-between items-center">
                    {/* logo section */}
                    <div>
                        <a href="#" className="text-xl font-bold">
                            Playing/ <span className="font-extralight text-white">market</span>
                        </a>
                    </div>
                    {/* menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {
                                NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: "white",
                                                zIndex: 999,
                                                followSpeed: 2,
                                                scale: 5,
                                                mixBlendMode: "difference"
                                            }}
                                        >
                                            <a href={item.link} className="inline-block text-sm py-4 px-3 uppercase">{item.title}</a>
                                        </UpdateFollower>
                                    </li>
                                ))
                            }
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 2,
                                    scale: 5,
                                    mixBlendMode: "difference"
                                }}
                            >
                                <button className="text-xl ps-14">
                                    <FaHeadphones />
                                </button>
                            </UpdateFollower>
                        </ul>
                    </div>
                    {/* hamburger section */}
                    <div className="md:hidden">
                        <IoMdMenu className="text-4xl" />
                    </div>
                </motion.nav>
            </div>
        </>
    )
}

export default Navbar