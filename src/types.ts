export type PageId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export interface PageDefinition {
  id: PageId;
  title: string;
  subtitle?: string;
  category: "Utama" | "AI & Prompts" | "Canva & Reka Bentuk" | "Semakan & Eksport" | "Refleksi";
  iconName: string;
}

export interface PromptItem {
  id: number;
  title: string;
  description: string;
  promptText: string;
  placeholders?: { [key: string]: string };
}

export interface TopicSelectionState {
  chosenTopic: string;
  unit: string;
  targetAudience: string;
}

export interface ChecklistState {
  poster: {
    tajukJelas: boolean;
    mesejMudahFaham: boolean;
    isiSikit: boolean;
    adaSeruan: boolean;
    visualSesuai: boolean;
    logoTidakHerot: boolean;
    bahasaRasmi: boolean;
    ejaanBetul: boolean;
    faktaDisemak: boolean;
    kemas: boolean;
    tiadaPro: boolean;
    eksportBerjaya: boolean;
  };
  infografik: {
    tajukJelas: boolean;
    formatSesuai: boolean;
    isiTersusun: boolean;
    ayatPendek: boolean;
    ikonKonsisten: boolean;
    susunanSesuai: boolean;
    bahasaRasmi: boolean;
    faktaDisemak: boolean;
    rekaBentukSelesa: boolean;
    eksportBerjaya: boolean;
  };
  slide: {
    tigaSlideSahaja: boolean;
    slide1Tajuk: boolean;
    slide2Risiko: boolean;
    slide3Seruan: boolean;
    tidakTerlaluPenuh: boolean;
    tulisanBesar: boolean;
    warnaKonsisten: boolean;
    logoTidakHerot: boolean;
    faktaDisemak: boolean;
    sesuaiTaklimat: boolean;
  };
}

export interface ReflectionState {
  learnedToday: string;
  mostUsefulSkill: string;
  producedPoster: boolean;
  producedInfographic: boolean;
  producedSlide: boolean;
  producedExport: boolean;
  nextTry: string;
}
