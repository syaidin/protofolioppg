/* ===================================
   E-PORTFOLIO MAHASISWA PPG
   Main JavaScript File
   =================================== */

// ===================================
// DOCUMENT READY
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('portfolioData exists:', typeof portfolioData !== 'undefined');
    
    // Initialize all components
    initNavbar();
    initGalleryFilter();
    initLightbox();
    initScrollAnimations();
    initSectionIndicators();
    populateContent();
    initDownloadPDF();
    
    // Initialize accordion last, after content is populated
    setTimeout(function() {
        initAccordion();
        console.log('Accordion initialized');
    }, 200);
});

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================
function initNavbar() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        }
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 0) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
}

// ===================================
// ACCORDION FUNCTIONALITY
// ===================================
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const item = this.parentElement;
            const content = item.querySelector('.accordion-content');
            const isActive = this.classList.contains('active');
            
            if (isActive) {
                // Just close this accordion
                this.classList.remove('active');
                content.style.maxHeight = null;
                return;
            }
            
            // === SOLUSI: Disable all transitions + instant scroll ===
            
            const navbarHeight = 100;
            const htmlElement = document.documentElement;
            
            // 1. Disable smooth scroll di HTML
            htmlElement.style.scrollBehavior = 'auto';
            
            // 2. Disable transisi accordion sementara untuk instant close/open
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(c => c.style.transition = 'none');
            
            // 3. Close semua accordion secara instant
            document.querySelectorAll('.accordion-header.active').forEach(h => {
                h.classList.remove('active');
                const c = h.parentElement.querySelector('.accordion-content');
                if (c) c.style.maxHeight = null;
            });
            
            // 4. Force browser repaint untuk apply perubahan
            void item.offsetHeight;
            
            // 5. Scroll ke header yang diklik (SETELAH close, SEBELUM open)
            const targetPosition = item.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo(0, targetPosition);
            
            // 6. Force repaint lagi
            void item.offsetHeight;
            
            // 7. Buka accordion yang diklik
            this.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            
            // 8. Re-enable transitions setelah DOM stable
            setTimeout(() => {
                allContents.forEach(c => c.style.transition = '');
                htmlElement.style.scrollBehavior = 'smooth';
            }, 50);
        });
    });
    
    // Initialize toggle all buttons
    initToggleAllButtons();
}

// ===================================
// TOGGLE ALL ACCORDION BUTTONS
// ===================================
function initToggleAllButtons() {
    const toggleButtons = document.querySelectorAll('.btn-control');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const container = document.getElementById(targetId);
            
            if (!container) return;
            
            const accordionHeaders = container.querySelectorAll('.accordion-header');
            const accordionContents = container.querySelectorAll('.accordion-content');
            const icon = this.querySelector('.btn-icon');
            
            // Check if all are open
            const allOpen = Array.from(accordionHeaders).every(h => h.classList.contains('active'));
            
            if (allOpen) {
                // Close all
                accordionHeaders.forEach(header => {
                    header.classList.remove('active');
                });
                accordionContents.forEach(content => {
                    content.style.maxHeight = null;
                });
                icon.textContent = '▼';
                this.innerHTML = '<span class="btn-icon">▼</span> Buka Semua';
            } else {
                // Open all
                accordionHeaders.forEach(header => {
                    header.classList.add('active');
                });
                accordionContents.forEach(content => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                });
                icon.textContent = '▲';
                this.innerHTML = '<span class="btn-icon">▲</span> Tutup Semua';
            }
        });
    });
}

