# 04 — Tecnologias & Bibliotecas

Inventário técnico verificado em `package.json`, `vite.config.ts`, `index.html` e nos ficheiros de código em `src/`.

---

## 1. Stack Principal (Core Frontend)

| Tecnologia | Versão (`package.json`) | Função no Projeto |
| :--- | :--- | :--- |
| **React** | `^19.0.1` | Construção da interface declarativa por componentes funcionais e Hooks (`useState`, `useEffect`, `useRef`) |
| **React DOM** | `^19.0.1` | Renderização no browser (`createRoot` em `src/main.tsx`) |
| **TypeScript** | `^7.0.2` | Tipagem estática e validação via `tsc --noEmit` |
| **Vite** | `^8.3.0` | Bundler de desenvolvimento (porta `3000`) e build de produção |
| **@vitejs/plugin-react** | `^6.1.1` | Suporte oficial React JSX/Fast Refresh no Vite |
| **Tailwind CSS** | `^4.3.3` | Estilização utility-first com tokens definidos via `@theme` em `src/index.css` |
| **@tailwindcss/vite** | `^4.3.3` | Plugin nativo Tailwind CSS v4 integrado diretamente ao pipeline do Vite |

---

## 2. Bibliotecas de Animação, Scroll & Ícones

| Biblioteca | Versão | Recursos Utilizados no Código |
| :--- | :--- | :--- |
| **GSAP (`gsap`)** | `^3.15.0` | Motor principal de animação (`gsap.context()`, `gsap.fromTo()`, `force3D`, `ticker.lagSmoothing`) |
| ↳ `gsap/ScrollTrigger` | *(incluído em `gsap`)* | Gatilhos de entrada no scroll (`once: true`, `fastScrollEnd: true`, `ignoreMobileResize: true`) |
| ↳ `gsap/ScrollToPlugin` | *(incluído em `gsap`)* | Scroll suave programático para âncoras (`#inicio`, `#sobre`, etc.), compensação de header (`offsetY`) e auto-scroll guiado |
| **Lucide React (`lucide-react`)** | `^0.546.0` | Conjunto de ícones vetoriais UI (`ArrowRight`, `ArrowUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `Menu`, `X`, `Shield`, `Smile`, `Award`, `Sparkles`, `ShieldCheck`, `HeartPulse`, `Stethoscope`, `Star`, `Quote`, `MapPin`, `Clock`, `ExternalLink`, `Play`, `Pause`) |
| **SVGs Customizados** | *(internos em `Icons.tsx`)* | Logótipo da marca e ícones oficiais de canais externos (WhatsApp, Instagram, Facebook, TikTok) |

---

## 3. Tipografia & Assets Externos

- **Google Fonts (`index.html`):**
  - `Plus Jakarta Sans` (pesos `300`, `400`, `500`, `600`, `700`, `800`)
  - `Poppins` (pesos `300`, `400`, `500`, `600`, `700`)
  - `preconnect` configurado para `fonts.googleapis.com` e `fonts.gstatic.com`
- **Otimização de Imagens:** `decoding="async"`, `loading="lazy"` (imagens abaixo da dobra) e `referrerPolicy="no-referrer"`.

---

## 4. APIs Nativas Web Utilizadas (Zero Dependência Extra)

| API Web | Onde é Usada | Objetivo |
| :--- | :--- | :--- |
| **IntersectionObserver** | `ServicesSection.tsx` | Pausa o loop `requestAnimationFrame` do carrossel quando a secção está fora da viewport |
| **ResizeObserver** | `Navbar.tsx`, `ServicesSection.tsx` | Recalcula altura do documento, offsets das secções e largura do carrossel sem causar *layout thrashing* no evento de scroll |
| **requestAnimationFrame** | `Navbar.tsx`, `ServicesSection.tsx`, `AutoScrollControl.tsx` | Sincronização de barra de progresso (`scaleX`), carrossel delta-time e visibilidade do botão voltar ao topo |
| **matchMedia** | `Hero.tsx`, `AboutPaim.tsx`, `ServicesSection.tsx`, `TestimonialsPaim.tsx`, `Footer.tsx`, `scroll.ts` | Respeito automático à preferência de acessibilidade `(prefers-reduced-motion: reduce)` |
| **CustomEvent** | `scroll.ts`, `AutoScrollControl.tsx` | Sinalização desacoplada (`drpaim:pause-autoscroll`) para pausar leitura automática ao navegar manualmente |

---

## 5. Dependências Auxiliares Presentes no Ambiente Base (`package.json`)

O `package.json` do template base inclui ainda pacotes de ambiente/tooling (que não estão importados nos componentes atuais de frontend, mas disponíveis caso um futuro projeto evolua para backend ou IA):

- **Dev Tooling:** `tsx` (`^4.21.0`), `esbuild` (`^0.25.0`), `autoprefixer` (`^10.4.21`), `@types/node`, `@types/react`, `@types/react-dom`, `@types/express`.
- **Template Base (não usados no frontend atual):** `express` (`^4.21.2`), `dotenv` (`^17.2.3`), `@google/genai` (`^2.4.0`), `motion` (`^12.23.24`).

---

## 6. Scripts Disponíveis (`package.json`)

| Comando | Ação |
| :--- | :--- |
| `npm run dev` | Inicia o servidor Vite na porta `3000` (`--host=0.0.0.0`) |
| `npm run build` | Gera o bundle otimizado de produção (`vite build`) |
| `npm run preview` | Pré-visualização local do build de produção |
| `npm run lint` | Verificação estrita de tipos TypeScript (`tsc --noEmit`) |
| `npm run clean` | Remove artefactos `dist` e `server.js` |
