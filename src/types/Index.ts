import { ReactNode } from "react"

/* =========================================================
   Sponsor Platform Types
========================================================= */

export type SponsorPlatform =
  | "buymeacoffee"
  | "patreon"
  | "opencollective"
  | "github"
  | "custom"

/* =========================================================
   Individual Sponsor (Previous Sponsors)
========================================================= */

export interface PreviousSponsor {
  name: string
  avatar?: string          // logo/image URL
  profileUrl?: string      // optional link to sponsor site
}

/* =========================================================
   Sponsorship Link (CTA Buttons)
========================================================= */

export interface SponsorLink {
  platform: SponsorPlatform
  name?: string            // override default label
  url: string
  icon?: ReactNode         // custom icon
  color?: string           // custom button color
  variant?: ButtonVariant
}

/* =========================================================
   Button Variant
========================================================= */

export type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "gradient"

/* =========================================================
   Theme
========================================================= */

export type SponsorTheme =
  | "light"
  | "dark"

/* =========================================================
   Layout Variant
========================================================= */

export type SponsorLayout =
  | "default"
  | "compact"
  | "minimal"
  | "card"
  | "inline"

/* =========================================================
   Goal / Funding Section
========================================================= */

export interface FundingGoal {
  enabled?: boolean
  amount: number
  currency?: string
  currentAmount?: number
}

/* =========================================================
   Hero Section
========================================================= */

export interface HeroSection {
  image?: string
  imageAlt?: string
}

/* =========================================================
   Animation Config
========================================================= */

export interface AnimationConfig {
  enabled?: boolean
  hoverScale?: boolean
  fadeIn?: boolean
  duration?: number
}

/* =========================================================
   SponsorWidget Props
========================================================= */

export interface SponsorWidgetProps {
  /* Core Content */
  title: string
  description?: string

  /* Optional Hero */
  hero?: HeroSection

  /* Previous Sponsors */
  previousSponsors?: PreviousSponsor[]

  /* Sponsor CTA Links */
  links: SponsorLink[]

  /* Optional Funding Goal */
  goal?: FundingGoal

  /* Layout Control */
  layout?: SponsorLayout
  theme?: SponsorTheme

  /* Styling Control */
  className?: string
  containerClassName?: string

  /* Custom Rendering */
  renderSponsor?: (sponsor: PreviousSponsor) => ReactNode
  renderButton?: (link: SponsorLink) => ReactNode

  /* Behavior */
  openInNewTab?: boolean

  /* Animation */
  animation?: AnimationConfig
}