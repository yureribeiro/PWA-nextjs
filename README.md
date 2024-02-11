# Seu Projeto Next.js com next-pwa

Este é um projeto Next.js configurado com next-pwa para adicionar funcionalidades de Progressive Web App (PWA). O next-pwa facilita a criação de um Service Worker e fornece várias opções de configuração para otimizar a experiência do usuário.

## Configuração

### Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Clone este repositório e instale as dependências:

```bash
npm install
```

# Executando o Projeto
Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará acessível em http://localhost:3000/.

# Configuração do next-pwa

## Gere o arquivo manifest.json:

public/manifest.json:

```JSON
{ 
  "name": "Next-13 PWA",
  "short_name": "PWA",
  "theme_color": "#2196f3",
  "background_color": "#2196f3",
  "display": "standalone",
  "orientation": "portrait",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "icons/icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
      "purpose": "maskable any"
    },
  ], 
  "splash_pages": null 
}
```

## Instale o pacote next-pwa:

O pacote [next-pwa](https://www.npmjs.com/package/next-pwa) oferece vários recursos que facilitam a criação de PWAs, incluindo:

- Geração e registro de trabalhadores de serviço;
- Cache;
- Suporte off-line;
- Geração de arquivo de manifesto;
- Metatags principais;

## Para instalar o pacote next-pwa execute o seguinte comando em seu terminal:

```Bash
  npm i next-pwa
```

## A configuração do next-pwa está no arquivo next.config.js. Certifique-se de ajustar as opções de acordo com suas necessidades.

Recursos Adicionais
[Documentação do Next.js](https://nextjs.org/docs)
[next-pwa Repository](https://www.npmjs.com/package/next-pwa)

Após essas configurações, deve aparecer no seu browser um icone para baixar a versão pwa do seu app.
