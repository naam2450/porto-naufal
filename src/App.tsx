import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Palette, 
  Music, 
  BookOpen, 
  Brain, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  PenTool,
  ChevronRight,
  Quote,
  Languages,
  Settings,
  Plus,
  Trash2,
  Newspaper,
  LayoutGrid,
  Info,
  X
} from "lucide-react";

const translations = {
  en: {
    nav: {
      about: "About",
      creative: "Creative",
      intellectual: "Intellectual",
      contact: "Contact"
    },
    hero: {
      title: "The",
      titleItalic: "Polymath's",
      titleEnd: "Canvas.",
      subtitle: "Naufal Abdul Aziz Mumtaz — A bridge between the precision of",
      cogSci: "Cognitive Science",
      andSoul: "and the soul of",
      visualArt: "Visual Art",
      and: "and",
      music: "Music",
      viewBtn: "View Portfolio",
      readBtn: "Read the Blog"
    },
    about: {
      subtitle: "Who I Am",
      title: "The Story",
      p1: "As a",
      p1Role: "Cognitive Psychology Researcher",
      p1End: "in the making, I am fascinated by how the human mind perceives, processes, and creates. This intellectual curiosity doesn't stop at the lab; it flows into my work as an",
      p1Illustrator: "Illustrator",
      p1And: "and",
      p1Composer: "Composer",
      p2: "My approach is inherently interdisciplinary. I believe that a well-written blog post can be as rigorous as a research paper, and a musical composition can be as structured as a cognitive model. Through",
      p2End: "I explore the intersections of thought, art, and the human experience.",
      focus: "Research Focus",
      focusDesc: "Cognitive processes, memory, and the psychology of creativity.",
      style: "Artistic Style",
      styleDesc: "Cartoon-influenced aesthetics with a touch of academic elegance."
    },
    creative: {
      subtitle: "Art & Sound",
      title: "Creative Works",
      illustTitle: "Visual Illustration",
      illustDesc: "Crafting visual narratives through a unique blend of cartoon aesthetics and professional polish. Specializing in character design and conceptual art.",
      musicTitle: "Musical Composition",
      musicDesc: "Creating atmospheric and emotive soundscapes. From orchestral arrangements to contemporary digital compositions that tell a story without words.",
      explore: "Explore Work"
    },
    intellectual: {
      subtitle: "Writing & Research",
      title: "Intellectual Pursuits",
      blogDesc: "My digital sanctuary where I share reflections on psychology, life, and the creative process. A blog dedicated to the \"rhythm of thought.\"",
      visitBlog: "Visit Blog",
      cogTitle: "Cognitive Research",
      cogDesc: "Investigating the mechanics of the mind. Aspiring to contribute to the field of Cognitive Psychology through empirical research and writing.",
      acadTitle: "Academic Writing",
      acadDesc: "Translating complex psychological concepts into accessible narratives for both academic and general audiences."
    },
    quote: "\"Art is the manifestation of the mind's hidden rhythms, and science is the language we use to understand them.\"",
    contact: {
      subtitle: "Get in Touch",
      title: "Let's Collaborate",
      desc: "Whether you're interested in a creative collaboration, academic discussion, or just want to say hi, I'm always open to new connections.",
      formTitle: "Send a Message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message"
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Designed with Academic Elegance & Cartoon Soul"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      creative: "Kreatif",
      intellectual: "Intelektual",
      contact: "Kontak"
    },
    hero: {
      title: "Kanvas Sang",
      titleItalic: "Polimatik.",
      titleEnd: "",
      subtitle: "Naufal Abdul Aziz Mumtaz — Jembatan antara presisi",
      cogSci: "Ilmu Kognitif",
      andSoul: "dan jiwa",
      visualArt: "Seni Visual",
      and: "serta",
      music: "Musik",
      viewBtn: "Lihat Portofolio",
      readBtn: "Baca Blog"
    },
    about: {
      subtitle: "Siapa Saya",
      title: "Cerita",
      p1: "Sebagai",
      p1Role: "Calon Peneliti Psikologi Kognitif",
      p1End: ", saya terpesona oleh bagaimana pikiran manusia mempersepsikan, memproses, dan mencipta. Keingintahuan intelektual ini tidak berhenti di laboratorium; ia mengalir ke dalam karya saya sebagai",
      p1Illustrator: "Ilustrator",
      p1And: "dan",
      p1Composer: "Komposer",
      p2: "Pendekatan saya bersifat interdisipliner. Saya percaya bahwa postingan blog yang ditulis dengan baik bisa sama ketatnya dengan makalah penelitian, dan komposisi musik bisa sama terstrukturnya dengan model kognitif. Melalui",
      p2End: ", saya menjelajahi persimpangan pemikiran, seni, dan pengalaman manusia.",
      focus: "Fokus Penelitian",
      focusDesc: "Proses kognitif, memori, dan psikologi kreativitas.",
      style: "Gaya Artistik",
      styleDesc: "Estetika yang dipengaruhi kartun dengan sentuhan keanggunan akademis."
    },
    creative: {
      subtitle: "Seni & Suara",
      title: "Karya Kreatif",
      illustTitle: "Ilustrasi Visual",
      illustDesc: "Merancang narasi visual melalui perpaduan unik estetika kartun dan polesan profesional. Spesialisasi dalam desain karakter dan seni konseptual.",
      musicTitle: "Komposisi Musik",
      musicDesc: "Menciptakan lanskap suara yang atmosferik dan emotif. Dari aransemen orkestra hingga komposisi digital kontemporer yang bercerita tanpa kata-kata.",
      explore: "Jelajahi Karya"
    },
    intellectual: {
      subtitle: "Penulisan & Penelitian",
      title: "Pengejaran Intelektual",
      blogDesc: "Sanctuari digital saya tempat saya berbagi refleksi tentang psikologi, kehidupan, dan proses kreatif. Sebuah blog yang didedikasikan untuk \"ritme pemikiran.\"",
      visitBlog: "Kunjungi Blog",
      cogTitle: "Penelitian Kognitif",
      cogDesc: "Menyelidiki mekanisme pikiran. Bercita-cita untuk berkontribusi pada bidang Psikologi Kognitif melalui penelitian empiris dan penulisan.",
      acadTitle: "Penulisan Akademik",
      acadDesc: "Menerjemahkan konsep psikologi yang kompleks menjadi narasi yang dapat diakses baik oleh audiens akademik maupun umum."
    },
    quote: "\"Seni adalah manifestasi dari ritme tersembunyi pikiran, dan sains adalah bahasa yang kita gunakan untuk memahaminya.\"",
    contact: {
      subtitle: "Hubungi Saya",
      title: "Mari Berkolaborasi",
      desc: "Apakah Anda tertarik pada kolaborasi kreatif, diskusi akademik, atau hanya ingin menyapa, saya selalu terbuka untuk koneksi baru.",
      formTitle: "Kirim Pesan",
      name: "Nama",
      email: "Email",
      subject: "Subjek",
      message: "Pesan",
      send: "Kirim Pesan"
    },
    footer: {
      rights: "Hak cipta dilindungi undang-undang.",
      tagline: "Didesain dengan Keanggunan Akademik & Jiwa Kartun"
    }
  }
};

