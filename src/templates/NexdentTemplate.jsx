import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle2, 
  PhoneCall, 
  Stethoscope, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  UserCheck, 
  Award,
  ChevronDown,
  ArrowRight,
  Hospital,
  X
} from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, desc, price }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
    <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Narxi:</span>
        <span className="text-primary font-black uppercase text-lg">{price}</span>
    </div>
  </motion.div>
)

const ExpertCard = ({ name, role, experience }) => (
    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3">
        <div className="w-full aspect-square bg-slate-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-slate-400">
            <UserCheck size={64} />
        </div>
        <h4 className="text-lg font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-primary font-bold uppercase">{role}</p>
        <p className="text-xs text-slate-400 font-medium italic">{experience} yillik tajriba</p>
    </div>
)

const FAQItem = ({ question, answer }) => (
    <details className="group glass-card px-8 py-5 rounded-2xl border border-slate-100 cursor-pointer">
        <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
            {question}
            <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-primary" />
        </summary>
        <p className="mt-4 text-slate-600 leading-relaxed">
            {answer}
        </p>
    </details>
)

export default function NexdentTemplate({ onClose }) {
  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto font-['Outfit'] select-none scroll-smooth" style={{ '--primary': "199 89% 48%" }}>
      
      {/* Absolute Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[210] w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-slate-900 border border-slate-100 hover:bg-primary hover:text-white transition-all group scale-100 hover:scale-110 active:scale-95"
      >
        <X size={24} />
      </button>

      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[150] px-6 py-6 lg:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-xl border border-slate-100 rounded-full px-8 py-4 shadow-sm pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-primary/30">ND</div>
            <span className="text-xl font-black tracking-tight text-primary uppercase">NexDent</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
            <a href="#services" className="hover:text-primary transition-colors">Xizmatlar</a>
            <a href="#experts" className="hover:text-primary transition-colors">Mutaxassislar</a>
            <a href="#faq" className="hover:text-primary transition-colors">Savollar</a>
            <a href="#contact" className="hover:text-primary transition-colors">Bog'lanishi</a>
          </div>
          <Button variant="default" size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-bold" asChild>
             <a href="https://t.me/temur070894" target="_blank" rel="noopener noreferrer">Bog'lanish</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-black border border-primary/10 tracking-widest uppercase">
              <Award size={14} />
              Professional Stomatologiya
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.95]">
              Sizga <span className="text-primary tracking-tighter">Benuqson</span> Tabassum Kerakmi?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              NexDent klinikasida biz sizning tabassumingizga san'at asaridek yondashamiz. Eng yuqori texnologiyali materiallar va og'riqsiz muolajalar faqat bizda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black shadow-2xl shadow-blue-500/20 bg-primary text-white" asChild>
                <a href="https://t.me/temur070894" target="_blank" rel="noopener noreferrer">Qabulga Yozilish</a>
              </Button>
              <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl">
                 <PhoneCall size={24} className="text-primary" />
                 <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-black uppercase">Aloqa Uchun:</span>
                    <span className="text-lg font-black text-slate-900 leading-none">+998 99 603 42 43</span>
                 </div>
              </div>
            </div>
            
            <div className="flex items-center gap-12 pt-10 border-t border-slate-100">
               <div className="space-y-1">
                 <h4 className="text-3xl font-black text-slate-900">15+</h4>
                 <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">Yillik Tajriba</p>
               </div>
               <div className="space-y-1">
                 <h4 className="text-3xl font-black text-slate-900">100k</h4>
                 <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">Sog'lom Tishlar</p>
               </div>
               <div className="space-y-1 text-primary">
                 <h4 className="text-3xl font-black">ISO</h4>
                 <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]"> Sertifikat</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
             <div className="w-[500px] h-[500px] bg-primary/5 rounded-[4rem] rotate-6 border border-primary/20 absolute -z-10 translate-x-10 translate-y-10" />
             <div className="w-[500px] h-[500px] bg-white rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center p-12 text-center space-y-8">
                 <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl flex items-center justify-center bg-primary/10">
                    <Hospital size={64} className="text-primary" />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900">Biz bilan tabassum qiling</h2>
                 <p className="text-slate-500 text-lg">NexDent klinikasi eng zamonaviy uskunalar bilan jihozlangan.</p>
                 <div className="flex gap-4 w-full">
                    <div className="flex-1 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                        <Clock size={24} className="text-primary mx-auto mb-2" />
                        <span className="text-xs font-black text-slate-700">9:00 - 21:00</span>
                    </div>
                    <div className="flex-1 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                        <MapPin size={24} className="text-primary mx-auto mb-2" />
                        <span className="text-xs font-black text-slate-700">Manzilimiz</span>
                    </div>
                 </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative py-40 px-6 lg:px-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 max-w-4xl">
             <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900">Professional Muolajalar</h2>
                <p className="text-xl text-slate-600 max-w-xl italic">Siz uchun eng samarali va sifatli xizmatlarimiz ro'yxati.</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={Sparkles} title="Tish Oqartirish" desc="8 tonnagacha oqartirish imkonini beruvchi eng xavfsiz 'ZOOM' tizimi." price="800,000 UZS" />
            <ServiceCard icon={ShieldCheck} title="Implantatsiya" desc="Yo'qotilgan tishlarni Shvetsariya implantlari bilan tiklash (umrbod kafolat)." price="2,500,000 UZS+" />
            <ServiceCard icon={Smile} title="Venerlar" desc="Natijasi Gollivud yulduzlaridek bo'lgan yuqori sifatli keramik venerlar." price="1,200,000 UZS" />
            <ServiceCard icon={Stethoscope} title="Kariesni Davolash" desc="Og'riqsiz va tish rangiga mos plombalar bilan davolash." price="250,000 UZS" />
            <ServiceCard icon={CheckCircle2} title="Boshlang'ich Ko'rik" desc="Tishlar va milkning to'liq diagnostikasi hamda davolash rejasi." price="BEPUL" />
            <ServiceCard icon={PhoneCall} title="Breket Tizimlari" desc="Tishlar qiyshiqligini tuzatish va to'g'ri tishlam hosil qilish." price="3,000,000 UZS+" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="experts" className="py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:sticky lg:top-32 space-y-6">
                <h2 className="text-5xl font-black text-slate-900 leading-tight">Bizning Professional Jamoamiz</h2>
                <p className="text-lg text-slate-500">Eng yaxshi natija uchun o'z sohasining ustalari bilan ishlaymiz. Har bir mutaxassis xalqaro sertifikatlarga ega.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                <ExpertCard name="Dr. Anvar Aliev" role="Bosh Stomatolog / Implantolog" experience="20" />
                <ExpertCard name="Dr. Malika Karimova" role="Bolalar Stomatologi" experience="12" />
                <ExpertCard name="Dr. Jamshid Nazarov" role="Ortodont" experience="15" />
                <ExpertCard name="Dr. Sevara Azizova" role="Terapevt / Estet" experience="8" />
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-40 px-6 lg:px-12 bg-slate-50/30">
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-black text-slate-900">Ko'p Beriladigan Savollar</h2>
            </div>
            <div className="space-y-4">
                <FAQItem question="Tish oqartirish tish emaliga zarar yetkazadimi?" answer="Professional oqartirish muolajasi emalga zarar yetkazmaydi." />
                <FAQItem question="Implantat o'rnatish og'riqlimi?" answer="Muolaja anesteziya ostida o'tadi, siz deyarli hech narsani sezmaysiz." />
                <FAQItem question="Klinikangizda kafolat bormi?" answer="Ha, biz barcha xizmatlarimiz uchun 1 yildan 10 yilgacha kafolat beramiz." />
                <FAQItem question="Bolalarni qaysi yoshdan olib kelish kerak?" answer="Ilk tishlar chiqqandan boshlab (6 oylikdan) ko'rik tavsiya qilinadi." />
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-40 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-10 text-slate-900">
                <h2 className="text-6xl font-black leading-none">Biz bilan Bog'laning</h2>
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6">
                    <PhoneCall size={32} className="text-primary" />
                    <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest font-black">Qabulga Qo'ng'iroq Qiling:</p>
                        <h4 className="text-2xl font-black text-slate-900 leading-none">+998 99 603 42 43</h4>
                    </div>
                </div>
                <div className="flex items-start gap-6 px-4">
                    <MapPin size={28} className="text-primary shrink-0" />
                    <p className="text-slate-500 font-bold">NexDent klinikasi. Toshkent sh., Chilonzor tumani, Lutfiy ko'chasi, 24-uy</p>
                </div>
             </div>
             <div className="bg-slate-100 rounded-[3rem] h-[500px] flex items-center justify-center text-slate-400 font-black italic relative overflow-hidden group border border-slate-100">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:scale-105 transition-transform" />
                  <span className="relative z-10 bg-white/90 px-8 py-4 rounded-full shadow-xl text-primary font-black flex items-center gap-2 tracking-tight uppercase">Google Maps'da ochish</span>
             </div>
          </div>
      </section>

      <footer className="py-20 bg-slate-900 text-white px-6 lg:px-12">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12 border-b border-white/10 pb-20 text-center lg:text-left">
            <div className="col-span-2 space-y-6">
                 <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-black">ND</div>
                    <span className="text-2xl font-black tracking-tight uppercase">NexDent</span>
                </div>
                <p className="text-white/50 max-w-sm leading-relaxed mx-auto lg:mx-0">Toshkentdagi eng zamonaviy va professional stomatologiya klinikasi. Biz har bir mijozga individual yondashamiz.</p>
            </div>
            <div className="space-y-6">
                <h5 className="text-xl font-bold">Klinika</h5>
                <ul className="space-y-4 text-white/50 font-bold">
                    <li>Xizmatlar</li>
                    <li>Mutaxassislar</li>
                </ul>
            </div>
            <div className="space-y-6">
                <h5 className="text-xl font-bold">Bog'lanish</h5>
                <p className="text-white/50 font-medium italic">+998 99 603 42 43</p>
            </div>
         </div>
         <p className="max-w-7xl mx-auto pt-10 text-center text-white/20 font-black text-sm uppercase tracking-widest">&copy; 2026 NexDent Clinic. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  )
}
