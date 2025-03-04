﻿# Frontend for SerenityHub

> SerenityHub - Skripsi Project Qois Abdul Qudus

SerenityHub adalah aplikasi yang berfungsi sebagai platform pengaduan masyarakat Aplikasi pad Dishub Kota Serang. Aplikasi ini memfasilitasi komunikasi antara masyarakat dan pihak dishub, dengan tujuan menciptakan lingkungan yang lebih baik untuk semua orang.

Dengan aplikasi ini, pengguna dapat dengan mudah melaporkan masalah atau kejadian yang masyarakat alami atau saksikan di jalan yang berkaitan dengan dishub, yang kemudian dapat ditindaklanjuti oleh petugas dishub.


## Instalasi

1. Clone repositori ini.
2. Buat file .env pada root folder
3. Tambahkan VITE_HOST_SERENITY = <alamat server>, misal http://localhost:5500
4. Jalankan perintah `npm install` untuk menginstal dependensi. 

## Cara Menggunakan

1. Jalankan proyek dengan perintah `npm run dev`.
2. Buka browser dan akses `http://localhost:5173`.

## Cara Build

1. Sesuaikan config cache dengan servermu pada vite.config.js
2. Build proyek dengan perintah `npm run build`.
3. Hasil build berada pada folder dist

## Aktor:

1. Tamu
2. Pelapor
3. Petugas
4. Admin
## Use Case:

1. **Tamu:**
   - Tamu dapat melihat kategori apa saja yang tersedia.
   - Tamu dapat melihat sebagian laporan pada halaman utama.

2. **Pelapor:**
   - Masyarakat dapat membuat laporan baru.
   - Masyarakat wajib masuk sebelum membuat laporan.
   - Masyarakat dapat mendaftar jika tidak memiliki akun.
   - Masyarakat dapat melihat laporan yang telah ia buat.
   - Masyarakat dapat mencari laporan berdasarkan judul.
   - Masyarakat dapat memfilter laporan berdasarkan statusnya.

3. **Petugas:**
   - Petugas dapat melihat laporan yang sudah dikirimkan ke unit kerja terkait.
   - Petugas dapat melaporkan hasil kerjanya.
   - Petugas dapat melihat laporan yang telah ia kirimkan.

4. **Admin:**
   - Admin dapat melihat jumlah laporan per status.
   - Admin dapat melihat lokasi laporan pada map.
   - Admin dapat meneruskan laporan ke Petugas.
   - Admin dapat menghapus laporan.
   - Admin dapat melihat kategori pada halaman dasbor.
   - Admin dapat menambahkan kategori laporan.
   - Admin dapat menghapus kategori laporan.
   - Admin dapat melihat unit kerja pada halaman dasbor.
   - Admin dapat menambahkan unit kerja.
   - Admin dapat menghapus unit kerja.
   - Admin dapat melihat daftar petugas pada halaman dasbor.
   - Admin dapat menambahkan petugas.
   - Admin dapat menghapus petugas.

## Proses Pengembangan:

1. Menentukan spesifikasi sistem aduan.
2. Desain UI/UX sistem.
3. Membuat Frontend & Backend.
4. Deploy.

## Teknologi yang digunakan :

1. React + Vite
2. Tailwind CSS
3. Leaflet
## Backend SerenityHub
[Backend SerenityHub](https://github.com/qoisabd/backend-serenityhub)