// ===================================
// GALLERY FILTER FUNCTIONALITY
// ===================================
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    // Add fade-in animation
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ===================================
// LIGHTBOX FUNCTIONALITY
// ===================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDate = document.getElementById('lightboxDate');
    const lightboxLocation = document.getElementById('lightboxLocation');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Open lightbox when clicking gallery item
    function setupGalleryItems() {
        const galleryItems = document.querySelectorAll('.gallery-item:not(.hidden)');
        galleryImages = Array.from(galleryItems);
        
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentImageIndex = index;
                openLightbox(this);
            });
        });
    }
    
    function openLightbox(item) {
        const img = item.querySelector('img');
        const title = item.getAttribute('data-title') || '';
        const date = item.getAttribute('data-date') || '';
        const location = item.getAttribute('data-location') || '';
        const description = item.getAttribute('data-description') || '';
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxDate.textContent = date;
        lightboxLocation.textContent = location;
        lightboxDescription.textContent = description;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        openLightbox(galleryImages[currentImageIndex]);
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(galleryImages[currentImageIndex]);
    }
    
    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
    
    // Setup gallery items
    setupGalleryItems();
    
    // Re-setup when filter changes
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(setupGalleryItems, 100);
        });
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add in-view class for modern animations
                entry.target.classList.add('in-view');
                
                // Add animate class to section titles
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('animate-in');
                }
                
                // Add in-view class to sections
                if (entry.target.tagName === 'SECTION') {
                    entry.target.classList.add('in-view');
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Observe all section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        observer.observe(title);
    });
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===================================
// SECTION SCROLL INDICATORS
// ===================================
function initSectionIndicators() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;
    
    // Create indicator container
    const indicator = document.createElement('div');
    indicator.className = 'section-indicator';
    indicator.id = 'sectionIndicator';
    
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'section-dot';
        dot.setAttribute('data-section', section.id);
        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        indicator.appendChild(dot);
    });
    
    document.body.appendChild(indicator);
    
    // Update active dot on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.id;
            }
        });
        
        // Show/hide indicator
        if (window.pageYOffset > 300) {
            indicator.classList.add('show');
        } else {
            indicator.classList.remove('show');
        }
        
        // Update active dot
        const dots = indicator.querySelectorAll('.section-dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// POPULATE CONTENT FROM DATA
// ===================================
function populateContent() {
    // Check if portfolioData exists
    if (typeof portfolioData === 'undefined') {
        console.warn('portfolioData not found. Please ensure data.js is loaded.');
        return;
    }
    
    // Populate profile data
    populateProfileData();
    
    // Populate location data
    populateLocationData();
    
    // Populate reflections
    populateReflections();
    
    // Populate teacher model
    populateTeacherModel();
    
    // Populate UTS
    populateUTS();
    
    // Populate UAS
    populateUAS();
    
    // Populate documentation
    populateDocumentation();
    
    // Populate footer
    populateFooter();
}

// ===================================
// POPULATE PROFILE DATA
// ===================================
function populateProfileData() {
    if (typeof portfolioData === 'undefined' || !portfolioData.profile) return;
    
    const profile = portfolioData.profile;
    
    // Hero section (Home page)
    setTextContent('heroProfileName', profile.namaLengkap);
    setTextContent('heroProfileBidang', profile.bidangStudi);
    setTextContent('heroProfileYear', profile.tahunPPG);
    setImageSrc('heroProfilePhoto', profile.fotoProfil);
    
    // Profile page
    setTextContent('profileName', profile.namaLengkap);
    setTextContent('profileNickname', profile.namaPanggilan);
    setTextContent('profileNim', profile.nim);
    setTextContent('profileProgramPPG', profile.programPPG);
    setTextContent('profileBidangStudi', profile.bidangStudi);
    setTextContent('profileUniversity', profile.universitas);
    setTextContent('profileYear', profile.tahunPPG);
    setTextContent('profileAsalSekolah', profile.asalSekolah);
    setImageSrc('profilePhoto', profile.fotoProfil);
    
    // Location details
    setTextContent('profileDesa', profile.daerahAsal.desa);
    setTextContent('profileKecamatan', profile.daerahAsal.kecamatan);
    setTextContent('profileKabupaten', profile.daerahAsal.kabupaten);
    setTextContent('profileProvinsi', profile.daerahAsal.provinsi);
    
    // About me
    setHTMLContent('profileAbout', profile.tentangSaya);
    
    // Origin region
    const namaDaerah = `${profile.daerahAsal.desa}, ${profile.daerahAsal.kecamatan}, ${profile.daerahAsal.kabupaten}`;
    setTextContent('originNamaDaerah', namaDaerah);
    setTextContent('originProvinsi', profile.daerahAsal.provinsi);
    setHTMLContent('originDeskripsi', profile.daerahAsal.deskripsi);
    
    // Regional characteristics
    populateCharacteristics();
    
    // Origin gallery
    populateOriginGallery();
    
    // Regional values
    setHTMLContent('originValues', profile.daerahAsal.nilai);
    
    // Home quote
    if (profile.quote) {
        setTextContent('homeQuote', profile.quote);
    }
}

// ===================================
// POPULATE CHARACTERISTICS
// ===================================
function populateCharacteristics() {
    if (typeof portfolioData === 'undefined' || !portfolioData.profile) return;
    
    const characteristics = portfolioData.profile.daerahAsal.ciriKhas;
    const container = document.getElementById('characteristicsGrid');
    
    if (!container || !characteristics) return;
    
    container.innerHTML = '';
    
    const icons = {
        'kuliner': '🍜',
        'budaya': '🎭',
        'bahasa': '💬',
        'kerajinan': '🎨',
        'alam': '🏞️',
        'nilai': '⭐'
    };
    
    Object.keys(characteristics).forEach(key => {
        if (characteristics[key]) {
            const card = document.createElement('div');
            card.className = 'characteristic-card fade-in-up';
            
            const icon = icons[key] || '✨';
            const title = key.charAt(0).toUpperCase() + key.slice(1);
            
            card.innerHTML = `
                <div class="characteristic-icon">${icon}</div>
                <h3 class="characteristic-title">${title}</h3>
                <p class="characteristic-content">${characteristics[key]}</p>
            `;
            
            container.appendChild(card);
        }
    });
}

// ===================================
// POPULATE ORIGIN GALLERY
// ===================================
function populateOriginGallery() {
    if (typeof portfolioData === 'undefined' || !portfolioData.profile) return;
    
    const gallery = portfolioData.profile.daerahAsal.galeri;
    const container = document.getElementById('originGallery');
    
    if (!container || !gallery) return;
    
    container.innerHTML = '';
    
    gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-up';
        
        galleryItem.innerHTML = `
            <img src="${item.foto}" alt="${item.judul}">
            <div class="gallery-caption">${item.judul}</div>
        `;
        
        container.appendChild(galleryItem);
    });
}

