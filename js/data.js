

const portfolioData = {
    // ===================================
    // DATA PROFIL MAHASISWA
    // ===================================
    profile: {
        // Identitas Mahasiswa
        namaLengkap: "Syaidin Joyo Biroso, S.Pd ",
        namaPanggilan: "Syaidin",
        nim: "2500103916225010",
        programPPG: "PPG Pra Jabatan",
        bidangStudi: "Informatika",
        universitas: "Universitas Negeri Surabaya (UNESA)",
        tahunPPG: "2026",
        fotoProfil: "profil.png", // Path ke foto profil
        
        // Daerah Asal - Sampang, Madura
        daerahAsal: {
            desa: " Desa :Torjun",
            kecamatan: "Kecamatan:Torjun",
            kabupaten: "Kabupaten:Sampang",
            provinsi: "provinsi:Jawa Timur",
            
            // Deskripsi Daerah
            deskripsi: `
                <p>Saya berasal dari Kabupaten Sampang, sebuah kabupaten di Pulau Madura yang kaya akan budaya dan tradisi. Sampang dikenal sebagai kota santri dengan banyak pesantren besar, serta memiliki keindahan alam pantai yang memukau.</p>
                <p>Masyarakat Sampang dikenal ramah, religius, dan memiliki budaya yang kuat. Kehidupan sehari-hari sangat dipengaruhi oleh nilai-nilai Islam dan adat istiadat Madura yang masih dijaga hingga kini. Sampang juga terkenal dengan batik tulis khasnya dan kerajinan anyaman yang indah.</p>
                <p>Saya bangga berasal dari Sampang karena daerah ini mengajarkan nilai-nilai kesederhanaan, kerja keras, dan kekeluargaan yang erat. Pengalaman hidup di Sampang membentuk karakter saya menjadi pribadi yang tangguh dan menghargai tradisi.</p>
            `,
            
            // Ciri Khas Daerah 
            ciriKhas: {
                kuliner: "Sate Kambing Sampang yang terkenal gurih dan lezat, Rujak Cingur khas Madura, Kaldu Kokot (sup khas Sampang), dan Nasi Serpang",
                budaya: "Karapan Sapi (perlombaan sapi yang menjadi ikon Madura), Tari Topeng Dalang, tradisi Petik Laut, dan budaya pesantren yang kuat",
                bahasa: "Bahasa Madura dialek Sampang dengan logat khas yang keras namun penuh kehangatan",
                kerajinan: "Batik Tulis Sampang dengan motif khas, kerajinan anyaman bambu, dan gerabah tradisional",
                alam: "Pantai Camplong yang indah, Gua Lebar dengan pemandangan spektakuler, dan perbukitan yang hijau",
                nilai: "Nilai religius yang tinggi, kegigihan dan ketangguhan (seperti sapi Madura), kebersamaan keluarga yang erat, dan sikap apa adanya (jujur dan tegas)"
            },
            
            // Galeri Daerah Asal 
            galeri: [
                {
                    foto: "pantai.jpg",
                    judul: "Pantai Camplong Sampang"
                },
                {
                    foto: "toroan.jpg",
                    judul: "Air Terjun Toroan"
                },
                {
                    foto: "kerapan.jpg",
                    judul: "Karapan Sapi - Budaya Khas Madura"
                },
                {
                    foto: "batik.jpg",
                    judul: "Batik Tulis Khas Sampang"
                },
                {
                    foto: "sate.jpg",
                    judul: "Sate Kambing Khas Sampang"
                },
                {
                    foto: "kobel.jpg",
                    judul: "Nasi kobelKhas Sampang"
                }
            ],
            
            // Nilai dari Daerah Asal
            nilai: `
                <p>Sebagai orang Sampang, saya tumbuh dengan nilai-nilai yang membentuk karakter saya hingga saat ini. Nilai <strong>religius</strong> dari lingkungan masyarakat yang Islami mengajarkan saya pentingnya akhlak mulia dalam setiap tindakan.</p>
                <p>Nilai Nilai <strong>kegigihan dan ketangguhan</strong>, seperti semangat masyarakat Madura yang ulet dan pekerja keras, mengajarkan saya untuk tidak mudah menyerah dalam menghadapi berbagai tantangan. Nilai ini menjadi bekal penting dalam menjalankan profesi sebagai pendidik.</p>
                <p>Nilai Nilai <strong>kejujuran dan ketegasan</strong> membentuk saya untuk berani berkata dan bertindak secara apa adanya dengan tetap menghormati orang lain. Selain itu, nilai <strong>kekeluargaan</strong> mengajarkan saya pentingnya membangun hubungan yang baik, saling menghargai, dan peduli terhadap sesama.</p>
                <p>Nilai-nilai tersebut akan saya bawa dalam menjalankan profesi sebagai guru. Saya ingin menjadi pendidik yang <strong>jujur, tegas namun penuh kasih sayang, gigih dalam membimbing peserta didik, serta selalu menjunjung tinggi akhlak mulia.</strong></p>
            `
        },
        
        // Tentang Saya
        tentangSaya: `
            <p>Saya adalah seorang pendidik dari Kabupaten Sampang, Madura, yang memiliki semangat tinggi untuk terus berkembang dan memberikan yang terbaik dalam dunia pendidikan. Latar belakang saya sebagai orang Madura dengan nilai-nilai kegigihan dan ketangguhan membentuk karakter saya menjadi sosok yang tidak mudah menyerah dalam menghadapi tantangan.</p>
            <p>Pengalaman mengajar di SMKS NATZHATUT TULLAB memberikan saya banyak pelajaran berharga tentang bagaimana memahami kebutuhan peserta didik yang beragam. Saya percaya bahwa setiap anak memiliki potensi unik yang perlu digali dan dikembangkan dengan pendekatan yang tepat.</p>
            <p>Ketertarikan saya terhadap pendidikan dimulai sejak melihat bagaimana guru-guru di kampung halaman saya berdedikasi tinggi meskipun dengan keterbatasan fasilitas. Hal ini menginspirasi saya untuk menjadi bagian dari perubahan positif dalam dunia pendidikan. Melalui PPG ini, saya berharap dapat meningkatkan kompetensi profesional saya, mendalami pedagogi modern, dan menjadi guru yang lebih baik.</p>
            <p>Harapan saya selama mengikuti PPG adalah dapat memadukan nilai-nilai luhur budaya Madura dengan pendekatan pembelajaran modern, sehingga mampu menciptakan pembelajaran yang bermakna, menyenangkan, dan berpihak pada peserta didik. Saya ingin menjadi guru yang tidak hanya mengajar, tetapi juga menginspirasi dan memberdayakan generasi muda.</p>
        `,
        
        // Quote di Halaman Home 
        quote: "Menjadi guru bukan hanya tentang mengajar, tetapi juga tentang terus belajar, memahami, dan memberikan yang terbaik bagi peserta didik.",
        
        // Kontak (opsional)
        kontak: {
            email: "syaidinjb14@gmail.com", 
            instagram: "syaidin._", 
        }
    },
    
    // ===================================
    // DATA LOKASI PERKULIAHAN
    // ===================================
    lokasi: {
        namaUniversitas: "Universitas Negeri Surabaya (UNESA)",
        programStudi: "Pendidikan Profesi Guru (PPG)",
        bidangStudi: "Informatika",
        alamat: "Kampus Lidah Wetan, Jl. Lidah Wetan, Lakarsantri",
        kota: "Surabaya",
        tahunPPG: "2026",
        
        // Google Maps Embed
        googleMapsEmbed: `
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2771890557244!2d112.6820089!3d-7.3207469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd14e6b3089%3A0xa6c7ab92e6c8f10f!2sUniversitas%20Negeri%20Surabaya%20Kampus%20Lidah%20Wetan!5e0!3m2!1sid!2sid!4v1234567890" width="100%" height="450" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `,
        
        // Lingkungan Perkuliahan
        lingkunganPerkuliahan: `
            <p>Kampus UNESA Lidah Wetan terletak di kawasan Lakarsantri, Surabaya, dengan suasana kampus yang asri dan kondusif untuk belajar. Lingkungan kampus yang hijau dengan banyak pepohonan memberikan kesejukan dan kenyamanan bagi mahasiswa yang sedang menuntut ilmu.</p>
            <p>Fasilitas perkuliahan di kampus ini sangat memadai, dilengkapi dengan ruang kelas ber-AC, laboratorium modern, perpustakaan yang lengkap, serta area diskusi dan ruang belajar mandiri. Kampus ini juga memiliki masjid yang representatif, kantin yang bersih, dan area parkir yang luas.</p>
            <p>Suasana akademik di UNESA Lidah Wetan sangat mendukung proses pembelajaran PPG. Dosen-dosen berpengalaman dan profesional, teman-teman mahasiswa yang kooperatif, serta lingkungan yang ramah membuat proses belajar menjadi lebih bermakna dan menyenangkan.</p>
        `,
        
        // Hal yang Berkesan
        halBerkesan: `
            <p>Hal yang paling berkesan selama kuliah di UNESA Lidah Wetan adalah kebersamaan dan solidaritas antar mahasiswa PPG. Meskipun kami berasal dari berbagai daerah dengan latar belakang yang berbeda - ada yang dari Sampang, Pamekasan, Sumenep, Bangkalan, hingga dari Jawa - kami semua bersatu dengan tujuan yang sama: menjadi guru profesional yang berkualitas.</p>
            <p>Pengalaman berdiskusi dengan teman-teman dari berbagai daerah memperkaya wawasan saya tentang keberagaman praktik pendidikan di Indonesia. Saya juga terkesan dengan dedikasi dosen-dosen UNESA yang tidak hanya mengajar teori, tetapi juga berbagi pengalaman praktis dan memberikan bimbingan yang tulus. Lokasi kampus yang strategis dan mudah dijangkau juga menjadi nilai tambah tersendiri.</p>
        `
    },
    
    // ===================================
    // DATA REFLEKSI MATA KULIAH
    // ===================================
    refleksi: {
        // SEMESTER 1 - 7 Mata Kuliah
        semester1: [
            {
                namaMataKuliah: "Pemahaman tentang Peserta Didik dan Pembelajarannya (PPP)",
                dosen: "Dr. Yeni Anistyasari, S.Pd., M.Kom.",
                deskripsi: "Mata kuliah ini membekali peserta PPG untuk memahami karakteristik, kebutuhan, dan potensi peserta didik sebagai dasar merancang, melaksanakan, dan mengevaluasi pembelajaran yang efektif, adaptif, inklusif, dan berpusat pada peserta didik melalui pendekatan Pembelajaran Mendalam. Peserta mempelajari perkembangan dan perbedaan individu, melakukan identifikasi kebutuhan belajar, serta menerapkannya dalam perencanaan dan praktik pembelajaran mikro yang terintegrasi dengan PPL.",
                connection: "Materi ini terhubung langsung dengan peran saya sebagai calon guru dalam memahami karakteristik, kebutuhan, dan potensi peserta didik secara holistik sebelum merancang pembelajaran.",
                
                challenge: "Tantangan terbesar adalah menggali kebutuhan belajar peserta didik secara mendalam melalui observasi dan asesmen, karena keberagaman gaya belajar, kondisi sosial-emosional, dan latar belakang budaya siswa yang berbeda-beda.",
                
                concept: "Konsep utama yang dipelajari adalah profiling peserta didik, prinsip pembelajaran konstruktif, humanistik, dan berdiferensiasi, serta perancangan pengalaman belajar yang adaptif dan inklusif.",
                
                change: "Saya lebih konsisten melakukan observasi dan refleksi terhadap kebutuhan belajar siswa sebelum merancang pembelajaran, serta menerapkan strategi diferensiasi secara nyata di kelas.",
                artefak: "Hasil studi kasus atau refleksi mengenai karakteristik dan kebutuhan belajar peserta didik.",
                
                alasan: "Artefak ini menunjukkan pemahaman saya dalam mengidentifikasi karakteristik, kebutuhan, serta perbedaan individu peserta didik sebagai dasar dalam menentukan strategi pembelajaran.",
                konsepUtama: "Setiap peserta didik memiliki karakteristik, potensi, dan kebutuhan belajar yang berbeda sehingga pembelajaran perlu dirancang secara adaptif, inklusif, dan berpusat pada peserta didik.",
                
                perubahanYangDilakukan: "Saya lebih memperhatikan kebutuhan dan karakteristik peserta didik melalui observasi dan asesmen sebelum menentukan strategi dan kegiatan pembelajaran."
            },
            {
                namaMataKuliah: "Filosofi Pendidikan & Nilai Pendidikan",
                dosen: "Drs. Bambang Sujatmiko, M.T.",
                deskripsi: "Mata kuliah ini membekali peserta PPG sebagai calon guru dengan kemampuan untuk memahami filosofi pendidikan Indonesia, menginternalisasi nilai-nilai ke-Indonesia-an dalam menjalankan tugas sebagai pendidik dan dalam kehidupan keseharian, serta berkomitmen pada nilai-nilai moral dan etika, dasar-dasar kepemimpinan, dan sebagai pembelajar sepanjang hayat.",
                connection: "Materi ini terhubung dengan pembentukan identitas saya sebagai pendidik yang berlandaskan nilai-nilai ke-Indonesiaan, moral, dan etika dalam menjalankan tugas keseharian.",
                challenge: "Tantangan yang dihadapi adalah menginternalisasi nilai-nilai filosofi pendidikan Indonesia secara nyata dalam praktik, bukan hanya memahaminya secara teoretis.",
                concept: "Konsep utama yang dipelajari adalah filosofi pendidikan Indonesia, nilai moral dan etika, dasar-dasar kepemimpinan, serta semangat menjadi pembelajar sepanjang hayat.",
                change: "Saya lebih konsisten merefleksikan nilai-nilai ke-Indonesiaan dalam setiap interaksi dengan peserta didik dan dalam pengambilan keputusan pedagogis.",
                artefak: "Rangkaian aktivitas pembelajaran pada LMS mata kuliah Filosofi Pendidikan dan Pendidikan Nilai, meliputi pemahaman filosofi pendidikan nasional, pemikiran Ki Hajar Dewantara, nilai-nilai Pancasila, pendidikan karakter, serta kode etik guru.",
                alasan: "Artefak ini dipilih karena memberikan gambaran proses belajar saya dalam memahami filosofi pendidikan Indonesia dan nilai-nilai yang menjadi dasar dalam menjalankan peran sebagai guru. Materi tersebut juga relevan untuk membentuk sikap, karakter, moral, dan etika sebagai calon pendidik.",
                konsepUtama: "Filosofi pendidikan nasional, pemikiran Ki Hajar Dewantara, pendidikan yang berpihak pada peserta didik, pendidikan nilai dan karakter, Pancasila, serta kode etik dan peran guru.",
                perubahanYangDilakukan: "Saya ingin menjadi guru yang lebih reflektif, beretika, dan mampu menjadi teladan bagi peserta didik dengan menerapkan nilai-nilai Pancasila serta prinsip pendidikan Ki Hajar Dewantara dalam setiap proses pembelajaran."
            },
            {
                namaMataKuliah: "Pembelajaran Mendalam dan Asesmen Dasar",
                dosen: "Dr. Meini Sondang Sumbawati, M.Pd.",
                deskripsi: "Mata kuliah Pembelajaran Mendalam dan Asesmen Umum membekali calon guru dalam merancang, menerapkan, dan mengevaluasi pembelajaran yang bermakna, kontekstual, dan berpusat pada murid. Mata kuliah ini menekankan penerapan prinsip Pembelajaran Mendalam dan asesmen yang adil serta berkelanjutan, yang diintegrasikan dengan praktik PPL untuk mengembangkan kompetensi pedagogis dan menciptakan pengalaman belajar yang transformatif.",
                connection: "Materi ini terhubung langsung dengan praktik saya dalam merancang dan mengevaluasi pembelajaran yang bermakna, kontekstual, dan berpusat pada murid, khususnya melalui integrasi dengan PPL.",
                challenge: "Tantangan yang dihadapi adalah merancang asesmen yang benar-benar adil dan mendukung proses belajar peserta didik, bukan sekadar mengukur hasil akhir semata.",
                concept: "Konsep utama yang dipelajari adalah prinsip pembelajaran mendalam serta penerapan asesmen yang adil, berkelanjutan, dan mendukung kualitas proses belajar.",
                change: "Saya dapat merancang pembelajaran dan asesmen yang lebih reflektif terhadap proses belajar siswa, tidak hanya berfokus pada produk akhir.",
                artefak: "Rancangan modul ajar dan instrumen asesmen yang disusun serta diujicobakan selama praktik PPL.",
                alasan: "Artefak ini menjadi bukti langsung penerapan konsep pembelajaran mendalam dan asesmen dalam praktik pembelajaran nyata di sekolah.",
                konsepUtama: "Pembelajaran dan asesmen yang efektif harus terintegrasi, berpusat pada murid, dan mendukung pertumbuhan belajar secara berkelanjutan.",
                perubahanYangDilakukan: "Saya akan menerapkan asesmen formatif secara lebih konsisten untuk memantau proses belajar, bukan hanya asesmen sumatif di akhir pembelajaran"
            },
            {
                namaMataKuliah: "Pola Pikir Bertumbuh (Growth mindset) dalam Pembelajaran",
                dosen: "Dr. Rina Harimurti, S.Pd., M.T.",
                deskripsi: "Mata kuliah ini membekali peserta PPG Calon Guru dengan pemahaman dan keterampilan menerapkan growth mindset dalam pembelajaran. Mahasiswa mempelajari konsep pola pikir bertumbuh, neuroplasticity, strategi belajar, refleksi, serta peran guru dalam memberikan umpan balik konstruktif, membangun ketekunan, keberanian mencoba, dan menciptakan budaya kelas yang mendukung perkembangan potensi peserta didik.",
                connection: "Materi ini terhubung dengan peran saya sebagai fasilitator pembelajaran yang mendorong keberanian peserta didik untuk mencoba dan menumbuhkan pola pikir bertumbuh.",
                challenge: " Tantangan yang saya hadapi adalah mengubah kecenderungan pola pikir tetap (fixed mindset) yang kadang muncul saat menghadapi kesulitan belajar, baik pada diri sendiri maupun saat membimbing siswa.",
                concept: "Konsep utama yang dipelajari adalah dasar teori growth mindset, kaitannya dengan neuroplastisitas otak, serta strategi umpan balik yang membangun dan menumbuhkan ketekunan.",
                change: "Saya dapat menerapkan strategi umpan balik yang lebih membangun dan menciptakan budaya kelas yang mendukung perkembangan potensi peserta didik secara berkelanjutan.",
                artefak: "Hasil tugas dan aktivitas pembelajaran pada LMS Mata Kuliah Pola Pikir Bertumbuh, khususnya materi tentang cara pandang growth mindset, cara kerja otak, pengembangan pola pikir bertumbuh, dan penerapannya dalam pembelajaran.",
                alasanArtefak: "Artefak ini dipilih karena menunjukkan proses pemahaman saya dari konsep dasar hingga penerapan growth mindset dalam konteks pendidikan.",
                konsepUtama: "KSaya mempelajari perbedaan fixed mindset dan growth mindset, neuroplasticity, pentingnya ketekunan, serta peran guru dalam menciptakan pembelajaran yang mendorong siswa untuk berani mencoba dan berkembang.",
                perubahanYangDilakukan: "Saya mulai membiasakan diri melihat kesulitan sebagai bagian dari proses belajar, menghargai usaha dan proses, serta berupaya memberikan umpan balik yang membangun agar peserta didik tidak takut melakukan kesalahan dan terus berkembang."
            },
            {
                namaMataKuliah: "Pengembangan Kebugaran Jasmani",
                dosen: "Nafisa Arif Pambudi, M.Pd.",
                deskripsi: "Mata kuliah Pengembangan Kebugaran Jasmani membekali mahasiswa PPG dengan pemahaman dan keterampilan untuk meningkatkan kebugaran, kesehatan mental, dan personal wellbeing. Mata kuliah ini juga menekankan peran guru sebagai teladan dan promotor budaya hidup sehat, serta agen perubahan dalam menciptakan lingkungan sekolah yang aman, sehat, inklusif, dan aktif.",
                connection: "Materi ini terhubung dengan personal wellbeing saya sebagai calon guru, yang menjadi fondasi bagi kesiapan profesional dan kemampuan menjadi teladan gaya hidup sehat bagi siswa.",
                challenge: "Tantangan yang saya hadapi adalah menjaga konsistensi aktivitas fisik dan pola hidup sehat di tengah padatnya tugas perkuliahan PPG, serta memahami keterkaitan kesehatan fisik dan mental sebagai satu kesatuan.",
                concept: "Konsep utama yang dipelajari adalah kebugaran jasmani dan kesehatan mental sebagai fondasi kesejahteraan personal dan profesional guru, sekaligus prasyarat terciptanya iklim belajar yang aman dan inklusif.",
                change: "Saya berkomitmen menerapkan gaya hidup aktif secara personal secara lebih konsisten, serta merancang strategi promosi budaya hidup sehat yang kontekstual sesuai karakteristik satuan pendidikan.",
                artefak: "Jurnal aktivitas fisik mingguan dan rancangan program promosi budaya hidup sehat untuk lingkungan sekolah.",
                alasanArtefak: "Artefak ini membuktikan penerapan gaya hidup sehat secara personal sekaligus upaya mentransfer kesadaran tersebut ke lingkungan sekolah.",
                konsepUtama: "Guru yang sehat secara fisik dan mental adalah prasyarat bagi terciptanya budaya belajar yang sehat pula bagi peserta didik.",
                perubahanYangDilakukan: "Saya dapat menjadwalkan aktivitas fisik secara rutin dan menjadi contoh nyata bagi siswa dalam menerapkan pola hidup sehat."
            },
            {
                namaMataKuliah: "Literasi Kesehatan Mental",
                dosen: "-",
                deskripsi: "Mata kuliah Literasi Kesehatan Mental membekali mahasiswa PPG dengan pemahaman tentang kesehatan mental, cara mengenali masalah psikologis, melawan stigma, serta memberikan dukungan awal. Mata kuliah ini juga menekankan peran guru dalam menciptakan lingkungan belajar yang aman, sehat, dan mendukung kesejahteraan mental peserta didik.",
                connection: "Materi ini terhubung dengan peran saya sebagai calon guru dalam memahami pentingnya kesehatan mental peserta didik serta menciptakan lingkungan belajar yang aman, nyaman, dan bebas stigma.",
                challenge: "Tantangan yang saya hadapi adalah memahami kondisi psikologis peserta didik dengan tepat serta menghindari anggapan atau stigma terhadap siswa yang mengalami masalah kesehatan mental.",
                concept: "Konsep utama yang dipelajari adalah kesehatan mental, perbedaan antara masalah kesehatan mental dan gangguan mental, cara melawan stigma, Psychologi, serta pentingnya dukungan dan iklim kelas yang positif.",
                change: "Saya berkomitmen untuk lebih peka terhadap kondisi mental peserta didik, memberikan dukungan yang tepat, mengurangi stigma, serta menciptakan suasana pembelajaran yang mendukung rasa aman, percaya diri, dan kesejahteraan mental siswa.",
                artefak: "Refleksi 4C tentang Literasi Kesehatan Mental yang dipadukan dengan analisis studi kasus mengenai stigma kesehatan mental dan penerapan Psychologidi lingkungan sekolah.",
                alasanArtefak: "Artefak ini menunjukkan pemahaman saya terhadap pentingnya literasi kesehatan mental, kemampuan mengenali masalah psikologis, serta kesiapan guru dalam memberikan dukungan awal dan menciptakan lingkungan belajar yang bebas stigma.",
                konsepUtama: "Guru perlu memahami kesehatan mental, membedakan masalah psikologis dengan gangguan mental, melawan stigma, serta menerapkan dukungan awal melalui Psychologi untuk mendukung kesejahteraan peserta didik.",
                perubahanYangDilakukan: "Saya dapat menerapkan komunikasi yang empatik, lebih peka terhadap kebutuhan emosional peserta didik, serta membangun budaya kelas yang menghargai kesehatan mental dan bebas dari stigma."
            },
            {
                namaMataKuliah: "Praktik Pengalaman Lapangan (PPL) Terbimbing",
                dosen: "Dr. Meini Sondang Sumbawati, M.Pd.",
                deskripsi: "Mata kuliah PPL Terbimbing dirancang untuk melatih mahasiswa secara profesional melalui praktik langsung di mitra sekolah, meliputi tahapan observasi, asistensi, dan praktik pembelajaran terbimbing. Mata kuliah ini bertujuan untuk mengembangkan kompetensi pedagogik dan profesional mahasiswa melalui penerapan Pembelajaran Mendalam serta integrasi teori dari mata kuliah lain. Dengan demikian, mahasiswa diharapkan mampu merancang dan melaksanakan pembelajaran yang kritis, reflektif, dan berorientasi pada kebutuhan murid.",
                connection: "Mata kuliah ini terhubung langsung dengan pengalaman saya sebagai calon guru melalui kegiatan observasi, asistensi, dan praktik pembelajaran di sekolah mitra. Kegiatan tersebut membantu saya menghubungkan teori yang dipelajari dengan kondisi nyata di kelas.",
                challenge: "Tantangan yang saya hadapi adalah menyesuaikan perencanaan pembelajaran dengan karakteristik dan kebutuhan peserta didik, serta membangun kemampuan mengelola kelas dan melaksanakan pembelajaran secara efektif.",
                concept: "Konsep utama yang dipelajari adalah praktik pembelajaran terbimbing, kompetensi pedagogik dan profesional, Pembelajaran Mendalam, observasi kelas, serta refleksi terhadap proses pembelajaran.",
                change: "Saya berkomitmen untuk meningkatkan kemampuan dalam merancang dan melaksanakan pembelajaran yang lebih kritis, reflektif, berpusat pada peserta didik, serta menyesuaikan pembelajaran dengan kebutuhan dan karakteristik mereka.",
                artefak: "Modul ajar/RPP dan dokumentasi praktik pembelajaran terbimbing yang menunjukkan proses perencanaan, pelaksanaan, dan refleksi pembelajaran di sekolah mitra.",
                alasanArtefak: "Artefak ini dipilih karena menunjukkan penerapan langsung kompetensi pedagogik dan profesional yang diperoleh selama PPL, mulai dari merancang pembelajaran hingga mengevaluasi proses pembelajaran.",
                konsepUtama: "Konsep utama yang dipelajari adalah Pembelajaran Mendalam, pembelajaran berpusat pada peserta didik, pengelolaan kelas, perencanaan pembelajaran, praktik mengajar, dan refleksi pembelajaran.",
                perubahanYangDilakukan: "Saya dapat meningkatkan kemampuan dalam merancang pembelajaran yang lebih terstruktur dan bermakna, menggunakan strategi yang sesuai dengan karakteristik peserta didik, serta melakukan refleksi secara rutin untuk memperbaiki kualitas pembelajaran.",
                
                // Perangkat Pembelajaran PPL Terbimbing
                perangkatPembelajaran: [
                    {
                        judul: "Modul Ajar 1 - PENGENALAN AI DAN LIBRARY KECERDASAN ARTIFISIAL",
                        deskripsi: "Modul ajar untuk pembelajaran terbimbing dengan topik materi Pengenalan AI dan Library Kercerdasan Artifisial",
                        fileUrl: "https://drive.google.com/file/d/1KHPA4kDQYQ_Vuigo5WOpigBxbw-9YIM7/view?usp=drive_link"
                    },
                    {
                        judul: "LKPD 1 -  PENGENALAN AI DAN LIBRARY KECERDASAN ARTIFISIAL",
                        deskripsi: "Lembar Kerja Peserta Didik Materi Pengenalan AI dan Library Kercerdasan Artifisial",
                        fileUrl: "https://drive.google.com/file/d/1dekasmSUeUikp-ZNzcEqjFD5_f4PxjJr/view?usp=drive_link"
                    },
                    {
                        judul: "Media Pembelajaran 1 -  PENGENALAN AI DAN LIBRARY KECERDASAN ARTIFISIAL",
                        deskripsi: "Media presentasi dan bahan ajar materi Pengenalan AI dan Library Kercerdasan Artifisial",
                        fileUrl: "https://docs.google.com/presentation/d/1dLyqVQYtPNvK6M8THY6p-Ll43vwBDGLR/edit?usp=drive_link&ouid=104547800552435424601&rtpof=true&sd=true"
                    },
                    {
                        judul: "Modul Ajaar 2 - IMPLEMENTASI FITUR AI DAN PRESENTASI PROYEK",
                        deskripsi: "Rencana Pelaksanaan Pembelajaran Materi Implrmentasi Fitur AI dan Presentasi Proyek",
                        fileUrl: "perangkat/ppl-terbimbing/rpp-1.pdf"
                    },
                    {
                        judul: "LKPD 2 - IMPLEMENTASI FITUR AI DAN PRESENTASI PROYEK",
                        deskripsi: "Lembar Kerja Peserta Didik Materi Implrmentasi Fitur AI dan Presentasi Proyek",
                        fileUrl: "https://drive.google.com/file/d/1Q05E21M3dAjCoIQZGy5YWJYMpIFsxX-d/view?usp=drive_link"
                    },
                    {
                        judul: "Media Pembelajaran 2 - Implrmentasi Fitur AI dan Presentasi Proyek",
                        deskripsi: "Media presentasi dan bahan ajar materi Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        fileUrl: "https://docs.google.com/presentation/d/1RjXDW2251KPA2UR77-KPfO71MWsZ_rVF/edit?usp=sharing&ouid=104547800552435424601&rtpof=true&sd=true"
                    },
                    {
                        judul: "Modul Ajar 3 - Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        deskripsi: "Modul ajar untuk pembelajaran terbimbing dengan topik materi Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        fileUrl: "https://drive.google.com/file/d/15T2vFEkbrCkqZMBApgCdaKC2Zwf3gUaZ/view?usp=drive_link"
                    },
                    {
                        judul: "LKPD 3 - Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        deskripsi: "Lembar Kerja Peserta Didik Materi Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        fileUrl: "https://drive.google.com/file/d/1pliZyfmrGr_vMY-BIQAz09OFgpS6JCUa/view?usp=drive_link"
                    },
                    {
                        judul: "Media Pembelajaran 3 - Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        deskripsi: "Media presentasi dan bahan ajar materi Proyek analisis Data Hutanku Dulu, Kini, dan Yang Akan Datang",
                        fileUrl: "https://docs.google.com/presentation/d/1euEDB9UTLkavsDk8FzCipuinI5GebMj1/edit?usp=drive_link&ouid=104547800552435424601&rtpof=true&sd=true"
                    },
                    
                ]
            }
        ],
        
        // SEMESTER 2 - 7 Mata Kuliah
        semester2: [
            {
                namaMataKuliah: "Pencegahan dan Penanganan Kekerasan di Perguruan Tinggi",
                dosen: "-",
                deskripsi: "Mata kuliah ini membekali mahasiswa PPG dengan pemahaman tentang pentingnya menciptakan lingkungan pendidikan yang aman dan menyenangkan, termasuk memahami definisi, asas, cakupan, serta budaya sekolah yang mendukung keamanan dan kenyamanan. Mahasiswa juga diarahkan untuk memahami berbagai upaya pencegahan dan penanganan kekerasan sehingga mampu berperan dalam menciptakan lingkungan pendidikan yang aman, nyaman, dan bebas dari kekerasan.",
                connection: "Materi ini terhubung dengan peran saya sebagai calon guru dalam menciptakan lingkungan pendidikan yang aman, nyaman, inklusif, dan bebas dari berbagai bentuk kekerasan.",
                challenge: "Tantangan yang saya hadapi adalah meningkatkan kepekaan dalam mengenali berbagai bentuk kekerasan, memahami cara merespons kejadian secara tepat, serta berani mengambil tindakan ketika menemukan indikasi kekerasan di lingkungan pendidikan.",
                concept: "Konsep utama yang dipelajari adalah bentuk-bentuk kekerasan, pencegahan dan penanganan kekerasan, hak korban dan saksi, mekanisme pelaporan, serta pentingnya menciptakan lingkungan pendidikan yang ramah, aman, inklusif, dan setara. Materi ini juga sejalan dengan Permendikbudristek Nomor 55 Tahun 2024 yang mengatur pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi",
                change: "Saya berkomitmen untuk lebih peka terhadap potensi kekerasan, membangun komunikasi yang menghargai orang lain, serta ikut menciptakan lingkungan pembelajaran yang aman, inklusif, dan bebas dari kekerasan.",
                artefak: "Studi kasus dan hasil analisis mengenai bentuk, pencegahan, serta penanganan kekerasan di lingkungan pendidikan",
                alasanArtefak: "Artefak ini menunjukkan pemahaman saya dalam mengenali berbagai bentuk kekerasan serta menentukan langkah yang tepat untuk mencegah dan menanganinya.",
                konsepUtama: "Konsep utama yang dipelajari adalah bentuk-bentuk kekerasan, pencegahan, penanganan, pelaporan, perlindungan korban dan saksi, serta penciptaan lingkungan pendidikan yang aman dan inklusif",
                perubahanYangDilakukan: "Saya akan meningkatkan kepedulian dan keberanian untuk mencegah kekerasan, membangun komunikasi yang saling menghargai, serta menjadi bagian dari terciptanya lingkungan pendidikan yang aman dan bebas dari kekerasan."
            },
            {
                namaMataKuliah: "Pembelajaran Mendalam dan Asesmen Lanjut",
                dosen: "Dr. Rina Harimurti, S.Pd., M.T.",
                deskripsi: "Mata kuliah Pembelajaran Mendalam dan Asesmen (Umum) Lanjut membekali mahasiswa menerapkan pembelajaran mendalam berbasis data asesmen. Fokusnya pada penerapan DUP, TaRL, dan CRT untuk merancang pembelajaran yang adaptif, inklusif, bermakna, dan berpihak pada kebutuhan murid.",
                connection: "Materi ini terhubung langsung dengan praktik pembelajaran di kelas dan PPL, terutama dalam menggunakan hasil asesmen untuk memahami kebutuhan belajar murid serta merancang pembelajaran yang adaptif dan berpihak pada murid.",
                challenge: "Tantangan yang dihadapi adalah mengintegrasikan data hasil asesmen, kebutuhan belajar yang beragam, dan konteks budaya murid dalam merancang pembelajaran yang adil, inklusif, dan bermakna.",
                concept: "Konsep utama yang dipelajari meliputi prinsip pembelajaran mendalam serta penerapan Desain Universal untuk Pembelajaran (DUP), Teaching at the Right Level (TaRL), dan Culturally Responsive Teaching (CRT).",
                change: "Saya lebih mampu menggunakan hasil asesmen sebagai dasar dalam merancang strategi pembelajaran yang adaptif, inklusif, responsif terhadap budaya, serta sesuai dengan kebutuhan dan karakteristik setiap murid.",
                artefak: "Hasil observasi profil peserta didik, catatan studi kasus kolaboratif, dan hasil simulasi microteaching.",
                alasanArtefak: "Artefak ini menunjukkan bahwa saya belajar memahami kebutuhan dan karakteristik peserta didik sebelum merancang pembelajaran. Saya juga belajar menggunakan hasil asesmen sebagai dasar untuk menentukan pembelajaran yang sesuai dengan kemampuan dan kebutuhan murid. Melalui studi kasus dan microteaching, saya dapat melihat penerapan DUP, TaRL, dan CRT dalam merancang pembelajaran yang adaptif, inklusif, bermakna, dan berpihak pada murid. Artefak ini juga membantu saya mengetahui kekurangan dalam pembelajaran sehingga dapat menjadi bahan perbaikan untuk pembelajaran berikutnya.",
                konsepUtama: "Saya belajar bahwa pembelajaran perlu dirancang berdasarkan kebutuhan, kemampuan, dan karakteristik peserta didik. Asesmen menjadi bagian penting untuk mengetahui kondisi peserta didik sehingga pembelajaran dapat dibuat lebih sesuai, bermakna, dan berpihak pada murid.",
                perubahanYangDilakukan: "Ke depan saya akan lebih memperhatikan hasil asesmen dan kondisi peserta didik sebelum merancang pembelajaran. Saya juga akan berusaha menerapkan pembelajaran yang lebih adaptif dengan menyesuaikan tingkat kemampuan dan kebutuhan setiap murid."
            },
            {
                namaMataKuliah: "Pembelajaran Sosial Emosional",
                dosen: "Dr. Yeni Anistyasari, S.Pd., M.Kom.",
                deskripsi: "Mata kuliah Pembelajaran Sosial Emosional membekali calon guru untuk memahami dan menerapkan pembelajaran sosial emosional, membangun relasi positif dengan murid, serta menciptakan pembelajaran yang bermakna, berkesadaran, dan mendukung perkembangan murid secara holistik.",
                connection: "Materi ini berkaitan dengan praktik saya sebagai calon guru dalam membangun hubungan yang baik dengan murid. Saya belajar bahwa hubungan yang positif dapat membuat murid merasa aman, nyaman, dan lebih siap mengikuti pembelajaran.",
                challenge: "Tantangan yang saya hadapi adalah memahami kondisi sosial dan emosional setiap murid yang berbeda serta bagaimana meresponsnya dengan tepat tanpa mengabaikan kebutuhan belajar mereka.",
                concept: "Konsep utama yang saya pelajari adalah pentingnya kesadaran diri, pengelolaan emosi, empati, komunikasi, dan membangun hubungan positif dalam menciptakan pembelajaran yang bermakna dan mendukung perkembangan murid secara menyeluruh.",
                change: "Ke depan saya ingin lebih memperhatikan kondisi sosial dan emosional murid sebelum dan selama pembelajaran. Saya juga akan berusaha membangun komunikasi yang lebih positif agar murid merasa dihargai, didengarkan, dan nyaman dalam belajar.",
                artefak: "Hasil pembelajaran dan refleksi dari materi CASEL, peran guru sebagai teladan, experiential learning, dan school well-being.",
                alasanArtefak: "Melalui materi CASEL, saya memahami pentingnya kesadaran diri, pengelolaan emosi, empati, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab. Materi tentang guru sebagai teladan juga membuat saya menyadari bahwa sikap dan cara guru berinteraksi dapat menjadi contoh bagi murid. Dari experiential learning dan school well-being, saya belajar pentingnya menciptakan pengalaman belajar dan lingkungan sekolah yang aman, nyaman, dan mendukung perkembangan murid.",
                konsepUtama: "Saya memahami bahwa pembelajaran sosial emosional penting untuk membantu murid mengenali dan mengelola emosinya, membangun hubungan yang baik, serta membuat keputusan yang bertanggung jawab. Saya juga belajar bahwa guru perlu menjadi teladan dan menciptakan lingkungan belajar yang aman, nyaman, dan mendukung murid.",
                perubahanYangDilakukan: "Setelah mengikuti mata kuliah ini, saya menjadi lebih memahami pentingnya memperhatikan kondisi sosial dan emosional murid dalam proses pembelajaran. Saya tidak lagi hanya melihat kemampuan akademik murid, tetapi juga berusaha memahami perasaan, kebutuhan, dan hubungan mereka dengan lingkungan sekitar. Ke depan, saya ingin menerapkan komunikasi yang lebih positif, menjadi teladan yang baik, dan menciptakan suasana kelas yang aman, nyaman, serta membuat murid merasa dihargai."
            },
            {
                namaMataKuliah: "Praktik Pengalaman Lapangan (PPL) Mandiri",
                dosen: "Prof. Dr. Ir. Achmad Imam Agung, M.Pd.",
                deskripsi: "Mata kuliah PPL Mandiri membekali calon guru untuk merancang dan melaksanakan pembelajaran serta asesmen secara mandiri, kontekstual, dan berpihak pada peserta didik. Melalui observasi, praktik mengajar, kegiatan nonmengajar, dan refleksi, mahasiswa belajar menjadi guru yang profesional, adaptif, dan reflektif.",
                connection: "Kegiatan PPL Mandiri berkaitan langsung dengan praktik saya di sekolah, terutama dalam merancang, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan kebutuhan peserta didik.",
                challenge: "Tantangan yang saya hadapi adalah menyesuaikan rancangan pembelajaran dengan kondisi nyata di kelas serta mengelola pembelajaran agar tetap berjalan sesuai kebutuhan dan karakteristik peserta didik.",
                concept: "Konsep utama yang saya pelajari adalah pentingnya pembelajaran yang kontekstual, berpihak pada peserta didik, dan didukung oleh asesmen. Saya juga belajar bahwa guru perlu melakukan refleksi untuk memperbaiki pembelajaran secara berkelanjutan.",
                change: "Setelah mengikuti PPL Mandiri, saya menjadi lebih percaya diri dalam merancang dan melaksanakan pembelajaran secara mandiri. Saya juga lebih terbiasa melakukan refleksi terhadap proses pembelajaran dan menyesuaikannya dengan kebutuhan peserta didik.",
                artefak: "Hasil observasi lingkungan belajar, perangkat pembelajaran, dokumentasi praktik pembelajaran terbimbing dan mandiri, serta hasil refleksi selama kegiatan PPL Mandiri.",
                alasanArtefak: "Artefak ini juga membantu saya melihat perkembangan kemampuan saya dalam merancang, melaksanakan, dan mengevaluasi pembelajaran secara mandiri. Dari pengalaman tersebut, saya dapat mengetahui hal yang sudah baik dan bagian yang masih perlu diperbaiki, sehingga menjadi bahan refleksi untuk meningkatkan kemampuan saya sebagai calon guru.",
                konsepUtama: "Saya belajar bahwa menjadi guru tidak hanya mampu menyampaikan materi, tetapi juga harus mampu merancang dan melaksanakan pembelajaran sesuai dengan kondisi dan kebutuhan peserta didik. Melalui PPL Mandiri, saya belajar pentingnya observasi, persiapan, praktik mengajar, asesmen, dan refleksi untuk menghasilkan pembelajaran yang bermakna.",
                perubahanYangDilakukan: "Setelah mengikuti PPL Mandiri, saya menjadi lebih percaya diri dalam merancang dan melaksanakan pembelajaran secara mandiri. Saya juga menjadi lebih terbiasa menyesuaikan pembelajaran dengan kondisi kelas, memperhatikan kebutuhan peserta didik, dan melakukan refleksi untuk memperbaiki pembelajaran berikutnya.",
                
                // Perangkat Pembelajaran PPL Mandiri
                perangkatPembelajaran: [
                    {
                        judul: "Modul Ajar 1 - KELAS IX/I LAPORAN DAN PRESENTASI",
                        deskripsi: "Modul ajar untuk pembelajaran mandiri dengan topik Laporan dan Presentasi",
                        fileUrl: "https://drive.google.com/file/d/1m3VdTUhNma3-vo4E2Y0BwxABnU9h3s8a/view?usp=sharing"
                    },
                    {
                        judul: "LKPD 2 - KELAS IX/I LAPORAN DAN PRESENTASI",
                        deskripsi: "Lembar Kerja Peserta Didik untuk pembelajaran mandiri Laporan dan Presentasi",
                        fileUrl: "https://drive.google.com/file/d/1XuonmySQ68gc_cPMtBZZR-MxuLl8uqXF/view?usp=sharing"
                    },
                    {
                        judul: "Media Pembelajaran 2 - KELAS IX/I LAPORAN DAN PRESENTASI",
                        deskripsi: "Media untuk pembelajaran Laporan dan Presentasi.",
                        fileUrl: "https://docs.google.com/presentation/d/1H1Fdx-mbU-tRZkEKAvspFgjCvNOG_NDt/edit?usp=sharing&ouid=104547800552435424601&rtpof=true&sd=true"
                    },
                    {
                        judul: "Modul Ajar 2 - LAPORAN DAN PRESENTASI",
                        deskripsi: "Modul ajar untuk pembelajaran mandiri dengan topik Laporan dan Presentasi",
                        fileUrl: "https://drive.google.com/file/d/1m3VdTUhNma3-vo4E2Y0BwxABnU9h3s8a/view?usp=sharing"
                    },
                    {
                        judul: "LKPD 2 - LAPORAN DAN PRESENTASI ",
                        deskripsi: "Lembar Kerja Peserta Didik untuk pembelajaran mandiri Laporan dan Presentasi Pertemuan 2 Tentang Presentasi",
                        fileUrl: "https://drive.google.com/file/d/1L17KaoBZ5hYtBhLLbfVylhH_q-Tmbi4-/view?usp=sharing"
                    },
                    {
                        judul: "Media Pembelajaran 2 - LAPORAN DAN PRESENTASI",
                        deskripsi: "Media Pembelajaran Laporan dan Presentasi Pertemuan 2 Tentang Presentasi",
                        fileUrl: "https://docs.google.com/presentation/d/1TPh2StMpP71pI9KuetfQ4Qwnm87vbv1E/edit?usp=sharing&ouid=104547800552435424601&rtpof=true&sd=true"
                    },
                    
                ],
                
                // Video Pembelajaran PPL Mandiri
                //videoPembelajaran: [
                  //  {
                    //    judul: "Video Pembelajaran 1 - [Judul Materi]",
                      //  deskripsi: "Dokumentasi praktik mengajar pertama di kelas...",
                        //videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
                        //durasi: "15 menit",
                        //tanggal: "Januari 2026"
                    //}
                //]
            },
            {
                namaMataKuliah: "Projek Kepemimpinan",
                dosen: "Drs. Bambang Sujatmiko, M.T.",
                deskripsi: "Mata kuliah Projek Kepemimpinan membekali calon guru untuk mengembangkan kemampuan kepemimpinan melalui pengalaman merancang dan menjalankan projek nyata. Mahasiswa juga belajar berkolaborasi, berkomunikasi, dan memecahkan masalah secara langsung.",
                connection: "Projek Kepemimpinan berkaitan dengan pengalaman saya dalam bekerja sama dengan orang lain untuk merancang dan menjalankan sebuah kegiatan. Saya belajar bahwa kemampuan memimpin sangat dibutuhkan dalam mengatur pembagian tugas dan mencapai tujuan bersama.",
                challenge: "Tantangan yang saya hadapi adalah menyatukan pendapat dalam kelompok, membagi tugas dengan baik, dan memastikan setiap anggota dapat menjalankan tanggung jawabnya.",
                concept: "Konsep utama yang saya pelajari adalah kepemimpinan, komunikasi, kolaborasi, dan pemecahan masalah. Saya memahami bahwa seorang pemimpin tidak hanya memberikan arahan, tetapi juga mampu mendengarkan, bekerja sama, dan mengambil keputusan.",
                change: "Setelah mengikuti mata kuliah ini, saya menjadi lebih percaya diri dalam berkomunikasi dan bekerja sama dalam kelompok. Saya juga lebih memahami pentingnya tanggung jawab, inisiatif, dan kemampuan mengambil keputusan dalam menjalankan sebuah projek.",
                artefak: "Hasil perencanaan dan pelaksanaan projek kepemimpinan, pembagian tugas dalam kelompok, dokumentasi kegiatan, serta hasil monitoring, evaluasi, dan refleksi projek.",
                alasanArtefak: "Melalui proses pelaksanaan, monitoring, dan evaluasi, saya juga belajar menghadapi kendala dan mencari solusi bersama. Artefak ini membantu saya melihat bahwa kepemimpinan bukan hanya tentang menjadi pemimpin, tetapi juga tentang mampu bekerja sama, mengambil keputusan, bertanggung jawab, dan melakukan refleksi untuk memperbaiki pelaksanaan projek.",
                konsepUtama: "Saya belajar bahwa kepemimpinan bukan hanya tentang memimpin orang lain, tetapi juga tentang mampu bekerja sama, berkomunikasi, membagi tugas, mengambil keputusan, dan bertanggung jawab terhadap tujuan bersama. Saya juga belajar pentingnya perencanaan, pelaksanaan, serta evaluasi dalam menjalankan sebuah projek.",
                perubahanYangDilakukan: "Setelah mengikuti mata kuliah ini, saya menjadi lebih percaya diri dalam bekerja sama dan berkomunikasi dengan anggota kelompok. Saya juga lebih berani mengambil tanggung jawab, menyampaikan pendapat, dan mencari solusi ketika menghadapi kendala dalam pelaksanaan projek."
            },
            {
               namaMataKuliah: "Pendidikan Inklusi",
                dosen: "Prof. Dr. Wagino, M.Pd.",
                deskripsi: "Mata kuliah Pendidikan Inklusi di Sekolah membekali mahasiswa untuk memahami dan menerapkan pendidikan yang sesuai dengan kebutuhan peserta didik berkebutuhan khusus, mulai dari identifikasi, asesmen, perencanaan, pelaksanaan, hingga evaluasi pembelajaran akomodatif melalui Project Based Learning.",
                connection: "Mata kuliah ini berkaitan dengan praktik saya sebagai calon guru dalam memahami kebutuhan setiap peserta didik, termasuk peserta didik dengan kebutuhan yang beragam, agar dapat mengikuti pembelajaran dengan baik.",
                challenge: "Tantangan yang saya hadapi adalah memahami kebutuhan setiap peserta didik dan menentukan bentuk pembelajaran yang sesuai, sehingga semua peserta didik tetap dapat belajar dan berpartisipasi.",
                concept: "Konsep utama yang saya pelajari adalah pentingnya identifikasi, asesmen, dan penyusunan profil peserta didik sebagai dasar dalam merancang pembelajaran yang akomodatif dan sesuai dengan kebutuhan masing-masing peserta didik.",
                change: "Setelah mengikuti mata kuliah ini, saya menjadi lebih memahami bahwa setiap peserta didik memiliki kebutuhan dan kemampuan yang berbeda. Saya ingin lebih memperhatikan kebutuhan tersebut dan merancang pembelajaran yang dapat memberikan kesempatan belajar yang setara bagi semua peserta didik.",
                artefak: "Hasil identifikasi dan asesmen awal peserta didik, profil kebutuhan peserta didik, serta rancangan dan pelaksanaan pembelajaran akomodatif di sekolah inklusif.",
                alasanArtefak: "Dari artefak tersebut, saya juga belajar merancang dan melaksanakan pembelajaran yang akomodatif agar semua peserta didik dapat mengikuti pembelajaran sesuai dengan kebutuhannya. Pengalaman ini membuat saya memahami bahwa pembelajaran inklusif bukan berarti memberikan perlakuan yang sama kepada semua murid, tetapi memberikan dukungan yang sesuai agar setiap murid memiliki kesempatan untuk belajar dan berkembang.",
                konsepUtama: "Saya belajar bahwa setiap peserta didik memiliki kebutuhan dan kemampuan yang berbeda sehingga pembelajaran perlu disesuaikan. Identifikasi dan asesmen menjadi dasar untuk mengetahui kebutuhan peserta didik dan merancang pembelajaran yang akomodatif agar semua murid dapat belajar dan berkembang.",
                perubahanYangDilakukan: "Setelah mengikuti mata kuliah ini, saya menjadi lebih peka terhadap perbedaan kebutuhan peserta didik. Saya tidak lagi melihat semua murid dengan cara yang sama, tetapi lebih memperhatikan kebutuhan masing-masing dan berusaha memberikan dukungan serta pembelajaran yang sesuai agar semua murid dapat terlibat dalam pembelajaran."
            },
            {
                namaMataKuliah: "Seminar Pendidikan Profesi Guru",
                dosen: "Drs. Bambang Sujatmiko, M.T.",
                deskripsi: "Mata kuliah Seminar PPG membekali mahasiswa untuk melakukan refleksi berbasis data, menyusun karya inovasi pendidikan, serta menyampaikan pemikiran dan karya secara efektif melalui kegiatan seminar dan portofolio digital.",
                connection: "Mata kuliah ini berkaitan dengan pengalaman saya selama mengikuti PPG, terutama dalam merefleksikan pengalaman belajar dan menyusun karya inovasi pendidikan.",
                challenge: "Tantangan yang saya hadapi adalah mengolah pengalaman dan data menjadi sebuah pemikiran atau karya yang jelas, serta menyampaikannya dengan percaya diri dan mudah dipahami saat seminar.",
                concept: "Konsep utama yang saya pelajari adalah pentingnya refleksi berbasis data, komunikasi yang efektif, dan kemampuan menyampaikan ide atau karya secara sistematis dan bertanggung jawab.",
                change: "Setelah mengikuti mata kuliah ini, saya menjadi lebih terbiasa melakukan refleksi terhadap pengalaman belajar dan menyampaikan pendapat dengan lebih terstruktur. Saya juga lebih percaya diri dalam mempresentasikan ide dan karya di depan orang lain.",
                artefak: "Portofolio refleksi pengalaman belajar selama mengikuti PPG dan karya inovasi pendidikan yang dipresentasikan dalam kegiatan Seminar PPG.",
                alasanArtefak: "Saya memilih artefak ini karena dapat menunjukkan perkembangan diri saya selama mengikuti program PPG, mulai dari mengenali diri, merefleksikan pengalaman belajar semester 1 dan semester 2, hingga melakukan refleksi terhadap keseluruhan proses PPG. Melalui refleksi tersebut, saya dapat melihat perkembangan pengetahuan, keterampilan, dan pengalaman yang saya peroleh selama mengikuti PPG. Karya inovasi pendidikan juga menjadi bagian penting karena saya belajar mengembangkan ide atau solusi berdasarkan permasalahan yang saya temui dalam pembelajaran. Melalui kegiatan seminar, saya belajar menyampaikan hasil pemikiran dan karya secara lebih terstruktur, menggunakan data atau pengalaman sebagai dasar, serta menerima masukan untuk pengembangan diri dan karya saya.",
                konsepUtama: "Saya belajar bahwa refleksi penting untuk melihat perkembangan diri selama mengikuti PPG. Saya juga belajar menyampaikan pemikiran dan karya inovasi secara terstruktur, berdasarkan pengalaman dan data, serta mampu menerima masukan dari orang lain.",
                perubahanYangDilakukan: "Setelah mengikuti mata kuliah ini, saya menjadi lebih terbiasa melakukan refleksi terhadap pengalaman belajar dan melihat perkembangan diri saya. Saya juga menjadi lebih percaya diri dalam menyampaikan pendapat, mempresentasikan karya, dan menerima masukan untuk memperbaiki diri."
            }
        ]
    },
    
    // ===================================
    // DATA E-PORTFOLIO UTS
    // ===================================
    uts: {
        komponenPortfolio: [
            {
                judul: "📋 Produk Rancangan/Perencanaan Pembelajaran",
                tipe: "rancangan",
                intro: "Rancangan pembelajaran ini merupakan produk terbaik dari praktik mengajar mandiri Siklus 1 yang telah disusun secara sistematis dengan mengintegrasikan pendekatan student-centered learning dan teknologi pembelajaran.",
                
                metadata: {
                    judulDokumen: "Rencana Pelaksanaan Pembelajaran (RPP) - Siklus 1",
                    mataPelajaran: "Informatika",
                    kelas: "X / Ganjil",
                    alokasi: "3 x 45 menit"
                },
                
                // URL dokumen (bisa Google Drive, OneDrive, atau lokal)
                documentUrl: "https://drive.google.com/file/d/1m3VdTUhNma3-vo4E2Y0BwxABnU9h3s8a/view?usp=drive_link",
                downloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_DOCUMENT_ID",
                embedUrl: "https://drive.google.com/file/d/YOUR_DOCUMENT_ID/preview",
                
                highlights: [
                    "Tujuan pembelajaran yang terukur dan spesifik sesuai dengan Capaian Pembelajaran",
                    "Integrasi model pembelajaran Problem Based Learning (PBL)",
                    "Penggunaan media pembelajaran digital dan interaktif",
                    "Asesmen autentik yang beragam (diagnostic, formatif, dan sumatif)",
                    "Diferensiasi pembelajaran sesuai kebutuhan peserta didik"
                ],
                
                // Perangkat Pembelajaran UTS
                perangkatPembelajaran: [
                    {
                        judul: "Modul Ajar / RPP - Praktik Mengajar Mandiri Siklus 1",
                        deskripsi: "Rencana Pelaksanaan Pembelajaran lengkap dengan komponen Kurikulum Merdeka",
                        fileUrl: "https://drive.google.com/file/d/1m3VdTUhNma3-vo4E2Y0BwxABnU9h3s8a/view?usp=drive_link"
                        // CARA EDIT: Ganti YOUR_RPP_ID dengan ID file Google Drive Anda
                        // Contoh: "https://drive.google.com/file/d/1KHPA4kDQYQ_Vuigo5WOpigBxbw-9YIM7/view?usp=sharing"
                    },
                    {
                        judul: "LKPD 1 (Lembar Kerja Peserta Didik)",
                        deskripsi: "Lembar kerja untuk kegiatan pembelajaran siswa",
                        fileUrl: "https://drive.google.com/file/d/1XuonmySQ68gc_cPMtBZZR-MxuLl8uqXF/view?usp=drive_link"
                        // CARA EDIT: Paste link Google Drive LKPD Anda di sini
                    },
                    {
                        judul: "LKPD 2 (Lembar Kerja Peserta Didik)",
                        deskripsi: "Lembar kerja untuk kegiatan pembelajaran siswa",
                        fileUrl: "https://drive.google.com/file/d/1L17KaoBZ5hYtBhLLbfVylhH_q-Tmbi4-/view?usp=drive_link"
                        // CARA EDIT: Paste link Google Drive LKPD Anda di sini
                    },
                    {
                        judul: "Media Pembelajaran 1",
                        deskripsi: "Slide presentasi dan media pendukung pembelajaran",
                        fileUrl: "https://docs.google.com/presentation/d/1H1Fdx-mbU-tRZkEKAvspFgjCvNOG_NDt/edit?usp=drive_link&ouid=104547800552435424601&rtpof=true&sd=true"
                        // CARA EDIT: Untuk Google Slides, gunakan format ini
                        // Atau bisa juga: "https://drive.google.com/file/d/YOUR_ID/view" untuk file PPT
                    },
                    {
                        judul: "Media Pembelajaran 2",
                        deskripsi: "Slide presentasi dan media pendukung pembelajaran",
                        fileUrl: "https://docs.google.com/presentation/d/1TPh2StMpP71pI9KuetfQ4Qwnm87vbv1E/edit?usp=drive_link&ouid=104547800552435424601&rtpof=true&sd=true"
                        // CARA EDIT: Untuk Google Slides, gunakan format ini
                        // Atau bisa juga: "https://drive.google.com/file/d/YOUR_ID/view" untuk file PPT
                    },
                    {
                        judul: "Instrumen Asesmen",
                        deskripsi: "Rubrik penilaian dan instrumen asesmen pembelajaran",
                        fileUrl: "https://drive.google.com/file/d/YOUR_ASESMEN_ID/view?usp=sharing"
                        // CARA EDIT: Paste link rubrik/instrumen asesmen Anda
                    }
                ]
            },
            
            // {
            //     judul: "🎥 Video Pelaksanaan Praktik Mengajar",
            //     tipe: "video",
            //     intro: "Video dokumentasi pelaksanaan praktik mengajar mandiri pada mata pelajaran Informatika dengan topik Algoritma dan Pemrograman menggunakan pendekatan Problem Based Learning.",
                
            //     metadata: {
            //         judulVideo: "Praktik Mengajar Mandiri - Siklus 1",
            //         durasi: "30 menit",
            //         tanggal: "15 Januari 2026",
            //         lokasi: "SMAN 1 Surabaya"
            //     },
                
            //     // URL video YouTube atau Google Drive
            //     videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            //     // Atau Google Drive: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview"
                
            //     deskripsi: "Dalam video ini, saya melaksanakan pembelajaran sesuai dengan RPP yang telah disusun. Pembelajaran dimulai dengan apersepsi menggunakan masalah kontekstual, dilanjutkan dengan kegiatan inti di mana siswa bekerja dalam kelompok untuk memecahkan masalah algoritma, dan diakhiri dengan presentasi hasil serta refleksi pembelajaran.",
                
            //     highlights: [
            //         "Pembukaan dengan ice breaking dan apersepsi menarik",
            //         "Penyampaian tujuan pembelajaran dan langkah-langkah kegiatan",
            //         "Implementasi Problem Based Learning dengan masalah autentik",
            //         "Fasilitasi diskusi kelompok dan bimbingan individual",
            //         "Penggunaan media pembelajaran digital (slide interaktif, video)",
            //         "Asesmen formatif melalui observasi dan questioning",
            //         "Penutup dengan refleksi dan penguatan konsep"
            //     ]
            // },
            
            {
                judul: "🔍 Analisis Mendalam",
                tipe: "analisis",
                intro: "Analisis komprehensif terhadap keterkaitan antara rancangan pembelajaran dan pelaksanaan praktik mengajar.",
                
                komponenAnalisis: [
                    {
                        judul: "📋 Analisis Rancangan Pembelajaran",
                        konten: `
                            <p><strong>Kesesuaian dengan Kurikulum Merdeka:</strong></p>
                            <p>Rancangan pembelajaran yang disusun telah selaras dengan prinsip-prinsip Kurikulum Merdeka, khususnya dalam hal:</p>
                            <ul>
                                <li>Elemen dan CP sudah tepat sasaran — modul ini fokus pada elemen Praktik Lintas Bidang (PLB), yang memang menjadi "rumah" bagi kompetensi manajemen proyek, kolaborasi, dan komunikasi hasil belajar dalam CP Informatika Fase D.</li>
                                <li>Profil Pelajar Pancasila terintegrasi secara eksplisit (Bernalar Kritis, Kreatif, Gotong Royong, Mandiri) dan tertaut logis dengan aktivitas konkret, bukan sekadar tempelan.</li>
                                <li>Prinsip Pembelajaran Mendalam (Deep Learning) diterapkan konsisten lewat tiga dimensi Mindful–Meaningful–Joyful di tiap pertemuan, dipadukan dengan tahapan PjBL (Understanding → Applying → Reflecting) — ini selaras dengan arah kebijakan Kemendikdasmen terbaru.</li>
                                <li>Diferensiasi pembelajaran (konten, proses, produk) sudah eksplisit dan mencerminkan prinsip pembelajaran berdiferensiasi ala Kurikulum Merdeka, bukan seragam untuk semua siswa.</li>
                                <li>Asesmen tiga jenis (diagnostik, formatif, sumatif) lengkap dengan rubrik berskala 1–4 — sesuai semangat asesmen otentik dan berkelanjutan Kurikulum Merdeka.</li>
                            </ul>
                            <p><strong>Kekuatan Rancangan:</strong></p>
                            <ul>
                                <li>Scaffolding bertahap yang jelas — siswa tidak langsung diminta menyusun laporan/slide sendiri; mereka lebih dulu menganalisis contoh baik-buruk, baru berlatih tool secara terbimbing (guided practice), baru mengaplikasikan ke proyek nyata di pertemuan berikutnya. Alur "kenali dulu → coba tool → aplikasikan" ini mengurangi beban kognitif berlebih.</li>
                                <li>Proyek otentik dan bermakna — topik akhir "laporan kegiatan liburan sekolah" dekat dengan pengalaman siswa, sehingga dimensi meaningful learning tercapai secara alami, bukan dipaksakan.</li>
                                <li>Pembagian peran dalam presentasi kelompok (pembuka, penyaji isi, penjawab pertanyaan, penutup) adalah detail kecil yang efektif memastikan kolaborasi merata, sekaligus jadi bahan penilaian aspek "Kolaborasi & Kerja Sama Tim" di rubrik.</li>
                                <li>Rubrik penilaian sangat operasional — setiap level skor dideskripsikan konkret per aspek, sehingga mudah digunakan guru maupun untuk penilaian antarteman.</li>
                                <li>Fleksibilitas tool (Word/Google Docs, PowerPoint/Slides/Canva) mengakomodasi keterbatasan sarana sekolah yang berbeda-beda.</li>
                            </ul>
                            
                            <p><strong>Area Pengembangan:</strong></p>
                            <ul>
                                <li>Instrumen asesmen diagnostik belum berupa alat ukur formal — masih berupa dua pertanyaan lisan pemantik di awal Pertemuan 1. Bisa diperkuat dengan angket singkat atau checklist kesiapan awal agar hasilnya lebih terdokumentasi dan bisa dijadikan dasar pembentukan kelompok diferensiasi.</li>
                                <li>Belum ada instrumen refleksi mendalam yang terstruktur — Refleksi Peserta Didik hanya berupa 3 pertanyaan umum tanpa format (jurnal, skala, atau lembar terpandu) yang disebutkan akan diisi di Pertemuan 3 ("lembar refleksi mendalam"), tapi lembar tersebut sendiri belum dilampirkan.</li>
                                <li>Alokasi waktu Pertemuan 3 cukup padat — 10+20+30 menit untuk pembagian peran, finalisasi slide, dan presentasi+tanya jawab dalam 60 menit kegiatan inti berisiko molor, terutama jika jumlah kelompok banyak. Perlu dipikirkan skenario cadangan (misalnya presentasi lanjut di pertemuan berikutnya, atau batasan waktu tegas per kelompok, misal 3-4 menit).</li>
                            </ul>
                        `
                    },
                    // {
                    //     judul: "🎥 Analisis Video Pelaksanaan",
                    //     konten: `
                    //         <p><strong>Implementasi Rancangan dalam Praktik:</strong></p>
                    //         <p>Pelaksanaan pembelajaran dalam video secara umum telah mengikuti rancangan yang telah disusun dengan baik. Beberapa hal yang terlihat:</p>
                            
                    //         <p><strong>Aspek Positif:</strong></p>
                    //         <ul>
                    //             <li><strong>Pengelolaan Kelas:</strong> Mampu menciptakan suasana belajar yang kondusif dan menyenangkan</li>
                    //             <li><strong>Komunikasi:</strong> Menggunakan bahasa yang jelas, komunikatif, dan mudah dipahami siswa</li>
                    //             <li><strong>Metode Pembelajaran:</strong> Implementasi PBL berjalan efektif dengan masalah yang relevan dan menantang</li>
                    //             <li><strong>Interaksi:</strong> Terjalin interaksi dua arah yang baik antara guru dan siswa</li>
                    //             <li><strong>Penggunaan Media:</strong> Media pembelajaran digital digunakan secara efektif untuk mendukung pemahaman konsep</li>
                    //             <li><strong>Asesmen:</strong> Melakukan asesmen formatif secara berkelanjutan melalui questioning dan observasi</li>
                    //         </ul>
                            
                    //         <p><strong>Manajemen Waktu:</strong></p>
                    //         <p>Alokasi waktu untuk setiap tahapan pembelajaran sudah cukup proporsional, meskipun pada sesi diskusi kelompok sempat memerlukan waktu lebih lama dari yang direncanakan.</p>
                            
                    //         <p><strong>Refleksi Pengembangan:</strong></p>
                    //         <ul>
                    //             <li>Dapat memberikan scaffolding yang lebih terstruktur untuk siswa yang mengalami kesulitan</li>
                    //             <li>Pemanfaatan teknologi dapat lebih interaktif dengan melibatkan siswa secara langsung</li>
                    //             <li>Kesempatan untuk refleksi siswa di akhir pembelajaran dapat diperdalam</li>
                    //         </ul>
                    //     `
                    // },
                    {
                        judul: "🔗 Keterkaitan Antar Komponen",
                        konten: `
                            <p><strong>Koherensi Rancangan dan Pelaksanaan:</strong></p>
                            <p>Terdapat keterkaitan yang kuat antara rancangan pembelajaran dan pelaksanaannya dalam video praktik mengajar:</p>
                            
                            <div class="keterkaitan-section">
                                <h4>1. Tujuan Pembelajaran</h4>
                                <p><strong>Rancangan:</strong> Tujuan pembelajaran dirumuskan secara spesifik dengan fokus pada kemampuan menganalisis dan menerapkan algoritma.</p>
                                <p><strong>Pelaksanaan:</strong> Tujuan pembelajaran dikomunikasikan dengan jelas di awal dan menjadi acuan dalam setiap tahapan pembelajaran.</p>
                                <p><strong>Keterkaitan:</strong> Tujuan pembelajaran tercapai melalui aktivitas pemecahan masalah dan praktik langsung siswa.</p>
                            </div>
                            
                            <div class="keterkaitan-section">
                                <h4>2. Model Pembelajaran (PBL)</h4>
                                <p><strong>Rancangan:</strong> Dirancang dengan tahapan PBL: orientasi masalah, organisasi belajar, investigasi, presentasi, dan evaluasi.</p>
                                <p><strong>Pelaksanaan:</strong> Semua tahapan PBL terlaksana dengan baik dan siswa aktif terlibat dalam pemecahan masalah.</p>
                                <p><strong>Keterkaitan:</strong> Sintaks PBL yang terstruktur memfasilitasi pembelajaran bermakna dan mengembangkan HOTS siswa.</p>
                            </div>
                            
                            <div class="keterkaitan-section">
                                <h4>3. Media dan Sumber Belajar</h4>
                                <p><strong>Rancangan:</strong> Merencanakan penggunaan slide presentasi, video tutorial, dan worksheet digital.</p>
                                <p><strong>Pelaksanaan:</strong> Semua media digunakan secara efektif dan mendukung pemahaman siswa.</p>
                                <p><strong>Keterkaitan:</strong> Media yang tepat membantu visualisasi konsep abstrak dan meningkatkan engagement siswa.</p>
                            </div>
                            
                            <div class="keterkaitan-section">
                                <h4>4. Asesmen Pembelajaran</h4>
                                <p><strong>Rancangan:</strong> Mengintegrasikan asesmen diagnostik, formatif, dan sumatif dengan beragam teknik.</p>
                                <p><strong>Pelaksanaan:</strong> Asesmen formatif dilakukan melalui observasi, tanya jawab, dan evaluasi hasil kerja kelompok.</p>
                                <p><strong>Keterkaitan:</strong> Asesmen berkelanjutan memberikan feedback langsung untuk perbaikan pembelajaran.</p>
                            </div>
                            
                            <p><strong>Kesimpulan:</strong></p>
                            <p>Secara keseluruhan, terdapat konsistensi dan koherensi yang baik antara perencanaan dan pelaksanaan. Rancangan pembelajaran yang sistematis menjadi pedoman yang efektif dalam praktik, sementara fleksibilitas dalam pelaksanaan memungkinkan adaptasi sesuai dinamika kelas.</p>
                        `
                    },
                    {
                        judul: "💭 Refleksi dan Pembelajaran",
                        konten: `
                            <p><strong>Pembelajaran yang Diperoleh:</strong></p>
                            <p>Melalui proses penyusunan rancangan dan pelaksanaan praktik mengajar ini, saya memperoleh berbagai pembelajaran berharga:</p>
                            
                            <ol>
                                <li><strong>Pentingnya Perencanaan yang Matang:</strong> Rancangan pembelajaran yang detail dan sistematis sangat membantu dalam pelaksanaan. Namun, fleksibilitas juga diperlukan untuk menyesuaikan dengan kondisi riil di kelas.</li>
                                
                                <li><strong>Student-Centered Learning dalam Praktik:</strong> Implementasi PBL berhasil mengaktifkan siswa dan mendorong mereka untuk berpikir kritis. Peran guru sebagai fasilitator terbukti efektif dalam membangun pembelajaran bermakna.</li>
                                
                                <li><strong>Pentingnya Asesmen Formatif:</strong> Asesmen yang dilakukan secara berkelanjutan membantu saya memahami perkembangan siswa dan melakukan penyesuaian pembelajaran secara real-time.</li>
                                
                                <li><strong>Manajemen Kelas dan Waktu:</strong> Mengelola waktu dalam pembelajaran berbasis masalah memerlukan estimasi yang tepat dan kemampuan untuk membuat keputusan cepat saat diperlukan penyesuaian.</li>
                                
                                <li><strong>Teknologi sebagai Enabler:</strong> Penggunaan teknologi yang tepat dapat meningkatkan kualitas pembelajaran, namun perlu dipersiapkan rencana cadangan untuk antisipasi kendala teknis.</li>
                            </ol>
                            
                            <p><strong>Rencana Pengembangan Kedepan:</strong></p>
                            <ul>
                                <li>Meningkatkan keterampilan dalam merancang pertanyaan tingkat tinggi (HOTS)</li>
                                <li>Mengembangkan strategi diferensiasi yang lebih beragam</li>
                                <li>Memperdalam pemahaman tentang asesmen autentik</li>
                                <li>Eksplorasi model-model pembelajaran inovatif lainnya</li>
                                <li>Meningkatkan kemampuan refleksi dan evaluasi diri</li>
                            </ul>
                            
                            <p><strong>Komitmen Profesional:</strong></p>
                            <p>Pengalaman ini memperkuat komitmen saya untuk terus berkembang sebagai guru profesional yang reflektif, inovatif, dan berpusat pada kebutuhan siswa. Saya akan terus belajar, berkolaborasi dengan rekan sejawat, dan mengimplementasikan best practices dalam pembelajaran.</p>
                        `
                    }
                ]
            }
        ]
    },
    
    // ===================================
    // DATA E-PORTFOLIO UAS
    // ===================================
    uas: {
        komponenPortfolio: [
            {
                judul: "📋 Analisis Rancangan/Perencanaan Pembelajaran",
                intro: "Analisis mendalam terhadap produk rancangan/perencanaan pembelajaran yang telah disusun untuk praktik mengajar mandiri, mencakup kesesuaian dengan kurikulum, kekuatan desain, dan area pengembangan.",
                
                analisis: `
                    <h4>🎯 Komponen Rancangan Pembelajaran yang Dianalisis</h4>
                    <p>Rancangan pembelajaran yang telah disusun mencakup beberapa komponen penting yang saling terkait:</p>
                    
                    <div class="analisis-subsection">
                        <h5>1. Analisis Tujuan Pembelajaran</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Tujuan pembelajaran telah dirumuskan dengan menggunakan prinsip SMART (Specific, Measurable, Achievable, Relevant, Time-bound) dan diselaraskan dengan Capaian Pembelajaran (CP) dalam Kurikulum Merdeka.</p>
                        
                        <p><strong>Kekuatan:</strong></p>
                        <ul>
                            <li>Tujuan pembelajaran spesifik dan terukur dengan kata kerja operasional yang jelas</li>
                            <li>Mencakup domain kognitif, afektif, dan psikomotor secara seimbang</li>
                            <li>Relevan dengan kebutuhan peserta didik dan konteks pembelajaran</li>
                            <li>Dapat dicapai dalam alokasi waktu yang tersedia</li>
                        </ul>
                        
                        <p><strong>Area Pengembangan:</strong></p>
                        <ul>
                            <li>Dapat ditambahkan indikator pencapaian yang lebih detail untuk setiap tujuan</li>
                            <li>Perlu alignment yang lebih eksplisit dengan profil pelajar Pancasila</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>2. Analisis Langkah-Langkah Pembelajaran</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Langkah pembelajaran dirancang mengikuti sintaks model Problem Based Learning (PBL) yang terdiri dari lima tahapan: orientasi masalah, organisasi belajar, penyelidikan, pengembangan dan penyajian hasil, serta analisis dan evaluasi.</p>
                        
                        <p><strong>Kekuatan:</strong></p>
                        <ul>
                            <li>Alur pembelajaran logis dan sistematis dari kegiatan pembuka hingga penutup</li>
                            <li>Mengintegrasikan pembelajaran aktif dengan melibatkan siswa secara maksimal</li>
                            <li>Alokasi waktu untuk setiap tahapan sudah proporsional</li>
                            <li>Memfasilitasi pengembangan keterampilan berpikir tingkat tinggi (HOTS)</li>
                            <li>Tersedia diferensiasi untuk mengakomodasi keberagaman siswa</li>
                        </ul>
                        
                        <p><strong>Area Pengembangan:</strong></p>
                        <ul>
                            <li>Dapat diperkaya dengan alternatif kegiatan untuk antisipasi kendala</li>
                            <li>Scaffolding untuk siswa yang kesulitan perlu lebih terstruktur</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>3. Analisis Asesmen Pembelajaran</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Asesmen dirancang secara komprehensif mencakup asesmen diagnostik, formatif, dan sumatif dengan berbagai teknik dan instrumen.</p>
                        
                        <p><strong>Kekuatan:</strong></p>
                        <ul>
                            <li>Asesmen berjenjang mulai dari diagnostik hingga sumatif</li>
                            <li>Teknik asesmen beragam: observasi, tes tertulis, kinerja, dan portofolio</li>
                            <li>Rubrik penilaian sudah tersedia untuk panduan objektif</li>
                            <li>Asesmen formatif terintegrasi sepanjang pembelajaran untuk feedback berkelanjutan</li>
                        </ul>
                        
                        <p><strong>Area Pengembangan:</strong></p>
                        <ul>
                            <li>Deskriptor rubrik dapat diperjelas agar lebih operasional</li>
                            <li>Dapat ditambahkan asesmen diri (self-assessment) dan asesmen antar teman</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>4. Integrasi Profil Pelajar Pancasila</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Rancangan pembelajaran telah mengintegrasikan dimensi profil pelajar Pancasila, khususnya:</p>
                        <ul>
                            <li><strong>Bernalar Kritis:</strong> Melalui kegiatan analisis masalah dan pemecahan masalah berbasis PBL</li>
                            <li><strong>Bergotong Royong:</strong> Melalui kerja kelompok dan kolaborasi</li>
                            <li><strong>Mandiri:</strong> Melalui investigasi dan penyelidikan mandiri</li>
                            <li><strong>Kreatif:</strong> Melalui pengembangan solusi inovatif untuk masalah yang diberikan</li>
                        </ul>
                    </div>
                    
                    <h4>💡 Kesimpulan dan Rekomendasi</h4>
                    <p><strong>Kesimpulan:</strong></p>
                    <p>Secara keseluruhan, rancangan pembelajaran telah disusun dengan baik dan memenuhi prinsip-prinsip pedagogis. Tujuan pembelajaran jelas, langkah pembelajaran sistematis, dan asesmen komprehensif. Integrasi profil pelajar Pancasila juga sudah tampak dalam desain pembelajaran.</p>
                    
                    <p><strong>Rekomendasi:</strong></p>
                    <ul>
                        <li>Perjelas indikator pencapaian tujuan pembelajaran dengan kriteria yang lebih detail</li>
                        <li>Kembangkan bank soal HOTS yang lebih variatif untuk asesmen sumatif</li>
                        <li>Tambahkan lembar kerja (worksheet) dengan scaffolding bertingkat</li>
                        <li>Integrasikan asesmen diri untuk mendorong refleksi siswa</li>
                        <li>Sediakan rencana kontingensi untuk antisipasi kendala pembelajaran</li>
                    </ul>
                `,
                
                // Perangkat Pembelajaran UAS - Komponen 1
                perangkatPembelajaran: [
                    {
                        judul: "Modul Ajar / RPP - Praktik Mengajar Mandiri",
                        deskripsi: "Rencana Pelaksanaan Pembelajaran yang telah dianalisis",
                        fileUrl: "https://drive.google.com/file/d/YOUR_RPP_UAS_ID/view?usp=sharing"
                        // CARA EDIT: Ganti YOUR_RPP_UAS_ID dengan ID file RPP Anda
                    },
                    {
                        judul: "Analisis Rancangan Pembelajaran",
                        deskripsi: "Dokumen analisis komprehensif terhadap rancangan pembelajaran",
                        fileUrl: "https://drive.google.com/file/d/YOUR_ANALISIS_ID/view?usp=sharing"
                        // CARA EDIT: Ganti YOUR_ANALISIS_ID dengan ID file analisis Anda
                    }
                ]
            },
            
            {
                judul: "📚 Analisis Materi Pembelajaran",
                intro: "Analisis terhadap materi pembelajaran yang telah disusun dan diterapkan dalam praktik mengajar mandiri, mencakup kesesuaian dengan CP, kedalaman materi, dan relevansi dengan konteks siswa.",
                
                analisis: `
                    <h4>📖 Komponen Materi Pembelajaran yang Dianalisis</h4>
                    
                    <div class="analisis-subsection">
                        <h5>1. Kesesuaian Materi dengan Capaian Pembelajaran</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Materi pembelajaran yang disusun telah diselaraskan dengan Capaian Pembelajaran (CP) pada fase yang sesuai. Materi mencakup konsep-konsep fundamental yang perlu dikuasai siswa sesuai dengan jenjang dan tingkat perkembangan kognitif mereka.</p>
                        
                        <p><strong>Temuan Positif:</strong></p>
                        <ul>
                            <li>Materi sesuai dengan elemen dan CP yang ditargetkan</li>
                            <li>Cakupan materi proporsional dengan alokasi waktu pembelajaran</li>
                            <li>Kedalaman materi sesuai dengan tingkat kemampuan siswa</li>
                            <li>Terdapat progression (penahapan) dari konsep sederhana ke kompleks</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>2. Struktur dan Organisasi Materi</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Materi disusun secara sistematis dengan struktur yang jelas. Organisasi materi mengikuti prinsip dari konkret ke abstrak, dari sederhana ke kompleks, dan dari yang sudah diketahui ke yang baru.</p>
                        
                        <p><strong>Kekuatan:</strong></p>
                        <ul>
                            <li>Alur materi logis dan mudah diikuti oleh siswa</li>
                            <li>Terdapat advance organizer yang membantu siswa memahami kerangka besar materi</li>
                            <li>Konsep-konsep kunci diidentifikasi dan ditekankan dengan jelas</li>
                            <li>Contoh-contoh konkret dan kontekstual disediakan untuk setiap konsep</li>
                            <li>Latihan dan aktivitas terdistribusi merata sepanjang pembelajaran</li>
                        </ul>
                        
                        <p><strong>Area Pengembangan:</strong></p>
                        <ul>
                            <li>Dapat ditambahkan peta konsep untuk visualisasi hubungan antar konsep</li>
                            <li>Perlu pengayaan materi untuk siswa yang sudah mencapai tujuan lebih cepat</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>3. Kontekstualisasi dan Relevansi Materi</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Materi pembelajaran telah dikontekstualisasikan dengan kehidupan nyata siswa dan lingkungan sekitar. Hal ini meningkatkan relevansi dan makna pembelajaran bagi siswa.</p>
                        
                        <p><strong>Kekuatan:</strong></p>
                        <ul>
                            <li>Materi dikaitkan dengan isu-isu aktual dan kehidupan sehari-hari</li>
                            <li>Contoh dan ilustrasi dekat dengan pengalaman siswa</li>
                            <li>Masalah yang digunakan dalam PBL autentik dan relevan</li>
                            <li>Materi mengintegrasikan local wisdom dan budaya lokal</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>4. Integrasi Literasi dan Numerasi</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Materi pembelajaran mengintegrasikan keterampilan literasi dan numerasi sebagai kompetensi fondasi.</p>
                        
                        <p><strong>Literasi:</strong></p>
                        <ul>
                            <li>Siswa membaca berbagai sumber informasi (teks, diagram, grafik)</li>
                            <li>Aktivitas menulis laporan dan presentasi hasil investigasi</li>
                            <li>Diskusi dan komunikasi lisan untuk mengungkapkan pemahaman</li>
                        </ul>
                        
                        <p><strong>Numerasi:</strong></p>
                        <ul>
                            <li>Penggunaan data dan statistik dalam pemecahan masalah</li>
                            <li>Interpretasi grafik dan tabel</li>
                            <li>Perhitungan dan estimasi dalam konteks masalah nyata</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>5. Keakuratan dan Kekinian Materi</h5>
                        <p><strong>Analisis:</strong></p>
                        <p>Materi pembelajaran akurat secara konten dan up-to-date dengan perkembangan terkini di bidang studi.</p>
                        
                        <p><strong>Temuan:</strong></p>
                        <ul>
                            <li>Konten materi sesuai dengan kaidah keilmuan yang berlaku</li>
                            <li>Sumber rujukan kredibel dan terpercaya</li>
                            <li>Materi diperbarui dengan informasi dan isu terkini</li>
                            <li>Tidak terdapat miskonsepsi dalam penyajian materi</li>
                        </ul>
                    </div>
                    
                    <h4>💡 Kesimpulan dan Rekomendasi</h4>
                    <p><strong>Kesimpulan:</strong></p>
                    <p>Materi pembelajaran yang disusun sudah baik dari segi kesesuaian dengan CP, struktur organisasi, kontekstualisasi, dan keakuratan. Materi juga sudah mengintegrasikan literasi, numerasi, dan profil pelajar Pancasila.</p>
                    
                    <p><strong>Rekomendasi:</strong></p>
                    <ul>
                        <li>Tambahkan peta konsep atau mind map untuk visualisasi struktur materi</li>
                        <li>Sediakan materi pengayaan dan remedial untuk diferensiasi konten</li>
                        <li>Integrasikan lebih banyak multimedia (video, simulasi, animasi) dalam materi</li>
                        <li>Kembangkan studi kasus lokal yang lebih beragam</li>
                        <li>Buat bank soal dengan level kognitif berbeda (LOTS-MOTS-HOTS)</li>
                    </ul>
                `
            },
            
            {
                judul: "🎨 Analisis Media Pembelajaran",
                intro: "Analisis terhadap media pembelajaran yang digunakan dalam praktik mengajar mandiri, mencakup kesesuaian dengan tujuan, efektivitas, dan kualitas media.",
                
                analisis: `
                    <h4>📱 Media Pembelajaran yang Digunakan</h4>
                    <p>Dalam praktik mengajar mandiri, telah digunakan berbagai jenis media pembelajaran untuk mendukung pencapaian tujuan pembelajaran:</p>
                    
                    <div class="analisis-subsection">
                        <h5>1. Media Visual (Slide Presentasi)</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Slide presentasi PowerPoint/Google Slides digunakan sebagai media utama untuk menyampaikan materi, menampilkan diagram, dan memandu alur pembelajaran.</p>
                        
                        <p><strong>Analisis Kekuatan:</strong></p>
                        <ul>
                            <li><strong>Desain Visual:</strong> Tata letak bersih, penggunaan warna konsisten, dan tipografi mudah dibaca</li>
                            <li><strong>Konten:</strong> Informasi disajikan ringkas dengan poin-poin utama yang jelas</li>
                            <li><strong>Visualisasi:</strong> Diagram, grafik, dan gambar memperjelas konsep abstrak</li>
                            <li><strong>Animasi:</strong> Animasi sederhana membantu menarik perhatian tanpa mengganggu fokus</li>
                            <li><strong>Interaktivitas:</strong> Hyperlink dan navigasi memudahkan perpindahan antar slide</li>
                        </ul>
                        
                        <p><strong>Area Pengembangan:</strong></p>
                        <ul>
                            <li>Dapat ditambahkan lebih banyak elemen interaktif (kuis, polling)</li>
                            <li>Variasi media dapat diperkaya dengan infografis yang lebih menarik</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>2. Media Audio-Visual (Video Pembelajaran)</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Video pembelajaran digunakan untuk mendemonstrasikan konsep, prosedur, atau fenomena yang sulit dijelaskan secara verbal.</p>
                        
                        <p><strong>Analisis Kekuatan:</strong></p>
                        <ul>
                            <li><strong>Relevansi:</strong> Konten video sesuai dengan materi dan tujuan pembelajaran</li>
                            <li><strong>Durasi:</strong> Durasi video tidak terlalu panjang (5-10 menit) sehingga efektif</li>
                            <li><strong>Kualitas:</strong> Video memiliki kualitas audio dan visual yang baik</li>
                            <li><strong>Aksesibilitas:</strong> Video dapat diakses online dan tersedia subtitle</li>
                        </ul>
                        
                        <p><strong>Dampak terhadap Pembelajaran:</strong></p>
                        <ul>
                            <li>Meningkatkan pemahaman konseptual melalui visualisasi dinamis</li>
                            <li>Memfasilitasi gaya belajar visual dan auditori</li>
                            <li>Dapat dipause dan diulang sesuai kebutuhan siswa</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>3. Media Digital Interaktif (Lembar Kerja Digital)</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Lembar kerja dalam format digital (Google Docs, Google Forms, atau platform edukasi) digunakan untuk aktivitas siswa.</p>
                        
                        <p><strong>Analisis Kekuatan:</strong></p>
                        <ul>
                            <li><strong>Kolaborasi:</strong> Memungkinkan kerja kelompok secara real-time</li>
                            <li><strong>Feedback:</strong> Guru dapat memberikan feedback langsung pada dokumen siswa</li>
                            <li><strong>Dokumentasi:</strong> Hasil kerja siswa tersimpan otomatis dan dapat diakses kembali</li>
                            <li><strong>Diferensiasi:</strong> Dapat disesuaikan tingkat kesulitannya untuk siswa berbeda</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>4. Media Konkret (Alat Peraga/Manipulatif)</h5>
                        <p><strong>Deskripsi:</strong></p>
                        <p>Alat peraga fisik atau manipulatif digunakan untuk membantu siswa memahami konsep melalui pengalaman langsung.</p>
                        
                        <p><strong>Analisis Kekuatan:</strong></p>
                        <ul>
                            <li><strong>Hands-on Learning:</strong> Siswa dapat memanipulasi objek secara langsung</li>
                            <li><strong>Konkretisasi:</strong> Konsep abstrak menjadi lebih konkret dan nyata</li>
                            <li><strong>Engagement:</strong> Meningkatkan keterlibatan aktif siswa</li>
                            <li><strong>Multi-sensori:</strong> Melibatkan berbagai indera dalam pembelajaran</li>
                        </ul>
                    </div>
                    
                    <h4>🎯 Evaluasi Efektivitas Media</h4>
                    
                    <div class="analisis-subsection">
                        <h5>Kesesuaian dengan Prinsip Pemilihan Media</h5>
                        <p>Media yang digunakan telah memenuhi prinsip-prinsip pemilihan media pembelajaran yang baik:</p>
                        <ul>
                            <li><strong>Tujuan:</strong> Media sesuai dengan tujuan pembelajaran yang ingin dicapai</li>
                            <li><strong>Karakteristik Siswa:</strong> Media sesuai dengan tingkat perkembangan dan gaya belajar siswa</li>
                            <li><strong>Karakteristik Materi:</strong> Media tepat untuk menyampaikan jenis materi tertentu</li>
                            <li><strong>Ketersediaan:</strong> Media mudah diakses dan digunakan</li>
                            <li><strong>Biaya:</strong> Media cost-effective dan efisien</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>Dampak Penggunaan Media terhadap Pembelajaran</h5>
                        <p><strong>Aspek Positif:</strong></p>
                        <ul>
                            <li>Meningkatkan motivasi dan engagement siswa</li>
                            <li>Memperjelas dan mempercepat pemahaman konsep</li>
                            <li>Mengakomodasi berbagai gaya belajar siswa</li>
                            <li>Memfasilitasi pembelajaran yang berpusat pada siswa</li>
                            <li>Meningkatkan kualitas interaksi dalam pembelajaran</li>
                        </ul>
                        
                        <p><strong>Tantangan yang Dihadapi:</strong></p>
                        <ul>
                            <li>Kendala teknis sesekali terjadi (koneksi internet, kompatibilitas)</li>
                            <li>Memerlukan persiapan dan familiarisasi yang matang</li>
                            <li>Tidak semua siswa memiliki akses teknologi yang sama</li>
                        </ul>
                    </div>
                    
                    <h4>💡 Kesimpulan dan Rekomendasi</h4>
                    <p><strong>Kesimpulan:</strong></p>
                    <p>Media pembelajaran yang digunakan sudah bervariasi dan efektif dalam mendukung pencapaian tujuan pembelajaran. Kombinasi media visual, audio-visual, digital, dan konkret menciptakan pengalaman belajar yang kaya dan bermakna.</p>
                    
                    <p><strong>Rekomendasi:</strong></p>
                    <ul>
                        <li>Eksplorasi media pembelajaran berbasis gamifikasi untuk meningkatkan engagement</li>
                        <li>Kembangkan media pembelajaran augmented reality (AR) atau virtual reality (VR) jika memungkinkan</li>
                        <li>Buat repository media pembelajaran yang dapat digunakan ulang</li>
                        <li>Persiapkan alternatif media untuk antisipasi kendala teknis</li>
                        <li>Libatkan siswa dalam pembuatan media pembelajaran (user-generated content)</li>
                        <li>Lakukan evaluasi berkala terhadap efektivitas media yang digunakan</li>
                    </ul>
                `
            },
            
            // {
            //     judul: "🎥 Analisis Video Pelaksanaan Praktik Mengajar",
            //     intro: "Analisis mendalam terhadap video pelaksanaan praktik mengajar mandiri, mencakup aspek pedagogis, pengelolaan kelas, interaksi, dan keterampilan mengajar.",
                
            //     videoData: {
            //         judulVideo: "Video Praktik Mengajar Mandiri",
            //         durasi: "45 menit",
            //         tanggal: "20 Januari 2026",
            //         lokasi: "SMAN 1 Surabaya",
            //         videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            //         // Atau Google Drive: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview"
            //         deskripsi: "Video dokumentasi lengkap pelaksanaan praktik mengajar mandiri dari kegiatan pembuka, inti, hingga penutup."
            //     },
                
            //     analisis: `
            //         <h4>🎬 Aspek-Aspek yang Dianalisis</h4>
                    
            //         <div class="analisis-subsection">
            //             <h5>1. Kegiatan Pembuka (Opening)</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li><strong>Apersepsi:</strong> Membuka pelajaran dengan pertanyaan pemantik yang menarik dan relevan dengan pengalaman siswa</li>
            //                 <li><strong>Motivasi:</strong> Menyampaikan manfaat dan relevansi materi dengan kehidupan nyata untuk memotivasi siswa</li>
            //                 <li><strong>Orientasi:</strong> Menjelaskan tujuan pembelajaran dan garis besar kegiatan dengan jelas</li>
            //                 <li><strong>Ice Breaking:</strong> Melakukan aktivitas ringan untuk mencairkan suasana dan meningkatkan kesiapan belajar</li>
            //             </ul>
                        
            //             <p><strong>Area Pengembangan:</strong></p>
            //             <ul>
            //                 <li>Durasi pembuka dapat sedikit diperpendek (lebih ringkas)</li>
            //                 <li>Dapat ditambahkan asesmen diagnostik singkat untuk mengecek pengetahuan awal</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>2. Penyampaian Materi (Content Delivery)</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li><strong>Kejelasan Komunikasi:</strong> Bahasa yang digunakan jelas, lugas, dan mudah dipahami siswa</li>
            //                 <li><strong>Sistematika:</strong> Materi disampaikan secara terstruktur dan logis</li>
            //                 <li><strong>Contoh Konkret:</strong> Menyertakan contoh-contoh nyata dan relevan untuk memperjelas konsep</li>
            //                 <li><strong>Penekanan:</strong> Memberikan penekanan pada konsep-konsep kunci dengan intonasi dan gesture</li>
            //                 <li><strong>Checking Understanding:</strong> Secara berkala mengecek pemahaman siswa dengan pertanyaan</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>3. Pengelolaan Kelas (Classroom Management)</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li><strong>Suasana Belajar:</strong> Menciptakan suasana belajar yang kondusif, positif, dan menyenangkan</li>
            //                 <li><strong>Perhatian Siswa:</strong> Mampu menjaga perhatian dan fokus siswa sepanjang pembelajaran</li>
            //                 <li><strong>Manajemen Waktu:</strong> Mengalokasikan waktu secara efektif untuk setiap kegiatan</li>
            //                 <li><strong>Organisasi Kelas:</strong> Mengatur transisi antar kegiatan dengan smooth</li>
            //                 <li><strong>Penanganan Perilaku:</strong> Menangani perilaku off-task dengan pendekatan positif</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>4. Metode dan Strategi Pembelajaran</h5>
            //             <p><strong>Implementasi Problem Based Learning (PBL):</strong></p>
            //             <ul>
            //                 <li><strong>Orientasi Masalah:</strong> Menyajikan masalah autentik dan menantang yang memicu curiosity siswa</li>
            //                 <li><strong>Organisasi Belajar:</strong> Mengorganisir siswa dalam kelompok belajar dengan peran yang jelas</li>
            //                 <li><strong>Penyelidikan:</strong> Memfasilitasi proses investigasi dan pengumpulan informasi oleh siswa</li>
            //                 <li><strong>Pengembangan Hasil:</strong> Membimbing siswa mengembangkan solusi dan menyajikan hasil</li>
            //                 <li><strong>Analisis:</strong> Memimpin refleksi dan evaluasi terhadap proses pemecahan masalah</li>
            //             </ul>
                        
            //             <p><strong>Kekuatan:</strong></p>
            //             <ul>
            //                 <li>Sintaks PBL diikuti dengan konsisten dan efektif</li>
            //                 <li>Siswa aktif terlibat dalam setiap tahapan pembelajaran</li>
            //                 <li>Masalah yang digunakan kontekstual dan bermakna</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>5. Interaksi dan Komunikasi</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li><strong>Komunikasi Dua Arah:</strong> Terjalin interaksi dialogis antara guru dan siswa</li>
            //                 <li><strong>Pertanyaan Produktif:</strong> Mengajukan pertanyaan yang mendorong berpikir tingkat tinggi</li>
            //                 <li><strong>Respons Positif:</strong> Memberikan respons yang konstruktif terhadap jawaban siswa</li>
            //                 <li><strong>Encouragement:</strong> Memberikan reinforcement dan encouragement yang membangun kepercayaan diri siswa</li>
            //                 <li><strong>Listening:</strong> Mendengarkan aktif ide-ide dan pertanyaan siswa</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>6. Penggunaan Media dan Teknologi</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li>Media pembelajaran digunakan secara efektif untuk mendukung penyampaian materi</li>
            //                 <li>Slide presentasi jelas dan mudah dibaca</li>
            //                 <li>Video pembelajaran relevan dan berkualitas baik</li>
            //                 <li>Platform digital dimanfaatkan untuk kolaborasi kelompok</li>
            //             </ul>
                        
            //             <p><strong>Tantangan:</strong></p>
            //             <ul>
            //                 <li>Ada sedikit delay saat pergantian media (persiapan dapat lebih seamless)</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>7. Diferensiasi Pembelajaran</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li>Memberikan bantuan tambahan (scaffolding) kepada siswa yang kesulitan</li>
            //                 <li>Menyediakan tugas dengan tingkat kesulitan yang bervariasi</li>
            //                 <li>Mengakomodasi berbagai gaya belajar dengan multi-metode</li>
            //                 <li>Memberikan kesempatan sama bagi semua siswa untuk berpartisipasi</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>8. Asesmen Formatif</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li>Melakukan asesmen formatif secara berkelanjutan melalui observasi</li>
            //                 <li>Menggunakan teknik questioning untuk mengecek pemahaman</li>
            //                 <li>Memberikan feedback langsung kepada siswa</li>
            //                 <li>Melakukan penyesuaian pembelajaran berdasarkan hasil asesmen</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>9. Kegiatan Penutup (Closure)</h5>
            //             <p><strong>Temuan Positif:</strong></p>
            //             <ul>
            //                 <li><strong>Kesimpulan:</strong> Membimbing siswa membuat kesimpulan pembelajaran</li>
            //                 <li><strong>Refleksi:</strong> Memberikan kesempatan siswa merefleksikan pembelajaran</li>
            //                 <li><strong>Penguatan:</strong> Menekankan kembali konsep-konsep kunci</li>
            //                 <li><strong>Tindak Lanjut:</strong> Memberikan tugas/kegiatan tindak lanjut yang relevan</li>
            //                 <li><strong>Preview:</strong> Memberikan gambaran materi pertemuan berikutnya</li>
            //             </ul>
            //         </div>
                    
            //         <h4>⭐ Aspek Keseluruhan</h4>
                    
            //         <div class="analisis-subsection">
            //             <h5>Kekuatan Utama</h5>
            //             <ul>
            //                 <li>Penguasaan materi yang baik dan mendalam</li>
            //                 <li>Kemampuan komunikasi yang efektif dan engaging</li>
            //                 <li>Pengelolaan kelas yang kondusif dan produktif</li>
            //                 <li>Implementasi model pembelajaran yang sesuai dan efektif</li>
            //                 <li>Interaksi positif dengan siswa yang membangun</li>
            //                 <li>Penggunaan media yang tepat dan bervariasi</li>
            //                 <li>Asesmen yang terintegrasi dalam pembelajaran</li>
            //                 <li>Sikap profesional dan antusiasme dalam mengajar</li>
            //             </ul>
            //         </div>
                    
            //         <div class="analisis-subsection">
            //             <h5>Area untuk Pengembangan Profesional</h5>
            //             <ul>
            //                 <li>Meningkatkan variasi teknik questioning (lebih banyak open-ended questions)</li>
            //                 <li>Memberikan wait time yang lebih lama setelah mengajukan pertanyaan</li>
            //                 <li>Mengembangkan strategi untuk mengaktifkan siswa yang pasif</li>
            //                 <li>Meningkatkan efisiensi transisi antar kegiatan</li>
            //                 <li>Memperdalam penggunaan data asesmen untuk penyesuaian pembelajaran</li>
            //                 <li>Meningkatkan dokumentasi proses pembelajaran siswa</li>
            //             </ul>
            //         </div>
                    
            //         <h4>💡 Kesimpulan dan Refleksi</h4>
            //         <p><strong>Kesimpulan:</strong></p>
            //         <p>Secara keseluruhan, praktik mengajar yang dilaksanakan menunjukkan kompetensi pedagogis yang baik. Pembelajaran berpusat pada siswa, menggunakan pendekatan yang aktif dan kolaboratif, serta menciptakan lingkungan belajar yang positif dan produktif. Implementasi model PBL berjalan efektif dan berhasil mengaktifkan siswa dalam proses pembelajaran.</p>
                    
            //         <p><strong>Refleksi Diri:</strong></p>
            //         <p>Dari analisis video ini, saya menyadari pentingnya persiapan yang matang dan fleksibilitas dalam mengajar. Meskipun telah merencanakan pembelajaran dengan baik, kemampuan untuk beradaptasi dengan dinamika kelas sangat penting. Feedback dan respons dari siswa menjadi panduan berharga untuk menyesuaikan strategi pembelajaran secara real-time.</p>
                    
            //         <p><strong>Komitmen Pengembangan:</strong></p>
            //         <p>Saya berkomitmen untuk terus mengembangkan kompetensi mengajar melalui refleksi berkelanjutan, peer observation, dan professional development. Area-area pengembangan yang telah diidentifikasi akan menjadi fokus perbaikan dalam praktik mengajar selanjutnya.</p>
            //     `
            // },
            
            {
                judul: "🤝 Analisis Kegiatan Nonmengajar",
                intro: "Analisis terhadap berbagai kegiatan nonmengajar yang dilakukan selama PPL, mencakup kegiatan administrasi, pengembangan profesional, dan kontribusi pada sekolah.",
                
                analisis: `
                    <h4>📋 Jenis-Jenis Kegiatan Nonmengajar</h4>
                    <p>Selama pelaksanaan PPL, berbagai kegiatan nonmengajar telah dilakukan sebagai bagian integral dari pengalaman praktik keguruan:</p>
                    
                    <div class="analisis-subsection">
                        <h5>1. Kegiatan Administratif</h5>
                        
                        <p><strong>a. Penyusunan Perangkat Pembelajaran</strong></p>
                        <ul>
                            <li>Menyusun Program Tahunan (Prota) dan Program Semester (Prosem)</li>
                            <li>Mengembangkan Alur Tujuan Pembelajaran (ATP)</li>
                            <li>Merancang Modul Ajar/RPP sesuai Kurikulum Merdeka</li>
                            <li>Menyusun instrumen asesmen dan rubrik penilaian</li>
                        </ul>
                        
                        <p><strong>Manfaat:</strong></p>
                        <p>Kegiatan ini memberikan pemahaman mendalam tentang perencanaan pembelajaran yang sistematis dan selaras dengan kurikulum. Saya belajar pentingnya backward design dalam merancang pembelajaran yang efektif.</p>
                        
                        <p><strong>b. Administrasi Kelas</strong></p>
                        <ul>
                            <li>Mengelola daftar hadir siswa</li>
                            <li>Mencatat perkembangan belajar siswa</li>
                            <li>Mengelola nilai dan hasil asesmen</li>
                            <li>Membuat laporan hasil belajar</li>
                        </ul>
                        
                        <p><strong>Manfaat:</strong></p>
                        <p>Melatih keterampilan organisasi dan dokumentasi yang penting bagi guru profesional. Belajar menggunakan sistem informasi manajemen pembelajaran digital.</p>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>2. Pengembangan Profesional</h5>
                        
                        <p><strong>a. Observasi Pembelajaran</strong></p>
                        <ul>
                            <li>Mengobservasi praktik mengajar guru pamong dan guru lain</li>
                            <li>Mengidentifikasi best practices dan strategi efektif</li>
                            <li>Merefleksikan pengamatan untuk perbaikan praktik sendiri</li>
                        </ul>
                        
                        <p><strong>Pembelajaran:</strong></p>
                        <p>Observasi memberikan wawasan berharga tentang berbagai gaya dan strategi mengajar. Saya belajar bahwa tidak ada satu cara terbaik mengajar; efektivitas bergantung pada konteks, materi, dan karakteristik siswa.</p>
                        
                        <p><strong>b. Konsultasi dengan Guru Pamong dan Dosen Pembimbing</strong></p>
                        <ul>
                            <li>Mendiskusikan rancangan pembelajaran</li>
                            <li>Merefleksikan praktik mengajar yang telah dilakukan</li>
                            <li>Mendapatkan feedback dan saran perbaikan</li>
                            <li>Mengonsultasikan permasalahan yang dihadapi</li>
                        </ul>
                        
                        <p><strong>Pembelajaran:</strong></p>
                        <p>Feedback dari pembimbing sangat berharga untuk pengembangan kompetensi. Konsultasi rutin membantu saya lebih reflektif dan terus memperbaiki praktik mengajar.</p>
                        
                        <p><strong>c. Mengikuti Kegiatan MGMP/Workshop</strong></p>
                        <ul>
                            <li>Berpartisipasi dalam Musyawarah Guru Mata Pelajaran (MGMP)</li>
                            <li>Mengikuti workshop pengembangan pembelajaran</li>
                            <li>Berbagi pengalaman dengan guru lain</li>
                        </ul>
                        
                        <p><strong>Pembelajaran:</strong></p>
                        <p>Kolaborasi dengan komunitas guru memperluas perspektif dan memperkaya repertoar strategi pembelajaran. Pentingnya networking dan kolaborasi profesional.</p>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>3. Keterlibatan dalam Kegiatan Sekolah</h5>
                        
                        <p><strong>a. Kegiatan Ekstrakurikuler</strong></p>
                        <ul>
                            <li>Membimbing kegiatan ekstrakurikuler yang relevan dengan bidang studi</li>
                            <li>Mendampingi siswa dalam kompetisi/olimpiade</li>
                            <li>Memfasilitasi project atau kegiatan siswa</li>
                        </ul>
                        
                        <p><strong>Manfaat:</strong></p>
                        <p>Kegiatan ekstrakurikuler memberikan kesempatan untuk mengenal siswa lebih dekat di luar konteks pembelajaran formal. Membangun relasi yang lebih personal dan memahami potensi siswa secara holistik.</p>
                        
                        <p><strong>b. Kegiatan Sekolah Lainnya</strong></p>
                        <ul>
                            <li>Membantu kegiatan upacara bendera</li>
                            <li>Terlibat dalam kegiatan P5 (Projek Penguatan Profil Pelajar Pancasila)</li>
                            <li>Berpartisipasi dalam kegiatan peringatan hari besar</li>
                            <li>Membantu kegiatan penerimaan peserta didik baru</li>
                        </ul>
                        
                        <p><strong>Manfaat:</strong></p>
                        <p>Pemahaman tentang ekosistem sekolah secara menyeluruh. Belajar bahwa peran guru tidak hanya mengajar di kelas, tetapi juga berkontribusi pada seluruh kehidupan sekolah.</p>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>4. Kegiatan Bimbingan dan Konseling</h5>
                        <ul>
                            <li>Memberikan bimbingan akademik kepada siswa yang mengalami kesulitan belajar</li>
                            <li>Melakukan konseling ringan terkait masalah belajar</li>
                            <li>Membantu siswa mengembangkan keterampilan belajar</li>
                            <li>Berkolaborasi dengan guru BK untuk penanganan siswa</li>
                        </ul>
                        
                        <p><strong>Pembelajaran:</strong></p>
                        <p>Pentingnya pendekatan holistik dalam mendidik. Guru tidak hanya transfer knowledge, tetapi juga perlu memahami dan mendukung perkembangan siswa secara menyeluruh.</p>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>5. Pengembangan Materi dan Media Pembelajaran</h5>
                        <ul>
                            <li>Mengembangkan bahan ajar inovatif</li>
                            <li>Membuat media pembelajaran digital</li>
                            <li>Menyusun bank soal dengan berbagai level kognitif</li>
                            <li>Mengembangkan lembar kerja siswa (LKPD)</li>
                        </ul>
                        
                        <p><strong>Manfaat:</strong></p>
                        <p>Meningkatkan kreativitas dan keterampilan teknologi. Repository materi yang dikembangkan dapat digunakan kembali dan terus diperbaiki untuk pembelajaran yang lebih efektif.</p>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>6. Kegiatan Refleksi dan Dokumentasi</h5>
                        <ul>
                            <li>Menulis jurnal refleksi harian praktik mengajar</li>
                            <li>Mendokumentasikan kegiatan pembelajaran (foto, video)</li>
                            <li>Menyusun portofolio praktik mengajar</li>
                            <li>Menganalisis praktik mengajar secara sistematis</li>
                        </ul>
                        
                        <p><strong>Pembelajaran:</strong></p>
                        <p>Refleksi adalah kunci pengembangan profesional. Dokumentasi yang sistematis membantu melihat perkembangan dan mengidentifikasi area perbaikan.</p>
                    </div>
                    
                    <h4>📊 Proporsi Waktu Kegiatan Nonmengajar</h4>
                    <p>Berdasarkan catatan selama PPL, proporsi waktu untuk kegiatan nonmengajar kurang lebih:</p>
                    <ul>
                        <li><strong>Perencanaan & Persiapan:</strong> 30%</li>
                        <li><strong>Administrasi & Dokumentasi:</strong> 20%</li>
                        <li><strong>Pengembangan Profesional:</strong> 15%</li>
                        <li><strong>Kegiatan Sekolah:</strong> 15%</li>
                        <li><strong>Bimbingan Siswa:</strong> 10%</li>
                        <li><strong>Refleksi & Evaluasi:</strong> 10%</li>
                    </ul>
                    
                    <h4>💡 Kesimpulan dan Refleksi</h4>
                    <p><strong>Kesimpulan:</strong></p>
                    <p>Kegiatan nonmengajar merupakan bagian integral dan penting dari profesi guru. Kegiatan-kegiatan ini tidak hanya mendukung pelaksanaan pembelajaran yang efektif, tetapi juga berkontribusi pada pengembangan profesional dan integrasi dalam komunitas sekolah.</p>
                    
                    <p><strong>Pembelajaran Utama:</strong></p>
                    <ul>
                        <li>Guru adalah pembelajar sepanjang hayat yang terus berkembang</li>
                        <li>Kolaborasi dan networking sangat penting untuk pengembangan profesional</li>
                        <li>Refleksi sistematis kunci untuk perbaikan berkelanjutan</li>
                        <li>Peran guru sangat komprehensif, melampaui sekadar mengajar di kelas</li>
                        <li>Manajemen waktu dan organisasi sangat penting mengingat beragamnya tugas guru</li>
                    </ul>
                    
                    <p><strong>Komitmen ke Depan:</strong></p>
                    <p>Saya berkomitmen untuk terus terlibat aktif dalam kegiatan pengembangan profesional, berkolaborasi dengan komunitas guru, dan berkontribusi pada ekosistem sekolah secara menyeluruh. Pengalaman dalam kegiatan nonmengajar ini memperkaya pemahaman saya tentang profesi guru dan mempersiapkan saya untuk menjadi pendidik profesional yang kompeten dan berdedikasi.</p>
                `
            },
            
            {
                judul: "📊 Instrumen Penilaian",
                intro: "Instrumen penilaian yang dirancang beserta analisis terhadap kualitas, validitas, dan reliabilitasnya dalam mengukur pencapaian tujuan pembelajaran.",
                
                analisis: `
                    <h4>📝 Jenis-Jenis Instrumen Penilaian yang Dirancang</h4>
                    
                    <div class="analisis-subsection">
                        <h5>1. Instrumen Asesmen Diagnostik</h5>
                        
                        <p><strong>Tujuan:</strong></p>
                        <p>Mengidentifikasi pengetahuan awal, miskonsepsi, dan kesiapan belajar siswa sebelum pembelajaran dimulai.</p>
                        
                        <p><strong>Bentuk Instrumen:</strong></p>
                        <ul>
                            <li>Pre-test pilihan ganda dan isian singkat</li>
                            <li>Kuis diagnostik online (Google Forms/Quizizz)</li>
                            <li>Think-Pair-Share untuk eksplorasi pemahaman awal</li>
                        </ul>
                        
                        <p><strong>Analisis Kualitas:</strong></p>
                        <ul>
                            <li><strong>Validitas Isi:</strong> Soal-soal mencakup konsep prasyarat yang relevan dengan materi yang akan dipelajari</li>
                            <li><strong>Tingkat Kesulitan:</strong> Sesuai dengan level siswa, tidak terlalu mudah atau sulit</li>
                            <li><strong>Kejelasan:</strong> Bahasa soal jelas dan tidak ambigu</li>
                            <li><strong>Efisiensi:</strong> Dapat diselesaikan dalam waktu singkat (10-15 menit)</li>
                        </ul>
                        
                        <p><strong>Penggunaan Hasil:</strong></p>
                        <p>Hasil asesmen diagnostik digunakan untuk:</p>
                        <ul>
                            <li>Menyesuaikan starting point pembelajaran</li>
                            <li>Mengidentifikasi siswa yang memerlukan remedial prasyarat</li>
                            <li>Merencanakan diferensiasi pembelajaran</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>2. Instrumen Asesmen Formatif</h5>
                        
                        <p><strong>Tujuan:</strong></p>
                        <p>Memantau kemajuan belajar siswa selama proses pembelajaran berlangsung untuk memberikan feedback dan melakukan penyesuaian pembelajaran.</p>
                        
                        <p><strong>Bentuk Instrumen:</strong></p>
                        
                        <p><strong>a. Lembar Observasi</strong></p>
                        <ul>
                            <li>Checklist untuk mengamati partisipasi siswa dalam diskusi</li>
                            <li>Rubrik observasi keterampilan kolaborasi</li>
                            <li>Catatan anekdotal untuk dokumentasi perilaku belajar</li>
                        </ul>
                        
                        <p><strong>b. Pertanyaan Lisan (Questioning)</strong></p>
                        <ul>
                            <li>Pertanyaan tingkat rendah (LOTS) untuk mengecek pemahaman faktual</li>
                            <li>Pertanyaan tingkat tinggi (HOTS) untuk mendorong berpikir kritis</li>
                            <li>Teknik random calling untuk melibatkan semua siswa</li>
                        </ul>
                        
                        <p><strong>c. Kuis Singkat</strong></p>
                        <ul>
                            <li>Exit ticket di akhir pembelajaran</li>
                            <li>Kuis online real-time (Kahoot, Quizizz)</li>
                            <li>One-minute paper untuk refleksi</li>
                        </ul>
                        
                        <p><strong>d. Penilaian Proses Kerja</strong></p>
                        <ul>
                            <li>Checklist untuk mengecek progres kerja kelompok</li>
                            <li>Rubrik penilaian draft/prototype</li>
                            <li>Lembar self-assessment untuk siswa</li>
                        </ul>
                        
                        <p><strong>Analisis Kualitas:</strong></p>
                        <ul>
                            <li><strong>Responsiveness:</strong> Instrumen dapat memberikan feedback cepat</li>
                            <li><strong>Actionability:</strong> Hasil dapat langsung digunakan untuk penyesuaian pembelajaran</li>
                            <li><strong>Diversity:</strong> Menggunakan berbagai teknik untuk triangulasi data</li>
                            <li><strong>Non-intrusive:</strong> Tidak mengganggu flow pembelajaran</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>3. Instrumen Asesmen Sumatif</h5>
                        
                        <p><strong>Tujuan:</strong></p>
                        <p>Mengukur pencapaian tujuan pembelajaran di akhir unit/topik untuk menentukan tingkat penguasaan siswa.</p>
                        
                        <p><strong>Bentuk Instrumen:</strong></p>
                        
                        <p><strong>a. Tes Tertulis</strong></p>
                        <p><em>Pilihan Ganda:</em></p>
                        <ul>
                            <li>Jumlah: 20 soal</li>
                            <li>Level kognitif: C1-C6 (terdistribusi seimbang)</li>
                            <li>Kualitas distractor: Plausible dan menguji miskonsepsi umum</li>
                            <li>Validitas: Soal aligned dengan indikator tujuan pembelajaran</li>
                        </ul>
                        
                        <p><em>Uraian/Essay:</em></p>
                        <ul>
                            <li>Jumlah: 5 soal</li>
                            <li>Fokus pada HOTS (C4-C6)</li>
                            <li>Dilengkapi dengan rubrik analitik</li>
                            <li>Mengukur kemampuan analisis, evaluasi, dan kreasi</li>
                        </ul>
                        
                        <p><strong>Analisis Butir Soal:</strong></p>
                        <table class="analisis-table">
                            <tr>
                                <td><strong>Tingkat Kesukaran:</strong></td>
                                <td>Mudah (30%), Sedang (50%), Sukar (20%)</td>
                            </tr>
                            <tr>
                                <td><strong>Daya Pembeda:</strong></td>
                                <td>Mayoritas soal memiliki daya pembeda baik (> 0.3)</td>
                            </tr>
                            <tr>
                                <td><strong>Reliabilitas:</strong></td>
                                <td>Koefisien reliabilitas (Cronbach's Alpha) = 0.82 (baik)</td>
                            </tr>
                        </table>
                        
                        <p><strong>b. Asesmen Kinerja (Performance Assessment)</strong></p>
                        <ul>
                            <li><strong>Tugas:</strong> Membuat project pemecahan masalah algoritma</li>
                            <li><strong>Produk:</strong> Program komputer yang fungsional</li>
                            <li><strong>Rubrik:</strong> Rubrik holistik dan analitik dengan 4 level (Emerging, Developing, Proficient, Exemplary)</li>
                        </ul>
                        
                        <p><strong>Kriteria Penilaian:</strong></p>
                        <ul>
                            <li>Kebenaran algoritma (40%)</li>
                            <li>Efisiensi kode (20%)</li>
                            <li>Kreativitas solusi (20%)</li>
                            <li>Dokumentasi dan presentasi (20%)</li>
                        </ul>
                        
                        <p><strong>c. Portofolio</strong></p>
                        <ul>
                            <li>Koleksi hasil kerja terbaik siswa selama satu unit</li>
                            <li>Refleksi siswa tentang proses dan hasil belajar</li>
                            <li>Self-assessment dan goal setting</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>4. Rubrik Penilaian</h5>
                        
                        <p><strong>Contoh Rubrik Analitik untuk Presentasi Kelompok:</strong></p>
                        
                        <p><em>Aspek yang Dinilai:</em></p>
                        <ul>
                            <li><strong>Konten (40%):</strong> Kedalaman, akurasi, relevansi</li>
                            <li><strong>Organisasi (20%):</strong> Struktur, alur logis, koherensi</li>
                            <li><strong>Penyampaian (20%):</strong> Kejelasan, volume, bahasa tubuh</li>
                            <li><strong>Visual Aids (10%):</strong> Kualitas, relevansi, efektivitas</li>
                            <li><strong>Q&A (10%):</strong> Respons terhadap pertanyaan</li>
                        </ul>
                        
                        <p><strong>Level Kinerja:</strong></p>
                        <ul>
                            <li><strong>4 - Exemplary:</strong> Deskriptor untuk kinerja sangat baik</li>
                            <li><strong>3 - Proficient:</strong> Deskriptor untuk kinerja memenuhi standar</li>
                            <li><strong>2 - Developing:</strong> Deskriptor untuk kinerja mendekati standar</li>
                            <li><strong>1 - Emerging:</strong> Deskriptor untuk kinerja perlu banyak perbaikan</li>
                        </ul>
                        
                        <p><strong>Analisis Kualitas Rubrik:</strong></p>
                        <ul>
                            <li><strong>Clarity:</strong> Deskriptor jelas dan spesifik</li>
                            <li><strong>Objectivity:</strong> Meminimalkan subjektivitas penilaian</li>
                            <li><strong>Alignment:</strong> Selaras dengan tujuan pembelajaran</li>
                            <li><strong>Usability:</strong> Mudah digunakan oleh penilai</li>
                            <li><strong>Transparency:</strong> Dibagikan ke siswa sebelum penugasan</li>
                        </ul>
                    </div>
                    
                    <h4>📈 Analisis Keseluruhan Sistem Penilaian</h4>
                    
                    <div class="analisis-subsection">
                        <h5>Kekuatan Sistem Penilaian</h5>
                        <ul>
                            <li><strong>Komprehensif:</strong> Mencakup asesmen diagnostik, formatif, dan sumatif</li>
                            <li><strong>Beragam:</strong> Menggunakan berbagai metode dan instrumen</li>
                            <li><strong>Autentik:</strong> Tugas-tugas relevan dengan konteks nyata</li>
                            <li><strong>Berkeadilan:</strong> Memberikan multiple ways bagi siswa untuk menunjukkan pemahaman</li>
                            <li><strong>Formatif-oriented:</strong> Fokus pada pembelajaran dan perbaikan</li>
                            <li><strong>Transparan:</strong> Kriteria dan rubrik jelas dan dikomunikasikan</li>
                            <li><strong>Aligned:</strong> Instrumen selaras dengan tujuan pembelajaran</li>
                        </ul>
                    </div>
                    
                    <div class="analisis-subsection">
                        <h5>Area Pengembangan</h5>
                        <ul>
                            <li>Meningkatkan inter-rater reliability melalui moderasi penilaian</li>
                            <li>Mengembangkan bank soal HOTS yang lebih bervariasi</li>
                            <li>Mengintegrasikan asesmen diri dan asesmen antar teman secara lebih sistematis</li>
                            <li>Memanfaatkan teknologi untuk asesmen adaptif</li>
                            <li>Dokumentasi yang lebih baik untuk tracking progress individual siswa</li>
                        </ul>
                    </div>
                    
                    <h4>💡 Kesimpulan dan Refleksi</h4>
                    <p><strong>Kesimpulan:</strong></p>
                    <p>Sistem penilaian yang dirancang sudah cukup komprehensif dan mendukung pembelajaran. Instrumen-instrumen yang dikembangkan memiliki kualitas yang baik dari segi validitas, reliabilitas, dan fairness. Penilaian tidak hanya berfungsi sebagai accountability, tetapi lebih penting lagi sebagai bagian dari proses pembelajaran.</p>
                    
                    <p><strong>Pembelajaran Utama:</strong></p>
                    <ul>
                        <li>Asesmen yang baik dimulai dari tujuan pembelajaran yang jelas</li>
                        <li>Asesmen formatif sangat powerful untuk meningkatkan pembelajaran</li>
                        <li>Feedback yang berkualitas lebih penting dari sekadar skor</li>
                        <li>Asesmen harus adil dan memberikan kesempatan yang sama bagi semua siswa</li>
                        <li>Teknologi dapat memperkaya asesmen tetapi harus digunakan secara bijak</li>
                    </ul>
                    
                    <p><strong>Komitmen ke Depan:</strong></p>
                    <p>Saya berkomitmen untuk terus mengembangkan kompetensi dalam merancang dan menggunakan asesmen yang efektif. Asesmen bukan sekadar mengukur, tetapi harus mendorong dan mendukung pembelajaran siswa. Saya akan terus belajar tentang best practices dalam asesmen dan mengimplementasikannya dalam praktik mengajar.</p>
                `
            }
        ]
    },
    
    // ===================================
    // DATA MODEL GURU YANG DITUJU
    // ===================================
    modelGuru: {
        // Guru yang Ingin Diwujudkan
        guruYangDituju: `
            <p>Guru yang ingin saya wujudkan adalah guru yang mampu menjadi pendidik sekaligus pembelajar sepanjang hayat. Saya ingin menjadi guru yang memiliki karakter reflektif, bertanggung jawab, terbuka terhadap perubahan, serta mampu memahami bahwa setiap peserta didik memiliki karakter, kebutuhan, kemampuan, dan latar belakang yang berbeda. Karena itu, saya ingin menciptakan pembelajaran yang berpihak pada peserta didik, menghargai keberagaman, dan memberikan ruang bagi setiap peserta didik untuk berkembang sesuai potensinya.</p>

            <p>Dalam berinteraksi dengan peserta didik, saya ingin menerapkan komunikasi yang efektif, membangun hubungan yang positif, serta menjadi pendengar yang baik. Saya ingin mendorong peserta didik untuk aktif berpikir kritis, kreatif, mampu berkomunikasi, dan bekerja sama. Bagi saya, pembelajaran tidak hanya berfokus pada pencapaian pengetahuan, tetapi juga pada pembentukan karakter dan keterampilan yang dibutuhkan peserta didik dalam menghadapi kehidupan dan perkembangan zaman.</p>

            <p>Saya juga ingin menjadi guru yang mampu memanfaatkan teknologi dan berbagai inovasi secara bijak dalam pembelajaran. Perkembangan pendidikan menuntut guru untuk terus belajar, beradaptasi, dan tidak berhenti melakukan perbaikan. Oleh karena itu, saya ingin membiasakan diri melakukan refleksi terhadap proses dan hasil pembelajaran, menggunakan data atau pengalaman sebagai dasar untuk memperbaiki praktik mengajar, serta terbuka terhadap umpan balik. Dengan demikian, saya berharap dapat menjadi guru yang adaptif, inovatif, dan mampu memberikan pengalaman belajar yang bermakna bagi peserta didik.</p>
        `,
        
        // Prinsip dalam Mengajar
        prinsipMengajar: [
            {
                icon: "👥",
                judul: "Berpihak pada Peserta Didik",
                deskripsi: "Saya ingin menempatkan kebutuhan, potensi, dan perkembangan peserta didik sebagai dasar dalam merancang dan melaksanakan pembelajaran. Setiap peserta didik perlu diberi kesempatan untuk belajar, berpendapat, dan berkembang sesuai dengan karakteristiknya."
            },
            {
                icon: "⭐",
                judul: "Menjadi Teladan",
                deskripsi: "Saya ingin menunjukkan sikap disiplin, bertanggung jawab, jujur, dan menghargai orang lain karena guru tidak hanya mengajarkan pengetahuan, tetapi juga menjadi contoh bagi peserta didik. Perilaku guru dalam keseharian menjadi bagian penting dari proses pendidikan."
            },
            {
                icon: "💡",
                judul: "Menciptakan Pembelajaran Bermakna",
                deskripsi: "Saya ingin menciptakan pembelajaran yang tidak hanya membuat peserta didik memahami materi, tetapi juga mampu menghubungkannya dengan kehidupan nyata. Pembelajaran perlu mendorong peserta didik untuk berpikir kritis, kreatif, berkomunikasi, dan bekerja sama."
            },
            {
                icon: "🤝",
                judul: "Menghargai Perbedaan",
                deskripsi: "Saya menyadari bahwa setiap peserta didik memiliki kemampuan, karakter, latar belakang, dan kebutuhan yang berbeda. Oleh karena itu, saya ingin menciptakan lingkungan belajar yang inklusif, menghargai keberagaman, dan memberikan kesempatan yang adil bagi semua peserta didik."
            },
            {
                icon: "🔄",
                judul: "Terbuka terhadap Perubahan",
                deskripsi: "Saya ingin menjadi guru yang mampu beradaptasi dengan perkembangan ilmu pengetahuan, teknologi, dan kebutuhan pendidikan. Setiap perubahan saya jadikan kesempatan untuk melakukan refleksi dan memperbaiki praktik pembelajaran agar semakin relevan."
            },
            {
                icon: "📚",
                judul: "Terus Belajar",
                deskripsi: "Saya percaya bahwa menjadi guru berarti terus belajar dan mengembangkan diri. Saya ingin terbuka terhadap umpan balik, melakukan refleksi berbasis pengalaman dan data, serta terus meningkatkan kompetensi agar dapat memberikan pembelajaran yang lebih baik bagi peserta didik."
            }
        ],
        
        // Filosofi Mengajar
        filosofiMengajar: `
            <p>Saya meyakini bahwa setiap peserta didik memiliki potensi yang perlu dikembangkan melalui proses pendidikan yang menghargai kebebasan, keberagaman, dan kebutuhan mereka. Sejalan dengan pemikiran Ki Hadjar Dewantara, pendidikan hendaknya menuntun segala kekuatan kodrat yang dimiliki peserta didik agar mereka dapat mencapai keselamatan dan kebahagiaan sebagai individu maupun anggota masyarakat. Oleh karena itu, guru perlu menciptakan pembelajaran yang bermakna dan memberikan ruang bagi peserta didik untuk tumbuh sesuai potensinya.</p>
            <p>Dalam menjalankan peran sebagai guru, saya berpegang pada prinsip *Ing ngarso sung tulodo, ing madyo mangun karso, tut wuri handayani*. Guru harus mampu menjadi teladan ketika berada di depan, membangun semangat ketika bersama peserta didik, serta memberikan dorongan ketika berada di belakang. Bagi saya, mengajar bukan hanya tentang menyampaikan pengetahuan, tetapi tentang menuntun, mendampingi, dan memfasilitasi peserta didik agar mampu berkembang menjadi pribadi yang mandiri, berkarakter, dan terus belajar.</p>
        `,
        
        // Harapan sebagai Guru
        harapan: `
            <p>Saya berharap dapat menjadi guru yang mampu memberikan dampak positif bagi peserta didik di tengah perkembangan teknologi dan AI. Saya ingin menciptakan pembelajaran yang bermakna sekaligus membekali peserta didik dengan kemampuan berpikir kritis, kreatif, berkolaborasi, serta literasi digital yang bijak dan bertanggung jawab.</p>
            <p>Saya juga ingin terus belajar dan beradaptasi terhadap perubahan agar dapat menjadi guru yang relevan, reflektif, dan mampu membentuk peserta didik yang cakap teknologi sekaligus tetap berkarakter.</p>
        `
    },
    
    // ===================================
    // DATA DOKUMENTASI PPG
    // ===================================
    dokumentasi: [
        // Contoh format dokumentasi
        {
            foto: "1.png",
            judul: "pasca UAS",
            tanggal: "-",
            lokasi: "Gedung PPG UNESA",
            kategori: "kebersamaan", 
            deskripsi: "teman seperjuan"
        },
        {
            foto: "2.jpg",
            judul: "PPG Unesa Informatika 2026",
            tanggal: "-",
            lokasi: "Gedung PPG UNESA]",
            kategori: "kebersamaan",
            deskripsi: "Foto bersama rekan-rekan PPG Informatika 2026"
        },
        {
            foto: "5.jpeg",
            judul: "Diskusi ",
            tanggal: "-",
            lokasi: "Ruang kelas PPG Informatika",
            kategori: "diskusi",
            deskripsi: "diskusi tugas LMS PPG"
        },
        {
            foto: "12.jpg",
            judul: "PPL Terbimbing",
            tanggal: "[Tanggal]",
            lokasi: "SMA Negeri 17 Surabaya",
            kategori: "praktik",
            deskripsi: "[Deskripsi singkat 1-2 kalimat tentang kegiatan ini]"
        },
        {
            foto: "11.jpg",
            judul: "PPL Terbimbing",
            tanggal: "-",
            lokasi: "SMA Negeri 17 Surabaya",
            kategori: "Praktik",
            deskripsi: "Praktik Menganjar Terbimbing di SMAN 17 Surabaya"
        },
        {
            foto: "20.jpg",
            judul: "PPL Mandiri",
            tanggal: "-",
            lokasi: "SMP Negeri 49 Surabaya",
            kategori: "Praktik",
            deskripsi: "Praktik Menganjar Terbimbing di SMPN 49 Surabaya"
        },
        {
            foto: "17.jpg",
            judul: "PPL Mandiri",
            tanggal: "-",
            lokasi: "SMP Negeri 49 Surabaya",
            kategori: "Praktik",
            deskripsi: "Praktik Menganjar Terbimbing di SMPN 49 Surabaya"
        },
        {
            foto: "15.jpg",
            judul: "PPL Mandiri",
            tanggal: "-",
            lokasi: "SMP Negeri 49 Surabaya",
            kategori: "Praktik",
            deskripsi: "Mendampingi Siswa Melaksanaka Kegiatan Selasa Bugar di SMPN 49 Surabaya"
        },
        {
            foto: "7.jpeg",
            judul: "Senam Pagi",
            tanggal: "-",
            lokasi: "Halaman Gedung PPG UNESA",
            kategori: "kegiatan",
            deskripsi: "Kegiatan rutinan setiap hari jum'at yaitu senam pagi bersama"
        },
        {
            foto: "13.jpeg",
            judul: "Rekan PPL Terbimbing",
            tanggal: "-",
            lokasi: "Gedung PPG UNESA",
            kategori: "kegiatan",
            deskripsi: "Foto bersama rekan PPL Terbimbing SMA Negeri 17 Surabaya"
        },
        {
            foto: "14.jpeg",
            judul: "PPL Terbimbing",
            tanggal: "-",
            lokasi: "Gedung PPG UNESA",
            kategori: "kegiatan",
            deskripsi: "Foto bersama rekan PPL Terbimbing SMA Negeri 17 Surabaya beserta DPL"
        },
        {
            foto: "15.jpeg",
            judul: "Dosen Pembimbing Lapangan",
            tanggal: "-",
            lokasi: "Gedung PPG UNESA",
            kategori: "kegiatan",
            deskripsi: "Foto bersamaDosen Pembimbing PPL Terbimbing SMA Negeri 17 Surabaya"
        }
    ]
};

