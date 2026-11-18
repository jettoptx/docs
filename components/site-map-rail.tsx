"use client"

import * as React from "react"
import { Popover } from "@base-ui/react/popover"

import {
  HOUSE_NAV,
  HOUSE_SOCIALS,
  type HouseSocialKey,
} from "@/lib/house-links"
import { cn } from "@/lib/utils"

/**
 * Compact site map under the header brand: the Jett Optics sites and the
 * socials, nothing else. Non-modal popover: no overlay, no scroll lock, no
 * layout shift. Links come from lib/house-links.ts like the agency header.
 */
export function SiteMapRail({
  children,
  triggerClassName,
}: {
  children: React.ReactNode
  triggerClassName?: string
}) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={triggerClassName}
        aria-label="Jett Optics sites"
      >
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          // Hang off the header bar itself (left edge, just below), so the
          // panel reads as part of it.
          anchor={headerElement}
          side="bottom"
          align="start"
          sideOffset={6}
          className="z-[60]"
        >
          <Popover.Popup
            className={cn(
              // Light theme is solid white. A translucent mix or backdrop
              // blur lets dark content read through the panel. Dark theme
              // keeps the agency scrolled-header glass. w-60 fits the social row.
              "w-60 origin-(--transform-origin) rounded-xl border border-[var(--brand-border)]/50 bg-[#ffffff] py-2 text-[var(--brand-cream)] shadow-lg backdrop-blur-none",
              "dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand-ink)_48%,transparent)] dark:backdrop-blur-2xl",
              "transition-[opacity,transform] duration-150 data-[ending-style]:-translate-y-1 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:opacity-0"
            )}
          >
            <nav aria-label="Jett Optics sites">
              <ul>
                {HOUSE_NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-baseline gap-3 px-4 py-1.5 text-sm hover:bg-[var(--brand-orange)]/12 hover:text-[var(--brand-orange)]"
                    >
                      <span className="font-mono text-[10px] text-[var(--brand-cream)]/45">
                        {item.num}
                      </span>
                      <span className="font-bold tracking-[0.12em]">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-2 flex items-center gap-1 border-t border-black/10 px-3 pt-2 dark:border-white/10">
              {HOUSE_SOCIALS.map((item) => (
                <SocialLink key={item.key} href={item.href} label={item.label}>
                  <SocialIcon name={item.key} />
                </SocialLink>
              ))}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

/** The docs header, tagged data-site-header. */
function headerElement(): Element | null {
  if (typeof document === "undefined") return null
  return document.querySelector("[data-site-header]")
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex size-8 items-center justify-center rounded-md text-[var(--brand-cream)]/70 hover:bg-black/5 hover:text-[var(--brand-orange)] dark:hover:bg-white/10"
    >
      {children}
    </a>
  )
}

function SocialIcon({ name }: { name: HouseSocialKey }) {
  switch (name) {
    case "x":
      return <XIcon />
    case "discord":
      return <DiscordIcon />
    case "instagram":
      return <InstagramIcon />
    case "cosmos":
      return <CosmosIcon />
    case "telegram":
      return <TelegramIcon />
    default: {
      const unreachable: never = name
      return unreachable
    }
  }
}

function IconFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[16px] fill-current">
      {children}
    </svg>
  )
}

function XIcon() {
  return (
    <IconFrame>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </IconFrame>
  )
}

function DiscordIcon() {
  return (
    <IconFrame>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </IconFrame>
  )
}

function InstagramIcon() {
  return (
    <IconFrame>
      <path
        fillRule="evenodd"
        d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
      />
    </IconFrame>
  )
}

/** Six-dot Cosmos mark, matching the cosmos.so app icon. */
function CosmosIcon() {
  return (
    <IconFrame>
      <circle cx="12" cy="4.7" r="2.05" />
      <circle cx="18.32" cy="8.35" r="2.05" />
      <circle cx="18.32" cy="15.65" r="2.05" />
      <circle cx="12" cy="19.3" r="2.05" />
      <circle cx="5.68" cy="15.65" r="2.05" />
      <circle cx="5.68" cy="8.35" r="2.05" />
    </IconFrame>
  )
}

function TelegramIcon() {
  return (
    <IconFrame>
      <path
        fillRule="evenodd"
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
      />
    </IconFrame>
  )
}
