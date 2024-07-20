import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const categories = [
        { name: "Headphone" },
        { name: "Earphone" },
        { name: "Headset" },
        { name: "Accessories" }
    ];

    const followUs = [
        { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
        { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com" },
        { name: "Twitter", icon: <FaSquareXTwitter />, url: "https://twitter.com" },
        { name: "Youtube", icon: <FaYoutube />, url: "https://youtube.com" }
    ];

    return (
        <section className="flex justify-center items-center w-full py-16 footer">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90vw] lg:w-[75vw]">
                <div className="flex flex-col justify-start h-full">
                    <h1 className="text-2xl font-medium">Headphone</h1>
                    <ul className="flex flex-col gap-2 items-start mt-2">
                        <li className="text-lg">About Us</li>
                        <li className="text-lg">Our Services</li>
                        <li className="text-lg">Privacy Policy</li>
                        <li className="text-lg">Terms & Conditions</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h1 className="text-2xl font-medium">Category</h1>
                    <ul className="flex flex-col gap-2 items-start mt-2">
                        {categories.map((category, index) => (
                            <li key={index} className="text-lg">{category.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h1 className="text-2xl font-medium">Contact</h1>
                    <ul className="flex flex-col gap-2 items-start mt-2">
                        <li className="text-lg">Phone: +62 812 3456 7890</li>
                        <li className="text-lg">Email: headphonexweb@example.com</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h1 className="text-2xl font-medium">Follow Us</h1>
                    <ul className="flex flex-wrap gap-3 items-start mt-2">
                        {followUs.map((social, index) => (
                            <Link href={social.url} key={index} className="text-3xl">{social.icon}</Link>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;