// ===================================
// POPULATE LOCATION DATA
// ===================================
function populateLocationData() {
    if (typeof portfolioData === 'undefined' || !portfolioData.lokasi) return;
    
    const lokasi = portfolioData.lokasi;
    
    setTextContent('lptkName', lokasi.namaUniversitas);
    setTextContent('lptkFakultas', lokasi.fakultas);
    setTextContent('lptkProdi', lokasi.programStudi);
    setTextContent('lptkBidangStudi', lokasi.bidangStudi);
    setTextContent('lptkAlamat', lokasi.alamat);
    setTextContent('lptkKota', lokasi.kota);
    setTextContent('lptkTahun', lokasi.tahunPPG);
    
    // Map embed
    if (lokasi.googleMapsEmbed) {
        const mapContainer = document.getElementById('mapEmbed');
        if (mapContainer) {
            mapContainer.innerHTML = lokasi.googleMapsEmbed;
        }
    }
    
    // Campus environment
    setHTMLContent('campusEnvironment', lokasi.lingkunganPerkuliahan);
    
    // Memorable moments
    setHTMLContent('campusMoments', lokasi.halBerkesan);
}

// ===================================
// POPULATE REFLECTIONS
// ===================================
function populateReflections() {
    if (typeof portfolioData === 'undefined' || !portfolioData.refleksi) {
        console.warn('portfolioData or portfolioData.refleksi not found');
        return;
    }
    
    const refleksi = portfolioData.refleksi;
    console.log('Populating reflections...', refleksi);
    
    // Semester 1
    if (refleksi.semester1) {
        console.log('Semester 1 data:', refleksi.semester1.length, 'courses');
        populateSemesterAccordion('semester1Accordion', refleksi.semester1, 1);
    }
    
    // Semester 2
    if (refleksi.semester2) {
        console.log('Semester 2 data:', refleksi.semester2.length, 'courses');
        populateSemesterAccordion('semester2Accordion', refleksi.semester2, 2);
    }
}

