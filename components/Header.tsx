import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typing";
import { FaChevronDown, FaRegEnvelope } from "react-icons/fa"

type Props = {
    socials: Social[]
};

function Header({ socials }: Props) {
    const [open, setOpen] = useState(false)
    // console.log('open', open)

    const handler = () => {
        setOpen(!open)
    }
    return (
        <header className="w-full h-12  border-5 border-red-500 sticky top-0 z-40 flex justify-between  px-5 lg:px-10 items-center">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-1/2 flex justify-start items-center space-x-4"
            >
                {/*Social Icons*/}
                {socials.map((social) => (

                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="#fcdef8"
                        bgColor="transparent"
                        target="_blank"
                    />
                ))}

            </motion.div>

            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-1/2 flex justify-end items-center text-[#fcdef8] cursor-pointer border-5 border-red-500 space-x-4"
            >
                <Link href="#contact"  >
                    <div className="flex items-center space-x-4">

                        <FaRegEnvelope className="cursor-pointer text-3xl" />
                        <p className="uppercase hidden md:inline-flex text-lg ">
                            get in touch
                        </p>
                    </div>

                </Link>

                <div className="" onClick={handler}>
                    <FaChevronDown />

                </div>



            </motion.div>
            {open && (
                <div className="absolute w-screen h-screen lg:h-auto flex  lg:justify-end z-50 top-0" onClick={handler}>
                    <motion.div initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }} className="w-full h-screen lg:h-auto lg:w-1/5 rounded-l-full  bg-black/95 flex flex-col justify-center lg:items-center space-y-4 lg:py-10">
                        <Link href="#about">
                            <button className="mobileButton">about </button>
                        </Link>
                        <Link href="#education">
                            <button className="mobileButton">education</button>
                        </Link>
                        <Link href="#experience">
                            <button className="mobileButton">experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className="mobileButton">skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="mobileButton">Projects</button>
                        </Link>
                    </motion.div>
                </div>
            )}
        </header>
    );
}

export default Header;
