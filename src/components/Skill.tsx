import React from 'react';
import { BarChart3, Code2, Cpu } from 'lucide-react';

const communityData = [
  {
    title: 'Web Developer',
    subtitle: 'HTML, CSS, PHP',
    description:
      'Membangun aplikasi serta mengembangkan aplikasi dengan menggunakan HTML, CSS, dan PHP',
    icon: Cpu,
    achievementText: 'Membuat dan mengembangkan Company Profile',
  },
  {
    title: 'Data Analyst',
    subtitle: 'Analisa Data',
    description:
      'Melakukan analisa data berdasarkan quesioner yang diisi oleh responden dengan mengunakan metode WebQual dan McCall.',
    icon: BarChart3,
    achievementText: '2 Data',
  },  
];

export default function Skills() {
  return (
    <section className="bg-[#eff4f9] py-16 px-6 md:px-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2 font-normal">
              Kolaborasi di Luar Meja Kerja
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 max-w-md leading-relaxed">
            Mendedikasikan diri dengan melakukan pengembangan skill yang ada guna mendapatkan experience yang lebih.
          </p>
        </div>

        {/* Grid 3 Kartu skill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {communityData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-7 shadow-sm border border-slate-100/60 flex flex-col justify-between space-y-6"
              >
                {/* Konten Bagian Atas Kartu */}
                <div className="space-y-4">
                  {/* Judul & Sub-judul */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Box Capaian Utama Bagian Bawah */}
                <div className="bg-[#f4f7fc] rounded-lg p-4">
                  <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
                    CAPAIAN UTAMA
                  </span>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-900">
                    <IconComponent className="w-4 h-4 text-slate-700 shrink-0" />
                    <span>{item.achievementText}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}