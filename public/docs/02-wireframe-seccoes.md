# 02 — Wireframe & Anatomia das Secções

Blueprint visual da página e de cada secção para referência de layout, proporções responsivas e adaptação rápida a novos nichos.

---

## 1. Visão Macro da Landing Page

```text
+-------------------------------------------------------------------+
| [GLOBAL] STICKY NAVBAR + BARRA DE PROGRESSO (2px #0066FF)         |
+-------------------------------------------------------------------+
| 1. HERO (#inicio)                                    bg: #FFFFFF  |
|    Proposta de valor + CTA principal + 3 pilares + Foto recortada |
+-------------------------------------------------------------------+
| 2. SOBRE / AUTORIDADE (#sobre)                       bg: #FFFFFF  |
|    Cartão retrato 4:5 + Bio + Checklist de 4 provas + CTA         |
+-------------------------------------------------------------------+
| 3. SERVIÇOS / CARROSSEL INFINITO (#servicos)         bg: #F8FAFC  |
|    Cabeçalho + Setas + Pista horizontal contínua de cards         |
+-------------------------------------------------------------------+
| 4. PROVA SOCIAL & CONVERSÃO (#depoimentos)           bg: #F8FAFC  |
|    4A. Galeria Crossfade 4:5 (esq) + 3 Depoimentos empilhados     |
|    4B. Banner Azul de Conversão (#contacto)          bg: #0066FF  |
+-------------------------------------------------------------------+
| 5. RODAPÉ (#rodape)                                  bg: #0B132B  |
|    Marca + Navegação + Cards de Redes Sociais + Sub-footer        |
+-------------------------------------------------------------------+
                  [GLOBAL FLUTUANTE] Pill Auto-Scroll + Topo (bottom-right)
```

---

## 2. Grelha e Breakpoints

- **Container:** `max-w-[1280px]`, padding lateral `16px` (`mobile`) -> `32px` (`sm`) -> `48px` (`lg`).
- **Mobile (`< 640px`):** 1 coluna, botões CTA em largura total (`w-full`), elementos visuais secundários simplificados.
- **Tablet (`640px – 1023px`):** Header estilo mobile/híbrido (botão outline + hamburger `< 1024px`), layouts de 2 colunas ativados a partir de `md:` (`768px`).
- **Desktop (`>= 1024px`):** Navegação horizontal completa no header (`lg:flex`) e escala tipográfica máxima.

---

## 3. Wireframes por Secção

### 0. Navbar Fixa, Drawer e Controlo Flutuante

**Desktop (`>= 1024px`, altura `80px`):**
```text
[======== 2px Barra de Progresso (#0066FF, scaleX) ========]
| [Logo] MARCA       Início   Sobre   Serviços   Depoimentos   Contacto     ( CTA Outline -> ) |
|        SUBTÍTULO   ------ (sublinhado dinâmico via Scroll-Spy)                               |
```

**Mobile & Tablet (`< 1024px`, altura `64px` / `80px`):**
```text
| [Logo] MARCA                             ( CTA Outline só sm+ )   [≡] |
```

**Drawer Slide-over (`w-[84%] max-w-[350px]`, `rounded-l-3xl`):**
```text
+-------------------------------+
| [Logo] MARCA              [X] |
|-------------------------------|
| ( CTA Sólido ) ( CTA Outline )|
|-------------------------------|
| Início                     -> |
| Sobre                      v  |
|   | Sub-tópicos (3 links)     |
| Serviços / Procedimentos   v  |
|   | Itens diretos + Ver todos |
| Casos & Depoimentos        -> |
| Contacto & Localização     -> |
|-------------------------------|
| REDES OFICIAIS     (IG)(FB)(TT)|
| [Ícone] Contacto direto       |
+-------------------------------+
```

**Controlo Flutuante (`fixed bottom-5 right-5`):**
```text
+-------------------------+
| ( ▶ Auto )   ( ↑ Topo ) |   <-- "Topo" visível quando scrollY > 360px
+-------------------------+
```

---

### 1. Secção Hero (`#inicio`)

