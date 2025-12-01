import React, { useState } from "react";
import { AccordionData } from "../constants/AccordionData";

function Accordion() {
    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <section className="mt-12 flex justify-center">
            <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {AccordionData.map((item) => (
                    <div
                        key={item.id}
                        className="border-b border-gray-600 text-white pb-4"
                    >
                        {/* TITLE + ICON */}
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggle(item.id)}
                        >
                            <h2 className="text-xl font-semibold">{item.title}</h2>

                            <span className="text-3xl font-bold">
                                {active === item.id ? "−" : "+"}
                            </span>
                        </div>

                        {/* DESCRIPTION (Opens & closes smoothly) */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${active === item.id ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Accordion;