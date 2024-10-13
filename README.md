# Simulador de Propagação de Ondas

Um simulador interativo que permite visualizar diferentes tipos de ondas em diversos meios, com controle em tempo real das condições iniciais e de contorno. O projeto é construído utilizando **React** no frontend e **Python** no backend para resolver as equações diferenciais parciais (PDEs).

## Visão Geral

O objetivo deste projeto é criar um visualizador de ondas que permite aos usuários explorar como diferentes tipos de ondas se comportam ao se propagar em diferentes meios. A interface de usuário é moderna e intuitiva, com gráficos interativos e controles em tempo real.

## Tecnologias Utilizadas

- **Frontend**: React com Vite e TypeScript
- **Estilização**: Tailwind CSS
- **Backend**: Python para resolver PDEs usando bibliotecas científicas
- **Comunicação**: API REST ou WebSocket para comunicação entre frontend e backend

## Estrutura de Pastas

```plaintext
/simulador-ondas
├── /public                # Arquivos estáticos públicos
├── /src                   # Código-fonte principal
│   ├── /assets            # Arquivos de mídia
│   ├── /components        # Componentes reutilizáveis
│   ├── /hooks             # Custom Hooks
│   ├── /pages             # Páginas principais
│   ├── /services          # Funções para comunicação com o backend
│   ├── /context           # Context API para estado global
│   ├── /types             # Definições de tipos TypeScript
│   ├── /utils             # Funções utilitárias
│   ├── App.tsx            # Componente principal do React
│   ├── main.tsx           # Arquivo de entrada do React
│   └── index.css          # Estilos globais da aplicação
├── /tests                 # Testes unitários e de integração
├── vite.config.ts         # Configurações do Vite
├── tsconfig.json          # Configurações do TypeScript
└── README.md              # Documentação do projeto
