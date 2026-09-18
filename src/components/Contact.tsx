"use client";

import { useState } from "react";
import {
  Mail,
  Clock3,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    pesanSingkat: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.namaLengkap || !formData.pesanSingkat) {
      alert("Nama dan pesan wajib diisi.");
      return;
    }

    // Ganti dengan nomor WhatsApp kamu
    const nomorWhatsApp = "6282287984586";

    const pesan = `
Halo, saya ${formData.namaLengkap}.

${formData.pesanSingkat}
    `;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
      pesan
    )}`;

    window.open(url, "_blank");

    setFormData({
      namaLengkap: "",
      pesanSingkat: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#f5f7fa] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* ================= LEFT ================= */}
          <div>
            {/* Label */}
            <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
              04 / CONTACT
            </p>

            {/* Heading */}
            <h2 className="max-w-xl font-serif text-4xl text-[#071b38] md:text-5xl">
              Mari berkolaborasi atau sekadar berdiskusi santai.
            </h2>

            {/* Description */}
            <p className="mt-7 text-base leading-7 text-[#315d91]">
              Terbuka untuk segala posisi apapun dan projek lainnya.
            </p>

            {/* Contact Information */}
            <div className="mt-9 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e3f0e5]">
                  <Mail
                    size={23}
                    strokeWidth={1.8}
                    className="text-[#315d38]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[#315d91]">
                    Email
                  </p>

                  <a href="mailto:emailkamu@gmail.com" className="font-medium text-[#071b38] hover:underline">
                    yogap1252002@gmail.com
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0f4f8]">
                  <Clock3
                    size={23}
                    strokeWidth={1.8}
                    className="text-[#29415f]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[#315d91]">
                    Waktu Respons
                  </p>

                  <p className="font-medium text-[#071b38]">
                    24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-wrap items-center gap-5 text-sm font-medium text-[#071b38]">

              <a
                href="#"
                className="flex items-center gap-1 hover:underline"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <span className="text-gray-300">•</span>

              <a
                href="#"
                className="flex items-center gap-1 hover:underline"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <span className="text-gray-300">•</span>

              <a
                href="#"
                className="flex items-center gap-1 hover:underline"
              >
                ReadCV
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="border border-gray-200 bg-white p-7 shadow-sm md:p-10 rounded-2xl">

            <form onSubmit={handleSubmit}>

              {/* Nama */}
              <div>
                <label
                  htmlFor="namaLengkap"
                  className="mb-2 block text-sm font-semibold text-[#071b38]"
                >
                  Nama Lengkap
                </label>

                <input
                  id="namaLengkap"
                  name="namaLengkap"
                  type="text"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  placeholder="Contoh: Rian Pratama"
                  className="w-full rounded-xl border-0 bg-[#edf3f8] px-4 py-4 text-sm text-[#071b38] outline-none placeholder:text-[#91a6bf] focus:ring-2 focus:ring-[#315d91]"
                />
              </div>

              {/* Pesan */}
              <div className="mt-6">
                <label
                  htmlFor="pesanSingkat"
                  className="mb-2 block text-sm font-semibold text-[#071b38]"
                >
                  Pesan Singkat
                </label>

                <textarea
                  id="pesanSingkat"
                  name="pesanSingkat"
                  value={formData.pesanSingkat}
                  onChange={handleChange}
                  placeholder="Ceritakan ringkasan tujuan, jangka waktu, atau kebutuhan Anda..."
                  rows={5}
                  className="w-full resize-none rounded-xl border-0 bg-[#edf3f8] px-4 py-4 text-sm leading-6 text-[#071b38] outline-none placeholder:text-[#91a6bf] focus:ring-2 focus:ring-[#315d91]"
                />
              </div>

              {/* Bottom */}
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <button
                  type="submit"
                  className="flex w-fit items-center gap-3 rounded-xl bg-[#111315] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#26303a]"
                >
                  Kirim Pesan
                  <Send size={17} strokeWidth={1.8} />
                </button>

                <p className="text-xs leading-5 text-[#315d91]">
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