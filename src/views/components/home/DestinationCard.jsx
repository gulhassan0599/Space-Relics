import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

export const DestinationCard = ({
  destination,
  title,
  description,
  route,
  variant = "moon",
  imageSrc,
  imageAlt,
  className = "",
}) => {
  const navigate = useNavigate();
  const isMoon = variant === "moon";

  const handleCardClick = () => {
    if (route) navigate(route);
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && route) {
      e.preventDefault();
      navigate(route);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Explore ${destination}: ${title}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded border border-space-border hover:border-space-border/100 bg-[#090B0E] transition-all duration-500 h-[300px] w-full cursor-pointer ${className}`}
    >
      {/* Background Image with Multi-layer Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || `${destination} landscape`}
            className="w-full h-full object-cover object-center filter contrast-[1.08] grayscale-[0.25] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full ${isMoon ? "bg-slate-900" : "bg-stone-900"}`}
          />
        )}

        {/* Sophisticated Gradients to guarantee text & button legibility over the image */}
        <div className="absolute inset-0 bg-[#090B0E]/60 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-[#090B0E]/75 to-[#090B0E]/40 pointer-events-none" />
        <div
          className={`absolute inset-0 opacity-20 pointer-events-none ${
            isMoon
              ? "bg-gradient-to-br from-blue-900/30 to-transparent"
              : "bg-gradient-to-br from-amber-900/30 to-transparent"
          }`}
        />
      </div>

      {/* Content Area Over the Background Picture */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Header Metadata */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`text-[11px] font-mono uppercase tracking-widest ${
                isMoon ? "text-moon-silver" : "text-mars-rust"
              }`}
            >
              {destination}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-editorial text-3xl sm:text-4xl text-space-text font-normal tracking-tight mb-3 group-hover:text-white transition-colors drop-shadow-sm">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-space-textSecondary leading-relaxed font-sans mb-4 drop-shadow-sm">
            {description}
          </p>
        </div>

        {/* Action Button Over Background */}
        <div className="pt-6 mt-6 border-t border-space-border/60 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-space-text group-hover:text-white transition-colors">
            Access Sector Archive
          </span>
          <div
            className={`w-8 h-8 rounded border border-space-border flex items-center justify-center bg-[#090B0E]/80 backdrop-blur-sm group-hover:border-space-textSecondary transition-colors ${
              isMoon ? "text-moon-silver" : "text-mars-rust"
            }`}
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
