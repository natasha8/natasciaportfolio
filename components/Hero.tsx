import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";
import Circle from "./Circle";
import Image from 'next/image';

type Props = {
    pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: ["< Welcome / >", "I'm Natascia", "Happy Coder =)"],
        loop: true,
        delaySpeed: 2500,
    });
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8 pt-28">
            <Circle />
            <Image
                src={urlFor(pageInfo?.profilePic).url()}
                width={200}
                height={200}
                alt="me"
                className="relative rounded-full h-32 w-32 object-cover"
            />
            <h2 className="text-small uppercase text-[#937d90] tracking-[10px]">
                Full-Stack Web Developer
            </h2>
            <h1 className="text-3xl lg:text-6xl font-semibold px-10 z-20">
                <span>{text}</span>
                <Cursor cursorColor="#7a368b" />
            </h1>

        </div>
    );
}

export default Hero;