const AdminPanel = ({ isOpen, onClose, onAdd, onDelete, data, lang }: any) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [formData, setFormData] = useState({ title: '', description: '', link: '', date: '' });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Reset authentication when closed
  useEffect(() => {
    if (!isOpen) {
      setIsAuthenticated(false);
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'blackcat2450') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError(lang === 'id' ? 'Password salah!' : 'Incorrect password!');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAdd(activeTab, { ...formData, id: Date.now() });
    setFormData({ title: '', description: '', link: '', date: '' });
  };

  if (!isAuthenticated) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[60] bg-academic-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white cartoon-border w-full max-w-md p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Settings className="w-6 h-6 text-academic-gold" />
              Admin Login
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-academic-navy hover:text-white transition-colors cartoon-border">
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-widest">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-paper border-2 border-academic-navy outline-none focus:border-academic-gold transition-all"
                placeholder="••••••••"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
            <button type="submit" className="w-full py-4 bg-academic-navy text-white font-bold cartoon-border hover:bg-academic-gold transition-colors">
              Login
            </button>
          </form>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[60] bg-academic-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white cartoon-border w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b-2 border-academic-navy flex justify-between items-center bg-paper">
          <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
            <Settings className="w-6 h-6 text-academic-gold" />
            Admin Dashboard
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-academic-navy hover:text-white transition-colors cartoon-border">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-48 border-r-2 border-academic-navy bg-paper p-4 space-y-2">
            {[
              { id: 'projects', label: lang === 'id' ? 'Projek' : 'Projects', icon: LayoutGrid },
              { id: 'news', label: lang === 'id' ? 'Berita' : 'News', icon: Newspaper },
              { id: 'info', label: lang === 'id' ? 'Informasi' : 'Info', icon: Info },
              { id: 'pages', label: lang === 'id' ? 'Halaman' : 'Pages', icon: Plus },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-3 flex items-center gap-2 font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-academic-navy text-white cartoon-border' : 'hover:bg-academic-gold/10'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 p-8 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4 mb-12 bg-paper p-6 cartoon-border">
              <h3 className="font-serif font-bold text-xl mb-4">Add New {activeTab}</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Title" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="p-3 cartoon-border outline-none focus:border-academic-gold"
                  required
                />
                <input 
                  type="text" 
                  placeholder={activeTab === 'news' ? 'Date' : 'Link'} 
                  value={activeTab === 'news' ? formData.date : formData.link}
                  onChange={(e) => setFormData({...formData, [activeTab === 'news' ? 'date' : 'link']: e.target.value})}
                  className="p-3 cartoon-border outline-none focus:border-academic-gold"
                />
              </div>
              <textarea 
                placeholder="Description" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-3 cartoon-border outline-none focus:border-academic-gold h-24"
                required
              />
              <button type="submit" className="px-6 py-2 bg-academic-navy text-white font-bold cartoon-border hover:bg-academic-gold transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </form>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl">Existing Items</h3>
              {data[activeTab]?.length === 0 ? (
                <p className="text-gray-500 italic">No items added yet.</p>
              ) : (
                <div className="grid gap-4">
                  {data[activeTab]?.map((item: any) => (
                    <div key={item.id} className="p-4 bg-white cartoon-border flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <button 
                        onClick={() => onDelete(activeTab, item.id)}
                        className="text-red-500 hover:text-red-700 p-2 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif font-bold text-academic-navy mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-academic-gold font-medium tracking-widest uppercase text-sm"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100px" }}
      viewport={{ once: true }}
      className="h-1 bg-academic-gold mt-4"
    />
  </div>
);

const PortfolioCard = ({ title, description, icon: Icon, tags, link, color, exploreText }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 bg-white cartoon-border ${color} transition-all group relative overflow-hidden`}
  >
    <div className="relative z-10">
      <div className="mb-6 inline-block p-3 bg-paper rounded-lg cartoon-border">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs font-mono px-2 py-1 bg-paper border border-academic-navy/10 rounded">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold group-hover:text-academic-gold transition-colors"
        >
          {exploreText} <ChevronRight className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon className="w-32 h-32" />
    </div>
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('id');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminData, setAdminData] = useState({
    projects: [],
    news: [],
    info: [],
    pages: []
  });

  const handleAddItem = (type: string, item: any) => {
    setAdminData(prev => ({
      ...prev,
      [type]: [...prev[type], item]
    }));
  };

  const handleDeleteItem = (type: string, id: number) => {
    setAdminData(prev => ({
      ...prev,
      [type]: prev[type].filter((item: any) => item.id !== id)
    }));
  };

  const t = translations[lang];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-academic-gold selection:text-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-academic-gold z-50 origin-left" style={{ scaleX }} />

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        onAdd={handleAddItem}
        onDelete={handleDeleteItem}
        data={adminData}
        lang={lang}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tighter">
            N.A.A.M<span className="text-academic-gold">.</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
              <a href="#about" className="hover:text-academic-gold transition-colors">{t.nav.about}</a>
              <a href="#creative" className="hover:text-academic-gold transition-colors">{t.nav.creative}</a>
              <a href="#intellectual" className="hover:text-academic-gold transition-colors">{t.nav.intellectual}</a>
              <a href="#contact" className="hover:text-academic-gold transition-colors">{t.nav.contact}</a>
            </div>
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 cartoon-border bg-white hover:bg-academic-gold hover:text-white transition-all text-xs font-bold uppercase tracking-tighter"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'en' ? 'ID' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6">
              {t.hero.title} <span className="italic text-academic-gold">{t.hero.titleItalic}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle} <span className="font-semibold text-academic-navy">{t.hero.cogSci}</span> {t.hero.andSoul} <span className="font-semibold text-academic-navy">{t.hero.visualArt}</span> {t.hero.and} <span className="font-semibold text-academic-navy">{t.hero.music}</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#creative" className="px-8 py-4 bg-academic-navy text-white font-bold cartoon-border hover:bg-academic-gold transition-colors">
                {t.hero.viewBtn}
              </a>
              <a href="https://alunan-pikiran.blogspot.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-academic-navy font-bold hover:bg-academic-navy hover:text-white transition-all">
                {t.hero.readBtn}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 cartoon-border bg-white p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/academic/800/1000" 
                alt="Naufal Abdul Aziz Mumtaz" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-academic-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-academic-navy/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 font-serif text-8xl opacity-5 select-none pointer-events-none">
              NAAM
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <SectionHeading subtitle={t.about.subtitle}>{t.about.title}</SectionHeading>
            </div>
            <div className="md:col-span-2 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {t.about.p1} <span className="text-academic-navy font-semibold">{t.about.p1Role}</span> {t.about.p1End} <span className="text-academic-navy font-semibold">{t.about.p1Illustrator}</span> {t.about.p1And} <span className="text-academic-navy font-semibold">{t.about.p1Composer}</span>.
              </p>
              <p>
                {t.about.p2} <span className="italic">Alunan Pikiran</span>{t.about.p2End}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-serif font-bold text-academic-navy mb-2">{t.about.focus}</h4>
                  <p className="text-sm">{t.about.focusDesc}</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-academic-navy mb-2">{t.about.style}</h4>
                  <p className="text-sm">{t.about.styleDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Portfolio */}
      <section id="creative" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle={t.creative.subtitle}>{t.creative.title}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard 
              title={t.creative.illustTitle}
              description={t.creative.illustDesc}
              icon={Palette}
              tags={["Character Design", "Digital Art", "Cartoon Style", "Storyboarding"]}
              color="text-academic-navy"
              exploreText={t.creative.explore}
            />
            <PortfolioCard 
              title={t.creative.musicTitle}
              description={t.creative.musicDesc}
              icon={Music}
              tags={["Orchestration", "Sound Design", "Melodic Theory", "DAW Production"]}
              color="text-academic-gold"
              exploreText={t.creative.explore}
            />
          </div>
        </div>
      </section>

      {/* Intellectual Pursuits */}
      <section id="intellectual" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle={t.intellectual.subtitle}>{t.intellectual.title}</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-10 bg-academic-navy text-white cartoon-border relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <BookOpen className="w-8 h-8 text-academic-gold" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold">Alunan Pikiran</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                    {t.intellectual.blogDesc}
                  </p>
                  <a 
                    href="https://alunan-pikiran.blogspot.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-academic-gold text-academic-navy font-bold hover:bg-white transition-colors"
                  >
                    {t.intellectual.visitBlog} <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-700" />
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 border-2 border-academic-navy/10 hover:border-academic-gold transition-colors">
                <Brain className="w-10 h-10 text-academic-gold mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">{t.intellectual.cogTitle}</h3>
                <p className="text-sm text-gray-600">{t.intellectual.cogDesc}</p>
              </div>
              <div className="p-8 border-2 border-academic-navy/10 hover:border-academic-gold transition-colors">
                <PenTool className="w-10 h-10 text-academic-gold mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">{t.intellectual.acadTitle}</h3>
                <p className="text-sm text-gray-600">{t.intellectual.acadDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Admin Sections */}
      {adminData.projects.length > 0 && (
        <section className="py-24 bg-paper">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle={lang === 'id' ? 'Daftar Projek' : 'Project List'}>{lang === 'id' ? 'Projek Baru' : 'New Projects'}</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8">
              {adminData.projects.map((p: any) => (
                <PortfolioCard 
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  icon={LayoutGrid}
                  tags={['Admin Added']}
                  link={p.link}
                  color="text-academic-navy"
                  exploreText={t.creative.explore}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {adminData.news.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle={lang === 'id' ? 'Berita Terkini' : 'Latest News'}>{lang === 'id' ? 'Berita & Update' : 'News & Updates'}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              {adminData.news.map((n: any) => (
                <div key={n.id} className="p-8 cartoon-border bg-paper relative overflow-hidden group">
                  <div className="text-academic-gold font-mono text-sm mb-2">{n.date}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{n.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {adminData.info.length > 0 && (
        <section className="py-24 bg-academic-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle={lang === 'id' ? 'Informasi Tambahan' : 'Additional Info'}>{lang === 'id' ? 'Info Penting' : 'Important Info'}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-12">
              {adminData.info.map((i: any) => (
                <div key={i.id} className="flex gap-6">
                  <div className="p-4 bg-white/10 cartoon-border h-fit">
                    <Info className="w-6 h-6 text-academic-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{i.title}</h3>
                    <p className="text-gray-400">{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {adminData.pages.map((page: any) => (
        <section key={page.id} className="py-24 bg-white border-t border-academic-navy/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Custom Page">{page.title}</SectionHeading>
            <div className="prose prose-lg max-w-none text-gray-600">
              {page.description}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial/Quote */}
      <section className="py-24 bg-academic-navy text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote className="w-16 h-16 text-academic-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
            {t.quote}
          </h2>
          <div className="w-20 h-1 bg-academic-gold mx-auto" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 bg-paper border-t border-academic-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle={t.contact.subtitle}>{t.contact.title}</SectionHeading>
              <p className="text-lg text-gray-600 mb-8">
                {t.contact.desc}
              </p>
              <div className="space-y-4">
                <a href="mailto:contact@naufalaziz.com" className="flex items-center gap-4 text-academic-navy hover:text-academic-gold transition-colors group">
                  <div className="p-3 bg-white cartoon-border group-hover:bg-academic-gold group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-bold">contact@naufalaziz.com</span>
                </a>
                <div className="flex gap-4 pt-4">
                  {[Linkedin, Github, ExternalLink].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 bg-white cartoon-border hover:bg-academic-navy hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white p-8 cartoon-border">
              <h3 className="text-2xl font-serif font-bold mb-6">{t.contact.formTitle}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder={t.contact.name} className="w-full p-4 bg-paper border-2 border-transparent focus:border-academic-gold outline-none transition-all" />
                  <input type="email" placeholder={t.contact.email} className="w-full p-4 bg-paper border-2 border-transparent focus:border-academic-gold outline-none transition-all" />
                </div>
                <input type="text" placeholder={t.contact.subject} className="w-full p-4 bg-paper border-2 border-transparent focus:border-academic-gold outline-none transition-all" />
                <textarea placeholder={t.contact.message} rows={4} className="w-full p-4 bg-paper border-2 border-transparent focus:border-academic-gold outline-none transition-all resize-none"></textarea>
                <button className="w-full py-4 bg-academic-navy text-white font-bold hover:bg-academic-gold transition-colors">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-academic-navy/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <p>© {new Date().getFullYear()} Naufal Abdul Aziz Mumtaz. {t.footer.rights}</p>
              <button 
                onClick={() => setIsAdminOpen(true)}
                className="flex items-center gap-1 hover:text-academic-gold transition-colors font-bold uppercase text-[10px] tracking-widest"
              >
                <Settings className="w-3 h-3" /> Admin
              </button>
            </div>
            <p className="font-mono">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
