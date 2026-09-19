"use client";

import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import { BirthdayStyles } from "./BirthdayStyles";
import { EnvelopeOpenTransition } from "./EnvelopeOpenTransition";
import { Invitation } from "./Invitation";
import { OpeningScreen } from "./OpeningScreen";

export default function BirthdayInvitation() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openInvitation = async () => {
    if (isOpening) return;

    setIsOpening(true);

    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
        setMusicOn(true);
      }
    } catch {
      setMusicOn(false);
    }

    window.setTimeout(() => {
      setOpened(true);
    }, 3060);

    window.setTimeout(() => {
      setIsOpening(false);
    }, 4900);
  };

  const closeInvitation = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setMusicOn(false);
    setIsOpening(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    setOpened(false);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (musicOn) {
        audioRef.current.pause();
        setMusicOn(false);
      } else {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
        setMusicOn(true);
      }
    } catch {
      setMusicOn(false);
    }
  };

  return (
    <div className="relative min-h-[100svh] bg-[#f8f5ef]">
      <BirthdayStyles />

      <audio ref={audioRef} src="/birthday-song.mp3" loop preload="none" />

      <AnimatePresence initial={false} mode="sync">
        {!opened ? (
          <OpeningScreen onOpen={openInvitation} isOpening={isOpening} />
        ) : (
          <Invitation
            musicOn={musicOn}
            onToggleMusic={toggleMusic}
            onBack={closeInvitation}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpening && <EnvelopeOpenTransition />}
      </AnimatePresence>
    </div>
  );
}
