import { useState, useEffect } from "react";
import "../../style/AdminDesktop.css"

function GetStartedDesktop() {
    return (
        <div className="bg-primary h-screen relative">
            <div>
                <img src="src/assets/auth-desktop/gs-bg.svg" alt="" className="h-screen w-screen absolute z-0"/>
                <img src="src/assets/desktop/mofera.svg" alt="" className="pt-5 pl-5"/>
                <div className="flex flex-col justify-center items-center relative pt-64 gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <p className="italic font-semibold text-5xl">“ </p>
                        <p className="italic font-semibold text-5xl text-primary">Transforming</p>
                        <p className="italic text-5xl">and</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="italic font-semibold text-5xl text-primary"> revolutionizing </p>
                        <p className="italic text-5xl "> your journey</p>
                    </div>

                    <div className="flex gap-1 pl-12">
                        <p className="text-5xl"> from leaf to product </p>
                        <p className="font-semibold italic text-5xl">“</p>
                    </div>

                    <div className="pt-10">
                        <p className="font-medium">Mofera is digitalizing the Moringa supply chain by streamlining processes, </p>
                        <p className="font-medium">connecting communities, and ensuring a steady flow of high-quality raw materials.</p>
                    </div>

                    <div className="pt-10">
                        <button className="bg-secondary w-36 h-8 rounded-lg text-white text-sm font-medium hover:bg-primary" > Get Started </button>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default GetStartedDesktop