function populateSemesterAccordion(containerId, mataKuliah, semesterNumber) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container ${containerId} not found in DOM`);
        return;
    }
    
    if (!mataKuliah || mataKuliah.length === 0) {
        console.warn(`No mata kuliah data for ${containerId}`);
        return;
    }
    
    console.log(`Populating ${containerId} with ${mataKuliah.length} courses`);
    container.innerHTML = '';
    
    mataKuliah.forEach((mk, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item fade-in-up';
        
        // Safe access to properties with defaults
        const namaMataKuliah = mk.namaMataKuliah || 'Mata Kuliah';
        const dosen = mk.dosen || '-';
        const deskripsi = mk.deskripsi || '-';
        const connection = mk.connection || '-';
        const challenge = mk.challenge || '-';
        const concept = mk.concept || '-';
        const change = mk.change || '-';
        const artefak = mk.artefak || '-';
        const alasanArtefak = mk.alasanArtefak || mk.alasan || '-';
        const konsepUtama = mk.konsepUtama || '-';
        const perubahanYangDilakukan = mk.perubahanYangDilakukan || '-';
        
        accordionItem.innerHTML = `
            <div class="accordion-header">
                <h3 class="accordion-title">${namaMataKuliah}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    <!-- Info Dasar -->
                    <div class="course-basic-info">
                        <div class="info-row">
                            <span class="info-label">📘 Mata Kuliah:</span>
                            <span class="info-value">${namaMataKuliah}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">👨‍🏫 Dosen Pengampu:</span>
                            <span class="info-value">${dosen}</span>
                        </div>
                    </div>

                    <!-- Deskripsi Mata Kuliah -->
                    <div class="course-description">
                        <h4 class="description-title">📖 Deskripsi Mata Kuliah</h4>
                        <p class="description-text">${deskripsi}</p>
                    </div>

                    <!-- Refleksi 4C -->
                    <div class="reflection-section">
                        <h4 class="reflection-title">🔍 Refleksi 4C</h4>
                        
                        <div class="reflection-4c">
                            <div class="c-item connection">
                                <div class="c-header">
                                    <span class="c-icon">🔗</span>
                                    <h5 class="c-title">Connection (Koneksi)</h5>
                                </div>
                                <p class="c-content">${connection}</p>
                            </div>

                            <div class="c-item challenge">
                                <div class="c-header">
                                    <span class="c-icon">⚡</span>
                                    <h5 class="c-title">Challenge (Tantangan)</h5>
                                </div>
                                <p class="c-content">${challenge}</p>
                            </div>

                            <div class="c-item concept">
                                <div class="c-header">
                                    <span class="c-icon">💡</span>
                                    <h5 class="c-title">Concept (Konsep)</h5>
                                </div>
                                <p class="c-content">${concept}</p>
                            </div>

                            <div class="c-item change">
                                <div class="c-header">
                                    <span class="c-icon">🎯</span>
                                    <h5 class="c-title">Change (Perubahan)</h5>
                                </div>
                                <p class="c-content">${change}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Analisis Artefak -->
                    <div class="artefak-section">
                        <h4 class="section-subtitle">📋 Analisis Artefak</h4>
                        <div class="artefak-content">
                            <div class="artefak-item">
                                <strong class="artefak-label">Artefak Pembelajaran:</strong>
                                <p class="artefak-text">${artefak}</p>
                            </div>
                            <div class="artefak-item">
                                <strong class="artefak-label">Alasan:</strong>
                                <p class="artefak-text">${alasanArtefak}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Kaitan Praktis -->
                    <div class="practical-section">
                        <h4 class="section-subtitle">🔧 Kaitan Praktis</h4>
                        <div class="practical-content">
                            <div class="practical-item">
                                <strong class="practical-label">Konsep Utama yang Dipelajari:</strong>
                                <p class="practical-text">${konsepUtama}</p>
                            </div>
                            <div class="practical-item">
                                <strong class="practical-label">Perubahan yang Ingin Dilakukan:</strong>
                                <p class="practical-text">${perubahanYangDilakukan}</p>
                            </div>
                        </div>
                    </div>
                    
                    ${mk.perangkatPembelajaran && mk.perangkatPembelajaran.length > 0 ? `
                    <!-- Perangkat Pembelajaran -->
                    <div class="perangkat-section">
                        <h4 class="section-subtitle">📚 Perangkat Pembelajaran</h4>
                        <p class="perangkat-intro">Berikut adalah perangkat pembelajaran yang telah saya buat selama PPL:</p>
                        <div class="perangkat-list">
                            ${mk.perangkatPembelajaran.map(item => `
                                <div class="perangkat-item">
                                    <div class="perangkat-icon">📄</div>
                                    <div class="perangkat-info">
                                        <h5 class="perangkat-title">${item.judul}</h5>
                                        <p class="perangkat-desc">${item.deskripsi}</p>
                                        <a href="${item.fileUrl}" class="perangkat-link" target="_blank" download>
                                            <span class="download-icon">⬇️</span> Download
                                        </a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${mk.videoPembelajaran && mk.videoPembelajaran.length > 0 ? `
                    <!-- Video Pembelajaran -->
                    <div class="video-section">
                        <h4 class="section-subtitle">🎥 Video Pembelajaran</h4>
                        <p class="video-intro">Dokumentasi video praktik mengajar selama PPL:</p>
                        <div class="video-grid">
                            ${mk.videoPembelajaran.map(video => `
                                <div class="video-item">
                                    <div class="video-wrapper">
                                        <iframe 
                                            src="${video.videoUrl}" 
                                            title="${video.judul}"
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                    <div class="video-details">
                                        <h5 class="video-title">${video.judul}</h5>
                                        <p class="video-desc">${video.deskripsi}</p>
                                        <div class="video-meta">
                                            <span class="video-duration">⏱️ ${video.durasi}</span>
                                            <span class="video-date">📅 ${video.tanggal}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        container.appendChild(accordionItem);
    });
    
    console.log(`Successfully populated ${containerId}`);
}

