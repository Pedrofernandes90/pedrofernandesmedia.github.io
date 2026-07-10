# Como editar seu site

Você tem 2 arquivos principais:

## 1. `index.html` — o texto e conteúdo
Abra esse arquivo em qualquer editor de texto (Bloco de Notas, VS Code, etc.) e troque:

- **"SEU NOME"** e **"Seu Nome"** → pelo seu nome de verdade
- **"[sua profissão / área]"** → o que você faz (ex: "designer gráfico", "desenvolvedor web")
- **"Nome do Projeto Um/Dois/Três"** → os nomes reais dos seus projetos
- **"seuemail@exemplo.com"** → seu e-mail de contato
- Os links **"#"** dentro de `<a href="#">` → coloque os links reais (LinkedIn, Instagram, GitHub, ou o link de cada projeto)

Para trocar a bolinha colorida da seção "Sobre" pela sua foto:
1. Coloque sua foto (ex: `minha-foto.jpg`) na mesma pasta do `index.html`
2. Troque a linha:
   ```html
   <!-- Troque a cor abaixo por sua foto: <img src="minha-foto.jpg" alt="Seu Nome"> -->
   ```
   por:
   ```html
   <img src="minha-foto.jpg" alt="Seu Nome">
   ```
   (dentro da `<div class="about-photo">`)

## 2. `style.css` — as cores
Lá no topo do arquivo tem isso:

```css
:root {
  --paper: #F6F4EF;      /* fundo, cor de papel */
  --ink: #1B2430;        /* texto principal */
  --brass: #C89B3C;      /* cor de destaque (dourado) */
  --dusty-blue: #3D5A80; /* segunda cor de destaque */
}
```

Troque os códigos de cor (tipo `#C89B3C`) para mudar a paleta do site inteiro.
Se não souber o código de uma cor, procure por "color picker" no Google.

## Como ver o site no seu computador antes de publicar
Basta dar dois cliques no arquivo `index.html` — ele abre no seu navegador (Chrome, Firefox, etc.) e você já vê como está ficando.

## Próximo passo
Quando estiver satisfeito com o conteúdo, é só subir esses arquivos pro GitHub e ativar o GitHub Pages, do jeito que já te expliquei. Depois é só conectar seu domínio do Wix. 🎉
