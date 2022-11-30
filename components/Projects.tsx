import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";
import { ImEnter } from "react-icons/im"

type Props = {
    projects: Project[]
};

const Projects = ({ projects }: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-screen flex relative flex-col text-center md:text-left xl:px-10 justify-center xl:space-y-0 items-center overflow-hidden"
        >
            <h3 className="pt-20 pb-8 uppercase tracking-[20px] text-lg lg:text-2xl pl-5 ">
                Projects
            </h3>
            <div className="relative w-full h-full flex overflow-x-scroll overflow-y-hidden scrollbar-thin
             scrollbar-track-[#6b576b] scrollbar-thumb-[#fcdef8] snap-x snap-mandatory z-50">
                {projects &&
                    projects.map((pro, i) => (
                        <div
                            key={pro._id}
                            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col xl:flex-row xl:justify-center space-y-5 xl:space-y-0 xl:px-10"
                        >
                            <div className="xl:w-1/2 xl:h-full flex justify-center ">

                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    //   viewport={{ once: true }}
                                    transition={{ duration: 2 }}
                                    src={urlFor(pro?.image).url()}
                                    alt="project"
                                    className="w-5/6 h-[30vh] xl:h-[80vh] object-contain px-4"
                                />
                            </div>
                            <div className="xl:w-1/2 xl:h-[80vh] flex flex-col justify-center items-center  space-y-4 lg:space-y-10 px-4">
                                <div className="flex xl:h-24 xl:items-center justify-center space-x-8">

                                    <h4 className="text-base lg:text-3xl font-semibold text-center tracking-widest uppercase">
                                        <span className="underline decoration-[#fcdef8]/50 capitalize">
                                            Case Study {i + 1} of {projects.length}
                                        </span>
                                        : {pro.title}
                                    </h4>

                                </div>
                                <div className="w-full h-[27vh] xl:h-[30vh] overflow-y-auto overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#474547] scrollbar-thumb-[#fcdef8]/80">

                                    <pre className="text-justify text-xs whitespace-pre-wrap lg:flex lg:text-lg  lg:text-left px-4 lg:px-2  ">{pro.summary}</pre>
                                </div>
                                <div className="w-full flex items-center justify-between border border-pink-300/50  rounded-lg bg-black/40 px-4 py-2 ">

                                    <div className="flex items-center justify-between w-2/3 px-4 py-2 ">{pro.technologies?.map((technology) => (
                                        <Image
                                            alt="technologies"
                                            width={45}
                                            height={45}
                                            className="rounded-full w-1/6 h-[28vh] object-scale-down"
                                            key={technology._id}
                                            src={urlFor(technology.image).url()}
                                        />

                                    ))}</div>
                                    <a href={pro.linkToBuild} target="_blank" rel="noreferrer noopener" className="flex items-center justify-end uppercase lg:w-[8rem] px-8 py-2">

                                        <ImEnter className="text-4xl" />
                                    </a>
                                </div>
                            </div>


                        </div>
                    ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#fcdef8]/10 left-0 h-[500px] -skew-y-12"></div>

        </motion.div>
    );
};

export default Projects;
