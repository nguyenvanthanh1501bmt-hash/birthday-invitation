"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const invitation = {
  date: "20 THÁNG 10, 2026",
  time: "18:30",
  location: "The Bloom Garden",
  address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=123+Nguyen+Hue+Quan+1+Ho+Chi+Minh",
};

const photos = [
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const openInvitation = () => {
    setOpened(true);
    setMusicOn(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f1e8] text-[#3d3832]">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-[#e7dccb] opacity-30 blur-3xl" />
              <div className="absolute bottom-[10%] right-[8%] h-52 w-52 rounded-full bg-[#d9c8b2] opacity-25 blur-3xl" />
            </div>

            <div className="relative z-10 flex w-full max-w-md flex-col items-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 text-[10px] tracking-[0.45em] text-[#817568]"
              >
                A SPECIAL INVITATION
              </motion.p>

              {/* Envelope */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-[1.45/1] w-full max-w-[350px]"
              >
                {/* Envelope body */}
                <div className="absolute inset-0 overflow-hidden rounded-[3px] border border-[#d4c4ae] bg-[#eee5d7] shadow-[0_25px_70px_rgba(70,55,40,0.14)]">
                  {/* Left fold */}
                  <div
                    className="absolute bottom-0 left-0 z-20 h-full w-full"
                    style={{
                      clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                      background: "#e5dac9",
                    }}
                  />

                  {/* Right fold */}
                  <div
                    className="absolute bottom-0 left-0 z-20 h-full w-full"
                    style={{
                      clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
                      background: "#dfd2c0",
                    }}
                  />

                  {/* Bottom fold */}
                  <div
                    className="absolute bottom-0 left-0 z-30 h-full w-full"
                    style={{
                      clipPath: "polygon(0 100%, 50% 48%, 100% 100%)",
                      background: "#e9dece",
                    }}
                  />

                  {/* Seal */}
                  <div className="absolute left-1/2 top-1/2 z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#bca88f] bg-[#eee5d7] shadow-md">
                    <span className="font-serif text-lg text-[#766654]">
                      B
                    </span>
                  </div>
                </div>

                {/* Top flap */}
                <div
                  className="absolute left-0 top-0 z-50 h-full w-full"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 53%)",
                    background: "#f2e9dc",
                    filter: "drop-shadow(0 4px 3px rgba(50,40,30,0.08))",
                  }}
                />
              </motion.div>

              <motion.button
                onClick={openInvitation}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ letterSpacing: "0.35em" }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 border-b border-[#9d8b76] pb-2 text-[11px] tracking-[0.28em] text-[#615548] transition-all"
              >
                MỞ THIỆP
              </motion.button>
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Invitation
              musicOn={musicOn}
              setMusicOn={setMusicOn}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Invitation({
  musicOn,
  setMusicOn,
}: {
  musicOn: boolean;
  setMusicOn: (value: boolean) => void;
}) {
  return (
    <div className="relative">
      {/* Music button */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="fixed right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbda8] bg-[#f8f3eb]/90 text-sm shadow-sm backdrop-blur"
        aria-label="Bật tắt nhạc"
      >
        <span className={musicOn ? "animate-pulse" : ""}>♪</span>
      </button>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="mx-auto w-full max-w-3xl text-center">
          <Reveal>
            <p className="mb-8 text-[10px] tracking-[0.45em] text-[#918170]">
              WITH GREAT JOY
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-serif text-5xl leading-[1.05] text-[#3e3933] sm:text-7xl md:text-8xl">
              Bạn được
              <br />
              <span className="italic">trân trọng mời</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mx-auto my-10 h-px w-16 bg-[#bca991]" />
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-serif text-xl italic text-[#74685b] sm:text-2xl">
              đến tham dự buổi tiệc sinh nhật
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <p className="mt-8 text-[10px] tracking-[0.35em] text-[#9a8b79]">
              CELEBRATING ANOTHER BEAUTIFUL YEAR
            </p>
          </Reveal>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="border-y border-[#ded2c2] bg-[#f1e9dd] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-12 text-center text-[10px] tracking-[0.4em] text-[#918170]">
              THE DETAILS
            </p>
          </Reveal>

          <div className="grid gap-12 text-center sm:grid-cols-3 sm:gap-6">
            <Detail
              label="NGÀY"
              value={invitation.date}
              delay={0.1}
            />

            <Detail
              label="THỜI GIAN"
              value={invitation.time}
              delay={0.2}
            />

            <Detail
              label="ĐỊA ĐIỂM"
              value={invitation.location}
              delay={0.3}
            />
          </div>

          <Reveal delay={0.45}>
            <div className="mx-auto mt-14 max-w-md text-center">
              <div className="mb-3 text-[9px] tracking-[0.3em] text-[#9b8b78]">
                ADDRESS
              </div>

              <p className="font-serif text-lg text-[#62584e]">
                {invitation.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mb-10 font-serif text-4xl text-[#b6a28b]">
              “
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-serif text-2xl leading-relaxed text-[#514940] sm:text-3xl">
              Một ngày đặc biệt sẽ ý nghĩa hơn khi có những người đặc biệt
              cùng hiện diện.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#817568]">
              Mình rất mong bạn có thể dành chút thời gian đến chung vui và
              cùng nhau tạo nên những kỷ niệm thật đẹp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHOTO */}
      <section className="px-5 pb-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="text-[10px] tracking-[0.4em] text-[#918170]">
                MEMORIES
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <Photo
              src={photos[0]}
              className="h-[480px] md:row-span-2 md:h-full"
              delay={0}
            />

            <Photo
              src={photos[1]}
              className="h-[280px]"
              delay={0.15}
            />

            <Photo
              src={photos[2]}
              className="h-[280px]"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-y border-[#ded2c2] bg-[#eee5d8] px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] text-[#918170]">
              WHERE WE MEET
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="mt-7 font-serif text-4xl text-[#443d36] sm:text-5xl">
              {invitation.location}
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 text-sm leading-7 text-[#776b5e]">
              {invitation.address}
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <a
              href={invitation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block border border-[#ad9a83] px-8 py-4 text-[10px] tracking-[0.3em] text-[#625548] transition-all hover:bg-[#625548] hover:text-[#f5efe6]"
            >
              XEM BẢN ĐỒ
            </a>
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="flex min-h-[75vh] items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <Reveal>
            <div className="mx-auto mb-10 h-px w-14 bg-[#bca991]" />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-serif text-2xl italic leading-relaxed text-[#61564b] sm:text-3xl">
              Rất mong được cùng bạn đón mừng khoảnh khắc đặc biệt này.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-12 text-[10px] tracking-[0.45em] text-[#918170]">
              HẸN GẶP BẠN
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#c5b49e] font-serif text-xl text-[#766654]">
              B
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="pb-10 text-center text-[9px] tracking-[0.3em] text-[#a09282]">
        MADE WITH LOVE
      </footer>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Detail({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <p className="mb-4 text-[9px] tracking-[0.35em] text-[#9b8b78]">
          {label}
        </p>

        <p className="font-serif text-xl text-[#514940]">
          {value}
        </p>
      </div>
    </Reveal>
  );
}

function Photo({
  src,
  className,
  delay,
}: {
  src: string;
  className?: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={`group relative overflow-hidden border border-[#ded2c2] bg-[#e9dfd1] p-2 ${className}`}
      >
        <img
          src={src}
          alt="Kỷ niệm"
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
        />
      </div>
    </Reveal>
  );
}

