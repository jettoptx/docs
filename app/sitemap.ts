import fs from "node:fs"
import path from "node:path"
import type { MetadataRoute } from "next"

const BASE = "https://docs.jettoptics.si"

function docUrls(): string[] {
  const root = path.join(process.cwd(), "content", "docs")
  const urls: string[] = []

  function walk(dir: string, slug: string[]) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name)
      if (fs.statSync(full).isDirectory()) {
        walk(full, [...slug, name])
        continue
      }
      if (!name.endsWith(".mdx")) continue
      const stem = name.slice(0, -4)
      const parts = stem === "index" ? slug : [...slug, stem]
      urls.push(parts.length === 0 ? "/docs" : `/docs/${parts.join("/")}`)
    }
  }

  walk(root, [])
  return urls
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const extras = ["/privacy", "/research-labs"]
  const paths = [...new Set([...docUrls(), ...extras])]
  return paths.map((pathname) => ({
    url: `${BASE}${pathname}`,
    lastModified,
    changeFrequency: pathname === "/docs" ? "weekly" : "monthly",
    priority: pathname === "/docs" ? 1 : 0.7,
  }))
}
