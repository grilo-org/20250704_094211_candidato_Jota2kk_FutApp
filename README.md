# 📱 Football Stats App

Um app mobile feito com React Native + Expo que permite selecionar um time e visualizar partidas e estatísticas reais, consumindo a [API-Football](https://www.api-football.com/documentation-v3).

---

## 🚀 Como rodar localmente

1. Clone o repositório
2. npx expo start
3. 🔐 Configurando a API
Este projeto usa a API-Football v3.

1. Crie uma conta em https://www.api-football.com/
2. Pegue sua chave da API (x-apisports-key) em: https://dashboard.api-football.com/profile?access
3. Onde configurar: Substitua a string da chave nas fetch(...) em MatchStats
![image](https://github.com/user-attachments/assets/5f9c2a73-74db-4d3b-953f-d78f1997b370)
![image](https://github.com/user-attachments/assets/f2a3e840-c615-4767-a977-90be63973b8a)

 Estrutura do projeto
  /src
    ├── screens
    │   ├── InputMatch.tsx     # Tela para escolher o time
    │   └── MatchStats.tsx     # Tela que exibe jogos e estatísticas
    ├── components             # Componentes reutilizáveis (inputs, botões etc.)
  App.tsx                      # Configuração do Navigation

Tecnologias usadas:
React Native
Expo
React Navigation
API-Football
TypeScript

Aviso
Se a API retornar 0 jogos ou estatísticas incompletas, é provável que os dados para o time/temporada/liga ainda não estejam disponíveis na API — isso não é um erro do app.
