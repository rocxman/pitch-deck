// Ringkasan aman untuk calon client. Jangan tambahkan langkah exploit, payload, order ID asli, atau PII.

export type FindingSeverity = "High" | "Medium";
export type FindingPriority = "P1" | "P2" | "P3";
export type FindingCategory = "Keamanan" | "SEO" | "UX/Konversi" | "Analytics" | "Performance";

export type Finding = {
  id: string;
  category: FindingCategory;
  title: string;
  severity?: FindingSeverity;
  priority: FindingPriority;
  impact: string;
  clientSafeSummary: string;
  recommendation: string;
};

export const findings: Finding[] = [
  {
    id: "SEC-001",
    category: "Keamanan",
    title: "Halaman pesanan belum cukup membatasi akses antar customer",
    severity: "High",
    priority: "P1",
    impact: "Risiko data pesanan customer terlihat oleh akun lain",
    clientSafeSummary: "Area pesanan perlu validasi kepemilikan yang lebih kuat sebelum website dipakai sebagai channel penjualan utama.",
    recommendation: "Tambahkan pengecekan kepemilikan pesanan di sisi server dan lakukan retest dengan dua akun customer.",
  },
  {
    id: "SEC-002",
    category: "Keamanan",
    title: "API detail pesanan perlu pengamanan akses lebih ketat",
    severity: "High",
    priority: "P1",
    impact: "Risiko data customer dan informasi pembayaran terekspos",
    clientSafeSummary: "API pesanan harus memastikan data hanya bisa dibuka oleh customer pemilik pesanan tersebut.",
    recommendation: "Batasi query API berdasarkan customer yang sedang login dan kurangi data sensitif di response.",
  },
  {
    id: "SEC-003",
    category: "Keamanan",
    title: "Daftar pesanan belum sepenuhnya terisolasi per customer",
    severity: "Medium",
    priority: "P1",
    impact: "Risiko daftar pesanan terlihat lintas akun",
    clientSafeSummary: "Halaman daftar pesanan harus hanya menampilkan data customer yang sedang login.",
    recommendation: "Perbaiki filter data daftar pesanan berdasarkan customer aktif.",
  },
  {
    id: "SEC-004",
    category: "Keamanan",
    title: "API daftar pesanan perlu filter kepemilikan",
    severity: "Medium",
    priority: "P1",
    impact: "Risiko data pesanan terkumpul dari customer lain",
    clientSafeSummary: "Endpoint daftar pesanan perlu aturan akses konsisten untuk semua status pesanan.",
    recommendation: "Terapkan policy otorisasi terpusat untuk semua endpoint pesanan.",
  },
  {
    id: "SEC-005",
    category: "Keamanan",
    title: "Wishlist guest perlu identitas yang lebih aman",
    severity: "Medium",
    priority: "P1",
    impact: "Risiko wishlist terbaca atau berubah oleh sesi lain",
    clientSafeSummary: "Wishlist untuk pengunjung tanpa login tidak boleh bergantung pada identifier yang bisa dikontrol dari browser.",
    recommendation: "Gunakan guest token yang diterbitkan server dan dilindungi dengan mekanisme validasi.",
  },
  {
    id: "SEO-001",
    category: "SEO",
    title: "Canonical URL belum sesuai halaman",
    priority: "P1",
    impact: "Produk dan kategori bisa sulit ranking di Google",
    clientSafeSummary: "Beberapa halaman mengarah ke homepage sebagai canonical, sehingga Google bisa membaca halaman produk/kategori sebagai duplikat.",
    recommendation: "Buat canonical yang mengarah ke URL halaman masing-masing, sesuai bahasa dan domain produksi.",
  },
  {
    id: "SEO-002",
    category: "SEO",
    title: "Robots dan sitemap perlu diperbaiki",
    priority: "P1",
    impact: "Google bisa kesulitan membaca struktur website",
    clientSafeSummary: "Referensi sitemap perlu diarahkan ke file XML yang valid dan path bahasa yang salah perlu dibersihkan.",
    recommendation: "Perbaiki sitemap generation, robots.txt, dan validasi ulang di Search Console.",
  },
  {
    id: "SEO-003",
    category: "SEO",
    title: "Judul halaman produk masih fallback ke homepage",
    priority: "P1",
    impact: "Produk kurang kuat muncul di hasil pencarian",
    clientSafeSummary: "Halaman produk perlu title dan meta description yang spesifik, bukan title homepage.",
    recommendation: "Generate metadata produk/kategori dari data produk dan kategori yang benar.",
  },
  {
    id: "SEO-004",
    category: "SEO",
    title: "Struktur H1 belum terbaca jelas",
    priority: "P1",
    impact: "Topik halaman kurang jelas untuk crawler dan aksesibilitas",
    clientSafeSummary: "Setiap halaman penting perlu satu H1 yang terlihat dan sesuai konteks halaman.",
    recommendation: "Tambahkan satu H1 per template halaman: homepage, kategori, produk, dan halaman policy.",
  },
  {
    id: "SEO-005",
    category: "SEO",
    title: "Sinyal bahasa dan canonical perlu disejajarkan",
    priority: "P2",
    impact: "Versi Bahasa Indonesia dan Inggris bisa membingungkan search engine",
    clientSafeSummary: "Hreflang dan canonical harus saling mendukung agar halaman bahasa yang berbeda bisa diindeks dengan benar.",
    recommendation: "Validasi ulang canonical dan hreflang untuk route /id dan /en.",
  },
  {
    id: "UX-001",
    category: "UX/Konversi",
    title: "CTA homepage perlu dibuat lebih jelas",
    priority: "P2",
    impact: "Pengunjung bisa hanya melihat-lihat tanpa lanjut belanja",
    clientSafeSummary: "Bagian atas homepage perlu ajakan belanja yang jelas dan mudah dipahami.",
    recommendation: "Tambahkan CTA seperti 'Belanja Sekarang', 'Lihat Koleksi', dan trust strip di area awal.",
  },
  {
    id: "UX-002",
    category: "UX/Konversi",
    title: "Filter produk perlu lebih mudah ditemukan",
    priority: "P2",
    impact: "Customer sulit menemukan produk yang sesuai saat katalog bertambah",
    clientSafeSummary: "Halaman daftar produk perlu filter ukuran, warna, harga, stok, dan promo yang mudah dipakai di mobile.",
    recommendation: "Tambahkan filter drawer mobile dengan chip filter aktif dan state yang jelas.",
  },
  {
    id: "UX-003",
    category: "UX/Konversi",
    title: "Trust block perlu dekat tombol beli",
    priority: "P2",
    impact: "Customer bisa ragu sebelum add to cart atau checkout",
    clientSafeSummary: "Informasi pembayaran aman, pengiriman, retur, dan WhatsApp support perlu terlihat sebelum customer lanjut checkout.",
    recommendation: "Tempatkan trust block di area dekat add-to-cart pada halaman produk.",
  },
  {
    id: "UX-004",
    category: "UX/Konversi",
    title: "Pilihan varian perlu dibuat lebih ringan",
    priority: "P2",
    impact: "Customer bisa bingung memilih warna/ukuran",
    clientSafeSummary: "Banyak pilihan warna dan ukuran perlu ditata agar keputusan belanja lebih mudah.",
    recommendation: "Kelompokkan warna, tampilkan varian terpilih dengan jelas, dan beri alasan saat tombol tidak bisa diklik.",
  },
  {
    id: "UX-005",
    category: "UX/Konversi",
    title: "Area review kosong perlu diperbaiki",
    priority: "P3",
    impact: "Social proof terasa lemah",
    clientSafeSummary: "Jika belum ada review, area review tetap perlu memberi rasa percaya kepada calon pembeli.",
    recommendation: "Perbaiki copy empty state dan siapkan alur pengumpulan review setelah pembelian.",
  },
  {
    id: "AN-001",
    category: "Analytics",
    title: "Tracking funnel ecommerce belum terkonfirmasi lengkap",
    priority: "P2",
    impact: "Sulit tahu titik customer berhenti belanja",
    clientSafeSummary: "Website perlu tracking yang jelas dari lihat produk sampai purchase agar keputusan growth berbasis data.",
    recommendation: "Implement event GA4 ecommerce seperti view_item_list, add_to_cart, begin_checkout, dan purchase.",
  },
  {
    id: "AN-002",
    category: "Analytics",
    title: "Aturan purchase tracking perlu dibuat jelas",
    priority: "P2",
    impact: "Revenue report bisa tidak akurat",
    clientSafeSummary: "Event pembelian perlu mencegah double count agar data revenue tidak bias.",
    recommendation: "Gunakan transaction_id stabil dan validasi lewat GA4 DebugView.",
  },
  {
    id: "AN-003",
    category: "Analytics",
    title: "Klik WhatsApp perlu ikut diukur",
    priority: "P3",
    impact: "Assisted sales via WhatsApp tidak terlihat di data",
    clientSafeSummary: "Karena Yoora Sarah punya support WhatsApp, klik WhatsApp perlu masuk laporan funnel.",
    recommendation: "Tambahkan event whatsapp_click dan masukkan ke dashboard bulanan.",
  },
  {
    id: "PERF-001",
    category: "Performance",
    title: "Baseline Core Web Vitals perlu dibuat",
    priority: "P2",
    impact: "Sulit menentukan prioritas optimasi speed",
    clientSafeSummary: "Performa perlu diukur per tipe halaman: homepage, kategori, produk, cart, dan checkout.",
    recommendation: "Ukur LCP, INP, dan CLS, lalu buat target optimasi per route.",
  },
  {
    id: "PERF-002",
    category: "Performance",
    title: "Strategi cache public page perlu ditinjau",
    priority: "P2",
    impact: "Halaman publik bisa terasa lebih lambat dari seharusnya",
    clientSafeSummary: "Halaman publik seperti homepage, kategori, dan produk berpotensi dioptimalkan dengan caching yang aman.",
    recommendation: "Tinjau cache untuk halaman publik, sambil memastikan halaman akun/cart/checkout tetap privat.",
  },
  {
    id: "PERF-003",
    category: "Performance",
    title: "Optimasi gambar dan font perlu diperhatikan",
    priority: "P2",
    impact: "Halaman fashion berat gambar bisa mempengaruhi loading",
    clientSafeSummary: "Visual fashion tetap harus premium, tetapi gambar dan font perlu diatur agar tidak memperlambat halaman.",
    recommendation: "Optimalkan hero/product image, font weight, lazy loading, dan dimensi gambar.",
  },
];

export const findingsByCategory = (category: FindingCategory) => findings.filter((f) => f.category === category);

export const findingCounts = {
  total: findings.length,
  security: findings.filter((f) => f.category === "Keamanan").length,
  high: findings.filter((f) => f.severity === "High").length,
  medium: findings.filter((f) => f.severity === "Medium").length,
  p1: findings.filter((f) => f.priority === "P1").length,
};
