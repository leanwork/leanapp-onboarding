# Lean App · Onboarding

Página de onboarding da Lean App — publicada automaticamente no GitHub Pages a cada push na branch `main`.

**URL:** https://leanwork.github.io/leanapp-onboarding/

## Como funciona

O projeto é distribuído como um único arquivo `index.html` auto-contido. Todos os assets (JavaScript, CSS, imagens e fontes) são embutidos diretamente no HTML em formato base64 com compressão gzip. Ao abrir no browser, o arquivo descompacta os assets em memória via `DecompressionStream` e monta a aplicação dinamicamente — sem dependências externas ou build local necessário.

## Deploy

O deploy é feito automaticamente via GitHub Actions (`.github/workflows/deploy.yml`) sempre que um commit é enviado para a branch `main`. O workflow faz o upload do diretório raiz como artifact e publica no GitHub Pages usando o método nativo de Actions.

Para ativar o Pages no repositório: **Settings → Pages → Source → GitHub Actions**.

## Atualizar o conteúdo

Substitua o arquivo `index.html` pela nova versão exportada e faça push para `main`. O deploy ocorre automaticamente em seguida.
