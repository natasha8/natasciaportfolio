import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typing";
import emailjs from '@emailjs/browser';


type Props = {
    pageInfo: PageInfo;
};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;

};

const Contact = ({ pageInfo }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [isSubmitted, setIsSubmitted] = useState(false)

    const onSubmit: SubmitHandler<Inputs> = async (formData: any) => {
        console.log('onSubmit', formData);
        //window.location.href = `mailto:nat.parisella@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name},${formData.message}.${formData.email}}`;
        try {

            emailjs
                .sendForm(
                    "gmail",
                    "template_bzi3zmg",
                    formData,
                    "user_udtYaMWF0eNR2lXma0im7"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Successfully submitted!");
                    },
                    (error) => {
                        console.log(error.text);
                        alert("Failed to submit!");
                    }
                );

            setIsSubmitted(true)
        } catch (err) {
            console.error(err)
        }
    };

    console.log(errors);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" w-11/12 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 lg:top-4 uppercase tracking-[20px] text-lg lg:text-2xl pl-5">
                Contact
            </h3>
            <div className="w-full flex flex-col space-y-10">
                <div className="space-y-2">

                    <h4 className="text-xl lg:text-4xl font-semibold text-center ">
                        I have got just what you need.
                    </h4>
                    <h4 className="text-center text-xl lg:text-4xl font-bold decoration-[#fcdef8]/50 underline pl-2 uppercase">
                        Lets Talk
                    </h4>
                </div>

                <div className="hidden lg:inline space-y-4">
                    <div className="flex items-center justify-center space-x-5">
                        <BsEnvelope className="h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{pageInfo.email}</p>
                    </div>
                </div>
                <div className="hidden lg:inline space-y-10">
                    <div className="flex items-center justify-center space-x-5">
                        <FiMapPin className="h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{pageInfo.address}</p>
                    </div>
                </div>
                {!isSubmitted && (

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 mx-auto"
                    >
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 xl:space-x-2">
                            <input
                                className="contactInput"
                                type="text"
                                placeholder="name"
                                {...register("name")}
                            />
                            <input
                                className="contactInput"
                                type="text"
                                placeholder="email"
                                {...register("email")}
                            />
                            {errors?.email && <span>{errors.email.message}</span>}
                        </div>
                        <input
                            className="contactInput"
                            type="text"
                            placeholder="subject"
                            {...register("subject")}
                        />
                        <textarea
                            placeholder="message"
                            {...register("message")}
                            className="contactInput"
                        />
                        <button
                            type="submit"
                            className="bg-[#97608f] py-2 px-10 rounded-lg uppercase"
                        >
                            Submit
                        </button>
                    </form>
                )}
                {isSubmitted && (<div>I will answare you shortly</div>)}
            </div>
        </motion.div>
    );
};

export default Contact;
