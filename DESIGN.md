# Panduan Desain (DESIGN.md) - LUMEN

> Pedoman identitas visual dan antarmuka untuk Website Kampanye Hemat Listrik LUMEN di SMK Wikrama Bogor.

---

## 1. Identitas & Kepribadian Brand
* **Nama**: LUMEN (Luminous Energy Management)
* **Institusi**: SMK Wikrama Bogor (Sekolah Adiwiyata Mandiri)
* **Karakter**: Edukatif, Tanggung Jawab Lingkungan (Adiwiyata), Disiplin Industri (PPLG), Bersahaja.
* **Moto Selaras**: *"Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah"*
* **Anti-Slop Guard**: Bebas dari palet ungu/cyberpunk, bebas dari gradient berlebihan, bebas dari penumpukan SVG dekoratif, dan bebas dari emoji.

---

## 2. Dial Setting (Antislop Part 3)
* **ENERGY**: 2 (Balanced: ramah, persuasif, mengajak dengan energi positif)
* **RHYTHM**: 2 (Consistent: struktur alur jelas: Beranda, Latar Belakang Wikrama, Aksi 3M, Teaser Data, Identitas Pembuat)
* **MOTION**: 1 (Minimal & Functional: transisi status saklar dan progress bar halus tanpa animasi mengambang yang berlebihan)

---

## 3. Palet Warna (Color Tokens)

```css
:root {
  /* Hijau Hutan Solid (Ciri Khas Lingkungan & Adiwiyata) */
  --color-primary: #1e4635;
  --color-primary-hover: #153527;
  --color-primary-subtle: #eef4f0;

  /* Amber Listrik (Simbol Energi & Kehangatan) */
  --color-accent: #c25e00;
  --color-accent-subtle: #fff7ed;

  /* Latar Belakang & Permukaan */
  --color-bg: #ffffff;
  --color-bg-alt: #f7f9f7;
  --color-surface: #ffffff;

  /* Garis Batas */
  --color-border: #dce3dd;
  --color-border-hover: #b4c4b6;

  /* Teks (Kontras Tinggi WCAG AA 5:1+) */
  --color-text: #192620;
  --color-text-muted: #495e52;
  --color-text-subtle: #677b70;
}
```

---

## 4. Tipografi

* **Font Utama**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
* **Prinsip**: Tipografi terstruktur, ukuran proporsional, tanpa gaya AI template yang berlebihan.

---

## 5. Komponen Interaktif Fase 1
1. **Simulator Ruang Belajar Wikrama**: Beralih antara beban listrik penuh vs mode hemat 3M.
2. **Pelacak Komitmen Siswa**: Menghitung partisipasi aksi nyata siswa dalam mematikan, mencabut, dan mengatur peralatan listrik.
3. **Navigasi Responsif**: Ramah keyboard (Escape untuk menutup di layar HP).
