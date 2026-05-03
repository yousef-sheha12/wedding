import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Heart,
  Utensils,
  Music,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  ArrowDownIcon,
  ChevronRight,
} from "lucide-react";
import img from "./assets/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const ProgramItem = ({ time, title, subtitle, icon: Icon }) => (
  <motion.div
    variants={scrollRevealVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ margin: "-50px" }}
    className="flex items-start gap-4 mb-8"
  >
    <div className="bg-[#F9F6F0] p-3 rounded-full shadow-sm border border-[#EAE3D2]">
      <Icon className="text-[#BDAA7D]" size={24} />
    </div>
    <div>
      <span className="text-[#A3926D] font-bold block text-xs tracking-[0.2em]">
        {time}
      </span>
      <h4 className="text-[#2D2D2D] font-serif text-lg">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
    </div>
  </motion.div>
);

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch((e) => console.log("Play error:", e));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-gray-800 selection:bg-[#F3EEE0]">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F9F6F0] p-6 text-center"
          >
            <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full border border-[#BDAA7D]/20" />
              <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full border border-[#BDAA7D]/20" />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative z-10"
            >
              <Sparkles className="mx-auto mb-6 text-[#BDAA7D]/60" size={32} />

              <p className="text-[#A3926D] tracking-[0.5em] text-xs uppercase mb-4">
                The Wedding of
              </p>

              <h1 className="font-alexbrush text-5xl md:text-6xl text-[#2D2D2D] mb-8 leading-tight">
                Ahmed <br />
                <span className="text-[#BDAA7D]">&</span> <br />
                Fatma
              </h1>

              <div className="w-12 h-[1px] bg-[#BDAA7D] mx-auto mb-12" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#2D2D2D] text-[#F9F6F0] rounded-full overflow-hidden transition-all shadow-xl"
              >
                <span className="relative z-10 font-bold tracking-[0.2em] text-sm">
                  OPEN INVITATION
                </span>
                <ChevronRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={18}
                />

                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
                />
              </motion.button>

              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-8 text-[10px] text-gray-400 tracking-[0.3em] uppercase"
              >
                Click to enter
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="details-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden"
          >
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
              <motion.img
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, ease: "easeOut" }}
                src={img}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2D2D2D]/30" />
              <div className="relative text-center text-white p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="font-serif italic text-xl mb-4"
                >
                  We are getting married
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.8 }}
                  className="text-6xl w-55 text-center font-serif mb-6 leading-tight"
                >
                  Ahmed & Fatma
                </motion.h1>
                <div className="h-[1px] w-16 bg-white/60 mx-auto mb-6" />
                <p className="tracking-[0.3em] text-sm font-light uppercase">
                  Friday, Oct 10th 2026
                </p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-20 opacity-50"
                >
                  <ArrowDownIcon size={20} className="mx-auto" />
                </motion.div>
              </div>
            </section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={scrollRevealVariants}
              className="p-12 bg-[#F9F6F0] text-center"
            >
              <Sparkles className="mx-auto mb-6 text-[#BDAA7D]" size={28} />
              <h2 className="text-3xl font-serif mb-6 text-[#2D2D2D]">
                Crystal Palace Hall
              </h2>
              <p className="text-gray-500 italic leading-relaxed mb-10 text-sm">
                Police Union Club - Salah Salem
                <br />
                Behind Police Mosque - Gate 1
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EAE3D2]">
                  <Calendar className="mx-auto mb-3 text-[#BDAA7D]" size={20} />
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    Date
                  </p>
                  <p className="text-sm font-bold text-[#2D2D2D]">
                    Oct 10, 2026
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EAE3D2]">
                  <Clock className="mx-auto mb-3 text-[#BDAA7D]" size={20} />
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    Time
                  </p>
                  <p className="text-sm font-bold text-[#2D2D2D]">
                    04:00 - 07:00 PM
                  </p>
                </div>
              </div>
            </motion.section>

            <section className="p-12 bg-white">
              <motion.div
                variants={scrollRevealVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-col items-center mb-12"
              >
                <h3 className="text-xs uppercase tracking-[0.4em] text-[#BDAA7D] font-bold mb-2">
                  Our Wedding
                </h3>
                <h2 className="text-3xl font-serif text-[#2D2D2D]">
                  The Program
                </h2>
              </motion.div>

              <ProgramItem
                time="04:00 PM"
                title="Guest Arrival"
                subtitle="Welcome & Registration"
                icon={Users}
              />
              <ProgramItem
                title="Marriage Ceremony"
                subtitle="The official signing"
                icon={Heart}
              />
              <ProgramItem
                title="Dinner Service"
                subtitle="Fine dining experience"
                icon={Utensils}
              />
              <ProgramItem
                title="Celebration"
                subtitle="Music & family photos"
                icon={Music}
              />
            </section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={scrollRevealVariants}
              className="p-12 bg-[#F9F6F0]"
            >
              <div className="text-center mb-10">
                <MapPin className="mx-auto text-[#BDAA7D] mb-4" size={32} />
                <h2 className="text-2xl font-serif">Wedding Location</h2>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-80 border-8 border-white mb-8 grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.923!2d31.273636!3d30.055393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzE5LjQiTiAzMcKwMTYnMjUuMSJF!5e0!3m2!1sen!2seg!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <a
                href="https://maps.google.com/?q=30.055393,31.273636"
                target="_blank"
                rel="noreferrer"
                className="w-full py-5 bg-[#2D2D2D] text-[#F5F1E6] rounded-2xl font-bold tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg"
              >
                <MapPin size={18} /> OPEN IN GOOGLE MAPS
              </a>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={scrollRevealVariants}
              className="p-12 bg-[#F9F6F0] text-center"
            >
              <Heart className="mx-auto mb-6 text-[#8E1B1B]" size={26} />

              <h2 className="text-2xl font-serif mb-6 text-[#2D2D2D]">
                Our Story
              </h2>

              <p className="text-sm text-gray-500 italic leading-relaxed max-w-xs mx-auto">
                From a simple meeting to a lifetime promise...
              </p>

              <div className="mt-10 flex justify-center gap-6 text-xs text-[#A3926D] tracking-widest">
                <span>FIRST MEET</span> • <span>LOVE</span> •{" "}
                <span>FOREVER</span>
              </div>
            </motion.section>

            <footer className="p-16 text-center bg-white border-t border-gray-50">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="font-serif text-2xl italic text-[#BDAA7D] mb-4"
              >
                See you there!
              </motion.p>
              <p className="text-[10px] text-gray-300 uppercase tracking-[0.6em]">
                Ahmed & Fatma 2026
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
