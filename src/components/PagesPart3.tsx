import React from "react";
import { PageId } from "../types";
import { 
  ArrowRight, 
  Layers, 
  HelpCircle, 
  BookOpen, 
  Presentation, 
  Sparkles, 
  ClipboardCopy, 
  AlertTriangle, 
  Check, 
  ShieldCheck, 
  Eye, 
  Heart,
  Undo
} from "lucide-react";

interface PagesPart3Props {
  activePage: PageId;
  setActivePage: (id: PageId) => void;
  onCopy: (text: string, title: string) => void;
}

export const PagesPart3: React.FC<PagesPart3Props> = ({
  activePage,
  setActivePage,
  onCopy
}) => {
  if (![9, 10, 11, 12, 13, 14, 15].includes(activePage)) return null;

  // Page 9: Teknik Ping-Pong AI ↔ Canva
  if (activePage === 9) {
    const pingPongSteps = [
      { sender: "AI", text: "Guna AI untuk hasilkan teks poster asal." },
      { sender: "CANVA", text: "Masukkan teks tersebut ke dalam Canva." },
      { sender: "AI", text: "Jika poster nampak terlalu penuh, kembali ke AI dan minta ringkaskan." },
      { sender: "CANVA", text: "Masukkan semula draf teks yang sudah diringkaskan ke Canva." },
      { sender: "AI", text: "Tangkap gambar skrin (screenshot) draf poster anda dan minta AI beri cadangan pembaikan." },
      { sender: "CANVA", text: "Buat pembaikan akhir di Canva sebelum muat turun fail rasmi." }
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Teknik Ping-Pong AI ↔ Canva</h2>
          <p className="text-lg text-slate-600 font-medium">Lompat antara AI dan Canva untuk memurnikan mesej sehingga mendapat hasil visual yang terbaik.</p>
        </div>

        {/* Dynamic visual path */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6 shadow-md">
          <h3 className="text-xl font-bold text-amber-400 font-display flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Proses Putaran Maklum Balas
          </h3>
          
          <div className="space-y-4">
            {pingPongSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className={`w-24 text-center px-3 py-1.5 rounded-lg text-xs font-black tracking-widest ${
                  step.sender === "AI" 
                    ? "bg-purple-600 text-purple-100" 
                    : "bg-blue-600 text-blue-100"
                }`}>
                  {step.sender}
                </span>
                <span className="text-slate-400 text-xs font-mono">Langkah {idx + 1}</span>
                <p className="text-slate-200 text-md flex-1 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Box */}
        <div className="bg-pkd-light border border-blue-100 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-pkd-blue font-display flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-pkd-blue" /> Tips Emas Peserta Bengkel:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 text-[17px]">
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Jangan tunggu sempurna</strong> di AI baru nak reka. Mula reka cepat untuk lihat kesesuaian ruang.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Jangan reka semua dari kosong</strong> di Canva. Guna template kesihatan awam yang sedia ada untuk jimat masa.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>AI bantu susun teks</strong> dan ayat supaya padat, rasmi, dan mudah difahami masyarakat.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Canva bantu visual</strong> dan reka letak dengan warna professional jabatan kesihatan.</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm italic text-center pt-2">
            Ingat: AI mencadangkan idea, tetapi peserta tetap memegang kuasa memilih cadangan yang sesuai sahaja.
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(10)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Reka Poster <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 10: Guna Canva untuk Poster
  if (activePage === 10) {
    const posterStructure = [
      { part: "1. Tajuk Utama", desc: "Sangat besar, jelas dibaca dari jarak 3 meter (cth: AWAS AEDES)." },
      { part: "2. Ayat Pembuka", desc: "Satu baris ringkas pengenalan isu (cth: Lindungi keluarga anda daripada bahaya denggi)." },
      { part: "3. Tiga hingga Lima Isi Penting", desc: "Mesej utama ringkas dalam bentuk poin (elakkan perenggan panjang)." },
      { part: "4. Visual atau Ikon", desc: "Elemen grafik atau foto yang relevan dengan topik (elakkan hiasan berlebihan)." },
      { part: "5. Seruan Tindakan (CTA)", desc: "Butang atau kenyataan penutup yang mengajak pembaca bertindak sekarang." },
      { part: "6. Logo Jabatan", desc: "Logo rasmi jabatan / KKM diletakkan di bahagian bawah dengan kemas." }
    ];

    const posterTips = [
      "Satu poster, fokus kepada SATU mesej utama sahaja.",
      "Tajuk mestilah paling besar dan berada di bahagian atas sekali.",
      "Gunakan hanya 3 hingga 5 isi penting sahaja untuk mengelakkan kesesakan.",
      "Jangan sesekali memasukkan perenggan teks yang panjang.",
      "Pastikan ada seruan tindakan (CTA) yang jelas di bahagian bawah.",
      "Pastikan kontras tulisan tinggi (tulisan gelap di atas latar terang, atau sebaliknya).",
      "Gunakan ruang kosong (whitespace) yang banyak di sekeliling elemen.",
      "Jangan sesekali herotkan logo (tarik penjuru sahaja untuk ubah saiz).",
      "Jangan masukkan fakta atau statistik yang belum disahkan oleh pakar PKD."
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Guna Canva untuk Poster Kesihatan</h2>
          <p className="text-lg text-slate-600">Panduan membina struktur poster kesihatan awam yang berkesan dan kemas.</p>
        </div>

        {/* Structure Card */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-pkd-blue font-display border-b border-slate-100 pb-2">
            6 Struktur Utama Poster Kesihatan Awam
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posterStructure.map((item, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <strong className="text-pkd-dark block font-display text-[17px]">{item.part}</strong>
                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips list */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-800 font-display flex items-center gap-2 border-b border-amber-200 pb-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" /> Tips Penting Reka Poster Kesihatan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-900 text-[17px]">
            {posterTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(11)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Reka Infografik <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 11: Guna Canva untuk Infografik
  if (activePage === 11) {
    const infographicTypes = [
      { title: "1. 5 Langkah", desc: "Sesuai untuk proses berturutan seperti cara mencuci tangan atau melaporkan kes demam denggi." },
      { title: "2. Checklist Ringkas", desc: "Sesuai untuk senarai semakan keselamatan premis atau pembersihan gotong-royong rumah." },
      { title: "3. Do's and Don'ts", desc: "Format perbandingan langsung 'Amalkan' (Hijau) vs 'Elakkan' (Merah) yang sangat mudah difahami pembaca." },
      { title: "4. Fakta Ringkas", desc: "Membentangkan 3 hingga 5 statistik atau poin fakta pendek mengenai sesuatu isu kesihatan daerah." },
      { title: "5. Sebelum, Semasa & Selepas", desc: "Sangat berguna untuk panduan bencana seperti kesihatan semasa dan selepas banjir." }
    ];

    const infographicTips = [
      "Batasi maklumat kepada 5 hingga 6 isi penting sahaja dalam satu risalah.",
      "Pastikan setiap huraian isi adalah sangat pendek (bawah 15 perkataan).",
      "Gunakan nombor yang besar sekiranya kandungan berformat langkah berturut-turut.",
      "Gunakan penanda kotak sekiranya kandungan berformat senarai semakan (checklist).",
      "Gunakan ikon yang sama gaya (cth: semua garisan nipis atau semua ikon padat).",
      "Jangan sesekali memasukkan terlalu banyak data peratusan yang memeningkan.",
      "Susun arah aliran maklumat secara logik sama ada dari atas ke bawah atau kiri ke kanan."
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Guna Canva untuk Infografik</h2>
          <p className="text-lg text-slate-600">Pelajari format infografik mudah yang sesuai untuk penyampaian maklumat kesihatan awam.</p>
        </div>

        {/* Infographic Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {infographicTypes.map((t, i) => (
            <div key={i} className="bg-white border-2 border-slate-100 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-pkd-teal transition-all">
              <div>
                <span className="inline-block px-2.5 py-1 bg-teal-100 text-pkd-teal rounded-lg text-xs font-bold mb-3">
                  Format {i + 1}
                </span>
                <h3 className="text-lg font-bold text-pkd-dark font-display leading-snug">{t.title}</h3>
                <p className="text-slate-600 text-xs mt-2 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Infographic tips */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-emerald-800 font-display flex items-center gap-2 border-b border-emerald-200 pb-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Tips Reka Bentuk Infografik Berkualiti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-emerald-900 text-[17px]">
            {infographicTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(12)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Reka Slide Mini <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 12: Guna Canva untuk Slide Mini
  if (activePage === 12) {
    const slideStructure = [
      { num: "Slaid 1", title: "Tajuk Kempen", desc: "Memaparkan tajuk utama program promosi, nama penganjur dan tarikh/lokasi dalam reka bentuk besar." },
      { num: "Slaid 2", title: "Risiko / Isi Utama", desc: "Menerangkan kenapa isu ini perlu diambil serius (bahaya utama, simptom ketara, kesan buruk dalam 3 poin ringkas)." },
      { num: "Slaid 3", title: "Tindakan / Seruan", desc: "Menerangkan apa yang komuniti mesti lakukan sekarang (cara pencegahan, maklumat perhubungan, talian hotline)." }
    ];

    const slideTips = [
      "Prinsip utama slaid: Satu slaid, sampaikan SATU idea besar sahaja.",
      "Hadkan isi kepada maksimum 3 poin ringkas sahaja bagi setiap helaian slaid.",
      "Gunakan tulisan yang sangat besar (tajuk sekurang-kurangnya 40px, isi 24px) supaya jelas.",
      "Slaid hanyalah ALAT BANTU BERCAKAP, bukan kertas laporan bertulis. Elakkan menyalin karangan.",
      "Hadkan penggunaan animasi masuk elemen. Animasi berlebihan melambatkan kelancaran.",
      "Slaid terakhir mesti diakhiri dengan seruan tindakan atau slogan kempen kesihatan awam."
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Guna Canva untuk Slide Mini</h2>
          <p className="text-lg text-slate-600">Sediakan slaid taklimat ringkas 3 halaman yang kemas, profesional, dan padat dengan mesej kesihatan.</p>
        </div>

        {/* 3 Slides layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slideStructure.map((s, i) => (
            <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs hover:border-amber-500 transition-all space-y-3">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-bold font-mono">
                {s.num}
              </span>
              <h3 className="text-xl font-bold text-pkd-dark font-display">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Slide design tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-800 font-display flex items-center gap-2 border-b border-amber-200 pb-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" /> Tips Slaid Taklimat Berimpak Tinggi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-900 text-[17px]">
            {slideTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(13)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Inspirasi Visual <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 13: Style & Inspirasi Visual
  if (activePage === 13) {
    const inspirations = [
      "Susun atur (reka letak elemen utama yang seimbang)",
      "Cara penempatan kedudukan tajuk utama (hierarchy)",
      "Skim kombinasi warna yang harmoni dan mesra mata",
      "Jenis bentuk ikon yang ringkas (garisan atau padat)",
      "Susunan pembahagian 3 isi utama secara berasingan",
      "Ruang penempatan logo rasmi yang kemas di bucu bawah",
      "Gaya pembinaan kad atau kotak penempatan huraian isi",
      "Cara penggunaan gambar foto utama secara berfokus"
    ];

    const copyWarnings = [
      "Meniru bulat-bulat (copy paste) reka bentuk poster orang lain",
      "Menggunakan logo rasmi jabatan lain tanpa kebenaran bertulis",
      "Mengambil gambar orang awam/pesakit tanpa izin (consent) bertulis",
      "Menyalin kandungan fakta kesihatan tanpa membuat semakan rasmi",
      "Menggunakan visual yang terlalu menakutkan, berdarah, atau sensitif"
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Elemen Style & Inspirasi Visual</h2>
          <p className="text-lg text-slate-600">Belajar cara mengambil rujukan inspirasi dengan cara yang beretika tanpa melakukan plagiat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seek Inspiration Card */}
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-emerald-800 font-display flex items-center gap-2 border-b border-slate-100 pb-2">
              <Eye className="w-6 h-6 text-emerald-600" /> Boleh Diambil Sebagai Inspirasi:
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">Anda boleh merujuk reka bentuk poster antarabangsa/tempatan untuk mempelajari:</p>
            <ul className="space-y-2.5 text-slate-700 text-[17px]">
              {inspirations.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plagiarism Warnings Card */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-red-800 font-display flex items-center gap-2 border-b border-red-200 pb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" /> LARANGAN (Elakkan Perkara Berikut):
            </h3>
            <p className="text-red-950 font-medium text-sm leading-relaxed">
              Sebagai kakitangan penjawat awam, elakkan kesilapan berikut semasa meniru inspirasi:
            </p>
            <ul className="space-y-2.5 text-red-900 text-[17px]">
              {copyWarnings.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ethical statement */}
        <div className="bg-pkd-light rounded-2xl p-6 text-center border border-blue-100">
          <p className="text-pkd-dark font-display text-lg font-bold">
            "Inspirasi bermaksud mengambil idea kerangka, manakala plagiat bermaksud menyalin kerja orang lain tanpa usaha sendiri."
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(14)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: AI Review Poster <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 14: AI Review
  if (activePage === 14) {
    const reviewPrompt = "Ini poster/infografik/slide saya. Tolong semak dari segi kejelasan mesej, susunan teks, saiz tulisan, kontras warna, kesesuaian ikon/gambar, ruang kosong dan kesesuaian untuk hebahan rasmi kesihatan awam. Jangan tambah fakta baharu. Jangan ubah maksud mesej. Berikan 5 cadangan pembaikan yang praktikal untuk saya baiki dalam Canva.";

    const reviewTips = [
      "Jangan terima bulat-bulat semua cadangan maklum balas AI.",
      "Hanya pilih 2 atau 3 cadangan sahaja yang paling praktikal dan penting.",
      "Elakkan menambah fakta atau statistik baharu pada saat-saat akhir reka bentuk.",
      "Fokus semakan utama kepada keterbacaan tajuk, saiz tulisan huraian, dan susunan kemas.",
      "Sekiranya masa bengkel sudah suntuk, baiki poster sahaja terlebih dahulu."
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">AI Review: Baiki Hasil Kerja Anda</h2>
          <p className="text-lg text-slate-600">Hantar hasil lakaran draf anda kepada AI untuk mendapatkan maklum balas penambahbaikan reka letak dengan segera.</p>
        </div>

        {/* Copyable Prompt Box */}
        <div className="bg-pkd-light border border-blue-100 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-pkd-dark font-display">
              Prompt Semakan Hasil Kerja
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-pkd-blue rounded-full text-xs font-bold uppercase tracking-wide">Copy & Paste</span>
          </div>
          <p className="text-slate-600 text-sm">Gunakan prompt di bawah bersama gambar lakaran/screenshot poster Canva anda dan hantar ke AI (Gemini/ChatGPT).</p>

          <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-[16px] leading-relaxed border-2 border-slate-800 relative group">
            {reviewPrompt}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => onCopy(reviewPrompt, "Prompt AI Review")}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-md flex items-center gap-2 shadow-xs transition-all"
            >
              <ClipboardCopy className="w-5 h-5" /> Salin Prompt Semakan Ini
            </button>
          </div>
        </div>

        {/* Advice Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-800 font-display flex items-center gap-2 border-b border-amber-200 pb-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" /> Panduan Membaca Maklum Balas AI
          </h3>
          <ul className="space-y-2.5 text-amber-900 text-[17px]">
            {reviewTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(15)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Tips Canva Percuma <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 15: Tips Canva Percuma
  if (activePage === 15) {
    const avoidElements = [
      "Template reka bentuk yang mempunyai tanda kecil bintang berwarna kuning / 'Pro'.",
      "Gambar foto atau ilustrasi yang bertanda watermark atau ikon mahkota.",
      "Ikon hiasan bertanda 'Pro' di sudut bawah sebelah kanan carian.",
      "Bentuk atau fon tulisan mewah yang berlabel lambang mahkota Pro."
    ];

    const stepsToFixPro = [
      { step: "1", title: "Cari Elemen Pro", desc: "Klik pada satu per satu elemen di atas kanvas reka bentuk anda untuk melihat sama ada ia mempunyai tanda air (watermark)." },
      { step: "2", title: "Padam Elemen", desc: "Klik butang ikon tong sampah (Delete) untuk memadam elemen Pro tersebut daripada kanvas." },
      { step: "3", title: "Cari Alternatif Percuma", desc: "Masuk semula ke tab 'Elements' di Canva, taip kata kunci yang sama, dan pilih yang tidak mempunyai ikon mahkota." },
      { step: "4", title: "Tukar Gambar", desc: "Gunakan gambar asli milikan peribadi anda atau gambar bebas royalti KKM sekiranya gambar percuma di Canva tidak sesuai." },
      { step: "5", title: "Pilih Template Lain", desc: "Sekiranya terlalu banyak elemen Pro bersepah dalam template asal, lebih baik padam template itu dan pilih template percuma yang lain." }
    ];

    const canvaPlans = [
      {
        name: "Canva Free (Percuma)",
        target: "Individu & Kumpulan Kecil",
        cost: "Percuma Selamanya",
        storage: "5 GB Storage Awan",
        features: [
          "250,000+ template percuma",
          "1 juta+ foto, grafik, dan fon percuma",
          "Alat reka bentuk serba boleh & kolaborasi masa nyata",
          "Muat turun tanpa had untuk elemen percuma"
        ],
        badgeColor: "bg-slate-100 text-slate-800",
        borderColor: "border-slate-200"
      },
      {
        name: "Canva Pro",
        target: "Profesional & Pereka Solo",
        cost: "Berbayar (Langganan)",
        storage: "1 TB Storage Awan",
        features: [
          "100 juta+ foto, video, audio & grafik premium",
          "Brand Kit (simpan logo, warna & fon rasmi)",
          "Satu-klik Background Remover & Magic Resize",
          "Simpan draf sebagai template premium peribadi"
        ],
        badgeColor: "bg-blue-100 text-blue-800 border border-blue-200",
        borderColor: "border-blue-200"
      },
      {
        name: "Canva Education (Edu)",
        target: "Guru & Murid (K-12)",
        cost: "100% Percuma (Perlu Kelayakan)",
        storage: "1 TB Storage Awan",
        features: [
          "Semua ciri Canva Pro secara percuma",
          "Integrasi Google Classroom, Canvas & MS Teams",
          "Ruang kelas maya selamat dengan tapis kandungan",
          "Hantar tugasan & beri maklum balas terus dalam Canva"
        ],
        badgeColor: "bg-emerald-100 text-emerald-800 border border-emerald-200",
        borderColor: "border-emerald-200"
      },
      {
        name: "Canva Teams / Business",
        target: "Syarikat & Pasukan Kerjasama",
        cost: "Berbayar (Syarikat / Agensi)",
        storage: "1 TB Storage Awan (setiap pengguna)",
        features: [
          "Brand Controls (kawal had warna/fon pasukan)",
          "Sistem kelulusan reka bentuk (approval workflows)",
          "Kunci elemen penting agar tidak boleh diubah",
          "Laporan aktiviti reka bentuk pasukan"
        ],
        badgeColor: "bg-purple-100 text-purple-800 border border-purple-200",
        borderColor: "border-purple-200"
      },
      {
        name: "Canva Enterprise",
        target: "Organisasi Skala Besar",
        cost: "Harga Khas Syarikat Gergasi",
        storage: "Storan Awan Tersuai / Selamat",
        features: [
          "Sistem log masuk tunggal (SSO/MFA) gred industri",
          "Kawalan aset & jenama berpusat yang sangat ketat",
          "Bantuan teknikal khusus 24/7",
          "Pelesenan dan perlindungan undang-undang khas"
        ],
        badgeColor: "bg-amber-100 text-amber-800 border border-amber-200",
        borderColor: "border-amber-200"
      }
    ];

    return (
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Tips Penggunaan Akaun Canva Percuma</h2>
          <p className="text-lg text-slate-600">Cara memahami perbezaan lesen akaun serta panduan mengelakkan elemen berbayar ketika mengeksport draf.</p>
        </div>

        {/* Plan Comparison Section */}
        <div className="space-y-4">
          <div className="border-l-4 border-pkd-blue pl-4">
            <h3 className="text-2xl font-bold text-slate-800 font-display">
              Perbandingan Akaun Canva: Percuma vs Berbayar
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Fahami perbezaan ciri mengikut jenis akaun untuk merancang kegunaan reka bentuk organisasi anda dengan betul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {canvaPlans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white border rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${plan.borderColor} ${i === 2 ? 'md:col-span-2 bg-gradient-to-r from-emerald-50/50 to-teal-50/10' : ''}`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                    <h4 className="text-lg font-bold text-slate-900 font-display">{plan.name}</h4>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${plan.badgeColor}`}>
                      {plan.cost}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 text-xs text-slate-500 font-mono mb-4 flex flex-wrap justify-between">
                    <div>🎯 <strong className="text-slate-700">Sasaran:</strong> {plan.target}</div>
                    <div>💾 <strong className="text-slate-700">Storan:</strong> {plan.storage}</div>
                  </div>

                  <ul className="space-y-2 text-slate-700 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips and elements to avoid */}
        <div className="space-y-6 pt-4 border-t border-slate-100">
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-bold text-slate-800 font-display">
              Panduan Praktikal Menggunakan Akaun Percuma (Free)
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Ikuti langkah ini untuk memastikan reka bentuk anda boleh dieksport 100% percuma tanpa denda, bayaran tersembunyi, atau tera air (watermark).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Avoid elements list */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-red-800 font-display flex items-center gap-2 border-b border-red-200 pb-2">
                <AlertTriangle className="w-6 h-6 text-red-600" /> Elemen yang Perlu DIELAKKAN:
              </h3>
              <p className="text-red-950 font-medium text-sm leading-relaxed">
                Elakkan elemen berbayar di bawah supaya anda tidak tersekat ketika proses memuat turun fail:
              </p>
              <ul className="space-y-2.5 text-red-900 text-[17px]">
                {avoidElements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-life steps */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-pkd-teal font-display flex items-center gap-2 border-b border-slate-100 pb-2">
                <Layers className="w-6 h-6 text-pkd-teal" /> 5 Langkah Selesaikan Elemen Pro:
              </h3>
              <div className="space-y-4">
                {stepsToFixPro.map((step) => (
                  <div key={step.step} className="flex gap-3 text-slate-700">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-teal-100 text-pkd-teal flex items-center justify-center text-xs font-bold font-display mt-0.5">
                      {step.step}
                    </span>
                    <div className="text-sm">
                      <strong className="text-slate-800">{step.title}:</strong> {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(16)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Checklist Eksport <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
