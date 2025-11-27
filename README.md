
# ☀️ WeatherApp | Aplicativo de Previsão do Tempo

Este é um aplicativo móvel simples e moderno para previsão do tempo, desenvolvido com React Native (usando Expo) e TypeScript. Ele consome APIs externas para obter dados de geolocalização e previsão climática em tempo real.

![WhatsApp Image 2025-11-26 at 23 56 21 (1)](https://github.com/user-attachments/assets/c759c789-87f7-436b-bdd8-7d806be768f7)   ![WhatsApp Image 2025-11-26 at 23 56 21](https://github.com/user-attachments/assets/4ffa1566-7e0c-4039-b910-5b78b5350060)



## ✨ Tecnologias

Framework: React Native (Expo SDK)

Linguagem: TypeScript

APIs de Dados: Open-Meteo (dados climáticos) e Geocoding API (localização)

Estilo: StyleSheet (Estilo nativo do React Native)

Dependências Chave:

expo-linear-gradient: Para fundos visuais dinâmicos.

lucide-react-native: Para ícones vetoriais modernos.

## 📁 Estrutura do Projeto

O projeto adota uma estrutura modular com foco em separação de responsabilidades:

WeatherApp/
├── App.tsx                     # Componente principal, gerencia o estado e as chamadas de busca.
├── tsconfig.json               # Configurações do compilador TypeScript.
├── src/
│   ├── components/
│   │   └── CurrentWeather.tsx  # Componente visual para exibir os dados do clima.
│   ├── services/
│   │   └── weatherApi.ts       # Funções assíncronas de requisição para as APIs.
│   └── utils/
│       └── weatherConditions.tsx # Lógica de mapeamento (código do clima -> ícone/cores).


## 🚀 Guia de Configuração e Execução Local

Siga estes passos para clonar e rodar o projeto na sua máquina de desenvolvimento.

## 1. Pré-requisitos

Certifique-se de ter o seguinte software instalado:

Node.js e npm: (Recomendado versão LTS)

Git: Para clonar o repositório.

Expo Go App: Instalado no seu smartphone (disponível na App Store ou Google Play), ou um simulador/emulador no seu computador (Android Studio ou Xcode).

## 2. Clonagem e Instalação

Abra o seu terminal e execute os comandos:

### 1. Clone o repositório
git clone https://github.com/tcantunes/WeatherApp.git

### 2. Navegue até a pasta do projeto
cd WeatherApp

### 3. Instale todas as dependências do Node
npm install


## 3. Execução do Projeto

Para iniciar o aplicativo no modo de desenvolvimento, use o comando expo start:

npx expo start


Ao executar este comando, o terminal exibirá um QR Code. Para visualizar o app:

Conexão: Certifique-se de que o seu computador e o seu smartphone estão conectados à MESMA rede Wi-Fi.

Escaneamento: Abra o app Expo Go no seu telemóvel e escaneie o QR Code exibido no terminal. O aplicativo fará o bundle e carregará o código em tempo real.


## 4. Solução de Problemas Comuns

Se encontrar a mensagem de erro "Something went wrong" ou problemas de carregamento:

Limpar Cache: Pare o servidor (Ctrl + C) e inicie-o novamente com o flag de limpeza:

npx expo start --clear


Reiniciar o Bundler: Se o código não estiver a ser atualizado, pressione r no terminal do Expo para recarregar o aplicativo.

Verificação de Rede: Certifique-se de que a conexão LAN entre os dispositivos está ativa e que não há firewall a bloquear a porta.

🤝 Contribuição


Sinta-se à vontade para abrir issues para bugs ou sugestões, e enviar pull requests com melhorias!


