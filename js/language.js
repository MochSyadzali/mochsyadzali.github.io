const translations = {
  en: { skip: 'Skip to content', menu: 'Open menu', language: 'Language', navHome: 'Home', navAbout: 'About', navProjects: 'Projects', navBlog: 'Blog', navStore: 'Store', navContact: 'Contact', availability: 'Available for select collaborations', heroTitle: 'Building thoughtful digital experiences.', heroText: 'I’m Moch Syadzali Chusaini—a digital creator focused on clear ideas, useful products, and work that makes an impact.', viewWork: 'View my work ↗', getInTouch: 'Get in touch', basedIn: '📍 Yogyakarta, Indonesia', introTitle: 'A portfolio designed to grow with the work.', introText: 'This is the beginning: a focused space for projects, writing, recommendations, and meaningful connections.', nextLabel: 'In progress', nextTitle: 'Projects, articles & more are coming next.', nextText: 'The foundation is ready. Future sections will showcase skills, selected work, articles, affiliate picks, social channels, and a contact form.', blogLabel: 'Writing', blogTitle: 'Notes, ideas, and things I’m learning.', allArticles: 'All articles →', articleType: 'COMING SOON · ARTICLE', articleOne: 'Writing the next chapter of this portfolio', articleOneText: 'A place for lessons, experiments, and the work behind the work.', articleTwo: 'Useful tools for focused digital work', articleTwoText: 'A practical collection of ideas and tools I use or recommend.', readArticle: 'Read article →', storeLabel: 'Affiliate store', storeTitle: 'My recommended picks.', storeText: 'Products I think are worth considering—available through my affiliate link.', affiliateNote: 'Affiliate link · I may earn a commission at no extra cost to you.', productTag: 'Featured pick', productName: 'iPhone', productText: 'Explore the current offer through my official Shopee affiliate link.', productSecondTag: 'Featured pick', productSecondName: 'MacBook Pro 16 M5 Max', productSecondText: '18-core CPU · 40-core GPU · 48GB unified memory · 2TB SSD · Liquid Retina XDR 120Hz.', shopNow: 'Shop on Shopee ↗', contactTitle: 'Have an idea worth making?', contactLink: 'Let’s talk →', socialLabel: 'Social media', socialTitle: 'Let’s stay connected.', socialText: 'Follow along on the platforms where I share ideas, projects, and updates.', backTop: 'Back to top ↑' },
  zh: { skip: '跳至内容', menu: '打开菜单', language: '语言', navHome: '首页', navAbout: '关于', navProjects: '项目', navBlog: '博客', navStore: '商店', navContact: '联系', availability: '欢迎精选合作', heroTitle: '打造用心的数字体验。', heroText: '我是 Moch Syadzali Chusaini，一名专注于清晰理念、实用产品和有影响力作品的数字创作者。', viewWork: '查看作品 ↗', getInTouch: '联系我', basedIn: '📍 印度尼西亚，日惹', introTitle: '一个随作品不断成长的作品集。', introText: '这是一个起点：用于展示项目、文章、推荐和有意义连接的专注空间。', nextLabel: '进行中', nextTitle: '项目、文章和更多内容即将推出。', nextText: '基础已经准备就绪。未来将展示技能、精选作品、文章、联盟推荐、社交渠道和联系表单。', blogLabel: '写作', blogTitle: '笔记、想法与我正在学习的事。', allArticles: '所有文章 →', articleType: '即将推出 · 文章', articleOne: '撰写这份作品集的下一章', articleOneText: '记录经验、实验，以及作品背后的过程。', articleTwo: '专注数字工作的实用工具', articleTwoText: '我使用或推荐的想法与工具合集。', readArticle: '阅读文章 →', storeLabel: '联盟商店', storeTitle: '我的推荐精选。', storeText: '我认为值得考虑的产品，可通过我的联盟链接购买。', affiliateNote: '联盟链接 · 您无需支付额外费用，我可能获得佣金。', productTag: '精选推荐', productName: 'iPhone', productText: '通过我的 Shopee 官方联盟链接查看当前优惠。', productSecondTag: '精选推荐', productSecondName: 'MacBook Pro 16 M5 Max', productSecondText: '18 核 CPU · 40 核 GPU · 48GB 统一内存 · 2TB SSD · Liquid Retina XDR 120Hz。', shopNow: '前往 Shopee 购买 ↗', contactTitle: '有值得实现的想法吗？', contactLink: '一起聊聊 →', socialLabel: '社交媒体', socialTitle: '保持联系。', socialText: '在我分享想法、项目和动态的平台上关注我。', backTop: '返回顶部 ↑' },
  id: { skip: 'Lewati ke konten', menu: 'Buka menu', language: 'Bahasa', navHome: 'Beranda', navAbout: 'Tentang', navProjects: 'Proyek', navBlog: 'Blog', navStore: 'Toko', navContact: 'Kontak', availability: 'Terbuka untuk kolaborasi terpilih', heroTitle: 'Membangun pengalaman digital yang bermakna.', heroText: 'Saya Moch Syadzali Chusaini—seorang kreator digital yang berfokus pada gagasan yang jelas, produk yang bermanfaat, dan karya yang berdampak.', viewWork: 'Lihat karya saya ↗', getInTouch: 'Hubungi saya', basedIn: '📍 Yogyakarta, Indonesia', introTitle: 'Portofolio yang tumbuh bersama karya.', introText: 'Ini adalah awal: ruang terfokus untuk proyek, tulisan, rekomendasi, dan koneksi yang bermakna.', nextLabel: 'Sedang dikerjakan', nextTitle: 'Proyek, artikel, dan lainnya akan segera hadir.', nextText: 'Fondasi telah siap. Bagian selanjutnya akan menampilkan keahlian, karya pilihan, artikel, rekomendasi afiliasi, kanal sosial, dan formulir kontak.', blogLabel: 'Tulisan', blogTitle: 'Catatan, ide, dan hal yang sedang saya pelajari.', allArticles: 'Semua artikel →', articleType: 'SEGERA HADIR · ARTIKEL', articleOne: 'Menulis bab berikutnya dari portofolio ini', articleOneText: 'Ruang untuk pelajaran, eksperimen, dan proses di balik setiap karya.', articleTwo: 'Peralatan berguna untuk kerja digital yang fokus', articleTwoText: 'Kumpulan praktis dari ide dan alat yang saya gunakan atau rekomendasikan.', readArticle: 'Baca artikel →', storeLabel: 'Toko afiliasi', storeTitle: 'Pilihan rekomendasi saya.', storeText: 'Produk yang menurut saya layak dipertimbangkan—tersedia melalui tautan afiliasi saya.', affiliateNote: 'Tautan afiliasi · Saya mungkin mendapatkan komisi tanpa biaya tambahan bagi Anda.', productTag: 'Pilihan unggulan', productName: 'iPhone', productText: 'Lihat penawaran saat ini melalui tautan afiliasi Shopee resmi saya.', productSecondTag: 'Pilihan unggulan', productSecondName: 'MacBook Pro 16 M5 Max', productSecondText: 'CPU 18-core · GPU 40-core · unified memory 48GB · SSD 2TB · Liquid Retina XDR 120Hz.', shopNow: 'Belanja di Shopee ↗', contactTitle: 'Punya ide yang layak diwujudkan?', contactLink: 'Mari berbicara →', socialLabel: 'Media sosial', socialTitle: 'Mari tetap terhubung.', socialText: 'Ikuti saya di berbagai platform untuk melihat ide, proyek, dan pembaruan.', backTop: 'Kembali ke atas ↑' }
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#language-toggle');
  const menu = document.querySelector('#language-menu');
  const options = document.querySelectorAll('[data-language]');
  let language = localStorage.getItem('portfolio-language') || 'en';
  const applyLanguage = () => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.textContent = translations[language][key];
    });
    options.forEach((option) => option.setAttribute('aria-current', String(option.dataset.language === language)));
  };

  applyLanguage();
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  options.forEach((option) => option.addEventListener('click', () => {
    language = option.dataset.language;
    localStorage.setItem('portfolio-language', language);
    applyLanguage();
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-picker')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