**Tablet (`640px–1023px`) e Desktop (`>= 1024px`):**
```text
+-----------------------------------------------------------------------+
|  [EYEBROW EM CAIXA ALTA] ────────────          |                      |
|                                                |                      |
|  Headline Linha 1 (Bold #0F172A)               |     [IMAGEM PNG      |
|  Headline Linha 2 (Regular #526077)            |      RECORTADA       |
|                                                |      à direita,      |
|  Subtítulo conciso em 2 linhas                 |      object-bottom   |
|  (max-width: 420px).                           |      w: 46%-56%]     |
|                                                |                      |
|  ( ● CTA Principal Pill #0066FF -> )           |                      |
|                                                |                      |
|  [Ícone]      |  [Ícone]      |  [Ícone]       |                      |
|  Pilar 1      |  Pilar 2      |  Pilar 3       |                      |
+-----------------------------------------------------------------------+
```

**Mobile (`< 640px`, sem imagem lateral de fundo):**
```text
+-----------------------------------+
| [EYEBROW] ──────                  |
| Headline Linha 1 (38px Bold)      |
| Headline Linha 2 (38px Regular)   |
| Subtítulo (14px)                  |
| [   ( ● CTA Principal 100% )   ]  |
| +-------------------------------+ |
| | [Íc]     | [Íc]     | [Íc]    | |
| | Pilar 1  | Pilar 2  | Pilar 3 | |
| +-------------------------------+ |
+-----------------------------------+
```

---

### 2. Secção Sobre / Autoridade (`#sobre`)

- **Mobile (`< 768px`):** Retrato em cima, bio em baixo.
- **Tablet & Desktop (`md:grid-cols-12`):** `5 colunas` (esquerda) + `7 colunas` (direita).

```text
+-----------------------------------------------------------------------+
|  ESQUERDA (md:col-span-5)      |  DIREITA (md:col-span-7)             |
|  +-------------------------+   |  SOBRE O PROFISSIONAL / EMPRESA      |
|  |                         |   |                                      |
|  |    [CARD RETRATO        |   |  Título H2 com palavra-chave         |
|  |     aspect-[4/5]        |   |  destacada em #0066FF                |
|  |     rounded-[36px]]     |   |                                      |
|  |                         |   |  Parágrafo 1 (tecnologia/técnica)    |
|  |  +-------------------+  |   |  Parágrafo 2 (cuidado/diferencial)   |
|  |  | Nome     [Badge ] |  |   |                                      |
|  |  | Título   [15+Anos]|  |   |  (✓) Prova / diferencial 1           |
|  |  +-------------------+  |   |  (✓) Prova / diferencial 2           |
|  +-------------------------+   |  (✓) Prova / diferencial 3           |
|   (glow radial suave atrás)    |  (✓) Prova / diferencial 4           |
|                                |                                      |
|                                |  ( ● CTA Secundário Pill -> )        |
+-----------------------------------------------------------------------+
```

---

### 3. Secção Serviços / Carrossel Contínuo (`#servicos`)

- **Card individual:** `260px` (`mobile`) / `280px` (`sm`) / `290px` (`md+`).
- **Máscaras laterais:** Degradê suave de `#F8FAFC` para transparente nas bordas esquerda/direita.

```text
+-----------------------------------------------------------------------+
| ESPECIALIDADES / SOLUÇÕES                                             |
| Título H2 em 2 linhas com destaque #0066FF       (<) (>)  Saiba Mais->|
+-----------------------------------------------------------------------+
|▓| +-------------------+  +-------------------+  +-----------------+ |▓|
|▓| | [48x48 Ícone]     |  | [48x48 Ícone]     |  | [48x48 Ícone]   | |▓|
|▓| | TAG CATEGORIA     |  | TAG CATEGORIA     |  | TAG CATEGORIA   | |▓|
|▓| | Título Serviço 1  |  | Título Serviço 2  |  | Título Serv. 3  | |▓|
|▓| | Descrição curta   |  | Descrição curta   |  | Descrição curta | |▓|
|▓| | em até 3 linhas.  |  | em até 3 linhas.  |  | em até 3 linhas.| |▓|
|▓| | ----------------- |  | ----------------- |  | --------------- | |▓|
|▓| | Saiba mais ->     |  | Saiba mais ->     |  | Saiba mais ->   | |▓|
|▓| +-------------------+  +-------------------+  +-----------------+ |▓|
+-----------------------------------------------------------------------+
                 [ Mobile only: ( CTA Outline 280px -> ) ]
```

---

### 4. Prova Social (`#depoimentos`) + Banner CTA (`#contacto`)

