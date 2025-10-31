// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // =====================================
    // === FUNGSI TRANSLATE (GANTI BAHASA) ===
    // =====================================

    // 1. Definisikan semua teks dalam dua bahasa (Kamus untuk Click Panda)
    const translations = {
        // Navigasi
        'nav-services': { id: 'Layanan Kami', en: 'Our Services' },
        'nav-live': { id: 'Live Shopping', en: 'Live Shopping' },
        'nav-webdev': { id: 'Website Development', en: 'Website Development' },
        'nav-ads': { id: 'Ads Service', en: 'Ads Service' },
        'nav-testimoni': { id: 'Testimoni', en: 'Testimonials' },
        'nav-about': { id: 'Tentang Kami', en: 'About Us' },
        'nav-partner-live': { id: 'Partner Live Shopping', en: 'Live Shopping Partners' },
        'nav-testi-ads': { id: 'Testimoni Ads', en: 'Ads Testimonials' },
        'nav-contact': { id: 'Kontak', en: 'Contact' },
        'nav-contact-info': { id: 'Informasi Kontak', en: 'Contact Information' },
        'nav-social': { id: 'Media Social', en: 'Social Media' },

        // Hero Section
        'hero-title': { id: 'Tingkatkan Visibilitas Merek Anda Di Dunia Digital', en: 'Increase Your Brand\'s Visibility In The Digital World' },
        'hero-subtitle': { id: 'Mulailah terhubung dengan para pembuat konten profesional di dalam satu platform Click Panda. Sekarang saatnya untuk bisnis Anda dikenal oleh pasar yang lebih luas secara online.', en: 'Start connecting with professional content creators on one Click Panda platform. It\'s time for your business to be known by a wider market online.' },
        'hero-btn': { id: 'Tentang Kami &rarr;', en: 'About Us &rarr;' },

        // Layanan Kami - Judul Umum
        'services-title': { id: 'Layanan Kami', en: 'Our Services' },

        // Layanan Live Shopping
        'services-live-title': { id: 'Live Shopping (TikTok/Shopee)', en: 'Live Shopping (TikTok/Shopee)' },
        'services-live-desc': { id: 'Dengan Live Shopping, Anda dapat meningkatkan kesadaran dan penjualan produk Anda. Paket ini memungkinkan Anda untuk berinteraksi dengan pelanggan secara real-time, meningkatkan kepercayaan dan kesadaran merek Anda.', en: 'With Live Shopping, you can increase awareness and sales of your products. This package allows you to interact with customers in real-time, boosting trust and your brand awareness.' },
        
        // Live Gold (SEKARANG KONTEN SILVER)
        'live-gold-title': { id: 'Live Shopping Silver', en: 'Live Shopping Silver' },
        'live-gold-price-prefix': { id: 'Mulai dari', en: 'Starting from' },
        'live-gold-price': { id: 'Rp 10.000.000,-', en: 'IDR 10,000,000' },
        'live-gold-price-suffix': { id: '/ Bulan', en: '/ Month' },
        'live-gold-promo': { id: '(Promo Diskon 20%)', en: '(20% Discount Promo)' },
        'live-gold-features': { id: 'Fitur:', en: 'Features:' },
        'live-gold-f1': { id: 'Akun TikTok disediakan', en: 'TikTok Account provided' },
        'live-gold-f2': { id: 'Live TikTok durasi 2 - 4 jam setiap hari', en: 'Live TikTok 2 - 4 hours duration every day' },
        'live-gold-f3': { id: 'Talent Host (Berpengalaman, Interaktif, Push Closing)', en: 'Talent Host (Experienced, Interactive, Push Closing)' },
        'live-gold-f4': { id: 'Crew Support (Teknis Kontrol Live, Kreatif Konten).', en: 'Crew Support (Technical Live Control, Content Creative).' },
        'live-gold-f5': { id: 'Konten Creator Planner: 1 Video / Hari (25 Video / Bulan).', en: 'Content Creator Planner: 1 Video / Day (25 Videos / Month).' },
        'live-gold-f6': { id: 'Admin Upload ke platform', en: 'Admin Upload to platform' },
        'live-gold-f7': { id: 'Studio Set Up (Full equipment).', en: 'Studio Set Up (Full equipment).' },
        'live-gold-f8': { id: 'Strategi Live (Script Selling, Jam Prime Time).', en: 'Live Strategy (Selling Script, Prime Time Hours).' },
        'live-gold-f9': { id: 'Laporan Mingguan (Penjualan, Traffic).', en: 'Weekly Report (Sales, Traffic).' },
        'live-gold-f10': { id: 'Growth Follower & Brand Awareness.', en: 'Follower Growth & Brand Awareness.' },
        // Kunci f11, f12, f13, tnc, t1, t2 tidak lagi digunakan oleh blok ini
        'live-gold-btn': { id: 'Hubungi kami &rarr;', en: 'Contact us &rarr;' },

        // Silver (SEKARANG KONTEN GOLD)
        'live-silver-title': { id: 'PAKET GOLD', en: 'GOLD PACKAGE' },
        'live-silver-price': { id: 'IDR 18.000.000', en: 'IDR 18,000,000' }, 
        'live-silver-price-suffix': { id: '/ Bulan', en: '/ Month' },
        'live-silver-promo': { id: '(Promo Diskon 20%)', en: '(20% Discount Promo)' },
        // f0 dihapus
        'live-silver-f1': { id: 'Akun TikTok disediakan', en: 'TikTok Account provided' },
        'live-silver-f2': { id: 'Live TikTok durasi 4 - 6 jam setiap hari.', en: 'Live TikTok 4 - 6 hours duration every day.' },
        'live-silver-f3': { id: 'Talent Host (Berpengalaman, Interaktif, Push Closing)', en: 'Talent Host (Experienced, Interactive, Push Closing)' },
        'live-silver-f4': { id: 'Crew Support ( Teknis Kontrol Live & Kreatif Konten)', en: 'Crew Support (Technical Live Control & Content Creative)' },
        'live-silver-f5': { id: 'Konten Planner 1 Video / Hari (30 Video / Bulan).', en: 'Content Planner 1 Video / Day (30 Videos / Month).' },
        'live-silver-f6': { id: 'Upload konten setiap hari (Termasuk hari Minggu/Tanggal Merah).', en: 'Upload content every day (Including Sundays/Holidays).' },
        'live-silver-f7': { id: 'Studio Set Up dengan Dekorasi Brand.', en: 'Studio Set Up with Brand Decoration.' },
        'live-silver-f8': { id: 'Strategi Live dengan Set Up Promo / Campaign.', en: 'Live Strategy with Promo / Campaign Set Up.' },
        'live-silver-f9': { id: 'Optimasi Google Ads ( Exclude Budget )', en: 'Google Ads Optimization (Exclude Budget)' },
        'live-silver-f10': { id: 'Optimasi Live Penjualan & Traffic', en: 'Live Sales & Traffic Optimization' },
        'live-silver-f11': { id: 'Growth Follower Setiap Bulan', en: 'Follower Growth Every Month' },
        'live-silver-f12': { id: 'Brand Awareness', en: 'Brand Awareness' },
        'live-silver-f13': { id: 'Optimasi Live', en: 'Live Optimization' },
        // Kunci T&C baru ditambahkan untuk kartu ini
        'live-silver-tnc-title': { id: 'T&C:', en: 'T&C:' },
        'live-silver-tnc-1': { id: 'Live Shopping Gold menjaga toko Anda tetap terlihat dan relevan...', en: 'Live Shopping Gold keeps your store visible and relevant...' },
        'live-silver-tnc-2': { id: 'Paket ini dikhususkan untuk Anda yang...', en: 'This package is specialized for those who...' },
        // f11 & f12 Dihapus
        
        // Platinum (Fitur Diperbarui)
        'live-platinum-title': { id: 'PAKET PLATINUM', en: 'PLATINUM PACKAGE' },
        'live-platinum-price': { id: 'IDR 12.000.000', en: 'IDR 12,000,000' },
        'live-platinum-price-suffix': { id: '/ Bulan', en: '/ Month' },
        'live-platinum-promo': { id: '(Promo 3 Bulan Diskon 50%)', en: '(3 Month Promo 50% Discount)' },
        'live-platinum-f0': { id: '* 5%- 20% Sharing revenue per month', en: '* 5%- 20% Sharing revenue per month' }, // Fitur ini ditambahkan
        'live-platinum-f1': { id: 'Akun Dari Pemilik Brand', en: 'Account From Brand Owner' }, // Mulai dari sini fitur baru
        'live-platinum-f2': { id: 'Talent Host (Berpengalaman, Interaktif, Push Closing)', en: 'Talent Host (Experienced, Interactive, Push Closing)' },
        'live-platinum-f3': { id: 'Crew Support ( Teknis Kontrol Live & Kreatif Konten)', en: 'Crew Support (Technical Live Control & Content Creative)' },
        'live-platinum-f4': { id: 'Konten Creator Planner: 1 Video / Hari.', en: 'Content Creator Planner: 1 Video / Day.' },
        'live-platinum-f5': { id: 'Upload konten setiap hari', en: 'Upload content every day' },
        'live-platinum-f6': { id: 'Admin Upload ke semua platform.', en: 'Admin Upload to all platforms.' },
        'live-platinum-f7': { id: 'Studio Set Up (Full equipment).', en: 'Studio Set Up (Full equipment).' },
        'live-platinum-f8': { id: 'Strategi Live dengan Set Up Promo / Campaign.', en: 'Live Strategy with Promo / Campaign Set Up.' },
        'live-platinum-f9': { id: 'Optimasi Live Penjualan & Traffic', en: 'Live Sales & Traffic Optimization' },
        'live-platinum-f10': { id: 'Growth Follower & Brand Awareness', en: 'Follower Growth & Brand Awareness' },
        'live-platinum-f11': { id: 'Optimasi Ads ( Exclude Budget )', en: 'Ads Optimization (Exclude Budget)' },
        'live-platinum-f12': { id: 'Optimasi Live.', en: 'Live Optimization.' },
        //... (dan seterusnya untuk semua fitur platinum)

        // Web Dev
        'webdev-title': { id: 'Website Development', en: 'Website Development' },
        'webdev-desc': { id: 'Wujudkan website profesional untuk bisnismu. Desain orisinal, cepat, dan aman dengan dukungan penuh 24/7.', en: 'Realize a professional website for your business. Original design, fast, and secure with 24/7 full support.' },
        'webdev-std-title': { id: 'PAKET STANDARD', en: 'STANDARD PACKAGE' },
        'webdev-std-f1': { id: 'Desain 100% Original', en: '100% Original Design' },
        'webdev-std-f2': { id: 'Domain Maksimal Rp180.000', en: 'Max Domain IDR 180,000' },
        'webdev-std-f3': { id: 'Domain Access', en: 'Domain Access' },
        'webdev-std-f4': { id: 'SSD Storage', en: 'SSD Storage' },
        'webdev-std-f5': { id: 'Free SSL', en: 'Free SSL' },
        'webdev-std-f6': { id: '24/7 Support', en: '24/7 Support' },

        'webdev-int-f1': { id: 'Desain 100% Original', en: '100% Original Design' },
        'webdev-int-f2': { id: 'Domain Maksimal Rp180.000', en: 'Max Domain IDR 180,000' },
        'webdev-int-f3': { id: 'Unlimited Bandwidth', en: 'Unlimited Bandwidth' },
        'webdev-int-f4': { id: 'Free SSL', en: 'Free SSL' },
        'webdev-int-f5': { id: 'Integrasi Sosial Media', en: 'Social Media Integration' },
        'webdev-int-f6': { id: '24/7 Support', en: '24/7 Support' },

        // Fitur Web Dev Advanced
        'webdev-adv-f1': { id: 'Desain 100% Original', en: '100% Original Design' },
        'webdev-adv-f2': { id: 'Domain Hingga Rp360.000,-', en: 'Domain Up to IDR 360,000' },
        'webdev-adv-f3': { id: 'Free SSL', en: 'Free SSL' },
        'webdev-adv-f4': { id: 'Integrasi Sosial Media', en: 'Social Media Integration' },
        'webdev-adv-f5': { id: 'Cloud Hosting', en: 'Cloud Hosting' },
        'webdev-adv-f6': { id: '24/7 Support', en: '24/7 Support' },

        // Fitur Web Dev Premium
        'webdev-prem-f1': { id: 'Desain 100% Original', en: '100% Original Design' },
        'webdev-prem-f2': { id: 'Unlimited Bandwidth', en: 'Unlimited Bandwidth' },
        'webdev-prem-f3': { id: 'Domain Hingga Rp360.000,-', en: 'Domain Up to IDR 360,000' },
        'webdev-prem-f4': { id: 'Free SSL', en: 'Free SSL' },
        'webdev-prem-f5': { id: 'Integrasi Sosial Media', en: 'Social Media Integration' },
        'webdev-prem-f6': { id: 'Cloud Hosting', en: 'Cloud Hosting' },
        'webdev-prem-f7': { id: '24/7 Support', en: '24/7 Support' },
        'webdev-prem-f8': { id: 'Free Convert Website ke APK', en: 'Free Convert Website to APK' },
        'webdev-prem-f9': { id: 'Optimize Caption SEO', en: 'Optimize SEO Caption' },

        // Fitur Web Dev Ultimate
        'webdev-ult-f1': { id: 'Custom Kebutuhan Website Spesifik.', en: 'Custom Specific Website Needs.' },

        // ... (dan seterusnya untuk semua paket webdev)
        'webdev-int-title': { id: 'PAKET INTERMEDIATE', en: 'INTERMEDIATE PACKAGE' },
        'webdev-adv-title': { id: 'PAKET ADVANCED', en: 'ADVANCED PACKAGE' },
        'webdev-prem-title': { id: 'PAKET PREMIUM', en: 'PREMIUM PACKAGE' },
        'webdev-ult-title': { id: 'PAKET ULTIMATE', en: 'ULTIMATE PACKAGE' },

        // Ads Service
        'ads-title': { id: 'ADS SERVICE', en: 'ADS SERVICE' },
        'ads-subtitle': { id: 'GOOGLE ADS & META ADS', en: 'GOOGLE ADS & META ADS' },
        'ads-silver-title': { id: 'PAKET SILVER', en: 'SILVER PACKAGE' },
        'ads-silver-f1': { id: '1X Monthly Meeting', en: '1X Monthly Meeting' },
        // ... (dan seterusnya untuk semua paket ads)
        'ads-gold-title': { id: 'PAKET GOLD', en: 'GOLD PACKAGE' },
        'ads-platinum-title': { id: 'PAKET PLATINUM', en: 'PLATINUM PACKAGE' },
        // Ads Service - Silver
        'ads-silver-f0': { id: 'Fitur', en: 'Features' },
        'ads-silver-f1': { id: '1X Monthly Meeting', en: '1X Monthly Meeting' },
        'ads-silver-f2': { id: '24/7 Service on', en: '24/7 Service on' },
        'ads-silver-f3': { id: '3 Expert on 1 Campaign (Search, Display, Youtube, Mobile app, Shopping)', en: '3 Experts on 1 Campaign (Search, Display, YouTube, Mobile app, Shopping)' },
        'ads-silver-f4': { id: 'Reporting Performance', en: 'Reporting Performance' },
        
        // Ads Service - Gold
        'ads-gold-f0': { id: 'Fitur', en: 'Features' },
        'ads-gold-f1': { id: '1X Monthly Meeting', en: '1X Monthly Meeting' },
        'ads-gold-f2': { id: '24/7 Service on', en: '24/7 Service on' },
        'ads-gold-f3': { id: 'Up to 15 Campaign (Search, Display, Youtube, Mobile app, Shopping)', en: 'Up to 15 Campaigns (Search, Display, YouTube, Mobile app, Shopping)' },
        'ads-gold-f4': { id: 'Reporting Performance', en: 'Reporting Performance' },
        'ads-gold-f5': { id: 'Max Budget 13 Mio / Month', en: 'Max Budget 13 Mio / Month' },
        
        // Ads Service - Platinum
        'ads-platinum-f0': { id: 'Fitur', en: 'Features' },
        'ads-platinum-f1': { id: '1X Monthly Meeting', en: '1X Monthly Meeting' },
        'ads-platinum-f2': { id: '24/7 Service', en: '24/7 Service' },
        'ads-platinum-f3': { id: 'Unlimited Campaign (Search, Display, Youtube, Mobile app, Shopping)', en: 'Unlimited Campaigns (Search, Display, YouTube, Mobile app, Shopping)' },
        'ads-platinum-f4': { id: 'Reporting Performance', en: 'Reporting Performance' },
        'ads-platinum-f5': { id: 'Budget Unlimited', en: 'Unlimited Budget' },

        // Achievements
        'achieve-title': { id: 'Pencapaian Kami', en: 'Our Achievements' },
        'achieve-desc': { 
            id: 'Click Panda memiliki banyak pengalaman di dalam industri Digital Marketing & Creative dan telah bekerja sama dengan lebih dari 100 pebisnis/merek lokal di Indonesia, seperti: Teva, Era Fiesta Group, Richie Farm dan masih banyak lagi. Seiring bertambahnya pengguna kami, begitu pula tim Click Panda juga terus berkembang.', 
            en: 'Click Panda has extensive experience in the Digital Marketing & Creative industry and has collaborated with over 100 local businesses/brands in Indonesia, such as: Teva, Era Fiesta Group, Richie Farm, and many more. As our users grow, so does the Click Panda team.' 
        },
        'achieve-s1-val': { id: '200+', en: '200+' },
        'achieve-s1-text': { id: 'Anggota Tim', en: 'Team Members' },
        'achieve-s2-val': { id: '150+', en: '150+' },
        'achieve-s2-text': { id: 'Partner & Host', en: 'Partners & Hosts' },
        'achieve-s3-val': { id: '100+', en: '100+' },
        'achieve-s3-text': { id: 'Projek Berulang', en: 'Recurring Projects' },
        'achieve-s4-val': { id: '30+', en: '30+' },
        'achieve-s4-text': { id: 'Projek Baru per Bulan', en: 'New Projects per Month' },
        'achieve-s5-title': { id: 'Total pendapatan yang dihasilkan', en: 'Total revenue generated' },
        'achieve-s6-title': { id: 'Growth vs. 2022', en: 'Growth vs. 2022' },
        'achieve-s7-note': { id: '*Data statistik per 2023', en: '*Statistical data as of 2023' },

        // Partners (Kunci ini DI-UPDATE)
        'partner-title': { id: 'MITRA BISNIS DENGAN PLATFORM TERKEMUKA', en: 'BUSINESS PARTNERS WITH LEADING PLATFORMS' },
        'partner-card-title': { id: 'Mitra Bisnis Live Shopping', en: 'Live Shopping Business Partner' },
        'partner-card-desc': { id: 'Klien partner yang sukses live shopping bersama kami.', en: 'Partner clients who are successful with our live shopping.' },
        
        // Footer (Kunci ini DI-UPDATE)
        'footer-cta-title': { id: 'Anda Memiliki Pertanyaan?', en: 'Do You Have Questions?' },
        'footer-cta-btn': { id: 'Hubungi kami &rarr;', en: 'Contact us &rarr;' },
        'footer-address': { id: '- Ruko DUTA GARDEN SQUARE A15<br>- Jl. Husein Sastranegara, Jurumudi, Kecamatan Benda, Kota Tangerang, Banten 15124.', en: '- Ruko DUTA GARDEN SQUARE A15<br>- Jl. Husein Sastranegara, Jurumudi, Benda District, Tangerang City, Banten 15124.' },
        'footer-links-services': { id: 'Layanan', en: 'Services' },
        'footer-link-s1': { id: 'Live Shopping', en: 'Live Shopping' },
        'footer-link-s2': { id: 'Manajemen Media Sosial', en: 'Social Media Management' },
        'footer-link-s3': { id: 'Endorsement', en: 'Endorsement' },
        'footer-link-s4': { id: 'Solusi Enterprise', en: 'Enterprise Solution' },
        'footer-links-partners': { id: 'Mitra', en: 'Partners' },
        'footer-link-p1': { id: 'Kreator Konten', en: 'Content Creators' },
        'footer-link-p2': { id: 'Streamer', en: 'Streamers' },
        'footer-link-p3': { id: 'Influencer', en: 'Influencers' },
        'footer-links-contact': { id: 'Informasi Kontak', en: 'Contact Information' },
        'footer-copyright': { id: 'All Right Reserved 2025 © By Click Panda', en: 'All Rights Reserved 2025 © By Click Panda' },

        // ==========================================================
        // === TAMBAHKAN KUNCI BARU DI BAWAH INI ===
        // ==========================================================
        'footer-contact-wa': { id: '+62 812-8767-2836', en: '+62 812-8767-2836' },
        'footer-contact-ig': { id: 'clikPanda', en: 'clikPanda' },
        'footer-contact-fb': { id: 'Clik Panda', en: 'Clik Panda' },
        'footer-contact-tt': { id: 'clik.panda', en: 'clik.panda' },
        // ==================================================
        // === TAMBAHKAN KUNCI BARU INI UNTUK HALAMAN 'TENTANG KAMI' ===
        // ==================================================
        'testimoni-hero-title': { id: 'Kenapa Click Panda?', en: 'Why Click Panda?' },
        'testimoni-hero-subtitle': { id: 'Mulailah terhubung dengan para pembuat konten profesional di dalam satu platform Click Panda. Sekarang saatnya untuk bisnis Anda dikenal oleh pasar yang lebih luas secara online.', en: 'Start connecting with professional content creators on one Click Panda platform. Now is the time for your business to be known by a wider market online.' },
        'testimoni-hero-placeholder': { id: '(Placeholder Gambar HP)', en: '(Phone Image Placeholder)' },
        
        // Halaman Testimoni / Tentang Kami
        'testimoni-endorse-title': { id: 'LAYANAN ENDORSEMENT', en: 'ENDORSEMENT SERVICE' },
        'testimoni-endorse-desc': { 
            id: 'Tingkatkan jangkauan dan kredibilitas brand anda dengan Layanan Live Shopping dan Ads kami. Memanfaatkan pengaruh dari suara terpercaya untuk meningkatkan produk dan layanan anda.', 
            en: 'Increase your brand\'s reach and credibility with our Live Shopping and Ads Services. Leverage the influence of trusted voices to elevate your products and services.' 
        },
        'testimoni-endorse-btn': { id: 'Pelajari &rarr;', en: 'Learn More &rarr;' },
        'testimoni-who-title': { id: 'Siapa Kami?', en: 'Who Are We?' },
        'testimoni-who-desc1': { id: 'Click Panda merupakan marketplace tepercaya yang menghubungkan kreator konten dengan pelaku bisnis dan merek lokal dan UKM dengan kehadiran digital kami.', en: 'Click Panda is a trusted marketplace that connects content creators with businesses, local brands, and SMEs through our digital presence.' },
        'testimoni-who-desc2': { id: 'Bekerja sama dengan para kreator konten yang profesional dan andal, Click Panda siap membantu dan memberdayakan para bisnis dan merek lokal untuk dapat bersaing di dalam platform digital.', en: 'By collaborating with professional and reliable content creators, Click Panda is ready to help and empower local businesses and brands to compete on digital platforms.' },
        'testimoni-what-title': { id: 'Apa yang Kami Lakukan?', en: 'What We Do?' },
        'testimoni-what-desc1': { id: 'Tim kami akan membantu Anda dalam memanfaatkan channels dan teknologi digital agar bisnis dapat mencapai tujuan marketing dan penjualan yang diinginkan.', en: 'Our team will help you leverage digital channels and technology so your business can achieve its desired marketing and sales goals.' },
        'testimoni-what-desc2': { id: 'Berbekal alat data crawling engine dan para kreator konten terlatih, strategi penjualan bisnis Anda pun akan berjalan secara efisien dan efektif.', en: 'Armed with a data crawling engine and trained content creators, your business\'s sales strategy will run efficiently and effectively.' },
        
        // Section "Kenapa Click Panda" di Halaman Testimoni
        'testimoni-why-section-title': { id: 'Kenapa Click Panda?', en: 'Why Click Panda?' },
        'testimoni-why-desc': { id: 'Pada era sekarang ini, Anda perlu mengoptimalkan pemasaran bisnis melalui media sosial dan inilah beberapa alasan mengapa Anda perlu bekerja sama dengan Click Panda.', en: 'In this current era, you need to optimize your business marketing through social media, and here are several reasons why you need to partner with Click Panda.' },
        'testimoni-why-r1-title': { id: '1. Tidak Repot', en: '1. Hassle-Free' },
        'testimoni-why-r1-desc': { id: 'Biarkan kami yang mengelola konten media sosial Anda. Gunakan waktu Anda untuk fokus pada keperluan bisnis lainnya.', en: 'Let us manage your social media content. Use your time to focus on other business needs.' },
        'testimoni-why-r2-title': { id: '2. Meningkatkan Penjualan', en: '2. Increase Sales' },
        'testimoni-why-r2-desc': { id: 'Media sosial yang aktif itu berarti merek anda dikenal oleh banyak audiens target sehingga potensi untuk meningkatkan penjualan lebih tinggi lagi.', en: 'Active social media means your brand is known by a large target audience, increasing the potential for higher sales.' },
        'testimoni-why-r3-title': { id: '3. Kami Memberikan Hasil', en: '3. We Deliver Results' },
        'testimoni-why-r3-desc': { id: 'Dengan memiliki konten kreator berpengalaman dan Pusat Kreatif sebagai sumber daya dan wawasan, kami pasti dapat membantu Anda untuk tetap relevan di platform media sosial', en: 'By having experienced content creators and a Creative Hub as a resource for insights, we can surely help you stay relevant on social media platforms.' },
        'testimoni-why-r4-title': { 
            id: '4. Jaminan 100% Hasil', 
            en: '4. 100% Result Guarantee' 
        },
        'testimoni-why-r4-desc': { 
            id: 'Kami hanya mencari hasil, bukan janji. Jika layanan kami tidak memberikan dampak yang Anda harapkan. Kepuasan Anda adalah jaminan kami.', 
            en: 'We seek results, not promises. If our services do not deliver the impact you expect. Your satisfaction is our guarantee.' 
        },
        // ==================================================
        // === TAMBAHKAN KUNCI BARU INI UNTUK HALAMAN TESTIMONI ===
        // ==================================================
        
        'testi-live-title': { id: 'TESTIMONI LAYANAN LIVE SHOPPING', en: 'LIVE SHOPPING SERVICE TESTIMONIALS' },
        'testi-live-card-title': { id: 'Mitra Live Shopping', en: 'Live Shopping Partners' },
        'testi-live-card-desc': { id: 'Klien partner yang sukses live shopping bersama kami.', en: 'Partner clients who are successful with our live shopping.' },
        'testi-ads-title': { id: 'TESTIMONI LAYANAN ADS (GOOGLE/TIKTOK)', en: 'ADS SERVICE TESTIMONIALS (GOOGLE/TIKTOK)' },
        
        // Swiper Testimoni
        'testi-ads-1-title': { id: 'PT. BBS Taxi Service', en: 'PT. BBS Taxi Service' },
        'testi-ads-1-desc': { id: '"Fokus iklan pada paket wisata mangrove sangat sukses menarik pemesan dari kalangan turis. Peningkatan pemanfaatan jasa taxi air kami sangat terasa!"', en: '"The ad focus on mangrove tour packages was very successful in attracting bookings from tourists. The increase in the use of our water taxi services is very noticeable!"' },
        
        'testi-ads-2-title': { id: 'ERA Real Estate (Fiesta)', en: 'ERA Real Estate (Fiesta)' },
        'testi-ads-2-desc': { id: '"Iklan rumah mewah ini langsung menarik prospek berdaya beli tinggi. Kami sangat puas dengan kualitas lead yang didapatkan melalui kampanye ini."', en: '"This luxury home ad immediately attracted high-buying-power prospects. We are very satisfied with the quality of leads generated through this campaign."' },
        
        'testi-ads-3-title': { id: 'Bintan Paradise Spa', en: 'Bintan Paradise Spa' },
        'testi-ads-3-desc': { id: '"Iklan dengan visual kayak di laguna yang menawan menarik lebih banyak wisatawan ke Bintan. Reservasi dan kunjungan ke spa mengalami peningkatan yang signifikan."', en: '"The ad with charming lagoon-like visuals attracted more tourists to Bintan. Spa reservations and visits have increased significantly."' },
        
        'testi-ads-4-title': { id: 'Richie Farm', en: 'Richie Farm' },
        'testi-ads-4-desc': { id: '"Promosi website yang sangat efektif mendatangkan pembeli dan kolektor ikan Discus. Penjualan ke berbagai kota meningkat"', en: '"Very effective website promotion in attracting Discus fish buyers and collectors. Sales to various cities have increased."' },
        
        'testi-ads-5-title': { id: 'Richie Farm', en: 'Richie Farm' },
        'testi-ads-5-desc': { id: '"Promosi website yang sangat efektif mendatangkan pembeli dan kolektor ikan Discus. Penjualan ke berbagai kota meningkat"', en: '"Very effective website promotion in attracting Discus fish buyers and collectors. Sales to various cities have increased."' },
        
        'testi-ads-6-title': { id: 'ISKO Furniture', en: 'ISKO Furniture' },
        'testi-ads-6-desc': { id: '"Visual iklan yang estetis berhasil meningkatkan ketertarikan pada furnitur kayu kami. Traffic ke toko online melonjak, dan penjualan set meja makan laris manis!"', en: '"Aesthetic ad visuals successfully increased interest in our wooden furniture. Traffic to the online store surged, and dining table sets sold out!"' },
        
        'testi-ads-7-title': { id: 'Teva', en: 'Teva' },
        'testi-ads-7-desc': { id: '"Iklan Teva berhasil menangkap esensi petualangan dan kenyamanan. Kampanye ini sangat efektif meningkatkan klik dan konversi untuk produk sandal terbaru kami."', en: '"The Teva ad successfully captured the essence of adventure and comfort. This campaign was very effective in increasing clicks and conversions for our new sandal product."' },
        
        'testi-ads-8-title': { id: 'MITRA RENT', en: 'MITRA RENT' },
        'testi-ads-8-desc': { id: '"Berkat iklan yang terarah, permintaan sewa untuk acara dan festival besar seperti Festival melonjak. Layanan iklan Anda benar-benar menjadi \'mitra\' bisnis kami!"', en: '"Thanks to targeted advertising, rental demand for major events and festivals like the Festival skyrocketed. Your ad service truly became a \'partner\' for our business!"' },
        
        'testi-ads-9-title': { id: 'cactoast', en: 'cactoast' },
        'testi-ads-9-desc': { id: '"Desain kami viral dan ramai dibicarakan. Penjualan harian naik berkali-kali lipat dalam waktu singkat!"', en: '"Our design went viral and was widely talked about. Daily sales increased manifold in a short time!"' },
        
        'testi-ads-10-title': { id: 'Bintan Paradise Spa', en: 'Bintan Paradise Spa' },
        'testi-ads-10-desc': { id: '"Iklan dengan visual kayak di laguna yang menawan menarik lebih banyak wisatawan ke Bintan. Reservasi dan kunjungan ke spa mengalami peningkatan yang signifikan."', en: '"The ad with charming lagoon-like visuals attracted more tourists to Bintan. Spa reservations and visits have increased significantly."' },
        
        'testi-ads-11-title': { id: 'ZO® Skin Health', en: 'ZO® Skin Health' },
        'testi-ads-11-desc': { id: '"Strategi iklan yang berkelas berhasil menjangkau target pasar premium kami. Peningkatan pada brand awareness dan konversi untuk produk Renewal Crème terlihat jelas."', en: '"The classy advertising strategy successfully reached our premium target market. The increase in brand awareness and conversions for the Renewal Crème product is clear."' },
        
        'testi-ads-12-title': { id: 'CIAMSO', en: 'CIAMSO' },
        'testi-ads-12-desc': { id: '"Iklan yang mempromosikan Mie dan Kopi jadul berhasil menarik pengunjung baru ke kedai kami. Konsep dan keunikan CIAMSO kini lebih dikenal luas."', en: '"The ad promoting old-school noodles and coffee successfully attracted new visitors to our shop. The concept and uniqueness of CIAMSO are now more widely known."' },
        
        'testi-ads-13-title': { id: 'Kedai Ladjoe', en: 'Kedai Ladjoe' },
        'testi-ads-13-desc': { id: '"Iklan untuk spesial nasi maranggi kami sangat menggugah selera dan berhasil menarik banyak pelanggan baru. Peningkatan penjualan saat jam makan siang sangat signifikan!"', en: '"The ad for our special nasi maranggi was very appetizing and successfully attracted many new customers. The increase in sales during lunch hours is very significant!"' },
        
        'testi-ads-14-title': { id: 'CIAMSO', en: 'CIAMSO' },
        'testi-ads-14-desc': { id: '"Iklan yang mempromosikan Mie dan Kopi jadul berhasil menarik pengunjung baru ke kedai kami. Konsep dan keunikan CIAMSO kini lebih dikenal luas."', en: '"The ad promoting old-school noodles and coffee successfully attracted new visitors to our shop. The concept and uniqueness of CIAMSO are now more widely known."' },
        // ==================================================
        // === TAMBAHKAN KUNCI BARU INI UNTUK HALAMAN KONTAK ===
        // ==================================================
        
        'contact-hero-title': { id: 'Hubungi Kami', en: 'Contact Us' },
        'contact-hero-subtitle': { id: 'Punya pertanyaan atau ingin memulai proyek dengan kami? Tim kami siap membantu mewujudkan ide digital Anda.', en: 'Have questions or want to start a project with us? Our team is ready to help bring your digital ideas to life.' },
        'contact-hero-placeholder': { id: '(Placeholder Gambar Kontak)', en: '(Contact Image Placeholder)' },
        
        // Halaman Kontak
        'contact-info-subtitle': { id: 'INFORMASI', en: 'INFORMATION' },
        'contact-info-title': { id: 'HUBUNGI KAMI', en: 'CONTACT US' },
        'contact-info-desc': { id: 'Kami siap membantu. Jangan ragu untuk menghubungi kami melalui detail di bawah ini atau kunjungi lokasi kami.', en: 'We are here to help. Feel free to contact us through the details below or visit our location.' },
        'contact-addr-title': { id: 'ALAMAT', en: 'ADDRESS' },
        'contact-addr-name': { id: 'Kantor Click Panda', en: 'Click Panda Office' },
        'contact-addr-detail': { id: 'Ruko DUTA GARDEN SQUARE A15, Jl. Husein Sastranegara, Jurumudi, Kecamatan Benda, Kota Tangerang, Banten 15124.', en: 'Ruko DUTA GARDEN SQUARE A15, Jl. Husein Sastranegara, Jurumudi, Benda District, Tangerang City, Banten 15124.' },
        'contact-social-title': { id: 'MEDIA SOSIAL', en: 'SOCIAL MEDIA' },
        'contact-social-wa': { id: '+62 812-8767-2836', en: '+62 812-8767-2836' },
        'contact-social-ig': { id: 'clikPanda', en: 'clikPanda' },
        'contact-social-fb': { id: 'Clik Panda', en: 'Clik Panda' },
        'contact-social-tt': { id: 'clik.panda', en: 'clik.panda' },
        'contact-social-btn': { id: 'Kontak via WhatsApp', en: 'Contact via WhatsApp' }
    };

    // 2. Dapatkan elemen tombol
    const langBtnId = document.getElementById('lang-btn-id');
    const langBtnEn = document.getElementById('lang-btn-en');

    // 3. Cek bahasa yang tersimpan di browser, default ke 'id' (Indonesia)
    let currentLang = localStorage.getItem('lang') || 'id';

    // 4. Fungsi untuk mengganti bahasa
    function setLanguage(lang) {
        // Simpan pilihan bahasa pengguna
        localStorage.setItem('lang', lang);
        currentLang = lang;

        // Loop semua elemen yang punya atribut data-lang
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });

        // Update tampilan tombol yang aktif
        if (lang === 'id') {
            langBtnId.classList.add('fw-bold', 'text-white');
            langBtnId.classList.remove('text-white-50');
            
            langBtnEn.classList.add('text-white-50');
            langBtnEn.classList.remove('fw-bold', 'text-white');
        } else {
            langBtnEn.classList.add('fw-bold', 'text-white');
            langBtnEn.classList.remove('text-white-50');
            
            langBtnId.classList.add('text-white-50');
            langBtnId.classList.remove('fw-bold', 'text-white');
        }
    }

    // 5. Event listener untuk tombol 'ID'
    langBtnId.addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage('id');
    });

    // 6. Event listener untuk tombol 'EN'
    langBtnEn.addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage('en');
    });

    // 7. Terapkan bahasa saat halaman pertama kali dimuat
    setLanguage(currentLang);
    

});