## Portal Berita Modern - Evaluasi 2 Pemrograman Web Lanjut

## 1. Laporan ini menganalisis implementasi SEO pada aplikasi portal berita berbasis Next.js,
mencakup penjelasan konsep SEO, implementasi teknis, hasil pengukuran menggunakan Lighthouse, serta rekomendasi untuk peningkatan lebih lanjut

## 2. Penjelasan SEO
Search Engine Optimization (SEO) merupakan serangkaian teknik untuk meningkatkan visibilitas website di mesin pencari. Terdiri dari tiga aspek utama:
•	On-Page SEO: Optimasi konten dan struktur HTML
•	Off-Page SEO: Pembangunan reputasi melalui backlink
•	Technical SEO: Aspek teknis seperti kecepatan dan mobile-friendliness

## 3.Implementasi SEO
Aplikasi ini telah mengimplementasikan:
•	Struktur heading yang jelas (H1, H2, H3)
•	Meta tags dasar melalui Next.js Metadata API
•	URL yang terorganisir (/berita)
•	Filter gambar untuk memastikan kualitas visual
•	Layout responsif dengan skor accessibility sempurna

## 4. Analisis Performa
Sebelum Optimasi:
```bash
•	Performance: 93
•	Accessibility: 100
•	Best Practices: 74
•	SEO: 100

```
Setelah Optimasi: 
```bash
•	Performance: 100 (+7)
•	Accessibility: 100
•	Best Practices: 100 (+26)
•	SEO: 100
```
Matrik Perbandingan
```bash
Metric                  	Sebelum          	Sesudah	       Perubahan
First Contentful Paint	   0.2s	              0.2s	          -
Speed Index	               1.7s	              0.8s	         -0.9s
Largest Contentful Paint	 1.5s	              0.3s	         -1.2s
Total Blocking Time	       10ms              	0ms	           -10ms

```
## 4. Struktur Proyek
```bash
EVALUASI-PWL2/
│
├── .next/
│
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js
│   │
│   ├── berita/
│   │   └── page.js
│   │
│   ├── componen/
│   │   └── newscard.js
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── layout.js
│   ├── layout.tsx
│   ├── page.js
│   └── page.tsx
│
├── lib/
│   └── webVitals.js
│
├── node_modules/
│
├── public/
│   └── favicon.ico
│
├── styling/
│   └── globals.css
│
├── .env.local
└── .gitignore
      

```

## 5. Kesimpulan
 Aplikasi portal berita ini telah memiliki fondasi SEO yang kuat dengan:
•	Skor SEO sempurna (100)
•	Performa loading yang cepat
•	Struktur konten yang terorganisir
Dengan implementasi rekomendasi di atas, potensi peningkatan visibilitas di mesin pencari masih sangat terbuka lebar.



