import React from 'react';
import { MapPin } from 'lucide-react';

const careerData = [
  {
    period: '2023 - 2024',
    company: 'Mika no Galaxy',
    category: 'Event Organization',
    location: 'Padang',
    title: 'SEKRETARIS',
    description:
      'Merancang proposal persetujuan, perizinan, sponsorship, kolaborasi, media partnert, peminjaman, mencatat segala keputusan rapat serta membuat LPJ. ',    
    skills: ['Microsoft Office'],
  },
  {
    period: '2022',
    company: 'Remaja Masjid',
    category: 'Organisasi Pemuda',
    location: 'Padang',
    title: 'Ketua Lapangan',
    description:
    'Memastikan selurh kegiatan dari awal berlangsungnya kegiatan hingga selesai berjalan dengan lancar. Memastikan seluruh tim tidak ada kendala, dari tim konsumsi, perlengkapan hingga tim acara',    
    skills: ['Leadership'],
  },  
];

export default function Organization() {
  return (
    <section id="organization"
    className="bg-[#eff4f9] py-16 px-6 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              02 / ORGANIZATION
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2 font-normal">
              Jejak dalam berorganisasi
            </h2>
          </div>          
        </div>

        {/* List Card Karir */}
        <div className="space-y-6">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Kolom Kiri: Tanggal, Perusahaan, & Lokasi*/}
              <div className="md:col-span-4 space-y-3">
                <span className="inline-block bg-[#eaf3e8] text-[#3b6e3b] text-[11px] font-semibold px-2.5 py-1 rounded tracking-wide">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">
                    {item.company}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Kolom Kanan: Detail Posisi, Deskripsi, & skill*/}
              <div className="md:col-span-8 space-y-4">
                {/* Deskripsi */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                {/* Tag Skills / Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#eff4f9] text-slate-700 text-[11px] font-medium px-3 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}