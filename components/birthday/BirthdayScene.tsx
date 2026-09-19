"use client";

function Balloon({
  className,
  color,
  animationClass,
}: {
  className: string;
  color: string;
  animationClass: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className={animationClass}>
        <div
          className="mx-auto aspect-[0.82] w-full rounded-[50%_50%_47%_47%] shadow-[inset_-8px_-10px_18px_rgba(80,65,55,0.05)]"
          style={{ backgroundColor: color }}
        />
        <div
          className="mx-auto -mt-1 h-2 w-2 rotate-45"
          style={{ backgroundColor: color }}
        />
        <div className="mx-auto h-24 w-px bg-[#b9aea2]/75" />
      </div>
    </div>
  );
}

function AnimatedCake() {
  return (
    <div className="cake-float w-[62%] max-w-[270px] sm:w-[68%] sm:max-w-[300px] md:w-[72%] md:max-w-[310px]">
      <div className="relative">
        <div className="relative mx-auto w-full">
          <div className="cake-top-cream relative z-20 mx-auto h-10 w-[66%] rounded-t-[18px] bg-[#fffaf2] sm:h-12">
            <div className="cake-drip cake-drip-a absolute bottom-0 left-[16%] h-3 w-4 rounded-b-full bg-[#efc7b9]" />
            <div className="cake-drip cake-drip-b absolute bottom-0 left-[43%] h-5 w-4 rounded-b-full bg-[#efc7b9]" />
            <div className="cake-drip cake-drip-c absolute bottom-0 right-[17%] h-4 w-4 rounded-b-full bg-[#efc7b9]" />
          </div>

          <div className="cake-upper-layer mx-auto h-16 w-[66%] rounded-b-[18px] bg-[#efc7b9] shadow-[0_10px_22px_rgba(126,88,72,0.08)] sm:h-20" />

          <div className="cake-lower-cream relative z-20 mx-auto -mt-1 h-9 w-[86%] rounded-t-[18px] bg-[#fffaf2] sm:h-11">
            <div className="cake-drip cake-drip-a absolute bottom-0 left-[18%] h-4 w-5 rounded-b-full bg-[#c9d9c6]" />
            <div className="cake-drip cake-drip-b absolute bottom-0 left-[48%] h-6 w-5 rounded-b-full bg-[#c9d9c6]" />
            <div className="cake-drip cake-drip-c absolute bottom-0 right-[12%] h-3 w-5 rounded-b-full bg-[#c9d9c6]" />
          </div>

          <div className="cake-lower-layer mx-auto h-20 w-[86%] rounded-b-[22px] bg-[#c9d9c6] shadow-[0_14px_28px_rgba(74,96,72,0.1)] sm:h-24" />

          <div className="absolute -top-[52px] left-1/2 flex -translate-x-1/2 gap-5 sm:-top-[60px] sm:gap-6">
            {[0, 1, 2].map((index) => (
              <div key={index} className={`candle-dance candle-${index} relative`}>
                <div
                  className={`flame flame-${index} absolute -top-5 left-1/2 h-5 w-2.5 -translate-x-1/2 rounded-[60%_40%_60%_40%] bg-[#f0ad67]`}
                />
                <div
                  className={`h-11 w-2.5 rounded-t-full sm:h-13 ${
                    index === 0
                      ? "bg-[#d8cce2]"
                      : index === 1
                      ? "bg-[#e7d6aa]"
                      : "bg-[#efc7b9]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cake-plate mx-auto mt-2 h-2.5 w-[92%] rounded-full bg-[#d8cab9]" />
        <div className="cake-stand mx-auto h-2.5 w-[52%] rounded-b-full bg-[#c7b5a3]" />
      </div>
    </div>
  );
}

export function BirthdayScene() {
  const confetti = [
    ["10%", "12%", "#efbfae", "confetti-a"],
    ["24%", "20%", "#d8cce2", "confetti-b"],
    ["39%", "10%", "#ead69f", "confetti-c"],
    ["58%", "17%", "#c9d9c6", "confetti-a"],
    ["76%", "10%", "#efbfae", "confetti-b"],
    ["88%", "29%", "#d8cce2", "confetti-c"],
    ["17%", "46%", "#ead69f", "confetti-c"],
    ["80%", "51%", "#c9d9c6", "confetti-a"],
  ];

  return (
    <div className="relative aspect-[0.88] w-full overflow-hidden rounded-[28px] bg-[#f3eee7] sm:aspect-[0.94] md:aspect-auto md:h-[520px] lg:h-[590px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(239,199,185,0.38),transparent_27%),radial-gradient(circle_at_78%_18%,rgba(216,204,226,0.45),transparent_24%),radial-gradient(circle_at_70%_78%,rgba(199,216,196,0.55),transparent_30%)]" />

      {confetti.map(([left, top, color, animationClass], index) => (
        <span
          key={index}
          className={`absolute h-2.5 w-1.5 rounded-[2px] ${animationClass}`}
          style={{ left, top, backgroundColor: color }}
        />
      ))}

      <Balloon
        className="left-[7%] top-[16%] w-[17%] max-w-[78px]"
        color="#efc7b9"
        animationClass="balloon-a"
      />
      <Balloon
        className="right-[8%] top-[20%] w-[19%] max-w-[88px]"
        color="#c9d9c6"
        animationClass="balloon-b"
      />

      <div className="absolute left-[17%] top-[43%] text-[#c1a47f]">
        <span className="sparkle sparkle-a">✦</span>
      </div>
      <div className="absolute right-[18%] top-[39%] text-[#c1a47f]">
        <span className="sparkle sparkle-b">✦</span>
      </div>

      <span className="cake-pop cake-pop-a absolute left-[31%] top-[46%] h-2.5 w-2.5 rounded-full bg-[#efc7b9]" />
      <span className="cake-pop cake-pop-b absolute right-[31%] top-[48%] h-2 w-2 rounded-full bg-[#d8cce2]" />
      <span className="cake-pop cake-pop-c absolute left-[46%] top-[36%] text-sm text-[#e0bd72]">✦</span>

      {/* important: centered with flex, no animated translateX conflicts */}
      <div className="absolute inset-x-0 bottom-[6%] flex justify-center sm:bottom-[9%] md:bottom-[12%]">
        <AnimatedCake />
      </div>

    </div>
  );
}
