# Jett Optics flagship

GitHub org `jettoptx`. Origin team `jett-optx`. The runtime model is Grok.

| Repo | Role | Visibility |
| --- | --- | --- |
| [dojo](https://github.com/jettoptx/dojo) | Production Dojo backend. https://dojo.jettoptics.si | private |
| [docs](https://github.com/jettoptx/docs) | Public documentation | public |
| [space](https://github.com/jettoptx/space) | Space trade app | private |
| [poa](https://github.com/jettoptx/poa) | On-chain open source. Proof of Agency and DePIN | public |
| [mojo](https://github.com/jettoptx/mojo) | MOJO native app | private |
| [core](https://github.com/jettoptx/core) | Agent orchestration. Live branch is `master` | private |
| [aegis](https://github.com/jettoptx/aegis) | AEGIS crypto and neuromorphic IP | private |
| [aegis-patent](https://github.com/jettoptx/aegis-patent) | AEGIS patent sandbox | private |
| [agency](https://github.com/jettoptx/agency) | Agency site | private |

Retired history is the archive bucket. It is not a tenth product.

DVOID (`dvoid.io`) is the DevSecOps control plane under these repos. Alyne Solutions operates it. Jett Optics is the protocol partner for gaze-based encryption and Solana DePIN. The A2A agent gateway is the agent door on that plane.

Hedgehog premier MCP in JetChat: https://hedgehog-premier-mcp-in-jetchat-4nid.pages.cursorusercontent.com/

**This repo.** Imported from `jettoptx-docs` with history. This is the public documentation flagship.

---

# jettoptx-docs

Official developer documentation for the **Jett Optics / OPTX ecosystem** — [Next.js](https://nextjs.org) + [Fumadocs](https://fumadocs.vercel.app) + MDX.

Live at **[docs.jettoptics.si/docs](https://docs.jettoptics.si/docs)**

## Project Structure

```
jettoptx-docs/
├── app/                    # Next.js App Router
│   ├── docs/               # /docs catch-all MDX renderer
│   └── api/search/         # Full-text search
├── components/             # MOA graph, sidebar, footer
├── content/docs/           # MDX content (sections + meta.json)
├── lib/
│   ├── moa-registry.ts     # Single source: MOA nodes, edges, PATH_TO_NODE, PAGE_AGT
│   ├── platform-constants.ts
│   └── source.ts           # Fumadocs loader + Lucide icons
├── public/diagrams/        # D2 → SVG architecture diagrams
└── source.config.ts
```

## Adding a Doc Page

1. Create `content/docs/<section>/<page>.mdx` with frontmatter (`title`, `description`, `icon`)
2. Register in section `meta.json` and root `content/docs/meta.json` if new section
3. Add node + edges to `lib/moa-registry.ts` (PATH_TO_NODE and PAGE_AGT derive automatically)
4. Update changelog in `components/footer.tsx` and `content/docs/reference/changelog.mdx`

See [/docs/rules](https://docs.jettoptics.si/docs/rules) for the full agent/human walkthrough.

## Ecosystem Repos

| Repo | Docs Section |
|------|--------------|
| [jettoptx-sdk](https://github.com/jettoptx/jettoptx-sdk) | `/docs/sdk` |
| [jettoptx-aaron-router](https://github.com/jettoptx/jettoptx-aaron-router) | `/docs/protocol` |
| [jettoptx-poa-depin](https://github.com/jettoptx/jettoptx-poa-depin) | `/docs/on-chain-bridge` |
| [jettoptx-aaron-public](https://github.com/jettoptx/jettoptx-aaron-public) | `/docs/infrastructure/edge-gateway` |

Full map: [Ecosystem Repos](https://docs.jettoptics.si/docs/reference/ecosystem)

## Canonical On-Chain

| Token | Address | Network |
|-------|---------|---------|
| $JTX v2 | `JTXGnx83s2QZ2MwYkRD1cBKrqQKSdG5oe8vSYW5Zjoe` | mainnet |
| $OPTX Utility | `DSyauRAZwUd2BrTk3P8k2yUxxvcx5X4BBg3Gh3VbeRG3` | devnet |
| DePIN mainnet | `85sqs4upQiPrvk1NMuyfHVQoW1EGdgk8m2cQb7uMxXTF` | mainnet |

## Scripts

```bash
npm install
npm run dev       # localhost:3000
npm run build
```

## Current Version

**v2.2.4** — On-chain addresses list $JTX v2 and the devnet $OPTX Utility mint.

APACHE — use it, fork it, ship it.

---

2026-11-21

-JOE origin ready

