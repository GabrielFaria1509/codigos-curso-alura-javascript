# 🔢 Jogo do Número Secreto — Alura

Este repositório contém um jogo de adivinhação interativo desenvolvido em **JavaScript** durante o curso prático de lógica de programação da **Alura**. 

O objetivo do jogo é descobrir qual é o número secreto gerado aleatoriamente pelo sistema dentro de um intervalo numérico definido. O jogador recebe dicas em tempo real se o número secreto é maior ou menor do que o palpite enviado.

---

## 🛠️ Tecnologias Utilizadas

Por ser um projeto focado no desenvolvimento de lógica de programação e fundamentos de JavaScript Vanilla, foram utilizadas:
* **HTML5:** Estrutura básica para carregar o script no navegador.
* **JavaScript (ES6):** Motor do jogo, manipulação de variáveis, estruturas de repetição e lógica de condicionais.

---

## 🧠 Conceitos Práticos Aplicados

O desenvolvimento deste código foi fundamental para consolidar os seguintes pilares da programação:
* **Geração de Números Pseudoaleatórios:** Uso das funções matemáticas nativas `Math.random()` e `parseInt()` para gerar um número inteiro dinâmico entre 1 e 5000.
* **Laços de Repetição (`while`):** Controle do fluxo para manter o jogo rodando de forma contínua até que o jogador acerte o palpite (condição de parada com `break`).
* **Estruturas Condicionais Aninhadas (`if / else`):** Lógica responsável por avaliar o cenário do palpite (se foi maior ou menor que o número alvo) e dar o feedback correto ao usuário.
* **Operador Ternário:** Aplicação de sintaxe simplificada de decisão (`tentativas > 1 ? 'tentativas' : 'tentativa'`) para tratar a concordância gramatical do alerta final de vitória de forma elegante.
* **Interação com Usuário:** Uso das funções nativas de caixas de diálogo do navegador: `prompt()` para entrada de dados e `alert()` para exibição de mensagens.

---

## 📂 Estrutura de Arquivos

O projeto está organizado na estrutura padrão de scripts isolados:
```text
├── Códigos/              
│   ├── index.html       # Página base que executa o script no navegador
│   └── main.js          # Arquivo JavaScript contendo toda a lógica do jogo
└── README.md            # Documentação principal do repositório
