# 01 — Estrutura do Projeto

Documentação técnica da arquitetura de pastas, módulos e responsabilidades do projeto, extraída diretamente da base de código para reutilização em futuros projetos.

---

## 1. Árvore de Ficheiros

```text
/
├── index.html                        # Entrypoint HTML, metadados SEO/OG e Google Fonts
├── package.json                      # Dependências, scripts de build/dev/lint
├── vite.config.ts                    # Configuração Vite + React + Tailwind v4
└── src/
    ├── main.tsx                      # Bootstrap React (createRoot)
    ├── App.tsx                       # Orquestrador principal das secções + Refresh ScrollTrigger
    ├── index.css                     # Import Tailwind CSS v4, @theme tokens e regras globais
    ├── types.ts                      # Tipagens globais TypeScript
    ├── config/
    │   └── contact.ts                # Dados centralizados de contacto, morada, redes e WhatsApp URL helper
    ├── utils/
    │   └── scroll.ts                 # Registo único GSAP (ScrollTrigger + ScrollToPlugin) e helpers de scroll
    └── components/
        ├── Navbar.tsx                # Cabeçalho sticky, barra de progresso, Scroll-Spy e Drawer mobile/tablet
        ├── Hero.tsx                  # Dobra inicial (proposta de valor, CTA principal, 3 pilares, foto recortada)
        ├── AboutPaim.tsx             # Secção de autoridade (retrato 4:5, bio, checklist e CTA)
        ├── ServicesSection.tsx       # Carrossel horizontal infinito com loop rAF otimizado e setas/drag
        ├── TestimonialsPaim.tsx      # Prova social (galeria crossfade 4:5 + 3 depoimentos) + Banner CTA
        ├── Footer.tsx                # Rodapé escuro com marca, navegação rápida e cards de redes sociais
        ├── AutoScrollControl.tsx     # Cápsula flutuante minimalista de leitura automática e voltar ao topo
        └── Icons.tsx                 # Ícones SVG personalizados (logótipo, WhatsApp e redes sociais)
```

---

## 2. Fluxo de Composição (`src/App.tsx`)

O layout segue um modelo **Single-Page Modular** com secções empilhadas dentro de `<main>` e elementos globais fixos nas extremidades:

1. `<Navbar />` — Navegação fixa no topo (`sticky top-0 z-40`), barra de progresso e drawer lateral (`< 1024px`).
2. `<main id="inicio" className="flex-1">`:
   - `<Hero />` — Apresentação e conversão imediata.
   - `<AboutPaim />` (`#sobre`) — Credibilidade e diferenciais técnicos.
   - `<ServicesSection />` (`#servicos`) — Catálogo interativo de especialidades/serviços.
   - `<TestimonialsPaim />` (`#depoimentos` + `#contacto`) — Prova social visual/textual + banner de conversão final.
3. `<Footer />` (`#rodape`) — Encerramento institucional e canais oficiais.
4. `<AutoScrollControl />` — Controlo flutuante (`fixed bottom-5 right-5 z-30`) de leitura guiada e retorno ao topo.

---

## 3. Responsabilidade por Camada

| Camada | Ficheiros | Papel Arquitetural |
| :--- | :--- | :--- |
| **Entrada & Config** | `index.html`, `vite.config.ts`, `src/main.tsx` | Carregamento de fontes, bundling Vite e montagem da árvore React. |
| **Estilos & Tokens** | `src/index.css` | Definição de variáveis `@theme` / `:root` e estilos base do `body`. |
| **Configuração de Negócio** | `src/config/contact.ts` | Ponto único de verdade para telefone, morada, links sociais e gerador de URL de conversão. |
| **Motor de Scroll & Motion** | `src/utils/scroll.ts` | Registo centralizado de plugins GSAP, configuração de performance (`lagSmoothing`, `ignoreMobileResize`) e navegação programática com compensação do cabeçalho. |
| **Secções de Conteúdo** | `Hero.tsx`, `AboutPaim.tsx`, `ServicesSection.tsx`, `TestimonialsPaim.tsx`, `Footer.tsx` | Blocos independentes com animações encapsuladas em `gsap.context()` e suporte a `prefers-reduced-motion`. |
| **Navegação & UX Global** | `Navbar.tsx`, `AutoScrollControl.tsx` | Scroll-Spy com offsets em cache, barra de progresso GPU (`scaleX`) e tour automático com pausa instantânea em interação manual. |

---

## 4. Boas Práticas Estruturais Implementadas

- **Separação de Dados de Contacto:** Alterar `src/config/contact.ts` atualiza automaticamente Hero, Navbar, Drawer, Serviços, Banner e Rodapé.
- **Gestão Única de GSAP:** `src/utils/scroll.ts` evita registos duplicados de plugins e coordena o cancelamento do auto-scroll sempre que o utilizador clica numa âncora.
- **Performance de Scroll:** Loops contínuos (`ServicesSection`) usam `IntersectionObserver` para pausar fora da viewport; cálculos de Scroll-Spy (`Navbar`) fazem cache via `ResizeObserver` para evitar *layout thrashing*.
- **Independência Responsiva:** Regras móveis (`< 640px`), tablet (`640px–1023px`) e desktop (`>= 1024px`) coexistem sem duplicação de componentes.
