# 03 — Design System

Especificação visual e interativa completa extraída de `src/index.css`, `index.html` e dos componentes de interface.

---

## 1. Paleta de Cores

### Cores de Marca & Ação
| Token | Hex | Uso |
| :--- | :--- | :--- |
| `--color-primary` | `#0066FF` | CTAs primários, links ativos, destaques tipográficos, ícones, barra de progresso e banner de conversão |
| `--color-primary-dark` / `hover` | `#0052CC` | Estado hover dos botões primários e links em destaque |
| `--color-light-blue` | `#EEF6FF` | Fundo suave de caixas de ícones, badges de destaque e avatares iniciais |
| Footer Accent | `#60A5FA` | Subtítulo de marca e links hover sobre fundo escuro no rodapé |

### Neutros & Superfícies
| Token | Hex | Uso |
| :--- | :--- | :--- |
| `--color-dark` | `#0F172A` | Títulos principais (H1, H2, H3), texto principal e ícones escuros |
| `--color-slate-headline` | `#526077` | Segunda linha da headline principal (H1) para contraste hierárquico |
| Slate Body Strong | `#334155` | Itens de checklist, destaques do Hero e citações de depoimentos |
| Nav Link Default | `#475569` | Links de navegação inativos e ícones sociais neutros |
| `--color-body` | `#64748B` | Parágrafos descritivos, eyebrows e legendas |
| `--color-very-light-blue` | `#F8FAFC` | Fundo alternado das secções Serviços e Depoimentos |
| Base Background | `#FFFFFF` | Fundo principal da página, cards e header |
| `--color-border-subtle` | `#E2E8F0` | Divisores verticais finos e bordas subtis |
| Card Border | `#F1F5F9` (`slate-100`) | Bordas delicadas de cards e separadores de secção |
| Footer Background | `#0B132B` | Fundo institucional escuro do rodapé |

### Cores Semânticas / Avaliação
| Uso | Valor | Aplicação |
| :--- | :--- | :--- |
| Estrelas de Avaliação | `amber-400` (`#FBBF24`) | Classificação 5 estrelas nos depoimentos e badge da galeria |
| Redes Sociais (hover/ícone) | `#E1306C` (IG), `#1877F2` (FB), `#00F2FE` (TT) | Cards oficiais de redes sociais no rodapé |

---

## 2. Tipografia

### Família Tipográfica
```css
--font-sans: 'Plus Jakarta Sans', 'Poppins', Inter, ui-sans-serif, system-ui, sans-serif;
```
Carregada via Google Fonts com pesos `300`, `400`, `500`, `600`, `700`, `800`.

### Escala Tipográfica Responsiva
| Elemento | Mobile (`<640px`) | Tablet (`sm`/`md`) | Desktop (`lg`/`xl`) | Estilo & Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Eyebrow (Rótulo)** | `10px` | `11px` | `11px` | `uppercase`, `font-semibold`, `tracking-[0.24em]` / `0.26em` |
| **H1 Linha 1 (Hero)** | `38px` | `46px` (`sm`) / `52px` (`md`) | `72px` (`lg`) / `76px` (`xl`) | `font-bold`, `leading-[0.98]`, `tracking-[-0.035em]` |
| **H1 Linha 2 (Hero)** | `38px` | `46px` (`sm`) / `52px` (`md`) | `72px` (`lg`) / `76px` (`xl`) | `font-normal`, `leading-[1.02]`, cor `#526077` |
| **H2 (Secções)** | `26px–32px` | `38px–42px` | `40px–42px` | `font-bold`, `leading-tight`, `tracking-[-0.03em]` |
| **H3 (Banner CTA)** | `24px` | `38px` | `38px` | `font-bold`, `leading-tight`, `tracking-tight` |
| **H3 (Card Serviço)** | `16px` | `18px` | `18px` | `font-bold`, `leading-snug` |
| **Parágrafo Principal** | `13.5px–14px` | `15px–16px` | `16px` | `leading-[1.65]`, cor `#64748B` |
| **Texto de Card** | `12px–13px` | `13px–14px` | `13px–14px` | `leading-[1.65]` |

---

## 3. Espaçamentos, Raios e Superfícies

### Layout & Ritmo Vertical
- **Largura Máxima:** `1280px` (`max-w-[1280px] mx-auto`)
- **Padding Horizontal:** `px-4` (`16px` mobile) -> `sm:px-8` (`32px` tablet) -> `lg:px-12` (`48px` desktop)
- **Padding Vertical de Secções:** `py-12` a `py-16` (mobile) -> `sm:py-20` a `sm:py-24` (tablet/desktop)

### Raios de Borda (Border Radius)
- **Botões e Pills Flutuantes:** `rounded-full` (`9999px`)
- **Caixas de Ícones / Badges Internos:** `rounded-2xl` (`16px`)
- **Cards de Depoimento / Mobile Highlights:** `rounded-2xl` -> `sm:rounded-3xl` (`16px` -> `24px`)
- **Cards de Serviço:** `rounded-3xl` (`24px`)
- **Cards Retrato/Galeria e Banner CTA:** `rounded-[28px]` -> `sm:rounded-[36px]`
- **Drawer Lateral:** `rounded-l-3xl`

### Sombras & Profundidade (Sem Blur Pesado)
- **Navbar Scrolled:** `shadow-[0_4px_20px_-8px_rgba(15,23,42,0.07)]`
- **Cards Retrato / Galeria:** `shadow-[0_20px_50px_-15px_rgba(0,102,255,0.12)]`
- **Cards de Serviço:** `shadow-[0_10px_30px_-10px_rgba(0,102,255,0.05)]` (Hover: `0_20px_40px_-10px_rgba(0,102,255,0.1)`)
- **Cards de Depoimento:** `shadow-[0_4px_20px_rgba(0,102,255,0.04)]` (Hover: `0_10px_30px_rgba(0,102,255,0.08)`)
- **Brilhos Decorativos:** Gradientes radiais CSS puros (`radial-gradient`) em vez de `blur-xl`/`blur-2xl` para manter 60/120fps no scroll.

---

## 4. Padrões de Botões (CTAs)

1. **Primário Sólido (Pill):** `bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-8 py-3.5 shadow-md shadow-[#0066FF]/25 active:scale-[0.98]`
2. **Secundário Outline (Navbar):** `border-[1.5px] border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white rounded-full px-5 py-2`
3. **Invertido (Sobre Banner Azul):** `bg-white text-[#0066FF] hover:bg-slate-50 font-bold rounded-full px-8 py-4 shadow-lg`
4. **Controlo Circular (Carrossel / Topo):** `rounded-full border border-slate-200 bg-white hover:bg-[#0066FF] hover:text-white`

---

## 5. Sistema de Movimento (Motion Design)

- **Curva de Desaceleração Padrão:** `power3.out` (entrada ágil, pouso suave)
- **Durações:**
  - Textos / Cards / Colunas: `0.52s – 0.60s`
  - Imagem Hero: `0.72s`
  - Scroll Programático (`ScrollToPlugin`): `0.75s` (`power3.out`)
- **Stagger:** `0.045s – 0.055s` entre itens sequenciais
- **Distância de Entrada:** `y: 16px – 18px` com `opacity: 0 -> 1` e `force3D: true`
- **ScrollTrigger:** `start: 'top 88%'` (Footer `'top 90%'`), `once: true`, `fastScrollEnd: true`, `clearProps: 'transform,opacity'`
- **Acessibilidade:** Verificação obrigatória de `window.matchMedia('(prefers-reduced-motion: reduce)')` em todos os blocos animados.
