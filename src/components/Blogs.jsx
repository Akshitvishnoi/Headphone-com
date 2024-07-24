import Blogs1 from '../assets/blog1.jpg';
import Blogs2 from '../assets/blog2.jpg';
import Blogs3 from '../assets/blog3.jpg';
import Blogs4 from '../assets/blog4.jpg';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';

const BlogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        link: "#",
        img: Blogs1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        link: "#",
        img: Blogs2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        link: "#",
        img: Blogs3,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo ex totam ducimus non molestias nesciunt beatae quidem minus consequuntur",
        link: "#",
        img: Blogs4,
    },
]
const Blogs = () => {
    return (
        <>
            <section className='bg-gray-50'>
                <div className='container py-14'>
                    <h1 className='text-4xl font-bold text-center font-poppins pb-8'>
                        Blogs
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 sm:grid-cols-2'>
                        {BlogsData.map((data) => {
                            return (
                                <UpdateFollower
                                 mouseOptions={{
                                     backgroundColor: "black",
                                     zIndex: 999,
                                     followSpeed: 1.5,
                                     scale: 6,
                                     text: "Read More",
                                     textFontSize: "3px",
                                 }}
                                >
                                    <div className='flex flex-col items-center justify-center p-5 gap-6 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-500'>
                                        <img src={data.img} alt="" />
                                        <div className='space-y-2'>
                                            <h1 className='text-xl font-bold line-clamp-2'>
                                                {data.title}
                                            </h1>
                                            <p className='line-clamp-2'>
                                                {data.desc}
                                            </p>
                                        </div>
                                    </div>
                                </UpdateFollower>
                            );
                        })};
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;