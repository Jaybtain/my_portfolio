import React from "react";
import { FaReact, FaTools } from "react-icons/fa";
import { SiPhp, SiJavascript, SiDotnet, SiSymfony, SiAmazon, SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
    { id: 1, name: 'React', icon: FaReact, color: '#61DAFB' },
    { id: 2, name: 'PHP', icon: SiPhp, color: '#787CB5' },
    { id: 3, name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { id: 4, name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { id: 5, name: '.NET', icon: SiDotnet, color: '#512BD4' },
    { id: 6, name: 'Symfony', icon: SiSymfony, color: '#000000' },
    { id: 7, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
    { id: 8, name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { id: 9, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { id: 10, name: 'DevOps', icon: FaTools, color: '#FF6347' },
];

export const Stack = () => {
    return (
        <section className="py-16 glass" id="stack">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col transform transition-all duration-300 hover:scale-110 hover:border border-transparent"
                        >
                            <div
                                className="mb-4 bg-white/10 p-4 rounded-xl transform transition-all duration-300 hover:shadow-lg hover:shadow-white"
                                style={{ border: `2px solid ${item.color}` }}
                            >
                                {React.createElement(item.icon, {
                                    className: "w-16 h-16",
                                    style: { color: item.color },
                                })}
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
