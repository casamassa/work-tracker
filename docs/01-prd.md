# PRD - Deep Focus Tracker

## 1. Visão Geral
Um rastreador de tarefas minimalista projetado para desenvolvedores que desejam medir o tempo real gasto em tarefas de "Deep Work" (Trabalho Profundo).

## 2. Objetivos
* Permitir a criação e edição de tarefas.
* Monitorar o tempo gasto em cada tarefa através de um cronômetro.
* Fornecer um resumo diário do tempo total de foco.

## 3. Público-Alvo
Desenvolvedores e profissionais remotos que lutam com distrações.

## 4. Requisitos Funcionais (User Stories)
* **US1:** O usuário deve poder adicionar uma tarefa com título e prioridade.
* **US2:** O usuário deve poder iniciar/pausar o timer de uma tarefa específica.
* **US3:** O sistema deve impedir que duas tarefas tenham o timer ativo simultaneamente.
* **US4:** O usuário deve visualizar o tempo acumulado total do dia.

## 5. Requisitos Não-Funcionais
* **Persistência Local:** Os dados devem ser salvos no navegador (LocalStorage) para simplicidade inicial.
* **Interface:** Design extremamente limpo, modo escuro por padrão.