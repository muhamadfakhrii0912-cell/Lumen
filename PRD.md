# Product Requirement Document (PRD)
## LUMEN: Website Kampanye Hemat Energi Listrik SMK Wikrama Bogor

---

### 1. Ringkasan Proyek
* **Nama Proyek**: LUMEN (Luminous Energy Management)
* **Tagline**: "Satu Kebiasaan, Sejuta Penghematan."
* **Institusi**: SMK Wikrama Bogor (Sekolah Adiwiyata Mandiri)
* **Pengembang**: Kelompok 7, Kelas PPLG XI-4 (Pengembangan Perangkat Lunak dan Gim)
* **Tipe Produk**: Landing Page Kampanye Edukasi & Konservasi Energi Listrik Sekolah
* **Teknologi**: HTML5 Semantik, CSS3 Murni (Vanilla CSS dengan CSS Variables), Vanilla JavaScript (Clean Code & Modular)
* **Konteks Kurikulum**: Proyek Lintas Mata Pelajaran (PPLG, PABP, KIK, Pendidikan Pancasila, Matematika, Bahasa Indonesia)

---

### 2. Latar Belakang & Budaya SMK Wikrama Bogor
SMK Wikrama Bogor memiliki reputasi nasional sebagai **Sekolah Adiwiyata Mandiri** dan pelopor *Green School*. Dengan moto *"Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah"*, kepedulian terhadap lingkungan bukan hanya teori, melainkan karakter dan kebiasaan harian seluruh warga sekolah.

Sebagai sekolah berbasis teknologi dengan ribuan siswa dan puluhan laboratorium komputer aktif (termasuk lab jurusan PPLG), kebutuhan energi listrik harian sangat tinggi. Pemborosan listrik dapat terjadi tanpa disadari:
1. Lampu ruang kelas dan kipas angin menyala saat ruangan kosong pada jam istirahat, salat berjamaah, atau olahraga.
2. Puluhan komputer di laboratorium tetap dalam kondisi menyala (standby) setelah sesi praktikum selesai.
3. Pendingin ruangan (AC) diatur pada suhu terlalu dingin saat cuaca sejuk atau jendela terbuka.

LUMEN dirancang untuk memperkuat implementasi **Budaya 3M Listrik Wikrama (Mematikan, Mencabut, Mengatur)** dan standar **5R K3LH Laboratorium** melalui media kampanye digital yang persuasif dan interaktif.

---

### 3. Tujuan Kampanye & Target Audiens

#### Tujuan Utama:
1. **Memperkuat Karakter Adiwiyata**: Menjaga konsistensi budaya hemat energi di lingkungan kampus SMK Wikrama Bogor.
2. **Edukasi Aksi 3M Energi**: Membiasakan siswa dan guru mematikan saklar, mencabut steker yang tidak terpakai, dan mengatur suhu pendingin ruangan secara ideal.
3. **Standarisasi Disiplin Lab PPLG**: Mengingatkan siswa untuk shutdown komputer dan memutus arus stop kontak terminal setelah jam praktikum koding selesai.
4. **Menyiapkan Fondasi Riset Data (Fase 2)**: Menghubungkan data hasil observasi dan angket warga sekolah ke dalam visualisasi Chart.js.

#### Target Audiens:
* **Primer**: Siswa-siswi seluruh jurusan di SMK Wikrama Bogor (PPLG, TJKT, DKV, PMN, HTL, KLN, BDP).
* **Sekunder**: Guru pengajar, laboran, instruktur kejuruan, dan staf sarana prasarana sekolah.

---

### 4. Integrasi Lintas Mata Pelajaran

* **PABP**: Menanamkan nilai amanah dalam menjaga kelestarian alam dan menghindari sifat mubazir (pemborosan energi).
* **Matematika (MTK)**: Perhitungan estimasi konsumsi daya (Watt ke kWh) serta pengolahan data angket kebiasaan listrik di Fase 2.
* **Bahasa Indonesia**: Penulisan teks narasi kampanye yang persuasif, santun, lugas, dan bebas dari bahasa artifisial.
* **Pendidikan Pancasila**: Tanggung jawab bersama, gotong royong, dan kedisiplinan sosial sebagai warga sekolah.
* **KIK**: Analisis efisiensi biaya operasional sekolah melalui pemanfaatan energi secara bijak.
* **PPLG**: Desain antarmuka bersih (UI clean code), struktur HTML semantik, CSS responsif, dan logika JavaScript interaktif tanpa beban ketergantungan library yang tidak perlu.

---

### 5. Roadmap Pengembangan Proyek

| Fase | Ruang Lingkup & Fokus | Status |
|---|---|---|
| **Fase 1** | Pondasi Web, Landing Page Beranda & Cerita Kampanye Wikrama, Layout Konsisten (Navbar, Header, Footer), Simulator Pemakaian Listrik Kelas, Checklist Komitmen 3M, Desain Responsif & Bebas AI Slop. | **Selesai** |
| **Fase 2 (Tahap Saat Ini)** | Integrasi Visualisasi Data Angket Observasi Kampus (636 responden siswa kelas XI lintas 7 jurusan) menggunakan Chart.js via CDN & fallback lokal, 3 grafik analisis terukur, ringkasan KPI, dan kalimat penjelas inti. | **Selesai / Aktif** |
| **Fase 3** | Kalkulator Estimasi Penghematan Listrik Sekolah & Pengayaan Fitur Lanjutan. | Mendatang |

---

### 6. Prinsip Desain & Standar Antislop

1. **Warna Bernuansa Alam & Green School**:
   * Warna Utama: Hijau Hutan (*Forest Deep Green*) `#1E4635` (kesan Adiwiyata dan konservasi).
   * Warna Aksen: Kuning Amber `#C25E00` (energi listrik dan kehangatan).
   * Latar Belakang: Putih Bersih `#FFFFFF` dan Abu Kehijauan Lembut `#F7F9F7`.
   * Bebas dari warna ungu, neon, dan gradient norak yang tidak memiliki fungsi struktural.
2. **Sederhana & Bersih (Simple UI)**:
   * Menghilangkan ikon SVG dekoratif yang menumpuk.
   * Menghilangkan emoji pada seluruh teks antarmuka.
   * Tidak menggunakan karakter em dash pada teks publikasi sesuai aturan R-02.
   * Layout berorientasi pada keterbacaan (*readability*) dan kenyamanan akses mobile.
