/** Canonical house URLs — site map stays in lockstep with agency. */
export const HOUSE = {
  JETT_OPTICS: "https://jettoptics.si",
  LOGIN: "https://dojo.jettoptics.si/login",
  AGENCY: "https://agency.jettoptics.si",
  DOJO: "https://dojo.jettoptics.si",
  BUY_JTX: "https://space.jettoptics.si/buy",
  SPACWBY: "https://space.jettoptics.si/collection",
  APP: "https://agency.jettoptics.si/chat",
  DOCS: "https://docs.jettoptics.si/docs",
  GITHUB: "https://github.com/jettoptx",
  AGENC_GITHUB: "https://github.com/tetsuo-ai/AgenC",
  X: "https://x.com/jettoptx",
  DISCORD: "https://discord.gg/jtx",
  INSTAGRAM: "https://www.instagram.com/jettoptx/",
  COSMOS: "https://www.cosmos.so/jettoptx/collections",
  TELEGRAM: "https://t.me/+jDtOU4mmAUhiZjIx",
  EMAIL: "mailto:joe@jettoptics.ai",
  TERMS: "https://jettoptics.si/terms",
  PRIVACY: "https://jettoptics.si/privacy",
  SECURITY: "https://jettoptics.si/security",
  GROUP_INVITE:
    "https://x.com/i/chat/group_join/g2105035852711616791/OMQphx900G",
} as const

/** Header site-map doors. Same four links as agency. */
export const HOUSE_NAV = [
  { num: "01", label: "AGENCY", href: HOUSE.AGENCY },
  { num: "02", label: "APP", href: HOUSE.DOJO },
  { num: "03", label: "DOCS", href: HOUSE.DOCS },
  { num: "04", label: "JETT OPTICS", href: HOUSE.JETT_OPTICS },
] as const

/** Footer navigate column. Docs keeps the buy and collection doors. */
export const HOUSE_FOOTER_NAV = [
  { num: "01", label: "BUY $JTX", href: HOUSE.BUY_JTX },
  { num: "02", label: "AGENCY", href: HOUSE.AGENCY },
  { num: "03", label: "SPACWBY", href: HOUSE.SPACWBY },
  { num: "04", label: "APP", href: HOUSE.APP },
  { num: "05", label: "DOCS", href: HOUSE.DOCS },
  { num: "06", label: "JETT OPTICS", href: HOUSE.JETT_OPTICS },
] as const

export const HOUSE_BUILT_ON = [
  { name: "SOLANA", href: "https://solana.com" },
  { name: "JUPITER", href: "https://jup.ag" },
  { name: "JITO", href: "https://www.jito.network" },
  { name: "HELIUS", href: "https://www.helius.dev" },
] as const

export const HOUSE_SOCIALS = [
  { key: "x", name: "X", href: HOUSE.X, label: "Jett Optics on X" },
  {
    key: "discord",
    name: "DISCORD",
    href: HOUSE.DISCORD,
    label: "Jett Optics on Discord",
  },
  {
    key: "instagram",
    name: "INSTAGRAM",
    href: HOUSE.INSTAGRAM,
    label: "Jett Optics on Instagram",
  },
  {
    key: "cosmos",
    name: "COSMOS",
    href: HOUSE.COSMOS,
    label: "Jett Optics on Cosmos",
  },
  {
    key: "telegram",
    name: "TELEGRAM",
    href: HOUSE.TELEGRAM,
    label: "Jett Optics on Telegram",
  },
] as const

export type HouseSocialKey = (typeof HOUSE_SOCIALS)[number]["key"]

export const HOUSE_LEGAL = [
  { label: "TERMS", href: HOUSE.TERMS },
  { label: "PRIVACY", href: HOUSE.PRIVACY },
  { label: "VULNERABILITY REPORTING", href: HOUSE.SECURITY },
  { label: "DEVELOPER DOCS", href: HOUSE.DOCS },
] as const
