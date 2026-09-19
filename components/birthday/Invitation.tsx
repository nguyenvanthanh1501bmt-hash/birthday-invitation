"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { BirthdayScene } from "./BirthdayScene";
import { invitation } from "./invitation-data";
import {
  ArrowLeft,
  FlowerMark,
  LineArtStar,
  Reveal,
  ScrollProgress,
  SoundIcon,
} from "./shared";

export function Invitation({
  musicOn,
  onToggleMusic,
  onBack,
}: {
  musicOn: boolean;
  onToggleMusic: () => void;
  onBack: () => void;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  const detailsRef = useRef<HTMLElement | null>(null);
  const endingRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: heroScrollRaw } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScroll = useSpring(heroScrollRaw, {
    stiffness: 90,
    damping: 24,
    mass: 0.28,
  });

  const heroTextY = useTransform(heroScroll, [0, 1], [0, -72]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.78, 1], [1, 0.68, 0.28]);
  const heroVisualY = useTransform(heroScroll, [0, 1], [0, 72]);
  const heroVisualScale = useTransform(heroScroll, [0, 1], [1, 0.94]);
  const heroVisualRotate = useTransform(heroScroll, [0, 1], [0, 2.2]);
  const heroBlobLeftY = useTransform(heroScroll, [0, 1], [0, -52]);
  const heroBlobRightY = useTransform(heroScroll, [0, 1], [0, 64]);
  const heroRibbonX = useTransform(heroScroll, [0, 1], ["0%", "-14%"]);
  const heroArtRotate = useTransform(heroScroll, [0, 1], [-5, 8]);

  const { scrollYProgress: detailsScrollRaw } = useScroll({
    target: detailsRef,
    offset: ["start end", "end start"],
  });

  const detailsScroll = useSpring(detailsScrollRaw, {
    stiffness: 85,
    damping: 24,
    mass: 0.3,
  });

  const noteX = useTransform(detailsScroll, [0, 0.32, 0.72, 1], [-30, 0, 0, 14]);
  const noteRotate = useTransform(detailsScroll, [0, 0.35, 1], [-1.5, 0, 0.6]);
  const dateX = useTransform(detailsScroll, [0, 0.32, 0.72, 1], [30, 0, 0, -14]);
  const dateRotate = useTransform(detailsScroll, [0, 0.35, 1], [1.5, 0, -0.6]);
  const sectionLine = useTransform(detailsScroll, [0.02, 0.32], [0, 1]);

  const { scrollYProgress: endingScrollRaw } = useScroll({
    target: endingRef,
    offset: ["start end", "end end"],
  });

  const endingScroll = useSpring(endingScrollRaw, {
    stiffness: 82,
    damping: 24,
    mass: 0.32,
  });

  const endingY = useTransform(endingScroll, [0, 0.72, 1], [54, 0, -6]);
  const endingScale = useTransform(endingScroll, [0, 0.72, 1], [0.92, 1, 1]);
  const endingOpacity = useTransform(endingScroll, [0, 0.45, 1], [0.18, 1, 1]);
  const endingBlobX = useTransform(endingScroll, [0, 1], [-22, 14]);
  const endingBlobMirrorX = useTransform(endingScroll, [0, 1], [22, -14]);

  return (
    <motion.main
      key="invitation"
      initial={{
        opacity: 0,
        y: 9,
        scale: 0.996,
      }}
      animate={{
        opacity: [0, 0.03, 0.12, 0.28, 0.52, 0.78, 1],
        y: [9, 8, 7, 5, 3, 1, 0],
        scale: [0.996, 0.996, 0.997, 0.998, 0.999, 0.9995, 1],
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2.12,
        times: [0, 0.12, 0.28, 0.45, 0.64, 0.82, 1],
        ease: [0.16, 1, 0.3, 1],
      }}
      className="art-paper relative min-h-[100svh] overflow-x-hidden bg-[#fbf8f2] text-[#564940]"
    >
      <ScrollProgress />

      <div className="fixed left-3 right-3 top-3 z-50 flex items-center justify-between md:left-5 md:right-5 md:top-5">
        <button
          onClick={onBack}
          className="flex min-h-11 items-center gap-2 rounded-full border border-black/[0.06] bg-white/90 px-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#66584f] shadow-[0_8px_24px_rgba(76,60,46,0.08)] backdrop-blur-md transition active:scale-[0.98]"
        >
          <ArrowLeft />
          Quay lại
        </button>

        <button
          onClick={onToggleMusic}
          aria-label={musicOn ? "Tắt nhạc" : "Bật nhạc"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white/90 text-[#66584f] shadow-[0_8px_24px_rgba(76,60,46,0.08)] backdrop-blur-md transition active:scale-[0.98]"
        >
          <SoundIcon active={musicOn} />
        </button>
      </div>

      {/* HERO — scroll-linked depth */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-4 pb-10 pt-22 md:px-8 md:pb-16 md:pt-26 lg:px-12"
      >
        <motion.div
          style={{ y: heroBlobLeftY }}
          className="blob-a absolute -left-24 top-10 h-52 w-52 rounded-full bg-[#f3ddd2] md:h-64 md:w-64"
        />
        <motion.div
          style={{ y: heroBlobRightY }}
          className="blob-b absolute -right-24 top-[38%] h-60 w-60 rounded-full bg-[#e2eadf] md:h-72 md:w-72"
        />

        <div className="relative mx-auto w-full max-w-[430px] md:max-w-[920px] lg:max-w-[1100px]">
          <div className="md:grid md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-10 lg:gap-14">
            <motion.div
              style={{ y: heroTextY, opacity: heroTextOpacity }}
              className="will-change-transform"
            >
              <Reveal>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9d8a7a] md:text-[10px]">
                  {invitation.host} · Birthday 2026
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <p className="font-serif text-xl italic text-[#b08f7d] md:text-2xl">
                    A special little day
                  </p>
                  <motion.div
                    style={{ rotate: heroArtRotate }}
                    className="h-8 w-8 text-[#c8ab92]/70"
                  >
                    <LineArtStar />
                  </motion.div>
                </div>

                <div className="mt-1">
                  <div className="overflow-hidden">
                    <motion.span
                      initial={{ y: 44, opacity: 0, rotate: 1.5 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        duration: 0.78,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block font-serif text-[5rem] font-light leading-[0.78] tracking-[-0.065em] text-[#5c4f45] md:text-[7rem]"
                    >
                      Birth
                    </motion.span>
                  </div>

                  <div className="-mt-1 overflow-hidden">
                    <motion.span
                      initial={{ y: 44, opacity: 0, rotate: -1.5 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        duration: 0.82,
                        delay: 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block font-serif text-[5rem] font-light leading-[0.78] tracking-[-0.065em] text-[#5c4f45] md:text-[7rem]"
                    >
                      day.
                    </motion.span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="rounded-full bg-[#e7eee4] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6f7d6a]"
                  >
                    {invitation.date}
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="rounded-full bg-[#f2dfd5] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a6c5e]"
                  >
                    {invitation.time}
                  </motion.div>
                </div>

                <p className="mt-4 text-[13px] leading-6 text-[#7c6f64] md:max-w-md md:text-[15px] md:leading-7">
                  Một buổi tối nhỏ dành cho những người mình quý. Cùng ăn ngon,
                  trò chuyện và lưu lại thêm một kỷ niệm đẹp.
                </p>

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-7 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-[#aa998b]"
                >
                  <span>Cuộn xuống</span>
                  <span className="text-sm">↓</span>
                </motion.div>
              </Reveal>
            </motion.div>

            <motion.div
              style={{
                y: heroVisualY,
                scale: heroVisualScale,
                rotate: heroVisualRotate,
              }}
              className="mt-7 will-change-transform md:mt-0"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  clipPath: "inset(8% 8% 8% 8% round 40px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0% round 30px)",
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full"
              >
                <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-[#e6dcef] md:h-24 md:w-24" />
                <div className="absolute -bottom-3 -right-2 h-20 w-20 rounded-full bg-[#f1d8b9] md:h-28 md:w-28" />

                <div className="relative rounded-[30px] border-[6px] border-white bg-white shadow-[0_20px_60px_rgba(91,72,54,0.12)]">
                  <BirthdayScene />

                  <div className="pointer-events-none absolute right-4 top-4 hidden items-center gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur-sm sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#efc8b8]" />
                    <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[#9e8d80]">
                      a little magic
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* editorial ribbon */}
      <div className="relative z-10 -my-1 overflow-hidden py-5">
        <motion.div
          style={{ x: heroRibbonX }}
          className="flex w-[145%] -rotate-[1.4deg] items-center gap-7 whitespace-nowrap bg-[#efc8b8] px-6 py-3 shadow-[0_10px_30px_rgba(184,132,108,0.08)]"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6d5549]"
            >
              <span>20 OCT 2026</span>
              <span className="text-[#fff9f4]">✦</span>
              <span>MAKE A WISH</span>
              <span className="text-[#fff9f4]">✦</span>
              <span>18:30</span>
              <span className="text-[#fff9f4]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* NOTE + DATE — cards slide toward each other while scrolling */}
      <section
        ref={detailsRef}
        className="relative overflow-hidden bg-[#eaf0e7] px-4 py-12 md:px-8 md:py-18 lg:px-12"
      >
        <motion.div
          style={{ scaleX: sectionLine }}
          className="absolute left-1/2 top-0 h-px w-[72%] max-w-[760px] -translate-x-1/2 origin-center bg-[#9cac98]/45"
        />

        <div className="mx-auto w-full max-w-[430px] md:max-w-[920px] lg:max-w-[1100px]">
          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              style={{ x: noteX, rotate: noteRotate }}
              className="will-change-transform"
            >
              <Reveal>
                <div className="relative h-full overflow-hidden rounded-[28px] bg-[#fffdf9] p-6 shadow-[0_14px_40px_rgba(79,92,76,0.06)] md:p-8">
                  <div className="pointer-events-none absolute -right-3 -top-6 font-serif text-[7rem] font-light leading-none text-[#eadfd5]/45">
                    01
                  </div>

                  <div className="relative flex items-center justify-between">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a08d7d]">
                      A note from me
                    </p>
                    <FlowerMark small />
                  </div>

                  <span className="mt-5 block font-serif text-5xl leading-none text-[#d8c9bd]">
                    “
                  </span>

                  <p className="-mt-3 text-[14px] leading-7 text-[#776a60] md:text-[15px] md:leading-8">
                    {invitation.message}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px w-10 origin-left bg-[#cdbdb0]"
                    />
                    <span className="font-serif text-lg italic text-[#9a8373]">
                      See you there ♡
                    </span>
                  </div>
                </div>
              </Reveal>
            </motion.div>

            <motion.div
              style={{ x: dateX, rotate: dateRotate }}
              className="will-change-transform"
            >
              <Reveal delay={0.06}>
                <div className="details-breathe relative h-full overflow-hidden rounded-[28px] bg-[#5f705d] p-6 text-white shadow-[0_18px_50px_rgba(63,80,61,0.13)] md:p-8">
                  <div className="pointer-events-none absolute bottom-5 right-3 rotate-90 text-[7px] font-semibold uppercase tracking-[0.28em] text-white/20">
                    celebration no. 20
                  </div>

                  <div className="relative flex items-start justify-between">
                    <span className="details-label-left text-[8px] uppercase tracking-[0.26em] text-white/60">
                      October
                    </span>
                    <span className="details-label-right text-[8px] uppercase tracking-[0.26em] text-white/60">
                      {invitation.year}
                    </span>
                  </div>

                  <div className="mt-7 flex items-end justify-between">
                    <p className="details-day font-serif text-[7.6rem] font-light leading-[0.68] tracking-[-0.08em] md:text-[8.6rem]">
                      {invitation.day}
                    </p>

                    <div className="pb-2 text-right">
                      <p className="text-[8px] uppercase tracking-[0.23em] text-white/55">
                        Start at
                      </p>
                      <p className="details-time mt-1 font-serif text-3xl italic">
                        {invitation.time}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-white/20 pt-5">
                    <p className="details-wish font-serif text-2xl italic text-white/92">
                      Eat. Laugh. Make a wish.
                    </p>
                    <p className="details-sub mt-2 text-[12px] leading-5 text-white/55">
                      Come hungry. Leave happy.
                    </p>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENDING — grows into place while entering viewport */}
      <section
        ref={endingRef}
        className="relative overflow-hidden bg-[#fffdf9] px-4 py-16 text-center md:px-8 md:py-22"
      >
        <motion.div
          style={{ x: endingBlobX }}
          className="blob-a absolute -left-20 top-6 h-48 w-48 rounded-full bg-[#e9f0e6]"
        />
        <motion.div
          style={{ x: endingBlobMirrorX }}
          className="blob-b absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#f3ddd1]"
        />

        <motion.div
          style={{
            y: endingY,
            scale: endingScale,
            opacity: endingOpacity,
          }}
          className="relative mx-auto w-full max-w-[430px] will-change-transform md:max-w-[720px]"
        >
          <div className="flex justify-center">
            <FlowerMark />
          </div>

          <Reveal>
            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9c8c7f]">
              One more memory
            </p>

            <h2 className="mt-3 font-serif text-[3.1rem] font-light leading-[0.93] tracking-[-0.04em] text-[#5d5046] md:text-[5rem]">
              Thank you for being a part of
              <br />
              <span className="relative inline-block italic text-[#8a9a85]">
                my new chapter.
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-[8%] h-px w-[84%] origin-left bg-[#b9c8b5]"
                />
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[390px] text-[13px] leading-6 text-[#82756a]">
              Hẹn gặp bạn vào {invitation.date} lúc {invitation.time}.
            </p>

            <p className="mt-6 font-serif text-3xl italic text-[#a17f6d]">
              {invitation.host}
            </p>
          </Reveal>
        </motion.div>
      </section>
    </motion.main>
  );
}
