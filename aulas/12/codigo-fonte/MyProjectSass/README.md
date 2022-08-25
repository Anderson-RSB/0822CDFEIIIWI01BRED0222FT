
# Sass

## Instalação do Sass

### Nodejs

```
npm install --global sass
```

### Chocolatey (Window)

```
choco install sass
```

### Homebrew (Mac OS X ou Linux)

```
brew install sass/sass/sass
```

## Compilando código Sass

### Compilando para produção

```
sass --style compressed src/myproject.scss:build/style.css
```

### Compilando para desenvolvimento 

```
sass --watch --style compressed src/myproject.scss:build/style.css
```

## Estrutura de pasta

```shell
  MyProjectSass/
  ├── src
  │   ├── _component.scss
  │   └── myproject.scss
  ├── build
  │   └── style.css
  ├── README.md
  ├── package.json
  └── package-lock.json
```