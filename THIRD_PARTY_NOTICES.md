# Third-party source

This site's framework, theme, home hero, home navigation, footer structure, and documentation layout are adapted from [QuantumNous/new-api-docs-v1](https://github.com/QuantumNous/new-api-docs-v1), commit `d254f1842dc3d08d60f2269e2c9d4c9876a3dfbc`.

Copyright (c) 2025 new-api-docs-v1 contributors.

The upstream source code is licensed under the MIT License. Its original notice is retained in [licenses/new-api-docs-v1.LICENSE](licenses/new-api-docs-v1.LICENSE).

The source adaptation includes `src/app/global.css`, `src/components/hero.tsx`, `src/components/home-layout.tsx`, `src/components/home-page.tsx`, `src/components/footer.tsx`, `src/components/provider.tsx`, `src/components/ui/button.tsx`, `src/lib/cn.ts`, `src/lib/layout.shared.tsx`, `src/lib/metadata.ts`, and the Fumadocs document routes.

The upstream theme and hero have since been restyled after the CopilotKit documentation design language; the upstream GrainGradient animation and hero palette are no longer used. The underlying Next.js/Fumadocs components and layouts remain based on the upstream implementation.

The interface palette and typography follow the public [CopilotKit documentation](https://docs.copilotkit.ai/) design language. Only visual tokens (colors, radii, spacing, layout patterns) were referenced; no CopilotKit text, logos, or assets were copied.

Plus Jakarta Sans (Copyright 2020 The Plus Jakarta Sans Project Authors) and Spline Sans Mono (Copyright 2022 The Spline Sans Mono Project Authors) are bundled in `src/fonts/` under the SIL Open Font License 1.1. The license texts are retained in [licenses/plus-jakarta-sans.OFL.txt](licenses/plus-jakarta-sans.OFL.txt) and [licenses/spline-sans-mono.OFL.txt](licenses/spline-sans-mono.OFL.txt).

LinkSense text, documentation, logos, screenshots, connectors, and video assets remain the property of their respective rights holders. Their inclusion does not relicense them under the upstream MIT or CC0 licenses. No New API logos, partner logos, adoption statistics, documentation prose, or product recordings were imported.

The public `new-api-docs-v1` home page uses a grain-gradient hero; this implementation no longer includes that animation. It is a different source project from the black-hole marketing site at `www.newapi.ai`; this implementation does not claim access to that marketing site's original source.