// ===================================
// POPULATE TEACHER MODEL
// ===================================
function populateTeacherModel() {
    if (typeof portfolioData === 'undefined' || !portfolioData.modelGuru) return;
    
    const modelGuru = portfolioData.modelGuru;
    
    // Teacher vision
    setHTMLContent('teacherVision', modelGuru.guruYangDituju);
    
    // Teaching philosophy
    setHTMLContent('teachingPhilosophy', modelGuru.filosofiMengajar);
    
    // Teacher aspirations
    setHTMLContent('teacherAspirations', modelGuru.harapan);
    
    // Teaching principles
    populateTeachingPrinciples();
}

function populateTeachingPrinciples() {
    if (typeof portfolioData === 'undefined' || !portfolioData.modelGuru) return;
    
    const prinsip = portfolioData.modelGuru.prinsipMengajar;
    const container = document.getElementById('principlesGrid');
    
    if (!container || !prinsip) return;
    
    container.innerHTML = '';
    
    prinsip.forEach(item => {
        const card = document.createElement('div');
        card.className = 'principle-card fade-in-up';
        
        card.innerHTML = `
            <div class="principle-icon">${item.icon}</div>
            <h3 class="principle-title">${item.judul}</h3>
            <p class="principle-description">${item.deskripsi}</p>
        `;
        
        container.appendChild(card);
    });
}

