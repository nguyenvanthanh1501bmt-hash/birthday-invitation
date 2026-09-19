"use client";

import { motion } from "framer-motion";

import { invitation } from "./invitation-data";
import { FlowerMark } from "./shared";

export function EnvelopeOpenTransition() {
  return (
    <motion.div
      key="envelope-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0.72, 0] }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 4.86,
        times: [0, 0.08, 0.68, 0.77, 0.88, 1],
        ease: "easeInOut",
      }}
      className="pointer-events-none fixed inset-0 z-[140] flex items-center justify-center overflow-hidden bg-[#fffaf4]/96 px-5"
    >
      {/* quiet pastel atmosphere */}
      <div className="absolute -left-16 top-[18%] h-52 w-52 rounded-full bg-[#efc8b8]/24" />
      <div className="absolute -right-20 bottom-[13%] h-60 w-60 rounded-full bg-[#c9d9c6]/28" />
      <div className="absolute right-[12%] top-[12%] h-24 w-24 rounded-full bg-[#d8cce2]/24" />

      <motion.div
        initial={{ scale: 0.985, opacity: 0, y: 0 }}
        animate={{
          scale: [0.985, 1, 1, 1, 1.024],
          opacity: [0, 1, 1, 1, 1],
          y: [0, 0, 0, 0, -7],
        }}
        transition={{
          duration: 3.62,
          times: [0, 0.15, 0.70, 0.84, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-[min(86vw,360px)] sm:w-[390px]"
        style={{
          perspective: "1100px",
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >
        {/* ENVELOPE STAGE */}
        <div className="relative h-[232px] sm:h-[246px]">
          {/* back panel */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[218px] rounded-[24px] bg-[#ead8c7] shadow-[0_22px_58px_rgba(108,83,62,0.16)] sm:h-[232px]">
            <div className="absolute inset-[7px] rounded-[19px] bg-[#f4e7da]" />
            <div className="absolute left-[7%] right-[7%] top-[8%] h-[48%] rounded-t-[16px] bg-[#dcc8b6]/45" />
          </div>

          {/*
            REAL LETTER MASK:
            - top extends far above the envelope so the card can be pulled out
            - bottom ends exactly at the bottom of the envelope
            => the bottom/foot can NEVER stick out below the envelope
          */}
          <div className="absolute inset-x-0 -top-[150px] bottom-0 z-20 overflow-hidden">
            <motion.div
              initial={{
                y: 0,
                scale: 0.982,
                opacity: 1,
              }}
              animate={{
                y: [0, 0, -138, -142],
                scale: [0.982, 0.982, 0.982, 1.018],
              }}
              transition={{
                delay: 0.94,
                duration: 2.48,
                times: [0, 0.24, 0.84, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[9%] bottom-[8px] w-[82%]"
              style={{
                willChange: "transform",
                transform: "translate3d(0,0,0)",
                transformOrigin: "center bottom",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="relative h-[174px] overflow-hidden rounded-[20px] border border-[#eadfd4] bg-[#fffdf9] px-5 py-5 shadow-[0_14px_34px_rgba(104,82,63,0.12)] sm:h-[184px]">
                <div className="absolute -right-7 -top-8 h-20 w-20 rounded-full bg-[#e8efe5]" />
                <div className="absolute -bottom-8 -left-7 h-20 w-20 rounded-full bg-[#f2ddd2]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[6px] font-semibold uppercase tracking-[0.28em] text-[#9b8879]">
                      Birthday invitation
                    </p>

                    <div className="scale-[0.72]">
                      <div className="opening-flower-float">
                  <FlowerMark small />
                </div>
                    </div>
                  </div>

                  <p className="mt-2 font-serif text-base italic text-[#b08f7d]">
                    You&apos;re invited
                  </p>

                  <p className="mt-0.5 font-serif text-[2.5rem] font-light leading-[0.84] tracking-[-0.045em] text-[#5c4f45]">
                    My Birthday
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#e5dbd0] pt-3">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#758171]">
                      {invitation.date}
                    </span>
                    <span className="font-serif text-base italic text-[#8c7163]">
                      {invitation.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -178 }}
            transition={{
              delay: 0.72,
              duration: 0.78,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="absolute left-[7px] right-[7px] top-[14px] z-40 h-[146px] origin-top"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            <div
              className="h-full w-full bg-[#efc8b8]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </motion.div>

          {/* seal */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0.62, opacity: 0 }}
            transition={{
              delay: 0.52,
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-[122px] z-50 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9aaa95] shadow-[0_6px_14px_rgba(75,92,72,0.16)]"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="font-serif text-xl italic text-[#fffaf4]">M</span>
          </motion.div>

          {/* FRONT POCKET */}
          <div
            className="absolute inset-x-[7px] bottom-[7px] z-30 h-[158px] bg-[#f1decf]"
            style={{ clipPath: "polygon(0 0, 52% 57%, 0 100%)" }}
          />
          <div
            className="absolute inset-x-[7px] bottom-[7px] z-30 h-[158px] bg-[#ecd4c2]"
            style={{ clipPath: "polygon(100% 0, 48% 57%, 100% 100%)" }}
          />
          <div
            className="absolute inset-x-[7px] bottom-[7px] z-[35] h-[142px] bg-[#f8eadf]"
            style={{ clipPath: "polygon(0 100%, 50% 27%, 100% 100%)" }}
          />

          <div className="absolute bottom-5 left-1/2 z-40 h-px w-[42%] -translate-x-1/2 bg-[#d8c2b0]/65" />
        </div>

        <motion.p
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2.12,
            duration: 0.46,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 text-center font-serif text-lg italic text-[#9a7d6c]"
        >
          a little note for you ♡
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
