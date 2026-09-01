import { Download } from "lucide-react";

export default function Header (){
    return (
        <header className="border-b border-black bg-[#101415] text-[#C1C6D7]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href="#" className="text-xl font-bold">Portofolio</a>
                <nav className="hidden items-center gap-8 md:flex text-[#ADC6FF]">
                    <a href="#experience">Experience</a>
                    <a href="#organization">Organization</a>
                    <a href="#skill">Skill</a>
                    <a href="#about">About</a>
                </nav>
                <div className="flex gap-6">
                    <button className="rounded-lg bg-[#414755] px-5 py-3 text-white flex gap-6">
                    <Download/>
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}