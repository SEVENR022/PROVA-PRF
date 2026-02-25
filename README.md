# 🛡️ PRF — Prova de Ingresso | França RP (FiveM)

![PRF França RP](https://img.shields.io/badge/PRF-França%20RP-blue?style=for-the-badge&logo=shield&logoColor=yellow)
![FiveM](https://img.shields.io/badge/FiveM-Servidor-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)

> Sistema completo de avaliação para ingresso na **Polícia Rodoviária Federal (PRF)** do servidor FiveM **França RP**.

---

## 📸 Preview

O site conta com 3 telas principais:

| Tela de Boas-Vindas | Prova (100 Questões) | Resultado Final |
|:---:|:---:|:---:|
| Formulário de identificação | Navegação por categorias | Certificado e gabarito |

---

## 🚔 Sobre o Projeto

Este é um sistema web de prova para avaliar candidatos à **PRF** no servidor FiveM **França RP**. A prova contém **100 questões** divididas em **10 categorias** que avaliam o perfil completo do agente.

### 📋 Categorias da Prova

| # | Categoria | Questões | O que avalia |
|:---:|---|:---:|---|
| 1 | 👤 **Perfil e Conduta** | 10 | Comportamento, postura, aparência, sigilo |
| 2 | ⚖️ **Ética e Disciplina** | 10 | Valores morais, corrupção, imparcialidade, hierarquia |
| 3 | 📜 **Legislação de Trânsito** | 10 | Leis, multas, CNH, infrações, embriaguez |
| 4 | 🚔 **Abordagem e Patrulha** | 10 | Passo a passo da abordagem, posição da viatura, revista |
| 5 | ⚡ **Perseguição e Uso da Força** | 10 | Uso progressivo da força, arma de fogo, proporcionalidade |
| 6 | 📻 **Códigos de Rádio** | 10 | QAP, QSL, QTH, QRV, QRX, Código 0, comunicação |
| 7 | 🎯 **Situações Práticas** | 10 | Cenários reais do dia a dia na PRF |
| 8 | 🎮 **Regras do RP** | 10 | VDM, RDM, metagaming, powergaming, FailRP |
| 9 | 🤝 **Operações e Equipe** | 10 | Trabalho em equipe, cerco tático, briefing, escolta |
| 10 | 🏛️ **Conhecimentos Específicos** | 10 | Hierarquia, relatórios, BO, missão da PRF |

### ✅ Critérios de Aprovação

- **Nota mínima:** 70% (70 acertos de 100 questões)
- **Resultado individual por categoria** para identificar pontos fortes e fracos
- **Gabarito completo** com revisão de todas as respostas

---

## 🚀 Tecnologias

- **React 19** — Interface reativa e moderna
- **TypeScript** — Tipagem estática para segurança
- **Vite** — Build rápido e otimizado
- **Tailwind CSS 4** — Estilização utility-first
- **Single File Build** — Todo o site é gerado em um único arquivo HTML

---

## 📦 Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ instalado
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/prova-prf-franca-rp.git

# 2. Entre na pasta do projeto
cd prova-prf-franca-rp

# 3. Instale as dependências
npm install

# 4. Rode em modo de desenvolvimento
npm run dev

# 5. Ou faça o build para produção
npm run build

# 6. Visualize o build
npm run preview
```

### Deploy no GitHub Pages

```bash
# Build do projeto
npm run build

# O arquivo gerado estará em dist/index.html
# Faça upload da pasta dist/ para o GitHub Pages
```

---

## 📁 Estrutura do Projeto

```
prova-prf-franca-rp/
├── index.html                    # HTML principal com meta tags
├── package.json                  # Dependências do projeto
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração do TypeScript
├── README.md                    # Este arquivo
└── src/
    ├── main.tsx                 # Ponto de entrada React
    ├── index.css                # Estilos globais (Tailwind)
    ├── App.tsx                  # Componente raiz (controle de telas)
    ├── utils/
    │   └── cn.ts                # Utility para classes CSS
    ├── data/
    │   └── questions.ts         # Banco de 100 questões
    └── components/
        ├── WelcomeScreen.tsx    # Tela de boas-vindas e identificação
        ├── ExamScreen.tsx       # Tela da prova (100 questões)
        └── ResultScreen.tsx     # Tela de resultado e gabarito
```

---

## 🎨 Features

- ✅ **100 questões** em 10 categorias completas
- ✅ **Design responsivo** — funciona em celular, tablet e desktop
- ✅ **Tema escuro** com gradientes azul/dourado (cores da PRF)
- ✅ **Navegação por categorias** com filtro lateral
- ✅ **Progresso em tempo real** por categoria
- ✅ **Timer** — cronômetro da prova
- ✅ **Modal de confirmação** ao finalizar (mostra questões pendentes)
- ✅ **Resultado detalhado** com gráfico circular de aproveitamento
- ✅ **Desempenho por categoria** com barras de progresso
- ✅ **Gabarito completo** com filtro (todas/acertos/erros)
- ✅ **Instruções pós-prova** para aprovados e reprovados
- ✅ **Animações e efeitos visuais** (blur, gradientes, pulsos)
- ✅ **Single file build** — tudo em um só HTML para fácil distribuição

---

## 🔧 Personalização

### Alterar questões
Edite o arquivo `src/data/questions.ts`. Cada questão segue o formato:

```typescript
{
  id: 1,
  question: "Texto da pergunta",
  options: ["Opção A", "Opção B", "Opção C", "Opção D"],
  correctAnswer: 1, // Índice da resposta correta (0-3)
  category: "Nome da Categoria",
}
```

### Alterar nota mínima
No arquivo `src/data/questions.ts`, altere a constante:

```typescript
export const PASSING_SCORE = 70; // Porcentagem mínima (0-100)
```

### Alterar nome do servidor
Busque por "França RP" nos componentes e substitua pelo nome do seu servidor.

---

## 📄 Licença

Este projeto é de uso livre para servidores FiveM. Sinta-se à vontade para usar, modificar e distribuir.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abrir um Pull Request

---

<div align="center">

**Feito com ❤️ para a comunidade FiveM**

🛡️ **PRF — França RP** 🛡️

</div>
