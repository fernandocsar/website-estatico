# Portfólio - Fernando César

Portfólio pessoal de Fernando César, Analista de Sistemas especializado em desenvolvimento web, Python, DevOps e Inteligência Artificial.

## 🚀 Sobre

Este é um site estático responsivo que apresenta minha experiência profissional, projetos desenvolvidos e habilidades técnicas. O site foi desenvolvido com foco em simplicidade, performance e design moderno.

## ✨ Características

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Tema Escuro**: Interface moderna com tema escuro por padrão
- **Animações Suaves**: Efeitos de scroll e transições elegantes
- **Performance Otimizada**: Carregamento rápido e SEO otimizado
- **Acessibilidade**: Desenvolvido seguindo boas práticas de acessibilidade

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript**: Funcionalidades interativas e animações
- **Bootstrap**: Framework CSS para responsividade
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia Roboto e Ubuntu
- **Service Worker**: Cache offline e performance

## 📁 Estrutura do Projeto

```
web-site-estatico/
├── app/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   ├── main.min.css
│   │   │   └── plugins/
│   │   │       └── bootstrap.min.css
│   │   ├── js/
│   │   │   ├── all.min.js
│   │   │   └── plugins/
│   │   │       └── bootstrap.min.js
│   │   └── images/
│   │       └── icons/
│   │           └── [ícones PWA otimizados]
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.webmanifest
│   └── sw.js
├── .gitignore
├── LICENSE
├── optimize-images.md
├── README.md
└── robots.txt
```

## 🎯 Seções do Site

1. **Header**: Apresentação pessoal com efeito de digitação
2. **Sobre**: Informações profissionais e formação acadêmica
3. **Experiência**: Trajetória profissional com abas interativas
4. **Projetos**: Portfólio de trabalhos desenvolvidos
5. **Habilidades**: Tecnologias e ferramentas dominadas
6. **Contato**: Informações para contato profissional

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/fernandocsar/web-site-estatico.git
```

2. Abra o arquivo `app/index.html` em seu navegador

3. Ou execute em um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve app
```

## 📱 PWA (Progressive Web App)

O site inclui recursos PWA:
- Manifest para instalação como app
- Ícones em múltiplos tamanhos
- Meta tags para iOS
- Service Worker para cache offline
- Funcionalidade offline completa

## ⚡ Performance

O site foi otimizado para máxima performance:

- **CSS Minificado**: Versão compacta para carregamento rápido
- **Service Worker**: Cache offline e carregamento instantâneo
- **Ícones Otimizados**: PWA icons em tamanhos otimizados
- **Lazy Loading**: Carregamento sob demanda
- **CDN**: Fontes e ícones via CDN para melhor performance

## 🎨 Personalização

Para personalizar o site:

1. **Conteúdo**: Edite o arquivo `app/index.html`
2. **Estilos**: Modifique `app/assets/css/main.css`
3. **Funcionalidades**: Ajuste `app/assets/js/all.min.js`
4. **Projetos**: Atualize o array `projects` no JavaScript
5. **Cache**: Configure o Service Worker em `app/sw.js`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Fernando César**
- LinkedIn: [fernando-torvalds](https://www.linkedin.com/in/fernando-torvalds/)
- Website: [fernandocsar.com.br](https://fernandocsar.com.br/)
- Email: contato@fernandocsar.com.br

---

Desenvolvido com ❤️ por Fernando César