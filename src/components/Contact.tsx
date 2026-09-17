'use client';

import React, { useState } from 'react';
import { Mail, Clock, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    alamatSurel: '',
    topikDiskusi: 'Proyek Desain & Pengembangan Baru',
    pesanSingkat: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Tambahkan tipe untuk handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Tambahkan tipe untuk handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulasi pengiriman form
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen w-full bg-[#f4f6fa] flex items-center justify-center p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            {/* Tag/Header kecil */}
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
              04 / contact
            </p>
            
            {/* Judul Utama dengan Font Serif */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-serif text-slate-900 font-normal mb-5">
              Mari berkolaborasi atau sekadar berdiskusi santai.
            </h1>
            
            {/* Subtitle Deskripsi */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Terbuka untuk segala posisi apapun dan projek lainnya.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Card 1: Surel Langsung */}
              <div className="bg-white p-4 rounded-xl flex items-center space-x-4 shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-[#e3efe3] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#2d5a27]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Email</p>
                  <a 
                    href="mailto:yogap1252002@gmail.com" 
                    className="text-slate-900 font-semibold text-sm md:text-base hover:text-emerald-700 transition-colors"
                  >
                    yogap1252002@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 2: Waktu Respons */}
              <div className="bg-white p-4 rounded-xl flex items-center space-x-4 shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Waktu Respons</p>
                  <p className="text-slate-900 font-semibold text-sm md:text-base">
                    24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-slate-800">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center hover:text-slate-600 transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-4 h-4 ml-0.5 text-slate-500" />
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a 
              href="https://github.com/Aaagoy" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center hover:text-slate-600 transition-colors"
            >
              GitHub <ArrowUpRight className="w-4 h-4 ml-0.5 text-slate-500" />
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a 
              href="https://read.cv" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center hover:text-slate-600 transition-colors"
            >
              ReadCV <ArrowUpRight className="w-4 h-4 ml-0.5 text-slate-500" />
            </a>
          </div>
        </div>

        {}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Baris Pertama: Nama Lengkap & Alamat Surel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="namaLengkap" className="block text-xs font-bold text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="namaLengkap"
                    name="namaLengkap"
                    required
                    placeholder="Contoh: Rian Pratama"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="w-full bg-[#edf2f7] text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="alamatSurel" className="block text-xs font-bold text-slate-700">
                    Alamat Surel
                  </label>
                  <input
                    type="email"
                    id="alamatSurel"
                    name="alamatSurel"
                    required
                    placeholder="rian@perusahaan.com"
                    value={formData.alamatSurel}
                    onChange={handleChange}
                    className="w-full bg-[#edf2f7] text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all"
                  />
                </div>
              </div>

              {/* Baris Kedua: Topik Diskusi */}
            <div className="space-y-2">
                <label htmlFor="topikDiskusi" className="block text-xs font-bold text-slate-700">
                    Topik Diskusi
                </label>
                <div className="relative">
                <input
                    type="text"
                    id="topikDiskusi"
                    name="topikDiskusi"
                    required
                    value={formData.topikDiskusi}
                    onChange={handleChange}
                    className="w-full bg-[#edf2f7] text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all"
                />
                </div>
            </div>

              {/* Baris Ketiga: Pesan Singkat */}
              <div className="space-y-2">
                <label htmlFor="pesanSingkat" className="block text-xs font-bold text-slate-700">
                  Pesan Singkat
                </label>
                <textarea
                  id="pesanSingkat"
                  name="pesanSingkat"
                  rows={4}
                  required
                  placeholder="Ceritakan ringkasan tujuan, jangka waktu, atau kebutuhan Anda..."
                  value={formData.pesanSingkat}
                  onChange={handleChange}
                  className="w-full bg-[#edf2f7] text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all resize-none"
                />
              </div>

              {}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#111315] hover:bg-slate-800 active:scale-98 text-white px-7 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center transition-all shadow-md"
                >
                  {isSubmitted ? (
                    <>
                      Pesan Terkirim <CheckCircle2 className="w-4 h-4 ml-2 text-emerald-400" />
                    </>
                  ) : (
                    <>
                      Kirim Pesan <Send className="w-4 h-4 ml-2.5 rotate-45" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center sm:text-right">
                  Privasi Anda terjamin. Tidak ada pesan spam.
                </p>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}