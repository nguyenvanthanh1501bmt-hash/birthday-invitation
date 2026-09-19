"use client";

export function BirthdayStyles() {
  return (
    <style jsx global>{`

        html,
        body {
          scroll-behavior: auto;
        }

        .art-paper {
          transform: translateZ(0);
          backface-visibility: hidden;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(126, 99, 76, .022) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 60%, rgba(126, 99, 76, .018) 0 1px, transparent 1px);
          background-size: 22px 22px, 28px 28px;
        }


        @keyframes openingBlobA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, 12px, 0) scale(1.05); }
        }

        @keyframes openingBlobB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-16px, -14px, 0) scale(1.045); }
        }

        @keyframes openingBlobC {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-13px, 14px, 0) rotate(5deg); }
        }

        @keyframes openingDateFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -7px, 0); }
        }

        @keyframes openingButtonBreathe {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            box-shadow: 0 10px 24px rgba(188, 139, 115, 0.16);
          }
          50% {
            transform: translate3d(0, -2px, 0) scale(1.018);
            box-shadow: 0 16px 36px rgba(188, 139, 115, 0.28);
          }
        }

        @keyframes openingFlowerFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -5px, 0) rotate(8deg);
          }
        }

        @keyframes openingSheen {
          0% {
            transform: translate3d(-160%, 0, 0) skewX(-18deg);
            opacity: 0;
          }
          18% {
            opacity: 0.28;
          }
          48% {
            opacity: 0.12;
          }
          62%, 100% {
            transform: translate3d(280%, 0, 0) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes openingTitleFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -4px, 0);
          }
        }

        .opening-blob-a {
          animation: openingBlobA 9s ease-in-out infinite;
          will-change: transform;
        }

        .opening-blob-b {
          animation: openingBlobB 11s ease-in-out infinite;
          will-change: transform;
        }

        .opening-blob-c {
          animation: openingBlobC 8s ease-in-out infinite;
          will-change: transform;
        }

        .opening-date-float {
          animation: openingDateFloat 4.8s ease-in-out infinite;
          will-change: transform;
        }

        .opening-button-breathe {
          animation: openingButtonBreathe 2.6s ease-in-out infinite;
          will-change: transform, box-shadow;
        }

        .opening-flower-float {
          animation: openingFlowerFloat 4.2s ease-in-out infinite;
          will-change: transform;
        }

        .opening-title-float {
          animation: openingTitleFloat 4.6s ease-in-out infinite;
          will-change: transform;
        }

        .opening-sheen {
          animation: openingSheen 5.8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes balloonA {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }
          35% {
            transform: translate3d(9px, -20px, 0) rotate(5deg);
          }
          70% {
            transform: translate3d(-5px, 5px, 0) rotate(-2deg);
          }
        }

        @keyframes balloonB {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(3deg);
          }
          40% {
            transform: translate3d(-8px, 18px, 0) rotate(-5deg);
          }
          72% {
            transform: translate3d(5px, -7px, 0) rotate(4deg);
          }
        }

        @keyframes cakeFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-9px) scale(1.018);
          }
        }

        @keyframes flameFlicker {
          0%,
          100% {
            transform: translateX(-50%) scale(1, 0.78) rotate(-6deg);
            opacity: 0.75;
          }
          28% {
            transform: translateX(-50%) scale(0.78, 1.42) rotate(7deg);
            opacity: 1;
          }
          60% {
            transform: translateX(-50%) scale(1.06, 0.9) rotate(-3deg);
            opacity: 0.83;
          }
        }

        @keyframes confettiA {
          0% {
            transform: translate3d(0, -18px, 0) rotate(0deg);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          100% {
            transform: translate3d(22px, 150px, 0) rotate(370deg);
            opacity: 0;
          }
        }

        @keyframes confettiB {
          0% {
            transform: translate3d(0, -20px, 0) rotate(20deg);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-24px, 165px, 0) rotate(-390deg);
            opacity: 0;
          }
        }

        @keyframes confettiC {
          0% {
            transform: translate3d(0, -16px, 0) rotate(-20deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translate3d(14px, 175px, 0) rotate(340deg);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            transform: scale(0.72) rotate(0deg);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.22) rotate(22deg);
            opacity: 1;
          }
        }

        @keyframes giftFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes giftLid {
          0%,
          68%,
          100% {
            transform: translateY(0) rotate(0);
          }
          76% {
            transform: translateY(-14px) rotate(-5deg);
          }
          84% {
            transform: translateY(-8px) rotate(5deg);
          }
          92% {
            transform: translateY(-12px) rotate(-3deg);
          }
        }

        @keyframes bowLeft {
          0%,
          100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes bowRight {
          0%,
          100% {
            transform: rotate(4deg);
          }
          50% {
            transform: rotate(-5deg);
          }
        }

        @keyframes blobA {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(12px, -8px, 0) scale(1.05);
          }
        }

        @keyframes blobB {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-10px, 8px, 0) scale(0.96);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }

        @keyframes wiggleAlt {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-4px) rotate(1deg);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes dateBob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes flowerSpin {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }

        .balloon-a {
          animation: balloonA 3.2s ease-in-out infinite;
        }

        .balloon-b {
          animation: balloonB 3.8s ease-in-out infinite;
        }

        .cake-float {
          animation: cakeFloat 2.35s ease-in-out infinite;
        }

        .flame {
          transform-origin: center bottom;
          animation: flameFlicker 0.58s ease-in-out infinite;
        }

        .flame-1 {
          animation-delay: 0.11s;
        }

        .flame-2 {
          animation-delay: 0.22s;
        }

        .confetti-a {
          animation: confettiA 2.8s linear infinite;
        }

        .confetti-b {
          animation: confettiB 3.15s linear infinite 0.4s;
        }

        .confetti-c {
          animation: confettiC 3.45s linear infinite 0.75s;
        }

        .sparkle {
          display: inline-block;
          animation: sparkle 1.9s ease-in-out infinite;
        }

        .sparkle-b {
          animation-delay: 0.55s;
        }

        .gift-float {
          animation: giftFloat 2.9s ease-in-out infinite;
        }

        .gift-lid {
          transform-origin: center bottom;
          animation: giftLid 2.5s ease-in-out infinite;
        }

        .bow-left {
          animation: bowLeft 2s ease-in-out infinite;
        }

        .bow-right {
          animation: bowRight 2s ease-in-out infinite;
        }

        .mini-balloon-a {
          animation: balloonA 3s ease-in-out infinite;
        }

        .mini-balloon-b {
          animation: balloonB 3.45s ease-in-out infinite 0.2s;
        }

        .mini-balloon-c {
          animation: balloonA 3.2s ease-in-out infinite 0.45s;
        }

        .blob-a {
          animation: blobA 6s ease-in-out infinite;
        }

        .blob-b {
          animation: blobB 7s ease-in-out infinite;
        }

        .card-wiggle {
          animation: wiggle 3.5s ease-in-out infinite;
        }

        .card-wiggle-alt {
          animation: wiggleAlt 3.8s ease-in-out infinite 0.25s;
        }

        .orbit-star {
          animation: orbit 4.8s linear infinite;
        }

        .date-bob {
          animation: dateBob 3.3s ease-in-out infinite;
        }

        .flower-spin {
          animation: flowerSpin 4s ease-in-out infinite;
        }

        @keyframes cakeTopCream {
          0%, 100% {
            transform: translateY(0) scaleX(1);
          }
          48% {
            transform: translateY(-2px) scaleX(1.025);
          }
          62% {
            transform: translateY(1px) scaleX(0.99);
          }
        }

        @keyframes cakeUpperLayer {
          0%, 100% {
            transform: translateY(0) scaleX(1);
          }
          50% {
            transform: translateY(-3px) scaleX(1.018);
          }
        }

        @keyframes cakeLowerCream {
          0%, 100% {
            transform: translateY(0) scaleX(1);
          }
          42% {
            transform: translateY(-1px) scaleX(1.02);
          }
          70% {
            transform: translateY(1px) scaleX(0.995);
          }
        }

        @keyframes cakeLowerLayer {
          0%, 100% {
            transform: translateY(0) scaleX(1);
          }
          50% {
            transform: translateY(-2px) scaleX(1.014);
          }
        }

        @keyframes candleDance {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-2px) rotate(-2deg);
          }
          50% {
            transform: translateY(1px) rotate(2deg);
          }
          75% {
            transform: translateY(-1px) rotate(-1deg);
          }
        }

        @keyframes cakeDrip {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.12);
          }
        }

        @keyframes cakePlatePulse {
          0%, 100% {
            transform: scaleX(1);
            opacity: .9;
          }
          50% {
            transform: scaleX(1.04);
            opacity: 1;
          }
        }

        @keyframes cakeStandPulse {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(.94);
          }
        }

        @keyframes cakePopA {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(.7);
            opacity: .2;
          }
          45% {
            transform: translate3d(-5px, -13px, 0) scale(1.25);
            opacity: 1;
          }
        }

        @keyframes cakePopB {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(.75);
            opacity: .25;
          }
          50% {
            transform: translate3d(6px, -11px, 0) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes cakePopC {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(.8);
            opacity: .25;
          }
          50% {
            transform: translateY(-14px) rotate(22deg) scale(1.25);
            opacity: 1;
          }
        }

        .cake-top-cream {
          animation: cakeTopCream 2.15s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .cake-upper-layer {
          animation: cakeUpperLayer 2.35s ease-in-out infinite .08s;
          transform-origin: center top;
        }

        .cake-lower-cream {
          animation: cakeLowerCream 2.4s ease-in-out infinite .12s;
          transform-origin: center bottom;
        }

        .cake-lower-layer {
          animation: cakeLowerLayer 2.55s ease-in-out infinite .16s;
          transform-origin: center top;
        }

        .candle-dance {
          transform-origin: center bottom;
          animation: candleDance 1.35s ease-in-out infinite;
        }

        .candle-1 {
          animation-delay: .12s;
        }

        .candle-2 {
          animation-delay: .24s;
        }

        .cake-drip {
          transform-origin: center top;
          animation: cakeDrip 1.8s ease-in-out infinite;
        }

        .cake-drip-b {
          animation-delay: .18s;
        }

        .cake-drip-c {
          animation-delay: .36s;
        }

        .cake-plate {
          animation: cakePlatePulse 2.3s ease-in-out infinite;
          transform-origin: center;
        }

        .cake-stand {
          animation: cakeStandPulse 2.3s ease-in-out infinite;
          transform-origin: center top;
        }

        .cake-pop-a {
          animation: cakePopA 1.7s ease-in-out infinite;
        }

        .cake-pop-b {
          animation: cakePopB 1.9s ease-in-out infinite .25s;
        }

        .cake-pop-c {
          animation: cakePopC 2.1s ease-in-out infinite .4s;
        }

        @keyframes detailsBreathe {
          0%, 100% {
            transform: translateY(0);
            box-shadow: 0 18px 50px rgba(63, 80, 61, 0.13);
          }
          50% {
            transform: translateY(-4px);
            box-shadow: 0 24px 62px rgba(63, 80, 61, 0.22);
          }
        }

        @keyframes detailsDay {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          45% {
            transform: translateY(-8px) scale(1.025);
          }
          60% {
            transform: translateY(-3px) scale(1.01);
          }
        }

        @keyframes detailsTime {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.82;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
        }

        @keyframes detailsWish {
          0%, 100% {
            letter-spacing: 0em;
            opacity: 0.86;
          }
          50% {
            letter-spacing: 0.018em;
            opacity: 1;
          }
        }

        @keyframes detailsLabelLeft {
          0%, 100% { transform: translateX(0); opacity: .62; }
          50% { transform: translateX(4px); opacity: .9; }
        }

        @keyframes detailsLabelRight {
          0%, 100% { transform: translateX(0); opacity: .62; }
          50% { transform: translateX(-4px); opacity: .9; }
        }

        @keyframes detailsSub {
          0%, 100% { opacity: .52; }
          50% { opacity: .78; }
        }

        .details-breathe {
          animation: detailsBreathe 4.6s ease-in-out infinite;
          will-change: transform, box-shadow;
        }

        .details-day {
          display: inline-block;
          animation: detailsDay 3.2s ease-in-out infinite;
          transform-origin: left bottom;
        }

        .details-time {
          display: inline-block;
          animation: detailsTime 2.8s ease-in-out infinite;
        }

        .details-wish {
          animation: detailsWish 4s ease-in-out infinite;
        }

        .details-label-left {
          display: inline-block;
          animation: detailsLabelLeft 4.2s ease-in-out infinite;
        }

        .details-label-right {
          display: inline-block;
          animation: detailsLabelRight 4.2s ease-in-out infinite;
        }

        .details-sub {
          animation: detailsSub 3.4s ease-in-out infinite;
        }

        @media (max-width: 767px) {
          .balloon-a {
            animation-duration: 2.7s;
          }

          .balloon-b {
            animation-duration: 3.1s;
          }

          .cake-float {
            animation-duration: 2.5s;
          }
        }
      `}</style>
  );
}
