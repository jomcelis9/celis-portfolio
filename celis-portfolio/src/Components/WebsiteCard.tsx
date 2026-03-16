import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";

interface WebsiteCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  badgeText?: string;
  linkUrl: string;
  glowColor?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  title = "2+ items in an order at OLX",
  description = "Designed a way to purchase up to 5 items per deal on a platform that historically supported just 1",
  imageUrl,
  badgeText = "Feature",
  linkUrl,
  glowColor = "rgba(255, 255, 255, 0.3)",
}) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: `${mouseX}px`, y: `${mouseY}px` });

    const rotateX = (mouseY / height - 0.5) * -15;
    const rotateY = (mouseX / width - 0.5) * 15;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.98, 0.98, 0.98)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTransform("");
    setIsHovering(false);
  };

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group relative block w-full sm:w-[400px] h-auto min-h-[160px] sm:h-[220px] shrink-0 font-Satoshi font-[400] transition-all duration-200 ease-out active:invert cursor-pointer focus:outline-none decoration-transparent will-change-transform"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div
        className="absolute -inset-1.5 z-0 pointer-events-none transition-opacity duration-300 blur-2xl rounded-[2.5rem]"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x} ${mousePos.y}, ${glowColor}, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-row items-start justify-between bg-mist-950 rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-full h-full border border-neutral-900 gap-3 sm:gap-6 overflow-hidden bg-clip-padding">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10" />

        <div className="flex-1 mt-1 sm:mt-2 overflow-hidden z-10 pointer-events-none">
          <h2 className="text-white text-lg sm:text-3xl font-normal tracking-tight mb-2 sm:mb-4 line-clamp-2">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-lg leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 shrink-0 z-10 pointer-events-none">
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8be6d6] rounded-xl sm:rounded-3xl overflow-hidden relative shadow-inner shrink-0">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-start pt-1 sm:pt-2 gap-1 sm:gap-2">
                <div className="bg-white/95 rounded-sm sm:rounded-md w-10 sm:w-16 py-0.5 sm:py-1 text-center text-[10px] sm:text-xs text-neutral-800 font-medium shadow-sm">
                  1 pc
                </div>
                <div className="bg-white/95 rounded-sm sm:rounded-md w-10 sm:w-16 py-0.5 sm:py-1 text-center text-[10px] sm:text-xs text-neutral-800 font-medium shadow-sm">
                  2 pc
                </div>
                <div className="bg-white/95 rounded-sm sm:rounded-md w-10 sm:w-16 py-0.5 sm:py-1 text-center text-[10px] sm:text-xs text-neutral-800 font-medium shadow-sm">
                  3 pc
                </div>
              </div>
            )}
          </div>

          {badgeText && (
            <span className="bg-[#2b2b2b] text-neutral-300 text-[10px] sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl border border-neutral-700 shadow-sm whitespace-nowrap">
              {badgeText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
