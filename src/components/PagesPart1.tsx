import React from "react";
import { PageId, TopicSelectionState } from "../types";
import { topicCategories } from "../data/topics";
import { 
  Wand2, 
  BookOpen, 
  CheckSquare, 
  ArrowRight, 
  ShieldAlert, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  ClipboardCopy, 
  Check, 
  AlertTriangle 
} from "lucide-react";
import { motion } from "motion/react";

interface PagesPart1Props {
  activePage: PageId;
  setActivePage: (id: PageId) => void;
  topicSelection: TopicSelectionState;
  setTopicSelection: React.Dispatch<React.SetStateAction<TopicSelectionState>>;
  onCopy: (text: string, title: string) => void;
}

export const PagesPart1: React.FC<PagesPart1Props> = ({
  activePage,
  setActivePage,
  topicSelection,
  setTopicSelection,
  onCopy
}) => {
  // Page 1: Hero / Mula Di Sini
  if (activePage === 1) {
    return (
      <div className="space-y-10 py-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 py-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-pkd-dark font-display leading-tight uppercase">
            Kit Rujukan Bengkel AI & Canva
          </h1>
          <p className="text-xl md:text-2xl text-pkd-teal font-bold font-display uppercase tracking-wide">
            untuk Kesihatan Awam
          </p>
        </motion.div>

        {/* AI + Canva + Semak formula card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-gradient-to-r from-pkd-blue to-pkd-teal text-white rounded-2xl p-6 md:p-8 text-center shadow-md space-y-4"
        >
          <p className="text-lg md:text-xl font-medium tracking-wide uppercase text-blue-200">Prinsip Bengkel Kita</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-center text-xl md:text-2xl font-bold font-display">
            <div className="bg-white/10 px-4 py-3 rounded-xl">🧠 AI Bantu Fikir</div>
            <div className="text-blue-300 md:block hidden">➔</div>
            <div className="bg-white/10 px-4 py-3 rounded-xl">🎨 Canva Bantu Reka</div>
            <div className="text-blue-300 md:block hidden">➔</div>
            <div className="bg-white/10 px-4 py-3 rounded-xl">🔍 Peserta Tetap Semak Fakta</div>
          </div>
        </motion.div>

        {/* 3 Output Cards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 font-display">3 Hasil Akhir Utama Bengkel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs hover:border-pkd-blue transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-pkd-blue mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-pkd-dark font-display">1. Poster Kesihatan</h3>
              <p className="text-slate-600 mt-2 text-[17px] leading-relaxed">
                Poster satu muka surat dengan mesej yang sangat besar, berimpak, dan terus kepada sasaran.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs hover:border-pkd-teal transition-all">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-pkd-teal mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-pkd-teal font-display">2. Infografik Ringkas</h3>
              <p className="text-slate-600 mt-2 text-[17px] leading-relaxed">
                Penyampaian visual berbentuk langkah, checklist mudah, atau tips yang tersusun kemas.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs hover:border-pkd-accent transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-amber-700 font-display">3. Slide Mini</h3>
              <p className="text-slate-600 mt-2 text-[17px] leading-relaxed">
                Slaid taklimat ringkas 3 halaman untuk penerangan pantas semasa program atau gotong-royong.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={() => setActivePage(2)}
            className="w-full sm:w-auto px-8 py-4 bg-pkd-blue hover:bg-pkd-dark text-white rounded-xl font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Mula Guna Kit <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActivePage(8)}
            className="w-full sm:w-auto px-8 py-4 bg-pkd-teal hover:bg-teal-800 text-white rounded-xl font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Lihat Prompt Siap Guna
          </button>
          <button
            onClick={() => setActivePage(16)}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-xl font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Checklist Eksport
          </button>
        </div>
      </div>
    );
  }

  // Page 3: Aliran Kerja Bengkel
  if (activePage === 3) {
    const workflowSteps = [
      { step: "1", title: "PROMPT", desc: "Beri arahan yang selamat dan tepat kepada AI (Gemini/ChatGPT)." },
      { step: "2", title: "TEKS", desc: "Pilih, ringkaskan, permudah kata dan semak draf teks daripada AI." },
      { step: "3", title: "CANVA", desc: "Salin teks ringkas dan reka visual menggunakan Canva (pilih template percuma)." },
      { step: "4", title: "SEMAK", desc: "Semak semula fakta kesihatan, ejaan, saiz tulisan, dan pastikan logo kemas." },
      { step: "5", title: "EKSPORT", desc: "Simpan hasil kerja anda sebagai fail PNG (digital) atau PDF (cetakan)." }
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Aliran Kerja Bengkel</h2>
          <p className="text-lg text-slate-600">Turutan langkah pantas untuk menghasilkan poster yang berkualiti tinggi.</p>
        </div>

        {/* Visual Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 relative">
          {workflowSteps.map((ws, i) => (
            <div key={ws.step} className="bg-white border-2 border-slate-100 rounded-xl p-5 shadow-xs relative flex flex-col justify-between h-full">
              <div>
                <span className="w-8 h-8 rounded-full bg-pkd-blue text-white flex items-center justify-center text-md font-bold mb-3 font-display">
                  {ws.step}
                </span>
                <h3 className="text-xl font-bold text-pkd-dark font-display">{ws.title}</h3>
                <p className="text-slate-600 text-[16px] mt-2 leading-relaxed">{ws.desc}</p>
              </div>
              {i < 4 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-0.5 text-pkd-teal shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Kotak Ingatan */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mt-6 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xl font-display">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            KOTAK INGATAN PENTING
          </div>
          <p className="text-amber-900 text-lg leading-relaxed">
            “Jangan terus percaya AI secara bulat-bulat. AI boleh salah atau mereka-reka maklumat. Sebagai kakitangan PKD, <strong>anda adalah pakar kesihatan awam</strong> yang bertanggungjawab menyemak fakta sebelum poster dicetak atau dikongsi.”
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(4)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Pilih Topik <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 4: Pilih Topik
  if (activePage === 4) {
    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Pilih Topik Poster Anda</h2>
          <p className="text-lg text-slate-600">Sila pilih satu topik kesihatan penting di bawah atau isi tajuk anda sendiri dalam borang interaktif perancangan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topicCategories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border-2 border-slate-100 p-6 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-pkd-blue font-display border-b border-slate-100 pb-2">
                Kategori: {cat.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>
              
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {cat.topics.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTopicSelection({ ...topicSelection, chosenTopic: t })}
                    className={`w-full text-left p-3 rounded-xl transition-all text-sm border flex items-center justify-between ${
                      topicSelection.chosenTopic === t 
                        ? "bg-blue-50 border-pkd-blue font-semibold text-pkd-blue" 
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span>{idx + 1}. {t}</span>
                    {topicSelection.chosenTopic === t && <Check className="w-4 h-4 text-pkd-blue" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Form */}
        <div className="bg-pkd-light rounded-2xl p-6 border border-blue-100 space-y-6">
          <h3 className="text-xl font-bold text-pkd-dark font-display">📝 Borang Perancangan Poster Saya</h3>
          <p className="text-slate-600 text-sm">Borang ini disimpan automatik. Maklumat di bawah akan membantu anda apabila membina prompt draf nanti.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-[17px] font-bold text-slate-700 mb-1">Topik Pilihan Saya:</label>
              <input
                type="text"
                value={topicSelection.chosenTopic}
                onChange={(e) => setTopicSelection({ ...topicSelection, chosenTopic: e.target.value })}
                placeholder="cth: Pencegahan Pembiakan Nyamuk Aedes di Rumah"
                className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Anda boleh klik senarai contoh di atas untuk isi automatik, atau tulis tajuk khusus anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[17px] font-bold text-slate-700 mb-1">Unit / Bahagian Saya:</label>
                <input
                  type="text"
                  value={topicSelection.unit}
                  onChange={(e) => setTopicSelection({ ...topicSelection, unit: e.target.value })}
                  placeholder="cth: Unit Promosi Kesihatan / Unit Vektor"
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-lg"
                />
              </div>

              <div>
                <label className="block text-[17px] font-bold text-slate-700 mb-1">Sasaran Audiens Poster:</label>
                <input
                  type="text"
                  value={topicSelection.targetAudience}
                  onChange={(e) => setTopicSelection({ ...topicSelection, targetAudience: e.target.value })}
                  placeholder="cth: Penduduk Setempat / Suri Rumah"
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-pkd-blue text-lg"
                />
              </div>
            </div>
          </div>

          {topicSelection.chosenTopic && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Perancangan direkod! Sedia digunakan untuk panduan formula mesej di halaman seterusnya.</span>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(5)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Formula Mesej <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 5: Formula Mesej Kesihatan
  if (activePage === 5) {
    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Formula Mesej Kesihatan</h2>
          <p className="text-lg text-slate-600">Reka teks poster berimpak tinggi dengan struktur ringkas yang mudah diingati oleh orang awam.</p>
        </div>

        {/* Formula Display */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 text-center space-y-4">
          <p className="text-amber-400 font-bold uppercase tracking-widest text-md">Formula 4 Elemen Utama</p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-xl md:text-3xl font-black font-display text-white">
            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl border border-red-500/30">ISU</span>
            <span>+</span>
            <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-xl border border-amber-500/30">RISIKO</span>
            <span>+</span>
            <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl border border-emerald-500/30">TINDAKAN</span>
            <span>+</span>
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl border border-blue-500/30">SERUAN</span>
          </div>
        </div>

        {/* Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-1">
            <div className="flex items-center gap-2 text-red-600 font-bold text-lg font-display">
              <span className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center text-xs">1</span>
              ISU
            </div>
            <p className="text-slate-600 text-sm">Apakah masalah atau penyakit yang ingin diulas? (cth: Makanan terdedah kepada lalat, air takungan).</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-1">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-lg font-display">
              <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-600 flex items-center justify-center text-xs">2</span>
              RISIKO
            </div>
            <p className="text-slate-600 text-sm">Apakah akibat buruk kepada pesakit atau orang ramai jika dibiarkan? (cth: Keracunan makanan, demam denggi).</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg font-display">
              <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">3</span>
              TINDAKAN
            </div>
            <p className="text-slate-600 text-sm">Langkah praktikal mudah yang pembaca boleh buat sekarang untuk cegah. (cth: Cari & musnah, tutup makanan).</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-1">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-lg font-display">
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs">4</span>
              SERUAN
            </div>
            <p className="text-slate-600 text-sm">Slogan, ayat ajakan, atau tag yang pendek dan mudah ingat. (cth: Periksa Sebelum Makan, 10 Minit Sahaja).</p>
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800 font-display">Contoh Pemetaan Formula</h3>
          
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-pkd-blue font-display">Contoh 1: Topik Cegah Keracunan Makanan</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <strong className="text-red-700 block">Isu:</strong>
                <span className="text-slate-700">Makanan tercemar atau rosak terbiar terdedah lalat.</span>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="text-amber-700 block">Risiko:</strong>
                <span className="text-slate-700">Menyebabkan keracunan makanan, muntah dan cirit-birit.</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <strong className="text-emerald-700 block">Tindakan:</strong>
                <span className="text-slate-700">Pilih kedai yang bersih, makanan panas & ditutup.</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <strong className="text-blue-700 block">Seruan:</strong>
                <span className="text-slate-700 font-bold">"Periksa Sebelum Makan!"</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-pkd-teal font-display">Contoh 2: Topik Cegah Denggi</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <strong className="text-red-700 block">Isu:</strong>
                <span className="text-slate-700">Nyamuk Aedes membiak di bekas takungan air jernih.</span>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="text-amber-700 block">Risiko:</strong>
                <span className="text-slate-700">Denggi boleh merebak pantas dan membahayakan nyawa.</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <strong className="text-emerald-700 block">Tindakan:</strong>
                <span className="text-slate-700">Cari, cuci, dan musnah bekas tempat pembiakan.</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <strong className="text-blue-700 block">Seruan:</strong>
                <span className="text-slate-700 font-bold">"Luangkan 10 minit seminggu!"</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(6)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Guna AI Selamat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 6: Guna AI Dengan Selamat
  if (activePage === 6) {
    const aiCanHelp = [
      "Jana idea kreatif baru",
      "Cadang tajuk poster berimpak",
      "Susun isi ringkas",
      "Pendekkan karangan panjang",
      "Tukar teks kepada draf infografik",
      "Tukar teks kepada draf slide mini",
      "Semak tata bahasa & ejaan",
      "Cadang gaya & tona warna visual"
    ];

    const mustVerify = [
      "Fakta & kebenaran kesihatan awam",
      "Istilah perubatan rasmi KKM",
      "Data, peratusan, atau statistik tempatan",
      "Tarikh, masa, dan tempat kempen",
      "Arahan atau pekeliling rasmi KKM",
      "Kesesuaian dasar dengan PKD / Jabatan"
    ];

    const neverInput = [
      "Maklumat peribadi atau status pesakit",
      "Nombor Kad Pengenalan (IC) individu",
      "Nombor telefon atau alamat peribadi tanpa izin",
      "Data dalaman jabatan yang sulit",
      "Maklumat kertas siasatan kes aktif",
      "Dokumen rasmi jabatan berkategori SULIT",
      "Gambar pesakit atau individu tanpa kebenaran"
    ];

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Guna AI Dengan Selamat</h2>
          <p className="text-lg text-slate-600">Pelajari batasan, perkara yang dibolehkan, dan perkara yang dilarang keras semasa menggunakan AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Can Help Card */}
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-emerald-700 font-display flex items-center gap-2 border-b border-slate-100 pb-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" /> AI Boleh Membantu Anda:
            </h3>
            <ul className="space-y-2.5 text-slate-700 text-[17px]">
              {aiCanHelp.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification Warning Card */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-amber-800 font-display flex items-center gap-2 border-b border-amber-200 pb-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" /> Anda Mesti Semak Semula:
            </h3>
            <p className="text-amber-950 font-medium text-sm leading-relaxed">
              AI bukan sumber muktamad. Peserta bengkel mesti menentusahkan perkara berikut sendiri:
            </p>
            <ul className="space-y-2.5 text-amber-900 text-[17px]">
              {mustVerify.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DONT INPUT TO AI CARD (RED ALERT) */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-red-800 font-display flex items-center gap-2 border-b border-red-200 pb-2">
            <ShieldAlert className="w-6 h-6 text-red-600" /> 🚫 AMARAN KERAS: Jangan Sekali-kali Masukkan ke AI
          </h3>
          <p className="text-red-950 font-semibold text-[17px]">
            Demi mematuhi Akta Perlindungan Data Peribadi dan Etika Penjawat Awam, jangan masukkan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-red-900 text-[17px]">
            {neverInput.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-red-100">
                <span className="text-red-600 font-bold">✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(7)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: Formula Prompt <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Page 7: Formula Prompt Selamat
  if (activePage === 7) {
    const formulaBlocks = [
      { tag: "PERANAN", desc: "Siapa anda?", eg: "Bertindak sebagai pegawai promosi kesihatan di PKD." },
      { tag: "TUGASAN", desc: "Apa mahu dibuat?", eg: "Hasilkan teks draf poster ringkas." },
      { tag: "AUDIENS", desc: "Siapa sasaran?", eg: "Orang awam / penduduk setempat." },
      { tag: "TOPIK", desc: "Mesej utama?", eg: "Pencegahan keracunan makanan." },
      { tag: "NADA", desc: "Gaya penulisan?", eg: "Bahasa Malaysia rasmi, mudah difahami." },
      { tag: "FORMAT", desc: "Susunan output?", eg: "Berikan 1 Tajuk utama, 3 Isi, dan 1 Seruan." },
      { tag: "HAD", desc: "Sempadan panjang?", eg: "Hadkan kepada maksimum 80 patah perkataan." },
      { tag: "ARAHAN FAKTA", desc: "Sempadan kebenaran?", eg: "Jangan tambah statistik atau fakta luar." }
    ];

    const samplePrompt = "Bertindak sebagai pegawai promosi kesihatan di PKD. Hasilkan teks poster tentang pencegahan keracunan makanan untuk orang awam. Gunakan Bahasa Malaysia rasmi, mudah faham dan tidak terlalu teknikal. Berikan satu tajuk utama, satu ayat pembuka, tiga isi penting dan satu seruan tindakan. Hadkan kepada 80 patah perkataan. Jangan tambah statistik, nama akta, nombor peraturan atau fakta teknikal yang tidak saya berikan. Jika terdapat fakta yang perlu disahkan, tandakan sebagai [PERLU SEMAKAN].";

    return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-pkd-dark font-display">Formula Prompt Selamat</h2>
          <p className="text-lg text-slate-600">Gabungkan 8 komponen ini untuk menghasilkan teks poster kesihatan yang tepat dan terus boleh digunakan di Canva.</p>
        </div>

        {/* Component grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formulaBlocks.map((b, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-100 rounded-xl p-4 shadow-xs space-y-2 hover:border-pkd-blue transition-all">
              <span className="text-xs font-bold text-slate-400 block font-mono">ELEMEN {idx + 1}</span>
              <strong className="text-[17px] font-black text-pkd-blue font-display block">{b.tag}</strong>
              <p className="text-slate-600 text-xs">{b.desc}</p>
              <p className="text-slate-500 text-xs italic bg-slate-50 p-1.5 rounded-md border border-slate-100">“{b.eg}”</p>
            </div>
          ))}
        </div>

        {/* Interactive copy prompt section */}
        <div className="bg-pkd-light border border-blue-100 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-pkd-dark font-display flex items-center gap-2">
              <FileText className="w-6 h-6 text-pkd-blue" /> Draf Contoh Prompt Selamat Lengkap
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-pkd-blue rounded-full text-xs font-bold uppercase tracking-wide">Contoh Standard</span>
          </div>
          <p className="text-slate-600 text-sm">Contoh di bawah sudah sedia diguna. Anda boleh salin dan terus letakkan di ChatGPT, Gemini, atau mana-mana aplikasi AI pilihan anda.</p>

          <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-sm leading-relaxed border-2 border-slate-800 relative group max-h-[250px] overflow-y-auto">
            {samplePrompt}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => onCopy(samplePrompt, "Draf Contoh Prompt Selamat")}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-md flex items-center gap-2 shadow-xs transition-all"
            >
              <ClipboardCopy className="w-5 h-5" /> Salin Contoh Prompt Ini
            </button>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
            Kembali ke Menu
          </button>
          <button onClick={() => setActivePage(8)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
            Halaman Seterusnya: 15 Prompt Siap Guna <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
