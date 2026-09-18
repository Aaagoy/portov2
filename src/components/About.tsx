import React from 'react';
import { SlidersHorizontal, Zap, ShieldCheck, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about"
    className="min-h-screen mx-auto px-6 py-16 bg-white font-sans text-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri / Utama (7 dari 12 Kolom) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Header */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              01 / ABOUT
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2 font-normal">
              Mengejar Kejelasan dalam Kerumitan
            </h1>
          </div>

          {/* Deskripsi Teks */}
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              Saya mulai tertarik dengan dunia Teknologi ketika semasa SMP, yang dimana saya
              sering bermain di warnet. Dimasa itu saya kepiiran untuk mempelajari teknologi
              mulai dari hardware dulu hingga software.
            </p>
            <p>
              Saya mulai tertarik dengan coding semenjak SMA, waktu itu saya mulai belajar
              dari HTML. Di waktu itu saya juga tertarik ke dunia cyber security, dan juga sempat
              pernah melakukan <i>Deface</i> dan juga beberapa kali ikut komunitas melakukan <i>DDoS</i>.              
            </p>
          </div>

          {/* 2 Card Bawah Kolom Kiri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">            
            {/* Card 1: Kerapian Arsitektural */}
            <div className="bg-[#eff4f9] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <SlidersHorizontal className="w-5 h-5 text-slate-700 mb-3" />
                <h3 className="font-semibold text-slate-900 text-sm mb-2">
                  Kerapian Arsitektural
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Membangun hierarki teratur dengan modularitas tinggi, menjamin konsistensi visual di setiap sudut produk.
                </p>
              </div>
            </div>

            {/* Card 2: Kinerja & Aksesibilitas */}
            <div className="bg-[#eff4f9] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <Zap className="w-5 h-5 text-slate-700 mb-3" />
                <h3 className="font-semibold text-slate-900 text-sm mb-2">
                  Kinerja & Aksesibilitas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                Memastikan aplikasi yang dibuat ramah dan mudah digunakan oleh siapa saja.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Kolom Kanan / Sidebar Metric (5 dari 12 Kolom) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Stat Card Main */}
          <div className="bg-[#eff4f9] p-8 rounded-lg flex flex-col space-y-4">
            <div>
              <span className="text-5xl font-serif text-slate-900 tracking-tight">
                NaN
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                Tingkat Kepuasan Klien
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menjaga keharmonisan dengan client merupakan visi dari kami
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>Kemitraan Jangka Panjang</span>
            </div>
          </div>

          {/* Stat Card 2: Kontribusi */}
          <div className="bg-[#eff4f9] p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              3+ Kontribusi
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
                Melakukan perbaikan pada fitur yang ada sebelumnya dan perbaikan tampilan akan
                ramah digunakan.
            </p>
          </div>

          {/* Stat Card 3: Edukasi */}
          <div className="bg-[#eff4f9] p-6 rounded-lg flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-slate-700 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Sarjana Ilmu Komputer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fokus pada Human-Computer Interaction & Software Engineering
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}