**4A. Galeria Crossfade + Cards de Depoimento (`md:grid-cols-12`):**
```text
+-----------------------------------------------------------------------+
| EXPERIÊNCIAS REAIS                                                    |
| Título H2 + Subtítulo explicativo                                     |
+-----------------------------------------------------------------------+
|  ESQUERDA (md:col-span-5)      |  DIREITA (md:col-span-7)             |
|  +-------------------------+   |  +---------------------------------+ |
|  |   •  ───  •   •   •     |   |  | ★★★★★                      [”]  | |
|  |                         |   |  | "Citação curta e autêntica..."  | |
|  |  [GALERIA CROSSFADE     |   |  | (A) Nome Cliente • Contexto     | |
|  |   aspect-[4/5]          |   |  +---------------------------------+ |
|  |   dissolve a cada 4s]   |   |  +---------------------------------+ |
|  |                         |   |  | ★★★★★                      [”]  | |
|  |  +-------------------+  |   |  | "Citação curta e autêntica..."  | |
|  |  | Casos Reais       |  |   |  | (B) Nome Cliente • Contexto     | |
|  |  | Nota 5.0   ★★★★★  |  |   |  +---------------------------------+ |
|  |  +-------------------+  |   |  +---------------------------------+ |
|  +-------------------------+   |  | ★★★★★                      [”]  | |
|                                |  | "Citação curta e autêntica..."  | |
|                                |  | (C) Nome Cliente • Contexto     | |
|                                |  +---------------------------------+ |
+-----------------------------------------------------------------------+
```

**4B. Banner de Conversão (`#contacto`, `bg-[#0066FF]`):**
```text
+-----------------------------------------------------------------------+
|  ESQUERDA (md:col-span-8)                     | DIREITA (md:col-span-4)|
|  CHAMADA FINAL                                |                       |
|  Headline forte em branco (24px -> 38px)      |   +---------------+   |
|  Subtítulo direto de convite à ação.          |   | ( CTA Branco  |   |
|                                               |   |  Texto Azul->)|   |
|  [Telefone/WhatsApp]  [Localização]  [Horário]|   +---------------+   |
+-----------------------------------------------------------------------+
```

---

### 5. Rodapé (`#rodape`)

- **Mobile:** 1 coluna empilhada.
- **Tablet (`md`):** 2 colunas no topo (Marca + Navegação) e Redes Sociais ocupando a largura total abaixo (`md:col-span-2`).
- **Desktop (`lg`):** 12 colunas (`5 + 3 + 4`).

```text
+-----------------------------------------------------------------------+
| COL 1 (lg:5)           | COL 2 (lg:3)      | COL 3 (lg:4)             |
| [Logo] MARCA           | NAVEGAÇÃO         | REDES SOCIAIS OFICIAIS   |
| Descrição resumida     | Início            | +----------------------+ |
|                        | Sobre             | | [IG] Instagram    ↗  | |
| ( CTA Azul Directo )   | Especialidades    | +----------------------+ |
|                        | Depoimentos       | | [FB] Facebook     ↗  | |
|                        | Agendamento       | +----------------------+ |
|                        |                   | | [TT] TikTok       ↗  | |
|                        |                   | +----------------------+ |
|-----------------------------------------------------------------------|
| © 2026 Marca. Todos os direitos.        Info Extra  •  Contacto Link  |
+-----------------------------------------------------------------------+
```

---

## 4. Guia de Adaptação para Outros Nichos

| Bloco | Saúde / Clínica | Advocacia / Consultoria | Arquitetura / Engenharia | Estética / Bem-Estar | SaaS / Agência B2B |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | Foto do doutor + 3 pilares | Sócio / equipa em fato | Arquiteto ou maquete 3D | Especialista / resultado | Mockup do produto / equipa |
| **Sobre (4:5 + 4 checks)** | Experiência + biossegurança | OAB/Cédula + taxas de êxito | Obras entregues + prazos | Protocolos + ambiente | Metodologia + stack técnico |
| **Carrossel (6 cards)** | Tratamentos | Áreas jurídicas | Tipos de projeto | Procedimentos | Módulos / planos |
| **Prova Social** | Antes/depois + avaliações | Pareceres + clientes | Portfólio visual + clientes | Galeria real + reviews | Cases com métricas + depoimentos |
| **Banner CTA** | Agendar Avaliação | Agendar Reunião | Solicitar Orçamento | Reservar Horário | Pedir Demonstração |
