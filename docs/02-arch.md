# Architecture & Tech Stack - Deep Focus Tracker

## 1. Stack Tecnológica
* **Framework:** React (Vite)
* **Linguagem:** TypeScript (Strict Mode)
* **Estilização:** Tailwind CSS
* **Gerenciamento de Estado:** Context API (para o timer global)
* **Persistência:** LocalStorage API

## 2. Estrutura de Pastas
A IA deve seguir rigorosamente esta estrutura:
* `/src/components`: Componentes de UI reutilizáveis (botões, inputs).
* `/src/features`: Lógica de negócio dividida por funcionalidades (ex: `/timer`, `/task-list`).
* `/src/hooks`: Custom hooks para lógica de cronômetro e persistência.
* `/src/types`: Definições de interfaces TypeScript.

## 3. Padrões de Desenvolvimento
* **Componentes:** Funcionais com Tailwind inline.
* **Tipagem:** Interfaces devem ser exportadas de arquivos `.ts` na pasta `/types`.
* **Naming:** PascalCase para componentes, camelCase para funções e variáveis.

## 4. Fluxo de Dados
1. O usuário interage com a UI.
2. O `useTimer` hook gerencia o estado do cronômetro.
3. O estado é sincronizado com o `LocalStorage` via um `useEffect` centralizado para garantir persistência após o refresh.