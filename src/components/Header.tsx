"use client"

import { BriefcaseBusiness, Download } from "lucide-react";


export default function Header (){
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }}
    return (
        <header className="border-b border-black bg-[#F7F9FF] text-[#0F1215]">
            <span 
                onClick={() => scrollToSection('Header')} 
                className="text-xl font-bold text-[#0F1215] cursor-pointer"
            >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <div className="flex gap-2">
                    <BriefcaseBusiness/>
                    <a href="#" className="text-xl font-bold">Portofolio</a>
                </div>
                <nav className="hidden items-center gap-8 md:flex text-[#0F1215]">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="hover:text-blue-400 transition-colors"
                    >
                        About
                    </button>
                    
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="hover:text-blue-400 transition-colors"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('organization')}
                        className="hover:text-blue-400 transition-colors"
                    >
                        Organization
                    </button>

                    <button
                        onClick={() => scrollToSection('skill')}
                        className="hover:text-blue-400 transition-colors"
                    >
                        Skill
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-blue-400 transition-colors"
                    >
                        Contact
                    </button>
                </nav>
                <div className="flex gap-6">
                    <button className="rounded-lg bg-[#24272A] px-5 py-3 text-white flex gap-6">
                    <Download/>
                        Download CV
                    </button>
                </div>
            </div>
            </span>
        </header>
    )
}