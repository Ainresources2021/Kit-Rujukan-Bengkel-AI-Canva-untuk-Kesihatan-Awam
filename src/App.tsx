import React, { useState, useEffect } from "react";
import { PageId, TopicSelectionState, ChecklistState, ReflectionState } from "./types";
import { PagesPart1 } from "./components/PagesPart1";
import { PromptPage } from "./components/PromptPage";
import { PagesPart3 } from "./components/PagesPart3";
import { PagesPart4 } from "./components/PagesPart4";
import { 
  Sparkles, 
  Activity, 
  BookOpen, 
  Heart, 
  Wand2, 
  FileText, 
  RefreshCw, 
  Layers, 
  AlertTriangle, 
  BarChart2, 
  Lightbulb, 
  Presentation, 
  CheckSquare, 
  Eye, 
  MessageSquare, 
  Award, 
  ListTodo, 
  FileDown, 
  HelpCircle, 
  Smile, 
  ArrowLeft, 
  ArrowRight, 
  Search,
  Grid,
  HeartPulse,
  ChevronRight,
  Bookmark
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Default configuration states
const defaultTopicSelection: TopicSelectionState = {
  chosenTopic: "",
  unit: "",
  targetAudience: ""
};

const defaultChecklist: ChecklistState = {
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

const defaultReflection: ReflectionState = {
  learnedToday: "",
  mostUsefulSkill: "",
  producedPoster: false,
  producedInfographic: false,
  producedSlide: false,
  producedExport: false,
  nextTry: ""
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(1);
  const [searchMenuQuery, setSearchMenuQuery] = useState("");
  
  // Toast notification state
  const [toast, setToast] = useState<{ visible: boolean; text: string } | null>(null);

  // Load from local storage with lazy initializers
  const [topicSelection, setTopicSelection] = useState<TopicSelectionState>(() => {
    const saved = localStorage.getItem("pkd_topic_selection");
    return saved ? JSON.parse(saved) : defaultTopicSelection;
  });

  const [checklist, setChecklist] = useState<ChecklistState>(() => {
    const saved = localStorage.getItem("pkd_checklist");
    return saved ? JSON.parse(saved) : defaultChecklist;
  });

  const [reflection, setReflection] = useState<ReflectionState>(() => {
    const saved = localStorage.getItem("pkd_reflection");
    return saved ? JSON.parse(saved) : defaultReflection;
  });

  // Save changes to localStorage on updates
  useEffect(() => {
    localStorage.setItem("pkd_topic_selection", JSON.stringify(topicSelection));
  }, [topicSelection]);

  useEffect(() => {
    localStorage.setItem("pkd_checklist", JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem("pkd_reflection", JSON.stringify(reflection));
  }, [reflection]);

  // Utility to handle copying prompts/filenames and showing visual feedback
  const handleCopy = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    setToast({
      visible: true,
      text: `✓ Berjaya disalin ke Clipboard: "${title}"`
    });
  };

  // Auto clear toast after 3 seconds
  useEffect(() => {
    if (toast?.visible) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Menu Definition (20 items mapped exactly to pages)
  const menuItems = [
    { id: 1, title: "1. Mula Di Sini", page: 1 as PageId, cat: "Utama", desc: "Hero, pengenalan bengkel & hasil akhir.", icon: Sparkles },
    { id: 2, title: "2. Aliran Kerja Bengkel", page: 3 as PageId, cat: "Utama", desc: "5 langkah utama daripada prompt ke eksport.", icon: Activity },
    { id: 3, title: "3. Pilih Topik", page: 4 as PageId, cat: "Utama", desc: "Senarai topik KKM & planner interaktif.", icon: BookOpen },
    { id: 4, title: "4. Bina Mesej Kesihatan", page: 5 as PageId, cat: "AI & Prompts", desc: "Formula ISU + RISIKO + TINDAKAN + SERUAN.", icon: Heart },
    { id: 5, title: "5. Guna AI untuk Jana Teks", page: 6 as PageId, cat: "AI & Prompts", desc: "Panduan etika & amaran keselamatan data.", icon: Wand2 },
    { id: 6, title: "6. Prompt Siap Guna", page: 8 as PageId, cat: "AI & Prompts", desc: "15 template prompt boleh laras & salin.", icon: FileText },
    { id: 7, title: "7. Teknik Ping-Pong AI ↔ Canva", page: 9 as PageId, cat: "AI & Prompts", desc: "Proses maklum balas visual berulang.", icon: RefreshCw },
    { id: 8, title: "8. Guna Canva untuk Poster", page: 10 as PageId, cat: "Canva & Reka Bentuk", desc: "6 struktur poster utama kesihatan.", icon: Layers },
    { id: 9, title: "9. Tips Buat Poster", page: 10 as PageId, cat: "Canva & Reka Bentuk", desc: "Panduan elak sesak & guna kontras.", icon: AlertTriangle },
    { id: 10, title: "10. Guna Canva untuk Infografik", page: 11 as PageId, cat: "Canva & Reka Bentuk", desc: "5 pilihan format infografik terbaik.", icon: BarChart2 },
    { id: 11, title: "11. Tips Buat Infografik", page: 11 as PageId, cat: "Canva & Reka Bentuk", desc: "Cara guna ikon & susun secara menegak.", icon: Lightbulb },
    { id: 12, title: "12. Guna Canva untuk Slide Mini", page: 12 as PageId, cat: "Canva & Reka Bentuk", desc: "Format 3 slaid taklimat berkesan.", icon: Presentation },
    { id: 13, title: "13. Tips Buat Slide", page: 12 as PageId, cat: "Canva & Reka Bentuk", desc: "Prinsip slaid sebagai pembantu lisan.", icon: CheckSquare },
    { id: 14, title: "14. Elemen Style & Inspirasi Visual", page: 13 as PageId, cat: "Canva & Reka Bentuk", desc: "Ketahui cara ambil inspirasi beretika.", icon: Eye },
    { id: 15, title: "15. AI Review: Baiki Poster", page: 14 as PageId, cat: "Semakan & Eksport", desc: "Prompt hantar lakaran untuk dinilai.", icon: MessageSquare },
    { id: 16, title: "16. Tips Akaun Canva Percuma", page: 15 as PageId, cat: "Canva & Reka Bentuk", desc: "Cara elak & ganti elemen Canva Pro.", icon: Award },
    { id: 17, title: "17. Checklist Sebelum Eksport", page: 16 as PageId, cat: "Semakan & Eksport", desc: "Senarai semak interaktif boleh tanda.", icon: ListTodo },
    { id: 18, title: "18. Simpan dan Eksport Fail", page: 17 as PageId, cat: "Semakan & Eksport", desc: "Format PNG/PDF & generator nama fail.", icon: FileDown },
    { id: 19, title: "19. Masalah Biasa & Cara Selesai", page: 18 as PageId, cat: "Semakan & Eksport", desc: "9 FAQ penyelesaian isu teknikal bengkel.", icon: HelpCircle },
    { id: 20, title: "20. Refleksi Peserta", page: 19 as PageId, cat: "Refleksi", desc: "Buku catatan latihan bengkel fizikal.", icon: Smile }
  ];

  // Helper arrays to handle prev/next page flow
  // Notice that PageId 2 is the MENU, Page 7 is bypassed/leads to Page 8. We skip 2 in linear progression.
  const pageOrder: PageId[] = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleNext = () => {
    const currentIndex = pageOrder.indexOf(activePage);
    if (currentIndex < pageOrder.length - 1) {
      setActivePage(pageOrder[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = pageOrder.indexOf(activePage);
    if (currentIndex > 0) {
      setActivePage(pageOrder[currentIndex - 1]);
    }
  };

  // Get current page progress percent
  const getReadProgress = () => {
    const currentIndex = pageOrder.indexOf(activePage);
    if (currentIndex === -1) return 50; // Menu page
    return Math.round(((currentIndex + 1) / pageOrder.length) * 100);
  };

  // Search filtered menu items
  const filteredMenuItems = menuItems.filter(item => 
    item.title.toLowerCase().includes(searchMenuQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchMenuQuery.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchMenuQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-pkd-dark text-white border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => setActivePage(1)}
            className="flex items-center gap-2 text-left hover:opacity-90"
          >
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 font-bold shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-sm md:text-base lg:text-lg font-display tracking-tight leading-none uppercase">
                Kit Rujukan Bengkel AI & Canva
              </h1>
              <span className="text-[10px] md:text-[11px] text-blue-200 tracking-wider block font-mono font-bold uppercase mt-0.5">
                untuk Kesihatan Awam
              </span>
            </div>
          </button>

          {/* Center Title or Current Page Tag */}
          <div className="hidden lg:flex items-center gap-1.5 text-sm bg-white/10 px-3.5 py-1.5 rounded-full font-medium text-slate-100">
            <Bookmark className="w-4 h-4 text-amber-400" />
            {activePage === 2 ? "Pilih dari Menu Utama" : `Sila Rujuk: Halaman ${activePage}`}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePage(2)}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-all ${
                activePage === 2 
                  ? "bg-amber-500 text-slate-950 shadow-sm" 
                  : "bg-white/15 hover:bg-white/25 text-white"
              }`}
            >
              <Grid className="w-4 h-4" /> Menu Kit
            </button>
            
            {activePage !== 1 && activePage !== 2 && (
              <button
                onClick={() => setActivePage(2)}
                className="hidden sm:inline-flex px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all"
              >
                Kembali ke Menu
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar under header */}
        <div className="w-full h-1 bg-slate-800/80">
          <div 
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${activePage === 2 ? 100 : getReadProgress()}%` }}
          />
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          
          {/* PAGE 2: CENTRAL MENU GRID */}
          {activePage === 2 && (
            <motion.div
              key="menu-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              {/* Menu Title and Help instructions */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-4xl font-black text-pkd-dark font-display leading-tight">
                    Menu Kit Bengkel
                  </h2>
                  <p className="text-lg text-slate-600">
                    Klik mana-mana kad di bawah untuk terus melompat ke halaman panduan khusus rujukan anda.
                  </p>
                </div>
                
                {/* Search Menu Input */}
                <div className="relative w-full md:w-80 shrink-0">
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchMenuQuery}
                    onChange={(e) => setSearchMenuQuery(e.target.value)}
                    placeholder="Cari menu (cth: tips, poster)..."
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-pkd-blue focus:border-pkd-blue"
                  />
                  {searchMenuQuery && (
                    <button 
                      onClick={() => setSearchMenuQuery("")}
                      className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold"
                    >
                      Padam
                    </button>
                  )}
                </div>
              </div>

              {/* Grid Layout of 20 Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredMenuItems.map((item) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSearchMenuQuery("");
                        setActivePage(item.page);
                      }}
                      className="text-left bg-white p-5 rounded-2xl border-2 border-slate-100 hover:border-pkd-blue hover:shadow-md transition-all flex flex-col justify-between h-56 space-y-3 relative group"
                    >
                      <div className="space-y-2">
                        {/* Header icon + Category tag */}
                        <div className="flex items-center justify-between">
                          <span className="p-2 bg-blue-50 text-pkd-blue rounded-xl group-hover:bg-pkd-blue group-hover:text-white transition-all shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md">
                            {item.cat}
                          </span>
                        </div>

                        {/* Title and description */}
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-pkd-blue font-display leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Go indicator */}
                      <div className="flex items-center gap-1 text-pkd-teal font-bold text-xs font-display pt-2 border-t border-slate-50 w-full justify-between mt-auto">
                        <span>LIHAT PANDUAN</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Direct access button for Page 20 Takeaway */}
              <div className="bg-amber-500 text-slate-900 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold font-display">🎓 Bersedia untuk membuat Rumusan Akhir?</h3>
                  <p className="text-sm font-medium opacity-90">Ketahui 5 prinsip emas utama pembinaan poster untuk dibawa pulang selepas bengkel selesai.</p>
                </div>
                <button
                  onClick={() => setActivePage(20)}
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white rounded-xl font-bold text-md flex items-center gap-1.5 transition-all shadow-sm shrink-0"
                >
                  Buka Ringkasan Utama <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* RENDER ACTIVE PAGE VIEWS */}
          {activePage !== 2 && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PagesPart1 
                activePage={activePage} 
                setActivePage={setActivePage} 
                topicSelection={topicSelection}
                setTopicSelection={setTopicSelection}
                onCopy={handleCopy}
              />
              <PromptPage 
                activePage={activePage} 
                setActivePage={setActivePage} 
                onCopy={handleCopy}
              />
              <PagesPart3 
                activePage={activePage} 
                setActivePage={setActivePage} 
                onCopy={handleCopy}
              />
              <PagesPart4 
                activePage={activePage} 
                setActivePage={setActivePage} 
                checklist={checklist}
                setChecklist={setChecklist}
                reflection={reflection}
                setReflection={setReflection}
                onCopy={handleCopy}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Next / Prev Bottom Navigation Bar (Visible on content pages) */}
      {activePage !== 2 && (
        <div className="sticky bottom-0 bg-white border-t border-slate-200 py-4 shadow-lg z-30">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={pageOrder.indexOf(activePage) === 0}
              className="px-5 py-3 border border-slate-300 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> KEMBALI
            </button>

            {activePage !== 1 && (
              <button
                onClick={() => setActivePage(2)}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all"
              >
                KEMBALI KE MENU BENGKEL
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={pageOrder.indexOf(activePage) === pageOrder.length - 1}
              className="px-5 py-3 bg-pkd-teal hover:bg-teal-800 text-white rounded-xl font-bold text-sm disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-all"
            >
              SETERUSNYA <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 4. Global Toast Clipboard Copy Feedback */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-800 text-amber-400 font-medium px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2 z-50 text-center animate-bounce">
          <CheckSquare className="w-5 h-5 text-emerald-500" />
          <span>{toast.text}</span>
        </div>
      )}

      {/* 5. Required Footer (Small footer mandatory on all pages) */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-sm font-mono mt-auto shrink-0">
        <p className="text-slate-300">
          dibina oleh Ts. Siti Nurul Ain Saipullizan
        </p>
      </footer>
    </div>
  );
}
