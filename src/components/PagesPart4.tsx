import React, { useState } from "react";
import { PageId, ChecklistState, ReflectionState } from "../types";
import { 
  CheckSquare, 
  Square, 
  ArrowRight, 
  FileDown, 
  CheckCircle, 
  HelpCircle, 
  ClipboardCopy, 
  Heart, 
  RefreshCw, 
  Smile, 
  Award 
} from "lucide-react";

interface PagesPart4Props {
  activePage: PageId;
  setActivePage: (id: PageId) => void;
  checklist: ChecklistState;
  setChecklist: React.Dispatch<React.SetStateAction<ChecklistState>>;
  reflection: ReflectionState;
  setReflection: React.Dispatch<React.SetStateAction<ReflectionState>>;
  onCopy: (text: string, title: string) => void;
}

export const PagesPart4: React.FC<PagesPart4Props> = ({
  activePage,
  setActivePage,
  checklist,
  setChecklist,
  reflection,
  setReflection,
  onCopy
}) => {
  // Filename generator local state
  const [userName, setUserName] = useState("");
  const [fileTopic, setFileTopic] = useState("");
  const [fileType, setFileType] = useState("Poster");
  const [fileExt, setFileExt] = useState("png");

  if (![16, 17, 18, 19, 20].includes(activePage)) return null;

  // Page 16: Checklist Sebelum Eksport
  if (activePage === 16) {
    const toggleCheck = (category: "poster" | "infografik" | "slide", key: string) => {
      setChecklist(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [key]: !((prev[category] as any)[key])
        }
      }));
    };

    const resetCategory = (category: "poster" | "infografik" | "slide") => {
      const resetState: any = {
        poster: {
          tajukJelas: false, mesejMudahFaham: false, isiSikit: false, adaSeruan: false,
          visualSesuai: false, logoTidakHerot: false, bahasaRasmi: false, ejaanBetul: false,
          faktaDisemak: false, kemas: false, tiadaPro: false, eksportBerjaya: false
        },
        infografik: {
          tajukJelas: false, formatSesuai: false, isiTersusun: false, ayatPendek: false,
          ikonKonsisten: false, susunanSesuai: false, bahasaRasmi: false, faktaDisemak: false,
          rekaBentukSelesa: false, eksportBerjaya: false
        },
        slide: {
          tigaSlideSahaja: false, slide1Tajuk: false, slide2Risiko: false, slide3Seruan: false,
          tidakTerlaluPenuh: false, tulisanBesar: false, warnaKonsisten: false, logoTidakHerot: false,
          faktaDisemak: false, sesuaiTaklimat: false
        }
      };

      setChecklist(prev => ({
        ...prev,
        [category]: resetState[category]
      }));
    };

    // Calculate completion percents
    const getPercent = (cat: "poster" | "infografik" | "slide") => {
      const obj = checklist[cat];
      const vals = Object.values(obj);
      const checked = vals.filter(v => v).length;
      return Math.round((checked / vals.length) * 100);
    };

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Checklist Sebelum Eksport</h2>
          <p className="text-lg text-slate-600">Klik dan tanda (✓) setiap kotak di bawah untuk memastikan hasil kerja anda memenuhi standard promosi kesihatan awam PKD.</p>
        </div>

        {/* Poster Checklist Card */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-xl font-bold text-pkd-blue font-display flex items-center gap-2">
                📂 Senarai Semak Poster Kesihatan
              </h3>
              <p className="text-sm text-slate-500">Mencegah reka bentuk yang sesak dan memastikan fakta tepat.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold font-mono px-2.5 py-1 bg-blue-50 text-pkd-blue rounded-lg">
                Selesai: {getPercent("poster")}%
              </span>
              <button onClick={() => resetCategory("poster")} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Padam Tanda
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { key: "tajukJelas", text: "Tajuk utama poster sangat besar dan jelas dibaca" },
              { key: "mesejMudahFaham", text: "Mesej utama sangat ringkas & mudah difahami" },
              { key: "isiSikit", text: "Isi kandungan tidak terlalu banyak (3 hingga 5 sahaja)" },
              { key: "adaSeruan", text: "Ada ayat Seruan Tindakan (CTA) yang jelas" },
              { key: "visualSesuai", text: "Gambar atau ikon yang digunakan sangat berkaitan" },
              { key: "logoTidakHerot", text: "Logo PKD / KKM dipasang dengan kemas (tidak herot)" },
              { key: "bahasaRasmi", text: "Menggunakan Bahasa Malaysia rasmi yang sopan" },
              { key: "ejaanBetul", text: "Semua ejaan perkataan telah diperiksa & betul" },
              { key: "faktaDisemak", text: "Fakta kesihatan disemak oleh pakar unit PKD" },
              { key: "kemas", text: "Susun atur kemas dan ada banyak ruang kosong" },
              { key: "tiadaPro", text: "Tiada elemen berbayar (Canva Pro) digunakan" },
              { key: "eksportBerjaya", text: "Fail berjaya dieksport dalam resolusi tinggi" }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => toggleCheck("poster", item.key)}
                className={`flex items-start text-left gap-3 p-3 rounded-xl border transition-all ${
                  checklist.poster[item.key as keyof typeof checklist.poster]
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="mt-0.5 shrink-0">
                  {checklist.poster[item.key as keyof typeof checklist.poster] ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </span>
                <span className="text-[17px]">{item.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Infografik Checklist Card */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-xl font-bold text-pkd-teal font-display flex items-center gap-2">
                📊 Senarai Semak Infografik Ringkas
              </h3>
              <p className="text-sm text-slate-500">Memastikan maklumat visual tersusun secara berkesan.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold font-mono px-2.5 py-1 bg-teal-50 text-pkd-teal rounded-lg">
                Selesai: {getPercent("infografik")}%
              </span>
              <button onClick={() => resetCategory("infografik")} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Padam Tanda
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { key: "tajukJelas", text: "Tajuk utama infografik adalah terang & jelas" },
              { key: "formatSesuai", text: "Format infografik sesuai (cth: 5 Langkah, Checklist)" },
              { key: "isiTersusun", text: "Susunan maklumat berurutan & mudah dituruti" },
              { key: "ayatPendek", text: "Ayat huraian sangat pendek (bawah 15 patah perkataan)" },
              { key: "ikonKonsisten", text: "Ikon yang dipilih konsisten & sesuai" },
              { key: "susunanSesuai", text: "Aliran data mudah dibaca dari atas ke bawah" },
              { key: "bahasaRasmi", text: "Teks mematuhi Bahasa Melayu rasmi KKM" },
              { key: "faktaDisemak", text: "Data & statistik kesihatan telah ditentusahkan" },
              { key: "rekaBentukSelesa", text: "Reka bentuk selesa dipandang (tidak terlalu rapat)" },
              { key: "eksportBerjaya", text: "Fail berjaya dimuat turun dengan format bersesuaian" }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => toggleCheck("infografik", item.key)}
                className={`flex items-start text-left gap-3 p-3 rounded-xl border transition-all ${
                  checklist.infografik[item.key as keyof typeof checklist.infografik]
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="mt-0.5 shrink-0">
                  {checklist.infografik[item.key as keyof typeof checklist.infografik] ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </span>
                <span className="text-[17px]">{item.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slide Mini Checklist Card */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-xl font-bold text-amber-700 font-display flex items-center gap-2">
                🗂️ Senarai Semak Slide Mini
              </h3>
              <p className="text-sm text-slate-500">Memastikan paparan slaid ringkas sedia untuk taklimat.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold font-mono px-2.5 py-1 bg-amber-50 text-amber-800 rounded-lg">
                Selesai: {getPercent("slide")}%
              </span>
              <button onClick={() => resetCategory("slide")} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Padam Tanda
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { key: "tigaSlideSahaja", text: "Mempunyai 3 helaian slaid sahaja" },
              { key: "slide1Tajuk", text: "Slaid 1 memaparkan tajuk utama yang jelas" },
              { key: "slide2Risiko", text: "Slaid 2 menerangkan risiko / bahaya utama" },
              { key: "slide3Seruan", text: "Slaid 3 memaparkan seruan tindakan / maklumat PKD" },
              { key: "tidakTerlaluPenuh", text: "Teks tidak terlalu penuh pada setiap helai" },
              { key: "tulisanBesar", text: "Saiz tulisan besar (tajuk >40px, isi >24px)" },
              { key: "warnaKonsisten", text: "Warna latar belakang konsisten sepanjang slaid" },
              { key: "logoTidakHerot", text: "Logo PKD diletakkan kemas pada slaid pertama/akhir" },
              { key: "faktaDisemak", text: "Semua kandungan maklumat kesihatan telah disemak" },
              { key: "sesuaiTaklimat", text: "Slaid sangat sesuai digunakan untuk taklimat komuniti" }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => toggleCheck("slide", item.key)}
                className={`flex items-start text-left gap-3 p-3 rounded-xl border transition-all ${
                  checklist.slide[item.key as keyof typeof checklist.slide]
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span className="mt-0.5 shrink-0">
                  {checklist.slide[item.key as keyof typeof checklist.slide] ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </span>
                <span className="text-[17px]">{item.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(17)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Simpan Fail <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 17: Simpan dan Eksport Fail
  if (activePage === 17) {
    const formatRecommendations = [
      { format: "PNG", label: "Format Gambar Digital", rec: "Sangat sesuai untuk dikongsi melalui Whatsapp, Facebook, Instagram atau dipaparkan pada skrin televisyen di ruang legar PKD." },
      { format: "JPG", label: "Format Gambar Mampat", rec: "Sesuai untuk kegunaan dalam talian sekiranya anda memerlukan saiz fail yang lebih kecil untuk dihantar di kawasan capaian internet lambat." },
      { format: "PDF", label: "Format Dokumen Cetak", rec: "Sesuai sekiranya poster ingin dicetak secara fizikal untuk digantung di papan kenyataan pejabat atau dijadikan slaid bercetak." }
    ];

    const generateFileName = () => {
      const sanitizedName = userName.trim() !== "" ? userName.replace(/\s+/g, "") : "Aina";
      const sanitizedTopic = fileTopic.trim() !== "" ? fileTopic.replace(/\s+/g, "") : "CegahDenggi";
      return `${sanitizedName}_${sanitizedTopic}_${fileType}.${fileExt}`;
    };

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Simpan & Eksport Fail Anda</h2>
          <p className="text-lg text-slate-600">Pelajari format muat turun yang bersesuaian di Canva bagi mengelakkan kemerosotan kualiti cetakan atau paparan digital.</p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formatRecommendations.map((f, i) => (
            <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-3 hover:border-pkd-blue transition-all">
              <span className="px-3 py-1 bg-blue-100 text-pkd-blue rounded-md text-xs font-black font-mono">
                {f.format}
              </span>
              <strong className="text-lg font-bold text-pkd-dark font-display block">{f.label}</strong>
              <p className="text-slate-600 text-sm leading-relaxed">{f.rec}</p>
            </div>
          ))}
        </div>

        {/* Suggestion Table */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-400 font-display flex items-center gap-2">
            💡 Padanan Cadangan Format Eksport
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono text-center">
            <div className="bg-white/10 p-3 rounded-xl">
              <span className="text-slate-400 block text-xs">POSTER DIGITAL</span>
              <strong className="text-emerald-400 text-lg">PNG</strong>
            </div>
            <div className="bg-white/10 p-3 rounded-xl">
              <span className="text-slate-400 block text-xs">POSTER CETAK</span>
              <strong className="text-amber-400 text-lg">PDF Print</strong>
            </div>
            <div className="bg-white/10 p-3 rounded-xl">
              <span className="text-slate-400 block text-xs">SLIDE TAKLIMAT</span>
              <strong className="text-blue-400 text-lg">PDF Standard</strong>
            </div>
          </div>
        </div>

        {/* Interactive Filename Generator */}
        <div className="bg-pkd-light border border-blue-100 rounded-2xl p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-pkd-dark font-display flex items-center gap-1.5">
              ⚙️ Penjana Nama Fail Seragam Bengkel
            </h3>
            <p className="text-slate-600 text-sm">Gunakan borang di bawah untuk menjana nama fail yang standard mengikut ketetapan bengkel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Nama Peserta:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="cth: Aina / Hafiz / Farah"
                className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-md"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Topik Poster:</label>
              <input
                type="text"
                value={fileTopic}
                onChange={(e) => setFileTopic(e.target.value)}
                placeholder="cth: CegahDenggi / PilihPremisBersih"
                className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-md"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Jenis Bahan Visual:</label>
              <select
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}
                className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-md"
              >
                <option value="Poster">Poster</option>
                <option value="Infografik">Infografik</option>
                <option value="SlideMini">Slide Mini</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Format Akhir (.ext):</label>
              <select
                value={fileExt}
                onChange={(e) => setFileExt(e.target.value)}
                className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-md"
              >
                <option value="png">.png (Sesuai Digital)</option>
                <option value="pdf">.pdf (Sesuai Cetakan/Slaid)</option>
                <option value="jpg">.jpg (Sesuai Fail Kecil)</option>
              </select>
            </div>
          </div>

          {/* Generated Result display */}
          <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-2 border-slate-800">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-[10px] text-slate-400 font-mono block">NAMA FAIL DIJANA:</span>
              <strong className="text-amber-400 text-lg font-mono tracking-wide">{generateFileName()}</strong>
            </div>
            <button
              onClick={() => onCopy(generateFileName(), "Nama Fail Seragam")}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm rounded-lg flex items-center gap-1.5 shrink-0 transition-all"
            >
              <ClipboardCopy className="w-4 h-4" /> Salin Nama Fail
            </button>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(18)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: FAQ Masalah <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 18: Masalah Biasa dan Cara Selesai (FAQ)
  if (activePage === 18) {
    const faqItems = [
      { q: "Tidak tahu hendak mula menulis poster", a: "Guna Prompt 1 di tab 'Prompt Siap Guna' untuk menjana 10 idea poster utama mengikut bidang atau topik am anda terlebih dahulu." },
      { q: "Teks yang dijana AI terlalu panjang untuk diletakkan", a: "Guna Prompt 3 untuk mengarahkan AI meringkaskan semula teks asal kepada tajuk utama, ayat pembuka dan 3 poin pendek sahaja." },
      { q: "Reka bentuk poster di Canva kelihatan terlalu penuh", a: "Padam teks perenggan yang panjang. Kurangkan huraian isi kepada 3 poin sahaja. Buang elemen-elemen hiasan visual yang tidak menyumbang kepada mesej utama." },
      { q: "Tidak jumpa template Canva kesihatan awam yang sesuai", a: "Di bahagian carian template Canva, taip kata kunci carian dwi-bahasa seperti: 'health poster', 'food safety poster', 'public health poster', 'awareness poster' atau 'infographic health'." },
      { q: "Logo PKD / KKM yang dimasukkan kelihatan herot", a: "Padam logo yang herot itu. Masukkan semula fail logo baharu dari tab uploads. Tarik atau besarkan logo hanya dari bahagian penjuru (corner handler), jangan sesekali ditarik dari sisi tepi atau atas." },
      { q: "Canva tidak membenarkan muat turun fail secara percuma", a: "Ini disebabkan terdapat elemen bertanda mahkota (Canva Pro) dalam kanvas anda. Cari elemen tersebut, padamkannya, dan tukar kepada elemen alternatif yang percuma." },
      { q: "AI memberikan tona jawapan bahasa yang terlalu santai", a: "Guna Prompt 4 untuk menukar jawapan AI kepada gaya bahasa pentadbiran rasmi yang sesuai untuk standard hebahan Pejabat Kesihatan Daerah." },
      { q: "AI memberikan jawapan yang mempunyai istilah terlalu teknikal", a: "Guna Prompt 5 untuk mengarahkan AI memudahkan semula bahasa teknikal perubatan kepada pemahaman harian orang awam." },
      { q: "Slaid Mini nampak terlalu padat macam poster", a: "Kurangkan teks slaid secara drastik. Pastikan reka letak menggunakan saiz tulisan yang besar dan jadikan satu halaman slaid hanya menerangkan satu idea ringkas sahaja." }
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
              <HelpCircle className="w-6 h-6" />
            </span>
            <h2 className="text-3xl font-bold text-pkd-dark font-display">Masalah Biasa & Cara Selesai</h2>
          </div>
          <p className="text-lg text-slate-600">
            Berikut adalah kompilasi masalah teknikal biasa yang dihadapi oleh peserta bengkel dan langkah penyelesaian segera.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-3 hover:border-pkd-blue transition-all">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold font-mono uppercase mt-1">
                  Masalah
                </span>
                <h3 className="text-lg font-bold text-slate-800 font-display leading-snug">
                  {item.q}?
                </h3>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-bold font-mono uppercase mt-1">
                  Solusi
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(19)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Buku Refleksi <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 19: Refleksi Peserta
  if (activePage === 19) {
    const handleResetReflection = () => {
      setReflection({
        learnedToday: "",
        mostUsefulSkill: "",
        producedPoster: false,
        producedInfographic: false,
        producedSlide: false,
        producedExport: false,
        nextTry: ""
      });
    };

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Buku Refleksi Peserta</h2>
          <p className="text-lg text-slate-600">Catatkan kemajuan dan refleksi anda selepas menyertai bengkel fizikal ini sebagai bahan rujukan peribadi.</p>
        </div>

        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
          <h3 className="text-xl font-bold text-pkd-blue font-display flex items-center gap-2">
            📓 Catatan Refleksi Saya
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-[17px] font-bold text-slate-700 mb-1">
                1. Hari ini saya telah belajar mengenai:
              </label>
              <textarea
                value={reflection.learnedToday}
                onChange={(e) => setReflection({ ...reflection, learnedToday: e.target.value })}
                placeholder="Tuliskan pengalaman atau perkara baru yang anda ketahui hari ini..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-pkd-blue text-md"
              />
            </div>

            <div>
              <label className="block text-[17px] font-bold text-slate-700 mb-1">
                2. Kemahiran yang paling berguna untuk kerja harian saya di PKD ialah:
              </label>
              <textarea
                value={reflection.mostUsefulSkill}
                onChange={(e) => setReflection({ ...reflection, mostUsefulSkill: e.target.value })}
                placeholder="cth: Teknik ringkaskan mesej guna AI, atau cari kata kunci visual di Canva..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-pkd-blue text-md"
              />
            </div>

            {/* Checkboxes of achievements */}
            <div className="space-y-2">
              <label className="block text-[17px] font-bold text-slate-700">
                3. Bahan yang telah saya BERJAYA hasilkan hari ini (Sila tanda):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setReflection({ ...reflection, producedPoster: !reflection.producedPoster })}
                  className={`flex items-center text-left gap-3 p-3 rounded-xl border ${
                    reflection.producedPoster ? "bg-blue-50 border-pkd-blue font-semibold text-pkd-blue" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {reflection.producedPoster ? <CheckSquare className="w-5 h-5 text-pkd-blue" /> : <Square className="w-5 h-5 text-slate-400" />}
                  <span>Deraf Poster Kesihatan</span>
                </button>

                <button
                  onClick={() => setReflection({ ...reflection, producedInfographic: !reflection.producedInfographic })}
                  className={`flex items-center text-left gap-3 p-3 rounded-xl border ${
                    reflection.producedInfographic ? "bg-blue-50 border-pkd-blue font-semibold text-pkd-blue" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {reflection.producedInfographic ? <CheckSquare className="w-5 h-5 text-pkd-blue" /> : <Square className="w-5 h-5 text-slate-400" />}
                  <span>Deraf Infografik Ringkas</span>
                </button>

                <button
                  onClick={() => setReflection({ ...reflection, producedSlide: !reflection.producedSlide })}
                  className={`flex items-center text-left gap-3 p-3 rounded-xl border ${
                    reflection.producedSlide ? "bg-blue-50 border-pkd-blue font-semibold text-pkd-blue" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {reflection.producedSlide ? <CheckSquare className="w-5 h-5 text-pkd-blue" /> : <Square className="w-5 h-5 text-slate-400" />}
                  <span>Deraf Slide Mini Taklimat</span>
                </button>

                <button
                  onClick={() => setReflection({ ...reflection, producedExport: !reflection.producedExport })}
                  className={`flex items-center text-left gap-3 p-3 rounded-xl border ${
                    reflection.producedExport ? "bg-blue-50 border-pkd-blue font-semibold text-pkd-blue" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {reflection.producedExport ? <CheckSquare className="w-5 h-5 text-pkd-blue" /> : <Square className="w-5 h-5 text-slate-400" />}
                  <span>Fail Berjaya Eksport (PNG/JPG/PDF)</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[17px] font-bold text-slate-700 mb-1">
                4. Perkara baru yang saya ingin cuba lakukan selepas bengkel selesai:
              </label>
              <textarea
                value={reflection.nextTry}
                onChange={(e) => setReflection({ ...reflection, nextTry: e.target.value })}
                placeholder="cth: Cuba buat kempen kesihatan fizikal di luar guna Canva..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-pkd-blue text-md"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleResetReflection}
              className="text-xs text-red-500 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Padamkan Semua Catatan Refleksi
            </button>
            <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> Catatan disimpan secara automatik!
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(20)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Ringkasan Utama <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 20: Ringkasan Ingatan Peserta (takeaway)
  if (activePage === 20) {
    const keyTakeaways = [
      { num: "1", title: "Satu bahan, satu mesej utama", desc: "Poster yang berkesan tidak memuatkan semua data perubatan secara serentak. Fokus kepada satu mesej penting supaya cepat dibaca." },
      { num: "2", title: "AI membantu menulis, manusia memutus fakta", desc: "Gunakan kecekapan AI untuk menghasilkan tona ayat yang tersusun, tetapi semak kebenaran fakta klinikal sendiri secara manual." },
      { num: "3", title: "Poster jangan terlalu padat", desc: "Pastikan sekurang-kurangnya 30% daripada kanvas poster anda dikosongkan tanpa sebarang teks atau gambar bagi keselesaan membaca." },
      { num: "4", title: "Infografik perlu tersusun logik", desc: "Sama ada dalam format senarai semak atau langkah berturutan, reka letak mestilah mudah diekori secara semula jadi." },
      { num: "5", title: "Slide mini mestilah ringkas dibentang", desc: "Slaid taklimat 3 helaian draf hanyalah sebagai pemandu lisan pembentang, elakkan meletakkan perenggan nota bertulis penuh." }
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto py-4">
        <div className="text-center space-y-3">
          <span className="p-3 bg-emerald-100 text-emerald-700 rounded-full inline-flex">
            <Award className="w-10 h-10" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pkd-dark font-display">Taniah! Ringkasan Ingatan Peserta</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Gunakan 5 prinsip utama di bawah sebagai sandaran perisai ingatan anda sepanjang pengeluaran bahan visual kesihatan awam.
          </p>
        </div>

        {/* Takeaway cards list */}
        <div className="space-y-4">
          {keyTakeaways.map((takeaway) => (
            <div key={takeaway.num} className="bg-white border-2 border-slate-100 rounded-2xl p-5 shadow-xs flex gap-4 items-start hover:border-pkd-blue transition-all">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-pkd-blue flex items-center justify-center font-bold text-lg font-display shrink-0">
                {takeaway.num}
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800 font-display">
                  {takeaway.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {takeaway.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="bg-gradient-to-r from-pkd-blue to-pkd-teal text-white rounded-2xl p-8 text-center space-y-4 shadow-sm">
          <p className="text-amber-300 font-bold tracking-widest text-sm uppercase">PESANAN AKHIR BENGKEL</p>
          <p className="text-xl font-bold font-display leading-relaxed">
            “Gunakan AI untuk mempercepat idea, gunakan Canva untuk mencantikkan penyampaian, dan gunakan pertimbangan profesional anda untuk memastikan mesej kesihatan tepat, jelas, dan selamat untuk dikongsi.”
          </p>
          <div className="flex justify-center items-center gap-1.5 text-blue-200 text-xs font-mono pt-2">
            <Smile className="w-4 h-4 text-amber-300" /> Kami doakan kejayaan promosi kesihatan anda!
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setActivePage(1)}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-lg flex items-center gap-2 shadow-xs transition-all"
          >
            Mula Kembali Dari Awal (Hero)
          </button>
        </div>
      </div>
    );
  }

  return null;
};
