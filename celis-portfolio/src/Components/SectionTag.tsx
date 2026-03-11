import React, { ReactNode } from "react";

interface SectionTagProps {
  icon?: ReactNode;
  text?: string;
  className?: string;
  textColor?: string;
  backgroundColor?: string;
  outlineColor?: string;
}

const SectionTag = ({
  icon,
  text = "EXPERIENCE & PROJECTS",
  className = "",
  textColor = "#6CB2C0",
  backgroundColor = "#0A0D10",
  outlineColor = "#6CB2C0",
}: SectionTagProps) => {
  return (
    <div
      className={`relative inline-flex p-[1px] rounded-full ${className}`}
      style={{
        background: `linear-gradient(to top right, ${outlineColor}80, ${outlineColor}, #ffffff80)`,
      }}
    >
      <div
        className="flex items-center gap-2 rounded-full px-4 py-1.5 bg-clip-padding"
        style={{
          backgroundColor: backgroundColor,
          boxShadow: `inset 0 0 10px 0 ${outlineColor}20`,
        }}
      >
        {icon && (
          <div
            className="flex items-center justify-center"
            style={{ color: textColor }}
          >
            {icon}
          </div>
        )}

        <span
          className="text-sm font-clash-display uppercase tracking-widest"
          style={{
            color: textColor,
            textShadow: `0 0 10px ${textColor}80`,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default SectionTag;
