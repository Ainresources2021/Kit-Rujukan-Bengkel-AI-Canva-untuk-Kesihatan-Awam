export interface TopicCategory {
  id: string;
  name: string;
  description: string;
  topics: string[];
}

export const topicCategories: TopicCategory[] = [
  {
    id: "keselamatan-makanan",
    name: "Keselamatan Makanan",
    description: "Fokus kepada kebersihan premis, kebersihan pengendali makanan, dan pencegahan keracunan makanan di kantin, bazar, atau program komuniti.",
    topics: [
      "Cegah keracunan makanan",
      "Pilih premis makanan bersih",
      "Pengendalian makanan selamat",
      "Kebersihan diri pengendali makanan",
      "Simpan makanan pada suhu selamat",
      "Elakkan makanan terdedah",
      "Periksa sebelum makan",
      "Keselamatan makanan di bazar",
      "Kebersihan kantin",
      "Makanan selamat semasa program komuniti"
    ]
  },
  {
    id: "kesihatan-awam",
    name: "Kesihatan Awam & Pencegahan Penyakit",
    description: "Fokus kepada kawalan penyakit berjangkit seperti demam denggi, kebersihan persekitaran, kesihatan semasa bencana, dan gotong-royong.",
    topics: [
      "Cegah denggi",
      "10 minit cari dan musnah tempat pembiakan Aedes",
      "Kebersihan persekitaran",
      "Kesihatan awam semasa banjir",
      "Cegah penyakit bawaan air dan makanan",
      "Kebersihan tandas awam",
      "Gotong-royong komuniti",
      "Komuniti bersih, hidup sihat",
      "Penjagaan kesihatan selepas banjir",
      "Kawalan tempat pembiakan nyamuk"
    ]
  }
];
