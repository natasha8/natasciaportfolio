import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import Link from "next/link";
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
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 max-w-full justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-lg lg:text-2xl">
                Projects
            </h3>
            <div className="relative w-full lg:h-[88vh] flex overflow-x-scroll overflow-y-hidden scrollbar-thin
             scrollbar-track-[#6b576b] scrollbar-thumb-[#fcdef8] snap-x snap-mandatory z-20">
                {projects &&
                    projects.map((pro, i) => (
                        <div
                            key={pro._id}
                            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 lg:p-44 border-red-500 "
                        >
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                //   viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                src={urlFor(pro?.image).url()}
                                alt="project"
                                className="w-full lg:w-1/2 lg:h-1/2 object-scale-down lg:object-contain"
                            />
                            <div className="space-y-4 lg:space-y-10 px-4 md:px-10 max-w-6xl">
                                <h4 className="text-base lg:text-3xl font-semibold text-center tracking-widest">
                                    <span className="underline decoration-[#fcdef8]/50">
                                        Case Study {i + 1} of {projects.length}
                                    </span>
                                    : {pro.title}
                                </h4>
                                <p className="text-sm lg:text-lg  text-justify lg:text-center md:text-left px-2">{pro.summary}</p>
                                <div className="flex justify-center space-x-2 my-2">{pro.technologies?.map((technology) => (
                                    <Image
                                        alt="technologies"
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                    />

                                ))}</div>
                            </div>

                            <a href={pro.linkToBuild} target="_blank" rel="noreferrer noopener" className="flex items-center justify-between uppercase border border-pink-300/50 lg:w-1/12 rounded bg-black/50 px-4 py-2">

                                <span>visit</span> <ImEnter className="text-4xl" />
                            </a>
                        </div>
                    ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#fcdef8]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
};

export default Projects;
