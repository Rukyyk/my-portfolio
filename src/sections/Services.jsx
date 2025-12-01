import React from "react";
import Button from "../components/Button";
import { Laptop, Server, Brush, Zap } from "lucide-react";

const Data = [
    {
        id: 1,
        title: "Front-end Dev",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti sapiente cumque maiores repellat!",
        icon: <Laptop className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "Back-end Dev",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti sapiente cumque maiores repellat!",
        icon: <Server className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti sapiente cumque maiores repellat!",
        icon: <Brush className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Performance Optimization",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti sapiente cumque maiores repellat!",
        icon: <Zap className="w-6 h-6" />,
    },
];

function Services() {
    return (
        <section className="w-full bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                { }
                <div>
                    <h2 className="text-3xl font-bold mb-4">My Services</h2>
                    <p className="text-gray-400 mb-6">
                        Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt, quia.
                    </p>

                    <Button
                        name="Learn More"
                        style="bg-white text-black px-4 py-2 rounded-sm"
                    />
                </div>

                <div className="grid gap-10">
                    {Data.map((item) => {
                        return (
                            <div key={item.id} className="flex items-start gap-4">
                                <span className="text-white p-3 bg-gray-900 rounded-xl shadow">
                                    {item.icon}
                                </span>

                                <div>
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;