// ===================================
// POPULATE UTS E-PORTFOLIO
// ===================================
function populateUTS() {
    if (typeof portfolioData === 'undefined' || !portfolioData.uts) {
        console.warn('portfolioData.uts not found');
        return;
    }
    
    const uts = portfolioData.uts;
    const container = document.getElementById('utsAccordion');
    
    if (!container) {
        console.error('UTS accordion container not found');
        return;
    }
    
    if (!uts.komponenPortfolio || uts.komponenPortfolio.length === 0) {
        console.warn('No UTS komponenPortfolio data');
        return;
    }
    
    console.log(`Populating UTS accordion with ${uts.komponenPortfolio.length} components`);
    container.innerHTML = '';
    
    uts.komponenPortfolio.forEach((komponen, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item fade-in-up';
        
        let contentHTML = '';
        
        // Build content based on tipe
        if (komponen.tipe === 'rancangan') {
            contentHTML = `
                <div class="uts-intro">
                    <p class="section-description">${komponen.intro}</p>
                </div>

                <div class="rancangan-card">
                    <div class="card-header">
                        <div class="card-icon">📄</div>
                        <div class="card-info">
                            <h3 class="card-title">${komponen.metadata.judulDokumen}</h3>
                            <p class="card-meta">
                                <span class="meta-item"><strong>Mata Pelajaran:</strong> ${komponen.metadata.mataPelajaran}</span>
                                <span class="meta-item"><strong>Kelas/Semester:</strong> ${komponen.metadata.kelas}</span>
                                <span class="meta-item"><strong>Alokasi Waktu:</strong> ${komponen.metadata.alokasi}</span>
                            </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="rancangan-highlights">
                            <h4 class="highlights-title">🎯 Poin-Poin Utama Rancangan:</h4>
                            <ul class="highlights-list">
                                ${komponen.highlights.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                ${komponen.perangkatPembelajaran && komponen.perangkatPembelajaran.length > 0 ? `
                <!-- Perangkat Pembelajaran -->
                <div class="perangkat-section">
                    <h4 class="section-subtitle">📚 Perangkat Pembelajaran</h4>
                    <p class="perangkat-intro">Berikut adalah perangkat pembelajaran yang telah disusun untuk praktik mengajar mandiri:</p>
                    <div class="perangkat-list">
                        ${komponen.perangkatPembelajaran.map(item => `
                            <div class="perangkat-item">
                                <div class="perangkat-icon">📄</div>
                                <div class="perangkat-info">
                                    <h5 class="perangkat-title">${item.judul}</h5>
                                    <p class="perangkat-desc">${item.deskripsi}</p>
                                    <a href="${item.fileUrl}" class="perangkat-link" target="_blank" download>
                                        <span class="link-icon">⬇️</span> Download
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            `;
        } else if (komponen.tipe === 'video') {
            contentHTML = `
                <div class="uts-intro">
                    <p class="section-description">${komponen.intro}</p>
                </div>

                <div class="video-card">
                    <div class="video-header">
                        <h3 class="video-title">${komponen.metadata.judulVideo}</h3>
                        <p class="video-meta">
                            <span class="meta-item">⏱️ Durasi: ${komponen.metadata.durasi}</span>
                            <span class="meta-item">📅 Tanggal: ${komponen.metadata.tanggal}</span>
                            <span class="meta-item">📍 Lokasi: ${komponen.metadata.lokasi}</span>
                        </p>
                    </div>

                    <div class="video-player">
                        <div class="video-wrapper">
                            ${komponen.videoUrl ? `
                                <iframe src="${komponen.videoUrl}" 
                                        width="100%" 
                                        height="100%" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            ` : '<p class="placeholder-text">Video praktik mengajar akan ditampilkan di sini</p>'}
                        </div>
                    </div>

                    <div class="video-description">
                        <h4 class="description-title">📝 Deskripsi Video:</h4>
                        <p class="description-text">${komponen.deskripsi}</p>
                    </div>

                    <div class="video-highlights">
                        <h4 class="highlights-title">⭐ Highlights Pembelajaran:</h4>
                        <ul class="highlights-list">
                            ${komponen.highlights.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        } else if (komponen.tipe === 'analisis') {
            contentHTML = `
                <div class="uts-intro">
                    <p class="section-description">${komponen.intro}</p>
                </div>

                <div class="analisis-content">
                    ${komponen.komponenAnalisis.map(analisis => `
                        <div class="analisis-card ${analisis.judul.includes('Keterkaitan') ? 'keterkaitan-card' : ''} ${analisis.judul.includes('Refleksi') ? 'refleksi-card' : ''}">
                            <div class="analisis-header">
                                <span class="analisis-icon">${analisis.judul.match(/[^\w\s]/)?.[0] || '📝'}</span>
                                <h3 class="analisis-title">${analisis.judul.replace(/[^\w\s]/g, '').trim()}</h3>
                            </div>
                            <div class="analisis-body">
                                ${analisis.konten}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        accordionItem.innerHTML = `
            <div class="accordion-header">
                <h3 class="accordion-title">${komponen.judul}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    ${contentHTML}
                </div>
            </div>
        `;
        
        container.appendChild(accordionItem);
    });
    
    // Initialize toggle all button for UTS
    initToggleUTSButton();
}

// Initialize toggle all button for UTS
function initToggleUTSButton() {
    const toggleButton = document.getElementById('toggleAllUTS');
    
    if (!toggleButton) return;
    
    toggleButton.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const container = document.getElementById(targetId);
        
        if (!container) return;
        
        const accordionHeaders = container.querySelectorAll('.accordion-header');
        const accordionContents = container.querySelectorAll('.accordion-content');
        const icon = this.querySelector('.btn-icon');
        
        // Check if all are open
        const allOpen = Array.from(accordionHeaders).every(h => h.classList.contains('active'));
        
        if (allOpen) {
            // Close all
            accordionHeaders.forEach(header => {
                header.classList.remove('active');
            });
            accordionContents.forEach(content => {
                content.style.maxHeight = null;
            });
            icon.textContent = '▼';
            this.innerHTML = '<span class="btn-icon">▼</span> Buka Semua';
        } else {
            // Open all
            accordionHeaders.forEach(header => {
                header.classList.add('active');
            });
            accordionContents.forEach(content => {
                content.style.maxHeight = content.scrollHeight + 'px';
            });
            icon.textContent = '▲';
            this.innerHTML = '<span class="btn-icon">▲</span> Tutup Semua';
        }
    });
}


// ===================================
// POPULATE DOCUMENTATION
// ===================================
function populateDocumentation() {
    if (typeof portfolioData === 'undefined' || !portfolioData.dokumentasi) return;
    
    const dokumentasi = portfolioData.dokumentasi;
    const container = document.getElementById('documentationGallery');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    dokumentasi.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-up';
        galleryItem.setAttribute('data-category', item.kategori);
        galleryItem.setAttribute('data-title', item.judul);
        galleryItem.setAttribute('data-date', item.tanggal);
        galleryItem.setAttribute('data-location', item.lokasi);
        galleryItem.setAttribute('data-description', item.deskripsi);
        
        galleryItem.innerHTML = `
            <img src="${item.foto}" alt="${item.judul}">
            <div class="gallery-overlay">
                <h3 class="gallery-item-title">${item.judul}</h3>
                <p class="gallery-item-date">${item.tanggal}</p>
            </div>
        `;
        
        container.appendChild(galleryItem);
    });
    
    // Re-initialize filter buttons setelah gallery items dibuat
    initGalleryFilter();
    
    // Re-initialize lightbox
    initLightbox();
}

// ===================================
// POPULATE FOOTER
// ===================================
function populateFooter() {
    if (typeof portfolioData === 'undefined' || !portfolioData.profile) return;
    
    const profile = portfolioData.profile;
    
    // Set footer content on all pages
    document.querySelectorAll('#footerName').forEach(el => {
        el.textContent = profile.namaLengkap;
    });
    
    document.querySelectorAll('#footerProgram').forEach(el => {
        el.textContent = profile.bidangStudi;
    });
    
    document.querySelectorAll('#footerUniversity').forEach(el => {
        el.textContent = profile.universitas;
    });
    
    document.querySelectorAll('#footerYear').forEach(el => {
        el.textContent = profile.tahunPPG;
    });
    
    // Footer contact
    if (profile.kontak) {
        document.querySelectorAll('#footerContact').forEach(container => {
            let contactHTML = '';
            
            if (profile.kontak.email) {
                contactHTML += `<a href="mailto:${profile.kontak.email}">Email</a>`;
            }
            if (profile.kontak.instagram) {
                contactHTML += `<a href="https://instagram.com/${profile.kontak.instagram}" target="_blank">Instagram</a>`;
            }
            if (profile.kontak.linkedin) {
                contactHTML += `<a href="${profile.kontak.linkedin}" target="_blank">LinkedIn</a>`;
            }
            
            container.innerHTML = contactHTML;
        });
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function setTextContent(id, text) {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach(element => {
        if (element && text) {
            element.textContent = text;
        }
    });
}

function setHTMLContent(id, html) {
    const element = document.getElementById(id);
    if (element && html) {
        element.innerHTML = html;
    }
}

function setImageSrc(id, src) {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach(element => {
        if (element && src) {
            element.src = src;
        }
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
// Focus trap for lightbox
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

// ===================================
// ERROR HANDLING
// ===================================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c E-Portfolio Mahasiswa PPG ', 'background: #2c5f8d; color: white; padding: 5px 10px; font-size: 14px; font-weight: bold;');
console.log('Website E-Portfolio berhasil dimuat. Silakan edit data di file js/data.js');


// ===================================
// DOWNLOAD PDF FUNCTIONALITY
// ===================================
function initDownloadPDF() {
    const btnDownload = document.getElementById('btnDownload');
    
    if (!btnDownload) return;
    
    btnDownload.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show loading state
        const originalHTML = this.innerHTML;
        this.innerHTML = '⏳';
        this.disabled = true;
        
        // Use window.print() untuk generate PDF
        // User akan pilih "Save as PDF" di print dialog
        setTimeout(function() {
            window.print();
            
            // Reset button
            setTimeout(function() {
                btnDownload.innerHTML = originalHTML;
                btnDownload.disabled = false;
            }, 500);
        }, 300);
    });
}

// ===================================
// HELPER FUNCTIONS
// ===================================
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element && text) {
        element.textContent = text;
    }
}

function setHTMLContent(id, html) {
    const element = document.getElementById(id);
    if (element && html) {
        element.innerHTML = html;
    }
}

function setImageSrc(id, src) {
    const element = document.getElementById(id);
    if (element && src) {
        element.src = src;
    }
}


// ===================================
// POPULATE UAS E-PORTFOLIO
// ===================================
function populateUAS() {
    if (typeof portfolioData === 'undefined' || !portfolioData.uas) {
        console.warn('portfolioData.uas not found');
        return;
    }
    
    const uas = portfolioData.uas;
    const container = document.getElementById('uasAccordion');
    
    if (!container) {
        console.error('UAS accordion container not found');
        return;
    }
    
    if (!uas.komponenPortfolio || uas.komponenPortfolio.length === 0) {
        console.warn('No UAS komponenPortfolio data');
        return;
    }
    
    console.log(`Populating UAS accordion with ${uas.komponenPortfolio.length} components`);
    container.innerHTML = '';
    
    uas.komponenPortfolio.forEach((komponen, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item fade-in-up';
        
        let contentHTML = '';
        
        // Check if this is video component
        if (komponen.videoData) {
            contentHTML = `
                <div class="uts-intro">
                    <p class="section-description">${komponen.intro}</p>
                </div>

                <div class="video-card">
                    <div class="video-header">
                        <h3 class="video-title">${komponen.videoData.judulVideo}</h3>
                        <p class="video-meta">
                            <span class="meta-item">⏱️ Durasi: ${komponen.videoData.durasi}</span>
                            <span class="meta-item">📅 Tanggal: ${komponen.videoData.tanggal}</span>
                            <span class="meta-item">📍 Lokasi: ${komponen.videoData.lokasi}</span>
                        </p>
                    </div>

                    <div class="video-player">
                        <div class="video-wrapper">
                            ${komponen.videoData.videoUrl ? `
                                <iframe src="${komponen.videoData.videoUrl}" 
                                        width="100%" 
                                        height="100%" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            ` : '<p class="placeholder-text">Video praktik mengajar akan ditampilkan di sini</p>'}
                        </div>
                    </div>

                    <div class="video-description">
                        <h4 class="description-title">📝 Deskripsi Video:</h4>
                        <p class="description-text">${komponen.videoData.deskripsi}</p>
                    </div>
                </div>

                <div class="analisis-content">
                    <div class="analisis-card">
                        <div class="analisis-header">
                            <span class="analisis-icon">📋</span>
                            <h3 class="analisis-title">Analisis Video Praktik Mengajar</h3>
                        </div>
                        <div class="analisis-body">
                            ${komponen.analisis}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Regular analysis component
            contentHTML = `
                <div class="uts-intro">
                    <p class="section-description">${komponen.intro}</p>
                </div>

                <div class="analisis-content">
                    <div class="analisis-card">
                        <div class="analisis-body">
                            ${komponen.analisis}
                        </div>
                    </div>
                </div>
                
                ${komponen.perangkatPembelajaran && komponen.perangkatPembelajaran.length > 0 ? `
                <!-- Perangkat Pembelajaran -->
                <div class="perangkat-section">
                    <h4 class="section-subtitle">📚 Perangkat Pembelajaran</h4>
                    <p class="perangkat-intro">Berikut adalah perangkat pembelajaran terkait analisis ini:</p>
                    <div class="perangkat-list">
                        ${komponen.perangkatPembelajaran.map(item => `
                            <div class="perangkat-item">
                                <div class="perangkat-icon">📄</div>
                                <div class="perangkat-info">
                                    <h5 class="perangkat-title">${item.judul}</h5>
                                    <p class="perangkat-desc">${item.deskripsi}</p>
                                    <a href="${item.fileUrl}" class="perangkat-link" target="_blank" download>
                                        <span class="link-icon">⬇️</span> Download
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            `;
        }
        
        accordionItem.innerHTML = `
            <div class="accordion-header">
                <h3 class="accordion-title">${komponen.judul}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    ${contentHTML}
                </div>
            </div>
        `;
        
        container.appendChild(accordionItem);
    });
    
    // Initialize toggle all button for UAS
    initToggleUASButton();
}

// Initialize toggle all button for UAS
function initToggleUASButton() {
    const toggleButton = document.getElementById('toggleAllUAS');
    
    if (!toggleButton) return;
    
    toggleButton.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const container = document.getElementById(targetId);
        
        if (!container) return;
        
        const accordionHeaders = container.querySelectorAll('.accordion-header');
        const accordionContents = container.querySelectorAll('.accordion-content');
        const icon = this.querySelector('.btn-icon');
        
        // Check if all are open
        const allOpen = Array.from(accordionHeaders).every(h => h.classList.contains('active'));
        
        if (allOpen) {
            // Close all
            accordionHeaders.forEach(header => {
                header.classList.remove('active');
            });
            accordionContents.forEach(content => {
                content.style.maxHeight = null;
            });
            icon.textContent = '▼';
            this.innerHTML = '<span class="btn-icon">▼</span> Buka Semua';
        } else {
            // Open all
            accordionHeaders.forEach(header => {
                header.classList.add('active');
            });
            accordionContents.forEach(content => {
                content.style.maxHeight = content.scrollHeight + 'px';
            });
            icon.textContent = '▲';
            this.innerHTML = '<span class="btn-icon">▲</span> Tutup Semua';
        }
    });
}
