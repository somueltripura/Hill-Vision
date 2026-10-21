/**
 * HillVision Website - Interactive Script
 * Pure Vanilla JavaScript (ES6+)
 * Fully responsive, accessible, modular interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA STORES (Programs, News, Stories, Bilingual Dictionary)
  // ==========================================================================

  const PROGRAM_DATA = {
    education: {
      title: "Education Program",
      kicker: "Quality Learning",
      stats: [
        { num: "12,500+", lbl: "Students Reached" },
        { num: "42", lbl: "Learning Centers" },
        { num: "100%", lbl: "Free Textbooks" }
      ],
      desc: "Our Education program establishes modern rural schools and community learning centers in remote hill tracts. We ensure free education up to secondary school certification (SSC), distribute study kits, provide nutritious midday meals, and train qualified local teachers.",
      projects: [
        "Multilingual Mother-Tongue Learning Materials",
        "Solar-Powered Hilltop Digital Classrooms",
        "Girls' Secondary School Scholarship Program"
      ]
    },
    healthcare: {
      title: "Healthcare Outreach",
      kicker: "Better Health, Stronger Communities",
      stats: [
        { num: "8,000+", lbl: "Patients Treated" },
        { num: "24", lbl: "Medical Camps/Year" },
        { num: "6", lbl: "Mobile Health Vans" }
      ],
      desc: "Our mobile healthcare clinics navigate difficult hilly terrain to provide preventative checkups, maternal and infant care, free essential medicines, emergency transport, and nutritional counseling for vulnerable families.",
      projects: [
        "Mobile Hilltop Doctor Clinics",
        "Maternal & Child Health Care Units",
        "Clean Drinking Water & Sanitation Camps"
      ]
    },
    skills: {
      title: "Skills Development",
      kicker: "Practical Skills for Independence",
      stats: [
        { num: "2,400+", lbl: "Youth Trained" },
        { num: "85%", lbl: "Employment Rate" },
        { num: "14", lbl: "Trade Specializations" }
      ],
      desc: "Equipping young people with market-aligned vocational training. We run hands-on workshops in electrical wiring, automotive repair, organic farm technology, information technology, and handicraft design.",
      projects: [
        "Certified Technical Trades Academy",
        "Youth Digital Skills & IT Training",
        "Apprenticeship Placement Assistance"
      ]
    },
    livelihoods: {
      title: "Sustainable Livelihoods",
      kicker: "Sustainable Income for Lasting Change",
      stats: [
        { num: "3,200+", lbl: "Families Supported" },
        { num: "60+", lbl: "Village Cooperatives" },
        { num: "35%", lbl: "Avg Income Increase" }
      ],
      desc: "Supporting agro-forestry, organic fruit orchards, climate-resilient farming, and beekeeping cooperatives. We facilitate direct market linkages to eliminate middlemen and maximize income for hill farmers.",
      projects: [
        "Organic Hillside Fruit Orchards",
        "Community Seed Banks & Fertilizer Sharing",
        "Fair-Trade Farmer Cooperative Network"
      ]
    },
    entrepreneurship: {
      title: "Women & Youth Entrepreneurship",
      kicker: "Ideas Into Opportunities",
      stats: [
        { num: "1,150+", lbl: "Micro-Enterprises" },
        { num: "94%", lbl: "Loan Repayment" },
        { num: "৳45M+", lbl: "Revolving Capital" }
      ],
      desc: "Providing seed grants, interest-free revolving microloans, financial literacy, and mentoring to women and aspiring indigenous entrepreneurs to launch sustainable local businesses.",
      projects: [
        "Indigenous Textile & Weaving Enterprises",
        "Eco-Tourism & Homestay Incubator",
        "Small-Scale Food Processing Collectives"
      ]
    },
    sustainability: {
      title: "Sustainable Development & Ecology",
      kicker: "For a Greener, Healthier Planet",
      stats: [
        { num: "150K+", lbl: "Trees Planted" },
        { num: "18", lbl: "Watersheds Protected" },
        { num: "50+", lbl: "Solar Micro-Grids" }
      ],
      desc: "Protecting biodiversity, restoring native forest canopies, combating soil erosion, and providing off-grid renewable solar power to remote hill villages without conventional electrical access.",
      projects: [
        "Community Hill Canopy Reforestation",
        "Spring & Watershed Gravity Water Systems",
        "Solar Micro-Grids for Off-Grid Hamlets"
      ]
    }
  };

  const NEWS_DATA = {
    "news-1": {
      title: "New Learning Campus Opens in Hill District",
      date: "10 Oct 2026",
      image: "assets/images/news-classroom.jpg",
      body: `
        <p>HillVision marked a monumental milestone today with the grand opening of its newest learning campus in the remote hill district. The state-of-the-art eco-friendly facility is constructed with locally sourced bamboo and solar panels, serving over 120 children from six surrounding villages who previously had to trek up to three hours to reach the nearest school.</p>
        <p>The facility includes six modern classrooms, a digitized mini-library stocked with regional and national curriculum books, clean sanitary facilities, and a dedicated playground.</p>
        <p>"Our children now have safe, dignity-filled access to high-quality learning right in their home hills," remarked village elder and community council leader U Tin Hla during the opening ceremony.</p>
      `
    },
    "news-2": {
      title: "Free Health Camp Reaches 500+ People",
      date: "05 Oct 2026",
      image: "assets/images/news-health.jpg",
      body: `
        <p>A specialized medical outreach expedition organized by HillVision conducted a three-day intensive health camp in the high ridges of Rangamati, delivering free consultations, essential medications, dental hygiene kits, and pediatric screenings to more than 520 community members.</p>
        <p>A volunteer team of six physicians, four nurse practitioners, and twelve community health aides treated acute respiratory issues, skin conditions, and provided antenatal check-ups to 38 expectant mothers.</p>
        <p>In addition, families received clean water filtration tablets and nutritional guidelines to bolster immunity during the approaching winter season.</p>
      `
    },
    "news-3": {
      title: "Vocational Training Expands for Women",
      date: "28 Sep 2026",
      image: "assets/images/news-training.jpg",
      body: `
        <p>The HillVision Skills Development Hub inaugurated its latest training cohort for 60 local women, offering certified training in garment tailoring, modern embroidery, pattern making, and financial bookkeeping.</p>
        <p>Participants receive six months of intensive guidance along with a stipend to cover transport and childcare. Upon successful completion, each graduate receives an industrial-grade sewing machine and membership in our fair-trade cooperative network.</p>
        <p>Past cohorts have seen over 85% of graduates achieve financial self-reliance, with many launching successful home-based clothing businesses.</p>
      `
    }
  };

  const STORY_DATA = {
    title: "Hope in Every Step: Ananya's Journey",
    date: "Special Story Spotlight",
    image: "assets/images/story-child.jpg",
    body: `
      <p>Ten-year-old Ananya wakes up every morning as mist still rolls over the emerald ridges of her mountain village. Two years ago, her family struggled to afford basic schoolbooks, and her future seemed uncertain.</p>
      <p>Through HillVision's scholarship program, Ananya received full tuition support, a sturdy backpack, textbooks, and daily school meals. Today, she tops her class in mathematics and dreams of becoming an environmental engineer to protect the forests of her ancestors.</p>
      <p>"When I am at school, I feel like the whole world is opening its doors to me," Ananya smiles. "I want to help bring electricity and clean water to all the houses on our hill."</p>
      <p>Her story is just one of thousands made possible through the generosity of people like you who believe that distance should never be a barrier to human potential.</p>
    `
  };

  const I18N = {
    en: {
      tagline: "We Rise Together",
      nav_home: "Home",
      nav_about: "About",
      nav_programs: "Programs",
      nav_impact: "Impact",
      nav_involved: "Get Involved",
      nav_news: "News & Updates",
      btn_donate: "Donate",
      btn_donate_now: "Donate Now",
      hero_title: "Empowering People<br>Building Sustainable<br>Communities",
      hero_subtitle: "Education <span class=\"dot-sep\">•</span> Healthcare <span class=\"dot-sep\">•</span> Livelihoods <span class=\"dot-sep\">•</span> Sustainable Development",
      hero_btn_donate: "Donate Now &rarr;",
      hero_btn_learn: "Learn More",
      mission_kicker: "About HillVision",
      mission_title: "Our Mission",
      mission_desc: "We work with underserved, disadvantaged and marginalized people and communities to create opportunities in education, healthcare, skills development, livelihoods, entrepreneurship and sustainable development.",
      vision_title: "Our Vision",
      vision_desc: "We want to build a sustainable and prosperous society where every person and community has chances to learn, grow, move forward and build a better future.",
      learn_more: "Learn More",
      cta_title: "Support Our Work",
      cta_desc: "Your donation helps create real opportunities for people in need. Together we can build a better tomorrow.",
      cta_trust: "Safe • Transparent • Impactful",
      impact_kicker: "Our Impact",
      impact_title: "Growing Together",
      impact_desc: "Real change happens when people get the right support. We work across multiple sectors to create lasting impact.",
      stat_1_label: "Children Educated",
      stat_1_sub: "Free education up to SSC",
      stat_2_label: "People Reached",
      stat_2_sub: "Healthcare & medical camps",
      stat_3_label: "Families Supported",
      stat_3_sub: "Livelihoods & training",
      stat_4_label: "Staff & Volunteers",
      stat_4_sub: "Working together",
      prog_kicker: "Our Programs",
      prog_title: "Key Areas of Work",
      view_all_programs: "View All Programs",
      prog_edu_title: "Education",
      prog_edu_desc: "Quality learning for a brighter future",
      prog_health_title: "Healthcare",
      prog_health_desc: "Better health, stronger communities",
      prog_skills_title: "Skills Development",
      prog_skills_desc: "Practical skills for independence",
      prog_live_title: "Livelihoods",
      prog_live_desc: "Sustainable income for lasting change",
      prog_ent_title: "Entrepreneurship",
      prog_ent_desc: "Ideas into opportunities",
      prog_sust_title: "Sustainable Development",
      prog_sust_desc: "For a greener, healthier planet",
      stories_kicker: "Our Stories",
      stories_title: "Hope in Every Step",
      stories_desc: "From classroom to community, from small dreams to big achievements — our stories show what's possible when people get the right support.",
      btn_read_stories: "Read More Stories",
      news_kicker: "Latest News",
      news_title: "News & Updates",
      view_all_news: "View All News",
      news_1_title: "New Learning Campus Opens in Hill District",
      news_1_desc: "A new learning campus is now serving 120 children from remote hill communities.",
      news_2_title: "Free Health Camp Reaches 500+ People",
      news_2_desc: "Our mobile health team provided checkups, medicines and health awareness.",
      news_3_title: "Vocational Training Expands for Women",
      news_3_desc: "New batch of tailoring and handicraft training begins this month.",
      read_more: "Read More",
      footer_desc: "Together we create opportunities, stronger communities and a better tomorrow.",
      footer_quick_links: "Quick Links",
      footer_contact_us: "Contact Us",
      footer_contact_link: "Contact",
      footer_newsletter_title: "Newsletter",
      footer_newsletter_sub: "Get updates on our work and impact.",
      btn_subscribe: "Subscribe",
      footer_copy: "© 2026 HillVision. All rights reserved."
    },
    bn: {
      tagline: "আমরা একসাথে জেগে উঠি",
      nav_home: "হোম",
      nav_about: "আমাদের সম্পর্কে",
      nav_programs: "কর্মসূচি",
      nav_impact: "প্রভাব ও ফলাফল",
      nav_involved: "যুক্ত হোন",
      nav_news: "সংবাদ ও আপডেট",
      btn_donate: "দান করুন",
      btn_donate_now: "এখনই অনুদান দিন",
      hero_title: "মানুষের ক্ষমতায়ন,<br>টেকসই সম্প্রদায়ের<br>বিকাশ",
      hero_subtitle: "শিক্ষা <span class=\"dot-sep\">•</span> স্বাস্থ্যসেবা <span class=\"dot-sep\">•</span> জীবিকা <span class=\"dot-sep\">•</span> টেকসই উন্নয়ন",
      hero_btn_donate: "অনুদান দিন &rarr;",
      hero_btn_learn: "বিস্তারিত জানুন",
      mission_kicker: "হিলভিশন পরিচিতি",
      mission_title: "আমাদের লক্ষ্য (Mission)",
      mission_desc: "আমরা পাহাড়ি অঞ্চলের অনগ্রসর ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়িয়ে শিক্ষা, স্বাস্থ্যসেবা, দক্ষতা বৃদ্ধি, জীবিকা ও টেকসই উন্নয়নের মাধ্যমে নতুন সম্ভাবনা সৃষ্টি করি।",
      vision_title: "আমাদের দৃষ্টিভঙ্গি (Vision)",
      vision_desc: "একটি অন্তর্ভুক্তিমূলক, স্বাবলম্বী ও সমৃদ্ধ সমাজ গড়ে তোলা যেখানে প্রতিটি মানুষ শিখতে, বিকশিত হতে এবং একটি উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে পারে।",
      learn_more: "বিস্তারিত দেখুন",
      cta_title: "আমাদের কাজকে সমর্থন করুন",
      cta_desc: "আপনার প্রতিটি অনুদান পিছিয়ে পড়া মানুষের জীবনে নতুন সম্ভাবনার আলো ছড়ায়। একসাথে আমরা গড়ে তুলব সুন্দর আগামী।",
      cta_trust: "নিরাপদ • স্বচ্ছ • প্রভাবশালী",
      impact_kicker: "আমাদের অর্জন",
      impact_title: "একসাথে এগিয়ে চলা",
      impact_desc: "সঠিক সহযোগিতা পেলে জীবন বদলে যায়। আমরা মানুষের টেকসই উন্নয়নে নিরলস কাজ করে যাচ্ছি।",
      stat_1_label: "শিক্ষিত শিশু",
      stat_1_sub: "এসএসসি পর্যন্ত বিনামূল্যে শিক্ষা",
      stat_2_label: "সেবাপ্রাপ্ত মানুষ",
      stat_2_sub: "বিনামূল্যে চিকিৎসা ও স্বাস্থ্য ক্যাম্প",
      stat_3_label: "উপকৃত পরিবার",
      stat_3_sub: "জীবিকা উন্নয়ন ও প্রশিক্ষণ",
      stat_4_label: "কর্মী ও স্বেচ্ছাসেবী",
      stat_4_sub: "একত্রে নিবেদিত দল",
      prog_kicker: "আমাদের কার্যক্রম",
      prog_title: "কাজের মূল ক্ষেত্রসমূহ",
      view_all_programs: "সবগুলো কার্যক্রম দেখুন",
      prog_edu_title: "শিক্ষা",
      prog_edu_desc: "উজ্জ্বল ভবিষ্যতের জন্য মানসম্মত শিক্ষা",
      prog_health_title: "স্বাস্থ্যসেবা",
      prog_health_desc: "সুস্থ মানুষ, শক্তিশালী জনপদ",
      prog_skills_title: "দক্ষতা উন্নয়ন",
      prog_skills_desc: "আত্মনির্ভরতার জন্য কার্যকর প্রশিক্ষণ",
      prog_live_title: "জীবিকা ও আয়",
      prog_live_desc: "টেকসই আয়ের মাধ্যমে জীবনমান উন্নয়ন",
      prog_ent_title: "উদ্যোক্তা তৈরি",
      prog_ent_desc: "উদ্ভাবনী চিন্তাকে সুযোগে রূপান্তর",
      prog_sust_title: "টেকসই উন্নয়ন",
      prog_sust_desc: "সবুজ ও বাসযোগ্য পৃথিবীর প্রত্যয়ে",
      stories_kicker: "সাফল্যের গল্প",
      stories_title: "প্রতি পদক্ষেপে আশার আলো",
      stories_desc: "শ্রেণিকক্ষ থেকে সমাজ, ছোট স্বপ্ন থেকে বড় অর্জন — আমাদের গল্পগুলো প্রমাণ করে সুযোগ পেলে সবাই পারে।",
      btn_read_stories: "আরো গল্প পড়ুন",
      news_kicker: "সাম্প্রতিক সংবাদ",
      news_title: "সংবাদ ও আপডেট",
      view_all_news: "সকল সংবাদ দেখুন",
      news_1_title: "পাহাড়ে নতুন শিক্ষা ক্যাম্পাস চালু",
      news_1_desc: "দুর্গম পাহাড়ের ১২০ জন শিশুর জন্য আধুনিক শিক্ষা ক্যাম্পাস যাত্রা শুরু করেছে।",
      news_2_title: "ফ্রি হেলথ ক্যাম্পে ৫০০+ মানুষের সেবা",
      news_2_desc: "ভ্রাম্যমাণ মেডিকেল দল প্রত্যন্ত এলাকায় স্বাস্থ্যসেবা ও ওষুধ পৌঁছে দিয়েছে।",
      news_3_title: "নারীদের কর্মমুখী প্রশিক্ষণ সম্প্রসারণ",
      news_3_desc: "সেলাই ও হস্তশিল্প প্রশিক্ষণের নতুন ব্যাচ শুরু হয়েছে এই মাসে।",
      read_more: "আরও পড়ুন",
      footer_desc: "একসাথে আমরা তৈরি করি সুযোগ, সমৃদ্ধ সমাজ এবং সুন্দর ভবিষ্যৎ।",
      footer_quick_links: "দ্রুত লিঙ্ক",
      footer_contact_us: "যোগাযোগ",
      footer_contact_link: "যোগাযোগ",
      footer_newsletter_title: "নিউজলেটার",
      footer_newsletter_sub: "নিয়মিত কাজের আপডেট ও খবর পান।",
      btn_subscribe: "সাবস্ক্রাইব",
      footer_copy: "© ২০২৬ হিলভিশন। সর্বস্বত্ব সংরক্ষিত।"
    }
  };

  let currentLang = 'en';

  // ==========================================================================
  // 2. STICKY HEADER & ACTIVE NAV INDICATOR
  // ==========================================================================

  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollPos = window.scrollY;

    // Header sticky shadow
    if (scrollPos > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Back to top visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }

    // Active Navigation Highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav') === currentSectionId) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================================================

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (hamburgerBtn && mobileDrawer) {
    function toggleMobileMenu() {
      const isOpen = hamburgerBtn.classList.toggle('is-active');
      mobileDrawer.classList.toggle('is-open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
      mobileDrawer.setAttribute('aria-hidden', (!isOpen).toString());
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile drawer when clicking a link
    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('is-active');
        mobileDrawer.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileDrawer.classList.contains('is-open')) {
        hamburgerBtn.classList.remove('is-active');
        mobileDrawer.classList.remove('is-open');
      }
    });
  }

  // ==========================================================================
  // 4. MODAL MANAGEMENT SYSTEM (Accessible, ESC support, Scroll locking)
  // ==========================================================================

  const allModals = document.querySelectorAll('.modal-backdrop');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    allModals.forEach(m => closeModal(m));

    targetModal.classList.add('is-active');
    targetModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first interactive element in modal
    const focusable = targetModal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Hook all close buttons
  document.querySelectorAll('.modal-close-btn, .modal-close-btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  // Close on backdrop click
  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.is-active');
      if (activeModal) closeModal(activeModal);
    }
  });

  // ==========================================================================
  // 5. DONATION MODAL LOGIC & FORM VALIDATION
  // ==========================================================================

  const donateButtons = document.querySelectorAll('.open-donate-modal');
  donateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal('donate-modal');
    });
  });

  const amountButtons = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('custom-amount');
  const donateSubmitAmount = document.getElementById('donate-submit-amount');
  const donationForm = document.getElementById('donation-form');
  const donationSuccessPanel = document.getElementById('donation-success-panel');
  let selectedDonationAmount = 1000;

  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      amountButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDonationAmount = parseInt(btn.getAttribute('data-amount'), 10);
      if (customAmountInput) customAmountInput.value = '';
      if (donateSubmitAmount) donateSubmitAmount.textContent = `৳${selectedDonationAmount.toLocaleString()}`;
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      const val = parseInt(customAmountInput.value, 10);
      if (val && val > 0) {
        amountButtons.forEach(b => b.classList.remove('active'));
        selectedDonationAmount = val;
        if (donateSubmitAmount) donateSubmitAmount.textContent = `৳${selectedDonationAmount.toLocaleString()}`;
      }
    });
  }

  // Radio pills (frequency and payment gateway)
  document.querySelectorAll('.radio-pill-group .radio-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.radio-pill-group .radio-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const radio = pill.querySelector('input');
      if (radio) radio.checked = true;
    });
  });

  document.querySelectorAll('.payment-methods-grid .payment-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.payment-methods-grid .payment-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const radio = pill.querySelector('input');
      if (radio) radio.checked = true;
    });
  });

  // Submit Donation Form
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const donorName = document.getElementById('donor-name').value.trim();
      const donorEmail = document.getElementById('donor-email').value.trim();

      if (!donorName || !donorEmail) {
        alert('Please fill in your name and email address to proceed with the demonstration.');
        return;
      }

      // Populate simulation receipt
      document.getElementById('receipt-ref').textContent = `HV-${Math.floor(10000 + Math.random() * 90000)}`;
      document.getElementById('receipt-donor').textContent = donorName;
      document.getElementById('receipt-amount').textContent = `৳${selectedDonationAmount.toLocaleString()}`;

      donationForm.style.display = 'none';
      donationSuccessPanel.style.display = 'block';
    });
  }

  // Reset donation modal on close
  const donateModal = document.getElementById('donate-modal');
  if (donateModal) {
    const observer = new MutationObserver(() => {
      if (!donateModal.classList.contains('is-active')) {
        setTimeout(() => {
          if (donationForm) donationForm.style.display = 'block';
          if (donationSuccessPanel) donationSuccessPanel.style.display = 'none';
          if (donationForm) donationForm.reset();
        }, 300);
      }
    });
    observer.observe(donateModal, { attributes: true, attributeFilter: ['class'] });
  }

  // ==========================================================================
  // 6. PROGRAM CARDS & DETAIL MODAL
  // ==========================================================================

  const programCards = document.querySelectorAll('.program-card');
  const programModal = document.getElementById('program-modal');
  const programModalTitle = document.getElementById('program-modal-title');
  const programModalKicker = document.getElementById('program-modal-kicker');
  const programModalContent = document.getElementById('program-modal-content');

  function showProgramDetails(programKey) {
    const data = PROGRAM_DATA[programKey];
    if (!data) return;

    programModalTitle.textContent = data.title;
    programModalKicker.textContent = data.kicker;

    let statsHtml = data.stats.map(s => `
      <div>
        <div class="mini-stat-num">${s.num}</div>
        <div class="mini-stat-lbl">${s.lbl}</div>
      </div>
    `).join('');

    let projectsHtml = data.projects.map(p => `<li>${p}</li>`).join('');

    programModalContent.innerHTML = `
      <p>${data.desc}</p>
      <div class="program-stats-mini">${statsHtml}</div>
      <h4 style="font-family: var(--font-heading); color: var(--color-primary-green); margin-bottom: 0.5rem; font-size: 1.05rem;">Key Initiatives & Current Projects:</h4>
      <ul style="padding-left: 1.25rem; line-height: 1.7; color: var(--color-text-dark); list-style-type: disc;">
        ${projectsHtml}
      </ul>
    `;

    openModal('program-modal');
  }

  programCards.forEach(card => {
    card.addEventListener('click', () => {
      const progId = card.getAttribute('data-program-id');
      showProgramDetails(progId);
    });

    // Keyboard Accessibility (Enter / Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const progId = card.getAttribute('data-program-id');
        showProgramDetails(progId);
      }
    });
  });

  const viewAllProgramsBtn = document.getElementById('view-all-programs-btn');
  if (viewAllProgramsBtn) {
    viewAllProgramsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showProgramDetails('education');
    });
  }

  // ==========================================================================
  // 7. NEWS ARTICLES & STORY MODAL
  // ==========================================================================

  const articleModal = document.getElementById('article-modal');
  const articleModalTitle = document.getElementById('article-modal-title');
  const articleModalDate = document.getElementById('article-modal-date');
  const articleModalImg = document.getElementById('article-modal-img');
  const articleModalBody = document.getElementById('article-modal-body');

  function showArticleModal(newsId) {
    const data = NEWS_DATA[newsId];
    if (!data) return;

    articleModalTitle.textContent = data.title;
    articleModalDate.textContent = data.date;
    articleModalImg.src = data.image;
    articleModalImg.alt = data.title;
    articleModalBody.innerHTML = data.body;

    openModal('article-modal');
  }

  document.querySelectorAll('.news-read-more, .news-link-title').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const articleId = el.getAttribute('data-article-id');
      showArticleModal(articleId);
    });
  });

  const viewAllNewsBtn = document.getElementById('view-all-news-btn');
  if (viewAllNewsBtn) {
    viewAllNewsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showArticleModal('news-1');
    });
  }

  // Success Story Trigger
  const readStoryBtn = document.getElementById('read-story-btn');
  if (readStoryBtn) {
    readStoryBtn.addEventListener('click', () => {
      articleModalTitle.textContent = STORY_DATA.title;
      articleModalDate.textContent = STORY_DATA.date;
      articleModalImg.src = STORY_DATA.image;
      articleModalImg.alt = STORY_DATA.title;
      articleModalBody.innerHTML = STORY_DATA.body;
      openModal('article-modal');
    });
  }

  // Mission & Vision Learn More Modals
  document.querySelectorAll('[data-modal="mission-modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showProgramDetails('education');
    });
  });

  document.querySelectorAll('[data-modal="vision-modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showProgramDetails('sustainability');
    });
  });

  // ==========================================================================
  // 8. SEARCH FLYOUT WITH REAL-TIME FILTERING
  // ==========================================================================

  const searchOpenBtn = document.getElementById('search-open-btn');
  const mobileSearchOpenBtn = document.getElementById('mobile-search-open-btn');
  const searchInput = document.getElementById('live-search-input');
  const searchResultsList = document.getElementById('search-results-list');

  const SEARCH_INDEX = [
    { title: "Education Program", snippet: "Free education up to SSC, learning centers, books and meals.", type: "program", id: "education" },
    { title: "Healthcare Outreach", snippet: "Free health camps, mobile doctors, medicines and maternity care.", type: "program", id: "healthcare" },
    { title: "Skills Development", snippet: "Vocational courses in tailoring, mechanics, and IT for young people.", type: "program", id: "skills" },
    { title: "Sustainable Livelihoods", snippet: "Agroforestry, organic orchards, seed banks and market linkages.", type: "program", id: "livelihoods" },
    { title: "Entrepreneurship & Microfinance", snippet: "Seed capital and mentorship for local women and youth startups.", type: "program", id: "entrepreneurship" },
    { title: "Sustainable Development", snippet: "Reforestation, solar micro-grids, and clean drinking watersheds.", type: "program", id: "sustainability" },
    { title: "New Learning Campus Opens in Hill District", snippet: "120 children from remote hill villages now have modern classrooms.", type: "news", id: "news-1" },
    { title: "Free Health Camp Reaches 500+ People", snippet: "Mobile healthcare expedition provided medicines and pediatric care.", type: "news", id: "news-2" },
    { title: "Vocational Training Expands for Women", snippet: "Tailoring and handicraft workshops empower sixty women with livelihood tools.", type: "news", id: "news-3" },
    { title: "Hope in Every Step - Ananya's Journey", snippet: "From small dreams to big achievements through education scholarships.", type: "story", id: "story" }
  ];

  function triggerSearchModal() {
    openModal('search-modal');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }
  }

  if (searchOpenBtn) {
    searchOpenBtn.addEventListener('click', triggerSearchModal);
  }
  if (mobileSearchOpenBtn) {
    mobileSearchOpenBtn.addEventListener('click', () => {
      // Close mobile drawer then open search
      if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.classList.remove('is-active');
        mobileDrawer.classList.remove('is-open');
      }
      triggerSearchModal();
    });
  }

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResultsList.innerHTML = `<p class="search-hint">Type a keyword above to find programs, initiatives, and recent news.</p>`;
      return;
    }

    const matches = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(q) || item.snippet.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<p class="search-hint">No results found for "<strong>${escapeHtml(query)}</strong>". Try searching for <em>education</em>, <em>health</em>, <em>livelihood</em>, or <em>trees</em>.</p>`;
      return;
    }

    searchResultsList.innerHTML = matches.map(item => `
      <div class="search-result-item" data-type="${item.type}" data-id="${item.id}" tabindex="0">
        <div class="search-result-title">${escapeHtml(item.title)}</div>
        <div class="search-result-snippet">${escapeHtml(item.snippet)}</div>
      </div>
    `).join('');

    // Attach click events to results
    searchResultsList.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const type = item.getAttribute('data-type');
        const id = item.getAttribute('data-id');
        closeModal(document.getElementById('search-modal'));

        if (type === 'program') {
          showProgramDetails(id);
        } else if (type === 'news') {
          showArticleModal(id);
        } else if (type === 'story') {
          readStoryBtn.click();
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ==========================================================================
  // 9. ANIMATED IMPACT STATISTICS (IntersectionObserver)
  // ==========================================================================

  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeProgress * target);

        counter.textContent = currentCount.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const impactSection = document.getElementById('impact');
  if (impactSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(impactSection);
  } else {
    // Fallback if IntersectionObserver not available
    animateCounters();
  }

  // ==========================================================================
  // 10. NEWSLETTER VALIDATION & FEEDBACK
  // ==========================================================================

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        showFeedback("Please enter your email address.", false);
        newsletterEmail.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        showFeedback("Please enter a valid email address.", false);
        newsletterEmail.focus();
        return;
      }

      // Simulated success
      newsletterEmail.value = '';
      showFeedback("Thank you! You have subscribed to HillVision updates.", true);
    });

    function showFeedback(message, isSuccess) {
      newsletterFeedback.textContent = message;
      newsletterFeedback.className = `form-feedback ${isSuccess ? 'is-success' : 'is-error'}`;
      setTimeout(() => {
        if (isSuccess) {
          newsletterFeedback.textContent = '';
        }
      }, 5000);
    }
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;

    const enButtons = document.querySelectorAll('#lang-en, #mobile-lang-en');
    const bnButtons = document.querySelectorAll('#lang-bn, #mobile-lang-bn');

    if (lang === 'en') {
      enButtons.forEach(b => b.classList.add('active'));
      bnButtons.forEach(b => b.classList.remove('active'));
      document.documentElement.lang = 'en';
    } else {
      bnButtons.forEach(b => b.classList.add('active'));
      enButtons.forEach(b => b.classList.remove('active'));
      document.documentElement.lang = 'bn';
    }

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang][key]) {
        el.innerHTML = I18N[lang][key];
      }
    });
  }

  document.querySelectorAll('#lang-en, #mobile-lang-en').forEach(b => {
    b.addEventListener('click', () => setLanguage('en'));
  });
  document.querySelectorAll('#lang-bn, #mobile-lang-bn').forEach(b => {
    b.addEventListener('click', () => setLanguage('bn'));
  });

  // ==========================================================================
  // 12. POLICY & TERMS MODAL
  // ==========================================================================

  const policyModal = document.getElementById('policy-modal');
  const policyTitle = document.getElementById('policy-modal-title');
  const policyBody = document.getElementById('policy-modal-body');

  const linkPrivacy = document.getElementById('link-privacy');
  const linkTerms = document.getElementById('link-terms');

  if (linkPrivacy) {
    linkPrivacy.addEventListener('click', (e) => {
      e.preventDefault();
      policyTitle.textContent = "Privacy Policy";
      policyBody.innerHTML = `
        <p>HillVision is committed to safeguarding the privacy and confidential information of all our donors, volunteers, beneficiaries, and website visitors.</p>
        <h3>Data Collection</h3>
        <p>This demonstration website operates entirely client-side. We do not store, harvest, or transmit personally identifiable information or financial account details to external servers.</p>
        <h3>Donor Trust</h3>
        <p>In all actual organizational endeavors, 100% of donor records are encrypted and maintained in strict adherence to international non-profit privacy benchmarks.</p>
      `;
      openModal('policy-modal');
    });
  }

  if (linkTerms) {
    linkTerms.addEventListener('click', (e) => {
      e.preventDefault();
      policyTitle.textContent = "Terms of Service";
      policyBody.innerHTML = `
        <p>Welcome to HillVision. By accessing our educational resources, project updates, and digital donation features, you agree to our terms of responsible engagement.</p>
        <h3>Community Standards</h3>
        <p>All photographs and field narratives represent real community partners and are protected under non-profit creative distribution guidelines.</p>
        <h3>Demonstration Disclosure</h3>
        <p>This platform serves as a production-grade frontend prototype for HillVision, illustrating interactive donor flows and community impact visualization.</p>
      `;
      openModal('policy-modal');
    });
  }

});
