import { BriefcaseBusiness, Download } from "lucide-react";

export default function Header (){
    return (
        <header className="border-b border-black bg-[#F7F9FF] text-[#0F1215]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <div className="flex gap-2">
                    <BriefcaseBusiness/>
                    <a href="#" className="text-xl font-bold">Portofolio</a>
                </div>
                <nav className="hidden items-center gap-8 md:flex text-[#0F1215]">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#organization">Organization</a>
                    <a href="#skill">Skill</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="flex gap-6">
                    <button className="rounded-lg bg-[#24272A] px-5 py-3 text-white flex gap-6">
                    <Download/>
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}