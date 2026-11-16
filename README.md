# Alfan&Shafa.co — Personal Finance

Aplikasi pencatatan keuangan pribadi berbasis HTML, CSS, dan JavaScript murni.

## Cara menjalankan
1. Ekstrak file ZIP ke folder komputer.
2. Buka `index.html` menggunakan Chrome, Edge, atau Firefox.
3. Tidak perlu instalasi, server, atau koneksi internet untuk menjalankan fitur inti.

## Struktur folder
- `index.html` — struktur halaman aplikasi.
- `style.css` — desain responsif dan komponen antarmuka.
- `app.js` — logika transaksi, anggaran, tabungan, laporan, dan penyimpanan.
- `README.md` — panduan penggunaan.
- `photo-bg.jpg` — foto latar aplikasi dengan efek blur ringan.

## Fitur
- Dashboard saldo, pemasukan, pengeluaran, arus kas, dan grafik 6 bulan.
- Transaksi pemasukan, pengeluaran, dan alokasi tabungan.
- Filter pencarian transaksi.
- Anggaran bulanan per kategori.
- Pos tabungan dan dana darurat.
- Target keuangan dan progres tabungan.
- Pencatatan utang dan piutang.
- Daftar tagihan dan transaksi rutin.
- Laporan per kategori dan ringkasan arus kas.
- Export transaksi ke CSV.
- Backup dan restore seluruh data dalam JSON.
- Data contoh untuk mencoba aplikasi.

## Penyimpanan dan keamanan
Data disimpan di `localStorage` browser pada perangkat yang digunakan. Data tidak otomatis tersinkronisasi ke perangkat lain dan tidak dikirim ke server. Jangan menghapus data browser sebelum membuat backup JSON. Untuk penggunaan lintas perangkat, multi-user, atau sinkronisasi cloud dibutuhkan backend dan autentikasi tambahan.

## Catatan perhitungan
- Saldo utama dihitung dari total transaksi pemasukan dikurangi pengeluaran.
- Transaksi jenis `saving` dicatat sebagai alokasi dan tidak mengurangi saldo utama. Ini membantu menghindari penghitungan ganda jika tabungan merupakan pemindahan antarpos. Jika ingin saldo rekening yang akurat, versi berikutnya perlu mendukung akun dan transfer antar-akun.
- Penambahan dana melalui menu tabungan/dana darurat juga dicatat sebagai alokasi tabungan.
- Tagihan rutin adalah daftar pengingat/catatan; aplikasi tidak mengeksekusi pembayaran otomatis.


## Tampilan
Nama aplikasi telah diubah menjadi **Alfan&Shafa.co**. Foto yang diberikan digunakan sebagai latar belakang dengan blur ringan dan lapisan terang agar informasi keuangan tetap mudah dibaca.

## Animasi dan interaksi
Versi ini menambahkan transisi saat berpindah halaman, animasi masuk kartu dan formulir, efek hover pada kartu/tombol, animasi grafik dan progress bar, serta transisi modal dan notifikasi. Blur foto latar dikurangi menjadi 0,8 px dan lapisan putih dibuat lebih transparan agar foto lebih terlihat.
