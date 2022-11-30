import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../sanity";
import { PageInfo } from "../typing";

type Props = {
    pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="h-screen flex flex-col justify-center items-center  relative text-center md:text-left md:flex-row max-w-7xl px-10 "
        >
            <h3 className="absolute top-24 lg:top-4 uppercase tracking-[20px] text-lg lg:text-2xl pl-5" >
                About
            </h3>
            <motion.img
                src={urlFor(pageInfo?.profilePic).url()}
                alt="me"
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="hidden lg:flex md:mb-0 flex-shrink-0 w-52 h-52 object-cover rounded-full md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] border-4 border-[#fcdef8] "
            />
            <div className="mt-24 space-y-10 px-0 md:px-10">
                <h4 className="text-xl md:text-4xl font-semibold">
                    Here is a my{" "}
                    <span className="underline uppercase decoration-[#7a368b]/50">
                        little
                    </span>{" "}
                    backgroud
                </h4>
                <pre className="whitespace-pre-wrap">
                    {pageInfo?.backgroundInformation}
                </pre>
                {/* <div className="bottom-0 border"><a href=""download/>Download my CV</div> */}
            </div>
        </motion.div>
    );
};

export default About;
