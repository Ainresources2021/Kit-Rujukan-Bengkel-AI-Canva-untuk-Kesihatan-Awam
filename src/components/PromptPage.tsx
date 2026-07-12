import React, { useState } from "react";
import { promptsData } from "../data/prompts";
import { PageId } from "../types";
import { 
  ClipboardCopy, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Sparkles, 
  ArrowRight,
  Info
} from "lucide-react";

interface PromptPageProps {
  activePage: PageId;
  setActivePage: (id: PageId) => void;
  onCopy: (text: string, title: string) => void;
}

export const PromptPage: React.FC<PromptPageProps> = ({
  activePage,
  setActivePage,
  onCopy
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(1); // default open first prompt
  
  // To support interactive variables, we store state for each placeholder in each prompt
  // format: { [promptId]: { [placeholderKey]: value } }
  const [customValues, setCustomValues] = useState<{ [key: number]: { [key: string]: string } }>({
    1: { "MASUKKAN BIDANG": "", "MASUKKAN AUDIENS": "" },
    2: { "TOPIK": "", "AUDIENS": "" },
    3: { "MASUKKAN TEKS": "" },
    4: { "MASUKKAN TEKS": "" },
    5: { "MASUKKAN TEKS": "" },
    6: { "MASUKKAN TEKS": "" },
    7: { "MASUKKAN TEKS POSTER": "" },
    8: { "MASUKKAN TEKS": "" },
    9: { "TOPIK": "", "AUDIENS": "" },
    10: { "MASUKKAN TEKS POSTER": "" },
    11: { "TOPIK": "" },
    12: { "MASUKKAN KANDUNGAN": "" },
    13: {},
    14: { "MASUKKAN CIRI GAYA": "", "TOPIK": "", "AUDIENS": "" },
    15: { "TOPIK": "", "TAJUK": "", "ISI": "", "SERUAN": "", "WARNA": "", "IKON": "" }
  });

  if (activePage !== 8) return null;

  const handleInputChange = (promptId: number, key: string, value: string) => {
    setCustomValues(prev => ({
      ...prev,
      [promptId]: {
        ...prev[promptId],
        [key]: value
      }
    }));
  };

  const getCustomizedPromptText = (promptId: number, originalText: string, placeholders?: { [key: string]: string }) => {
    if (!placeholders) return originalText;
    let text = originalText;
    
    Object.keys(placeholders).forEach(placeholder => {
      const userVal = customValues[promptId]?.[placeholder];
      const defaultVal = placeholders[placeholder];
      const finalVal = userVal && userVal.trim() !== "" ? userVal : defaultVal;
      
      // Escape special regex characters in placeholders, though standard ones like [TOPIK] are safe
      const safePlaceholder = placeholder.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Replace "[PLACEHOLDER]" or simply "PLACEHOLDER"
      const regexBracket = new RegExp(`\\[${safePlaceholder}\\]`, "g");
      const regexNoBracket = new RegExp(safePlaceholder, "g");
      
      if (text.match(regexBracket)) {
        text = text.replace(regexBracket, finalVal);
      } else {
        text = text.replace(regexNoBracket, finalVal);
      }
    });
    
    return text;
  };

  const filteredPrompts = promptsData.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
            <Sparkles className="w-6 h-6" />
          </span>
          <h2 className="text-3xl font-bold text-pkd-dark font-display">15 Prompt Siap Guna</h2>
        </div>
        <p className="text-lg text-slate-600">
          Klik tajuk prompt untuk membuka, isi tempat kosong jika ada, dan klik butang kuning untuk salin teks prompt dengan cepat.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari kata kunci prompt (cth: denggi, ringkas, poster, checklist)..."
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-pkd-blue focus:border-pkd-blue shadow-xs"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold"
          >
            Padam
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((p) => {
            const isExpanded = expandedId === p.id;
            const finalizedPrompt = getCustomizedPromptText(p.id, p.promptText, p.placeholders);
            
            return (
              <div 
                key={p.id} 
                className={`bg-white rounded-2xl border-2 transition-all ${
                  isExpanded ? "border-pkd-blue shadow-md" : "border-slate-100 hover:border-slate-300"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : p.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-pkd-dark font-display leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-sm">{p.description}</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:bg-slate-100 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Body Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-6 space-y-6 bg-slate-50/50 rounded-b-2xl">
                    
                    {/* Customizable Placeholders Form */}
                    {p.placeholders && Object.keys(p.placeholders).length > 0 && (
                      <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-4 shadow-2xs">
                        <h4 className="text-[17px] font-bold text-slate-700 flex items-center gap-1.5 font-display">
                          <Info className="w-4 h-4 text-pkd-teal" /> Isi Borang untuk Ubah Prompt:
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {Object.keys(p.placeholders).map((phKey) => {
                            const userValue = customValues[p.id]?.[phKey] || "";
                            const defaultHint = p.placeholders?.[phKey] || "";
                            
                            return (
                              <div key={phKey} className="space-y-1">
                                <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider">
                                  {phKey}
                                </label>
                                <input
                                  type="text"
                                  value={userValue}
                                  onChange={(e) => handleInputChange(p.id, phKey, e.target.value)}
                                  placeholder={`Contoh laluan: ${defaultHint}`}
                                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-pkd-blue focus:border-pkd-blue text-md"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Code Display Area */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 font-mono">SALINAN PROMPT:</span>
                        <span className="text-xs text-pkd-teal font-medium">Boleh diedit di atas</span>
                      </div>
                      <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-[16px] leading-relaxed border-2 border-slate-800 relative group max-h-[300px] overflow-y-auto">
                        {finalizedPrompt}
                      </div>
                    </div>

                    {/* Copy Button */}
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => onCopy(finalizedPrompt, p.title)}
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-md flex items-center gap-2 shadow-xs transition-all"
                      >
                        <ClipboardCopy className="w-5 h-5" /> Salin Teks Prompt
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200 space-y-2">
            <p className="text-lg text-slate-500 font-medium">Tiada hasil carian untuk "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="text-pkd-blue hover:underline font-bold"
            >
              Set Semula Carian
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={() => setActivePage(2)} className="px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-lg">
          Kembali ke Menu
        </button>
        <button onClick={() => setActivePage(9)} className="px-6 py-3 bg-pkd-blue hover:bg-pkd-dark text-white font-semibold rounded-lg text-lg flex items-center gap-2">
          Halaman Seterusnya: Teknik Ping-Pong AI <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
