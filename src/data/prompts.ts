import { PromptItem } from "../types";

export const promptsData: PromptItem[] = [
  {
    id: 1,
    title: "Prompt 1: Jana Idea Poster",
    description: "Gunakan prompt ini untuk menjana 10 idea poster yang kreatif untuk topik hebahan kesihatan awam.",
    promptText: "Bertindak sebagai pegawai promosi kesihatan di Pejabat Kesihatan Daerah. Cadangkan 10 idea poster untuk topik umum [MASUKKAN BIDANG]. Sasaran audiens ialah [MASUKKAN AUDIENS]. Gunakan Bahasa Malaysia rasmi, mudah faham dan sesuai untuk hebahan kesihatan awam. Jangan masukkan statistik atau fakta teknikal yang tidak diberikan. Susun jawapan dalam jadual dengan lajur: Bilangan, Tajuk Poster, Mesej Utama, Seruan Tindakan.",
    placeholders: {
      "MASUKKAN BIDANG": "Kawalan Denggi / Keselamatan Makanan di Sekolah",
      "MASUKKAN AUDIENS": "Penduduk Kampung / Ibu bapa & Pelajar"
    }
  },
  {
    id: 2,
    title: "Prompt 2: Bina Teks Poster Lengkap",
    description: "Hasilkan deraf teks poster lengkap dari segi tajuk, ayat pembuka, isi utama, dan seruan tindakan.",
    promptText: "Bertindak sebagai pegawai promosi kesihatan di PKD. Hasilkan teks poster tentang [TOPIK]. Sasaran audiens ialah [AUDIENS]. Gunakan Bahasa Malaysia rasmi, mudah faham dan tidak terlalu teknikal. Formatkan jawapan seperti berikut: Tajuk poster, Ayat pembuka, Isi utama 1, Isi utama 2, Isi utama 3, Seruan tindakan. Hadkan kepada maksimum 80 patah perkataan. Jangan tambah statistik, nama akta, nombor peraturan atau fakta teknikal yang tidak saya berikan. Jika terdapat fakta yang perlu disahkan, tandakan sebagai [PERLU SEMAKAN].",
    placeholders: {
      "TOPIK": "Pencegahan Keracunan Makanan di Kantin",
      "AUDIENS": "Murid-murid sekolah rendah dan pengusaha kantin"
    }
  },
  {
    id: 3,
    title: "Prompt 3: Pendekkan Teks Poster",
    description: "Pendekkan teks rujukan yang panjang supaya muat dalam reka bentuk poster tanpa sesak.",
    promptText: "Pendekkan teks berikut supaya sesuai dimasukkan dalam poster. Gunakan Bahasa Malaysia rasmi, ayat pendek dan mudah difahami. Kekalkan maksud asal. Jangan tambah fakta baharu. Jadikan kepada satu tajuk, satu ayat pembuka, tiga poin isi utama dan satu seruan tindakan. Teks asal: [MASUKKAN TEKS]",
    placeholders: {
      "MASUKKAN TEKS": "Pencegahan keracunan makanan memerlukan pengusaha kantin sentuh makanan menggunakan penyepit. Pastikan juga semua makanan sentiasa ditutup rapat demi mengelakkan lalat hinggap dan bertelur. Cuci tangan sebelum masak."
    }
  },
  {
    id: 4,
    title: "Prompt 4: Jadikan Bahasa Lebih Rasmi",
    description: "Ubah suai gaya penyampaian bahasa supaya kedengaran profesional dan rasmi sesuai untuk standard KKM/PKD.",
    promptText: "Semak dan baiki teks berikut supaya lebih rasmi, kemas dan sesuai untuk hebahan PKD/KKM. Kekalkan maksud asal. Jangan tambah fakta baharu, statistik, nama akta atau arahan teknikal yang tidak diberikan. Gunakan ayat pendek dan mudah difahami oleh orang awam. Teks: [MASUKKAN TEKS]",
    placeholders: {
      "MASUKKAN TEKS": "Korang kalau nak makan dekat luar tu, tolonglah pilih kedai yang bersih ya. Tengok sikit pinggan mangkuk dia bersih ke tak. Jangan main tibai je."
    }
  },
  {
    id: 5,
    title: "Prompt 5: Mudahkan Bahasa untuk Orang Awam",
    description: "Sesuai untuk menukar istilah perubatan/teknikal kesihatan yang rumit kepada perkataan yang mesra masyarakat.",
    promptText: "Tukar teks berikut kepada bahasa yang lebih mudah difahami oleh orang awam. Gunakan Bahasa Malaysia rasmi, ayat pendek dan nada mesra komuniti. Kekalkan maksud asal. Jangan tambah fakta baharu. Jika ada istilah teknikal yang perlu dikekalkan, berikan penerangan ringkas. Teks: [MASUKKAN TEKS]",
    placeholders: {
      "MASUKKAN TEKS": "Vektor Aedes aegypti membiak secara optimum pada takungan air yang mempunyai parameter bersih dan tenang. Proses oviposisi ini boleh meningkatkan insiden demam denggi."
    }
  },
  {
    id: 6,
    title: "Prompt 6: Semak Risiko Salah Faham",
    description: "Kenal pasti elemen teks yang mungkin mengelirukan, menakutkan, atau disalah faham oleh masyarakat.",
    promptText: "Semak teks berikut dari sudut kefahaman orang awam. Kenal pasti jika ada ayat yang boleh mengelirukan, terlalu umum, terlalu menakutkan, terlalu panjang atau berpotensi disalah faham. Cadangkan versi yang lebih jelas dan ringkas. Jangan tambah fakta baharu. Teks: [MASUKKAN TEKS]",
    placeholders: {
      "MASUKKAN TEKS": "Semua penduduk wajib fogging setiap hari di rumah masing-masing bagi menggelakkan jangkitan maut virus denggi yang meragut nyawa sekelip mata."
    }
  },
  {
    id: 7,
    title: "Prompt 7: Tukar Poster kepada Infografik 5 Langkah",
    description: "Susun draf kandungan poster sedia ada ke dalam format infografik langkah-demi-langkah.",
    promptText: "Bertindak sebagai pegawai promosi kesihatan. Tukar kandungan berikut kepada infografik ringkas berbentuk 5 langkah. Gunakan Bahasa Malaysia rasmi, ayat pendek dan sesuai untuk orang awam. Setiap langkah mesti ada tajuk pendek dan penerangan maksimum 10 patah perkataan. Jangan tambah fakta baharu yang tidak terdapat dalam teks asal. Kandungan: [MASUKKAN TEKS POSTER]",
    placeholders: {
      "MASUKKAN TEKS POSTER": "Mula-mula, periksa fizikal makanan. Kedua, hidu bau sama ada basi atau tidak. Ketiga, rasa sedikit di hujung lidah jika ragu-ragu. Keempat, tengok keadaan premis sama ada lalat banyak. Kelima, jika ragu-ragu, terus buang makanan tersebut dan laporkan kepada PKD."
    }
  },
  {
    id: 8,
    title: "Prompt 8: Tukar Poster kepada Checklist",
    description: "Tukar teks karangan yang panjang menjadi senarai checklist ringkas (maksimum 6 item) untuk dibaca sepintas lalu.",
    promptText: "Tukar kandungan berikut kepada checklist ringkas untuk infografik. Senaraikan maksimum 6 item sahaja. Gunakan ayat pendek, Bahasa Malaysia rasmi dan mudah difahami oleh orang awam. Jangan tambah fakta baharu yang tidak diberikan. Kandungan: [MASUKKAN TEKS]",
    placeholders: {
      "MASUKKAN TEKS": "Bila nak bersihkan takungan air di rumah, sila pastikan pasu bunga dilap dengan bersih, pam tandas yang jarang diguna dibersihkan, air dalam dulang peti sejuk dibuang, tangki air ditutup rapat, dan tin kosong dikitar semula."
    }
  },
  {
    id: 9,
    title: "Prompt 9: Tukar kepada Do’s and Don’ts",
    description: "Susun idea ke dalam bentuk 'Amalkan' (Do's) dan 'Elakkan' (Don'ts) untuk impak visual yang tinggi.",
    promptText: "Bina isi infografik berbentuk “Amalkan” dan “Elakkan” berdasarkan topik [TOPIK]. Sasaran audiens ialah [AUDIENS]. Gunakan Bahasa Malaysia rasmi, ayat pendek dan mudah faham. Senaraikan maksimum 3 item untuk “Amalkan” dan 3 item untuk “Elakkan”. Jangan tambah statistik atau fakta teknikal yang tidak diberikan. Tandakan [PERLU SEMAKAN] jika ada cadangan yang memerlukan pengesahan.",
    placeholders: {
      "TOPIK": "Kebersihan Tandas Awam PKD",
      "AUDIENS": "Pengunjung harian Pejabat Kesihatan Daerah"
    }
  },
  {
    id: 10,
    title: "Prompt 10: Tukar Poster kepada 3 Slide Mini",
    description: "Tukar satu draf kandungan poster tunggal menjadi rangka persembahan slaid 3 halaman.",
    promptText: "Bertindak sebagai pegawai promosi kesihatan. Tukar kandungan poster berikut kepada rangka 3 slide mini untuk taklimat ringkas. Gunakan Bahasa Malaysia rasmi, ayat pendek dan mudah difahami. Jangan tambah fakta baharu. Setiap slide mesti ada tajuk dan maksimum 3 poin. Kandungan poster: [MASUKKAN TEKS POSTER]",
    placeholders: {
      "MASUKKAN TEKS POSTER": "Kempen Cegah Denggi. Masalah utama nyamuk membiak di takungan air dalam pasu dan bekas plastik terpakai. Kesannya ialah demam denggi membahayakan ahli keluarga. Tindakan: luangkan 10 minit cari dan musnah pembiakan aedes setiap hujung minggu. Hubungi Unit Vektor jika perlu bantuan."
    }
  },
  {
    id: 11,
    title: "Prompt 11: Cadangkan Ikon atau Visual Canva",
    description: "Dapatkan cadangan kata kunci carian elemen dwi-bahasa untuk ikon/grafik yang sesuai di Canva.",
    promptText: "Berdasarkan topik [TOPIK], cadangkan ikon atau visual yang sesuai dicari dalam Canva. Berikan kata kunci carian dalam Bahasa Melayu dan Bahasa Inggeris. Jangan cadangkan visual yang terlalu sensitif atau menakutkan. Susun dalam jadual dengan lajur: Maksud Visual, Kata Kunci Melayu, Kata Kunci Inggeris.",
    placeholders: {
      "TOPIK": "Simpan Makanan Pada Suhu Selamat"
    }
  },
  {
    id: 12,
    title: "Prompt 12: Saya Nak Edit di @Canva",
    description: "Dapatkan rancangan lengkap susun atur, kombinasi warna, ikon, dan draf reka bentuk sebelum membuka Canva.",
    promptText: "Saya nak edit di @Canva. Tolong susun kandungan berikut menjadi arahan reka bentuk poster kesihatan yang jelas. Cadangkan susun atur, tajuk utama, 3 isi pendek, ikon yang sesuai, warna yang sesuai dan gaya visual yang rasmi tetapi mudah difahami. Jangan tambah fakta baharu. Kandungan: [MASUKKAN KANDUNGAN]",
    placeholders: {
      "MASUKKAN KANDUNGAN": "Tajuk: Cuci Tangan Selamatkan Nyawa. Langkah: 1. Guna sabun, 2. Gosok celah jari, 3. Bilas air bersih. Slogan: Bersih itu sihat."
    }
  },
  {
    id: 13,
    title: "Prompt 13: Baiki Poster / Infografik Berdasarkan Screenshot",
    description: "Gunakan prompt ini jika anda memuat naik gambar poster anda ke AI untuk meminta maklum balas visual.",
    promptText: "Ini poster/infografik saya. Tolong semak dari segi kejelasan mesej, susunan teks, saiz tulisan, kontras warna, kesesuaian ikon/gambar, ruang kosong dan kesesuaian untuk hebahan rasmi kesihatan awam. Jangan tambah fakta baharu. Jangan ubah maksud mesej. Berikan 5 cadangan pembaikan yang praktikal untuk saya baiki dalam Canva.",
    placeholders: {}
  },
  {
    id: 14,
    title: "Prompt 14: Prompt Gaya Visual Berdasarkan Inspirasi",
    description: "Gunakan gaya visual daripada contoh kegemaran anda untuk digunakan dalam penghasilan poster baru.",
    promptText: "Saya ada contoh poster rujukan. Saya tidak mahu meniru kandungannya, tetapi saya suka gaya visualnya. Tolong bantu hasilkan prompt reka bentuk untuk poster kesihatan awam berdasarkan ciri gaya berikut: [MASUKKAN CIRI GAYA]. Topik poster saya ialah [TOPIK]. Sasaran audiens ialah [AUDIENS]. Jangan tambah statistik, nama akta atau fakta teknikal. Berikan prompt lengkap yang boleh saya gunakan untuk bina poster di Canva.",
    placeholders: {
      "MASUKKAN CIRI GAYA": "Minimalis, latar belakang putih bersih, tulisan sans-serif tebal berwarna hijau gelap, dan ada garisan pemisah nipis berwarna emas.",
      "TOPIK": "Pilih Premis Makanan Bersih",
      "AUDIENS": "Keluarga dan komuniti tempatan"
    }
  },
  {
    id: 15,
    title: "Prompt 15: Jika Tidak Boleh Upload Imej",
    description: "Huraikan elemen poster anda dalam bentuk teks untuk disemak oleh AI jika anda tidak dapat memuat naik gambar.",
    promptText: "Saya sedang membuat poster/infografik tentang [TOPIK]. Susunan saya ialah: Tajuk [TAJUK], Isi utama [ISI], Seruan tindakan [SERUAN], Warna utama [WARNA], Visual/ikon [IKON]. Tolong semak dari segi kejelasan mesej, susunan teks, reka bentuk dan kesesuaian rasmi. Jangan tambah fakta baharu. Berikan 5 cadangan pembaikan yang praktikal.",
    placeholders: {
      "TOPIK": "Cegah denggi dengan cari dan musnah",
      "TAJUK": "10 Minit Cari & Musnah Aedes",
      "ISI": "1. Periksa pasu, 2. Bersihkan kolam, 3. Buang sampah tersumbat",
      "SERUAN": "Jom luangkan 10 minit hujung minggu ini!",
      "WARNA": "Kuning terang dan Hitam kontras",
      "IKON": "Ikon nyamuk kena pangkah, ikon jam randek"
    }
  }
];
