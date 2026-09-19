"use client";

import { motion } from "framer-motion";

import { invitation } from "./invitation-data";
import { ArrowRight, FlowerMark } from "./shared";

export function OpeningScreen({ onOpen, isOpening }: { onOpen: () => void; isOpening: boolean }) {
  return (
    <motion.main
      key="opening"
      initial={{ opacity: 1 }}
      animate={
        isOpening
          ? { opacity: 0.72, scale: 0.994 }
          : { opacity: 1, scale: 1 }
      }
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 h-[100svh] overflow-hidden bg-[#f8f5ef]"
    >
      <div className="opening-blob-a absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#f1d9cd] md:h-80 md:w-80" />
      <div className="opening-blob-b absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#dfe9dc] md:h-96 md:w-96" />
      <div className="opening-blob-c absolute right-[-35px] top-[23%] h-32 w-32 rounded-full bg-[#e8dff0] md:h-44 md:w-44" />

      <div className="relative z-10 flex h-[100svh] items-center justify-center p-2.5 sm:p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[430px] md:max-w-[860px]"
        >
          <div className="rounded-[28px] border border-black/[0.05] bg-white/90 p-2.5 shadow-[0_20px_60px_rgba(89,71,54,0.11)] backdrop-blur md:hidden">
            <div className="rounded-[21px] bg-[#fffdf9] px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-[0.27em] text-[#9f8f80]">
                  Birthday invitation
                </span>
                <FlowerMark small />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-3 overflow-hidden rounded-[24px] bg-[#e8efe5]"
              >
                <div className="opening-date-float relative px-5 py-4">
                  <span
                    aria-hidden="true"
                    className="opening-sheen absolute -top-[30%] bottom-[-30%] left-[-25%] w-[28%] bg-gradient-to-r from-transparent via-white/55 to-transparent"
                  />
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[8px] uppercase tracking-[0.28em] text-[#73806f]"
                >
                  Save the date
                </motion.p>

                <div className="mt-2 flex items-end">
                  <motion.span
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.72, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif font-light leading-[0.7] tracking-[-0.08em] text-[#596755]"
                    style={{ fontSize: "clamp(4.8rem, 11.5svh, 6.2rem)" }}
                  >
                    {invitation.day}
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.58, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-3 pb-1"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#657461]">
                      {invitation.month}
                    </p>
                    <p className="mt-1 text-[9px] tracking-[0.22em] text-[#8d9a89]">
                      {invitation.year}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.58 }}
                  className="mt-3 flex items-center justify-between border-t border-[#cad5c7] pt-3"
                >
                  <span className="text-[9px] uppercase tracking-[0.22em] text-[#7d8b79]">
                    {invitation.time}
                  </span>
                  <span className="font-serif text-base italic text-[#687664]">
                    birthday night
                  </span>
                </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="opening-title-float py-[clamp(12px,2svh,20px)] text-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.62 }}
                  className="font-serif text-lg italic text-[#b18f7d]"
                >
                  You&apos;re invited to
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 14, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.72, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-1 font-serif font-light leading-[0.8] tracking-[-0.055em] text-[#594c42]"
                  style={{ fontSize: "clamp(3.35rem, 7.9svh, 4.35rem)" }}
                >
                  My
                  <br />
                  Birthday
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.58, delay: 0.82 }}
                  className="mx-auto mt-3 max-w-[285px] text-[12px] leading-5 text-[#84766b]"
                >
                  Một buổi tối nhỏ, một chiếc bánh xinh và những người mình muốn
                  gặp nhất.
                </motion.p>
              </motion.div>

              <motion.button
                onClick={onOpen}
                disabled={isOpening}
                animate={
                  isOpening
                    ? { scale: 0.975, opacity: 0.7 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.22 }}
                className="opening-button-breathe flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#efc8b8] px-6 text-[9px] font-bold uppercase tracking-[0.23em] text-[#604d43] shadow-[0_10px_24px_rgba(188,139,115,0.16)] active:scale-[0.98] disabled:cursor-default"
              >
                Mở thiệp
                <motion.span
                  animate={{ x: isOpening ? [0, 5, 0] : [0, 4, 0] }}
                  transition={{
                    duration: isOpening ? 0.9 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight />
                </motion.span>
              </motion.button>

              <p className="mt-2.5 text-center text-[7px] uppercase tracking-[0.27em] text-[#c0b1a5]">
                Made with love
              </p>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-[36px] border border-black/[0.05] bg-[#fffdfa] shadow-[0_30px_90px_rgba(89,71,54,0.12)] md:grid md:grid-cols-2">
            <div className="opening-date-float flex min-h-[560px] flex-col justify-between bg-[#e8efe5] p-10">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#6f7e6c]">
                    Birthday invitation
                  </p>
                  <div className="opening-flower-float"><FlowerMark /></div>
                </div>

                <div className="mt-16">
                  <p className="font-serif text-2xl italic text-[#7d8d79]">
                    save the date
                  </p>
                  <div className="mt-4 flex items-end gap-4">
                    <span className="font-serif text-[8.7rem] font-light leading-[0.7] tracking-[-0.08em] text-[#596755]">
                      {invitation.day}
                    </span>
                    <div className="pb-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#657461]">
                        {invitation.month}
                      </p>
                      <p className="mt-1 text-xs tracking-[0.22em] text-[#8b9987]">
                        {invitation.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#bdcbb9] pt-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#788674]">
                  {invitation.time}
                </p>
                <p className="mt-1 font-serif text-xl italic text-[#667362]">
                  birthday night
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden px-10 text-center">
              <div className="blob-a absolute -right-14 -top-12 h-40 w-40 rounded-full bg-[#eadfeb]" />
              <div className="blob-b absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#f3ddd2]" />

              <p className="relative font-serif text-2xl italic text-[#bc9b87]">
                You&apos;re invited to
              </p>

              <h1 className="relative mt-2 font-serif text-[6rem] font-light leading-[0.82] tracking-[-0.055em] text-[#5a4d43]">
                My
                <br />
                Birthday
              </h1>

              <p className="relative mt-7 max-w-sm text-sm leading-7 text-[#88796e]">
                Một buổi tối nhẹ nhàng, một chiếc bánh nhỏ và những người mình
                thật sự muốn gặp.
              </p>

              <motion.button
                onClick={onOpen}
                disabled={isOpening}
                animate={
                  isOpening
                    ? { scale: 0.975, opacity: 0.72 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.22 }}
                className="opening-button-breathe relative mt-8 flex min-h-12 items-center gap-3 rounded-full bg-[#efc8b8] px-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#604d43] shadow-[0_12px_30px_rgba(188,139,115,0.18)] hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                Mở thiệp
                <motion.span
                  animate={isOpening ? { x: [0, 3, 0], opacity: [1, 0.7, 1] } : { x: 0 }}
                  transition={{ duration: 0.9, repeat: isOpening ? Infinity : 0 }}
                >
                  <ArrowRight />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                INVITATION                                  */
/* -------------------------------------------------------------------------- */
