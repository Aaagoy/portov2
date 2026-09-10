"use client";
import {
  ArrowDown,
  // BadgeCheck,
  Image as ImageIcon,
  MessageCircleDashedCheck,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
return (
    <section
    id="tentang"
    className="min-h-screen bg-[#f8f9fc] px-6 pb-16 pt-28 lg:px-10 lg:pt-36"
    >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ================= LEFT ================= */}
        <div>

          {/* Availability Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-[#edf0f2] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-700" />

            <span className="text-[10px] font-medium uppercase text-gray-500">
                Tersedia untuk proyek baru & kolaborasi
            </span>
        </div>

          {/* Small Heading */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
            developper and bussiness manager
          </p>

          {/* Main Heading */}
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#171a1d] sm:text-6xl lg:text-[64px]">
            Membangun pengalaman
            <br />
            digital yang menyenangkan,
            <br />
            terstruktur, dan
            <br />
            bisnis yang menjanjikan.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Membantu pelaku usaha mengenalkan produknya secara diital dengan teknologi
            modern. Merancang pengalaman digital yang menyenangkan dengan tampilan yang sangat
            fresh dan gampang digunakan oleh siapa saja.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <a
              href="#pengalaman"
              className="group flex items-center gap-3 rounded-sm bg-[#20252b] px-5 py-3 text-xs font-medium text-white transition hover:bg-black"
            >
                Lihat Karya Pilihan

              <ArrowDown
                size={15}
                className="transition group-hover:translate-y-1"
              />
            </a>

            <a
              href="#kontak"
              className="flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              <ImageIcon size={14} />

              Hubungi Saya
            </a>

          </div>

          {/* Statistics */}
          <div className="mt-14 flex flex-wrap items-start">

            <Stat
              value="1 Tahun"
              label="Pengalaman Praktik"
            />

            <div className="mx-7 h-10 w-px bg-gray-200" />

            <Stat
              value="3 Proyek"
              label="Tuntas"
            />

            <div className="mx-7 h-10 w-px bg-gray-200" />

            <Stat
              value="100%"
              label="Komitmen Kualitas"
            />

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

          {/* Image Card */}
          <div className="relative rounded-lg bg-[#e8ebef] p-3 shadow-sm">

            <div className="relative overflow-hidden rounded-md bg-gray-300">

            <Image
                src="/image/profile.png"
                alt="Studio utama"
                width={700} 
                height={600} 
                className="h-auto w-full"
            />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 from-black/30 to-transparent" />
            </div>

            {/* Settings */}
            <button className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
              <MessageCircleDashedCheck size={16} />
            </button>

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-lg">

            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#e4eee8] text-gray-700">
              <Settings size={18} />
            </div>


            <p className="text-xs font-medium text-gray-800">
                Human-Centric & Robust
              </p>

          </div>

        </div>

      </div>
    </section>
  );
}


/* ================= STAT COMPONENT ================= */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-base font-medium text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-gray-500">
        {label}
      </p>
    </div>
  );
}