import React  from "react";
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import Services from "../sections/Services";
import Accordion from "../sections/Accordion";

function Home() {
    return (
        <div className="bg-black min-h-screen  ">
         <Navbar/>
         <Hero/>
         <Services/>
         <Accordion/>
        </div>
    )
}
export default Home