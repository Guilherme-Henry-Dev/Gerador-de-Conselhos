# 🧠 Projeto: Gerador de Conselhos (Card UI)

## 📋 Descrição

Este projeto é uma interface de cartão de conselhos, desenvolvida com **HTML**, **CSS** e **JavaScript**.  
Agora, além do layout estilizado, o projeto consome conselhos reais da [Advice Slip API](https://api.adviceslip.com/) e traduz automaticamente os textos para **português** com a **API MyMemory Translate**.

<blockquote style="font-size: 19px; background-color: #000; border-left: 5px solid #2ecc71; padding: 1em;">
  ✅ <strong>Status:</strong><br>
  Projeto funcional: já é possível gerar conselhos dinâmicos em português com apenas um clique!
</blockquote>

---

## 🔧 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **Fetch API**  
- **Advice Slip API** → fornece conselhos aleatórios (em inglês)  
- **MyMemory Translate API** → traduz os conselhos automaticamente para PT-BR  

---

## 📁 Estrutura de Pastas
```bash
📁 PROJETO-GERADOR-DE-CONSELHOS
 ┣ 📂 src
 ┃ ┣ 📂 css
 ┃ ┃ ┣ 📜 reset.css         # Reset de estilos
 ┃ ┃ ┣ 📜 responsive.css    # Estilos para responsividade
 ┃ ┃ ┗ 📜 style.css         # Estilo principal do Card
 ┃ ┃ 
 ┃ ┣ 📂 img
 ┃ ┃ ┣ 🖼️ app-conselhos.jpg     
 ┃ ┃ ┣ 🖼️ estrutura.jpg
 ┃ ┃ ┣ 🖼️ favicon-32x32.png
 ┃ ┃ ┣ 🎞️ gerador-de-conselhos.gif  
 ┃ ┃ ┣ 🖼️ icon-dice.svg
 ┃ ┃ ┣ 🖼️ pattern-divider-desktop.svg
 ┃ ┃ ┗ 🖼️ pattern-divider-mobile.png
 ┃ ┗ 📂 js
 ┃   ┗ 📜 index.js          # Lógica da geração de conselhos
 ┣ 📜 index.html            # Estrutura da página
 ┗ 📜 README.md             # Documentação
```
---

## 🎯 Objetivos do Projeto

- Praticar estruturação de componentes com HTML.
- Estilizar interfaces responsivas e centradas com CSS.
- Integrar JavaScript para manipular DOM e consumir APIs externas.
- Utilizar a Advice Slip API para gerar conselhos dinâmicos.
- Traduzir automaticamente os conselhos para português.
- Trabalhar tipografia e espaçamento para foco em leitura.

---

## 🖼️ Prévia Visual

![Preview do Projeto](./src/images/app-conselho.jpg)

---

## 📦 Funcionalidades

- [x] Layout **totalmente responsivo** 
- [x] Interface de card estilizado  
- [x] Botão visual com ícone interativo  
- [x] Geração dinâmica de conselhos com JavaScript  
- [x] Integração com a API [Advice Slip](https://api.adviceslip.com/)  
- [x] Tradução automática para PT-BR com [MyMemory Translate](https://mymemory.translated.net/doc/spec.php)  
- [ ] Efeitos de loading/transição ao trocar o conteúdo  

---

## 📌 Status do Projeto
- 🚀 **Em funcionamento**: já é possível gerar conselhos reais em português.  
- 🔜 Melhorias futuras: otimização do design responsivo e animações de transição entre conselhos.  

---

## 🙋‍♂️ Autor
- Feito com 💻 por **Guilherme Henry**  
- 📍 Belo Horizonte  
- 📧 guilherme.henrydesigner@gmail.com  
