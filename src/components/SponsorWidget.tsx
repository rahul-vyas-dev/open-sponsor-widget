import React from "react";
import { SponsorWidgetProps, SponsorLink, PreviousSponsor } from "../types/Index";

/* =========================================================
   Internal Helpers
========================================================= */

const platformDefaults: Record<string, { label: string; color: string }> = {
  buymeacoffee: {
    label: "Buy Me a Coffee",
    color: "bg-yellow-400 hover:bg-yellow-500 text-black",
  },
  patreon: {
    label: "Support on Patreon",
    color: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  opencollective: {
    label: "Donate via OpenCollective",
    color: "bg-blue-500 hover:bg-blue-600 text-white",
  },
  github: {
    label: "Sponsor on GitHub",
    color: "bg-gray-800 hover:bg-black text-white",
  },
  custom: {
    label: "Support Us",
    color: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
};

function getButtonClasses(link: SponsorLink, openInNewTab?: boolean) {
  const base =
    "w-full rounded-xl px-5 py-3 font-medium transition-all duration-300 flex items-center justify-center gap-2";

  const variant = link.variant ?? "solid";

  const defaultStyle =
    platformDefaults[link.platform] ?? platformDefaults.custom;

  const color = link.color ?? defaultStyle.color;

  if (variant === "outline") {
    return `${base} border border-current ${color.replace("bg-", "text-")}`;
  }

  if (variant === "ghost") {
    return `${base} bg-transparent ${color.replace("bg-", "text-")}`;
  }

  if (variant === "gradient") {
    return `${base} bg-gradient-to-r from-indigo-500 to-purple-600 text-white`;
  }

  return `${base} ${color}`;
}

function calculateProgress(current = 0, total = 1) {
  if (!total) return 0;
  return Math.min((current / total) * 100, 100);
}

/* =========================================================
   Component
========================================================= */

export const SponsorWidget: React.FC<SponsorWidgetProps> = ({
  title,
  description,
  hero,
  previousSponsors,
  links,
  goal,
  layout = "default",
  theme = "light",
  className = "",
  containerClassName = "",
  renderSponsor,
  renderButton,
  openInNewTab = true,
  animation,
}) => {
  const isDark = theme === "dark";

  const containerBase =
    "max-w-3xl mx-auto rounded-2xl shadow-lg p-8 space-y-10 transition-all duration-300";

  const themeClasses = isDark
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  const animated =
    animation?.enabled !== false ? "transition-all duration-300" : "";

  return (
    <div className={`${containerBase} ${themeClasses} ${containerClassName}`}>
      {/* ================= HERO ================= */}
      {hero?.image && (
        <div className="flex justify-center">
          <img
            src={hero.image}
            alt={hero.imageAlt ?? "Sponsor Hero"}
            className="w-24 h-24 object-contain rounded-xl"
            title={hero.imageAlt ?? "Sponsor Hero"}
          />
        </div>
      )}

      {/* ================= TITLE ================= */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && (
          <p
            className={`max-w-xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* ================= FUNDING GOAL ================= */}
      {goal?.enabled && (
        <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>
              Goal: {goal.currency ?? "$"}
              {goal.amount}
            </span>
            <span>
              Raised: {goal.currency ?? "$"}
              {goal.currentAmount ?? 0}
            </span>
          </div>

          <div
            className={`w-full h-3 rounded-full ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div
              className="h-3 rounded-full bg-indigo-500 transition-all duration-500"
              style={{
                width: `${calculateProgress(goal.currentAmount, goal.amount)}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* ================= PREVIOUS SPONSORS ================= */}
      {previousSponsors && previousSponsors.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            💛 Previous Sponsors
          </h3>

          <div
            className={`grid gap-4 ${
              layout === "compact"
                ? "grid-cols-3"
                : "grid-cols-2 md:grid-cols-4"
            }`}
          >
            {previousSponsors.map((sponsor, index) => {
              if (renderSponsor)
                return (
                  <React.Fragment key={index}>
                    {renderSponsor(sponsor)}
                  </React.Fragment>
                );

              return (
                <a
                  key={index}
                  href={sponsor.profileUrl ?? "#"}
                  target={openInNewTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm hover:shadow-md ${
                    animation?.hoverScale !== false ? "hover:scale-105" : ""
                  } ${animated}`}
                >
                  {sponsor.avatar && (
                    <img
                      src={sponsor.avatar}
                      alt={sponsor.name}
                      className="w-12 h-12 rounded-full object-cover mb-2"
                    />
                  )}
                  <span className="text-sm font-medium text-center">
                    {sponsor.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= SUPPORT BUTTONS ================= */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-center">
          🚀 Support This Project
        </h3>

        <div className="space-y-3">
          {links.map((link, index) => {
            if (renderButton)
              return (
                <React.Fragment key={index}>
                  {renderButton(link)}
                </React.Fragment>
              );

            const defaultStyle =
              platformDefaults[link.platform] ?? platformDefaults.custom;

            return (
              <a
                key={index}
                href={link.url}
                target={openInNewTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`${getButtonClasses(link, openInNewTab)} ${
                  animation?.hoverScale !== false ? "hover:scale-[1.02]" : ""
                } ${animated}`}
              >
                {link.icon}
                {link.name ?? defaultStyle.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
