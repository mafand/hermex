---
name: plan-backend-issue-from-linear
description: Planeja o desenvolvimento de uma issue de ponta a ponta. Use-a quando o usuário passar um ID ou link ou caminho local de uma issue do Linear que descreve o trabalho a ser feito no backend (endpoints, regras, stack, critérios de aceite)
---

# Planejar issue do backend

Fluxo de desenvolvimento para buscar uma issue no Linear e entregá-la pronta, testada e verificada contra a spec.

## 1. Obter a spec

Para obter uma skill, use o MCP do Linear disponível no projeto.

## 2. Ler a spec

Extrair da spec:
- contexto
- query
- regras
- restrições
- stack e padrões
- critérios de aceite
- verificação

## 3. Planejar

- Cria uma ToDo list com todas as coisas que precisam ser feitas
- Antes de finalizar o planejamento, releia as specs e garanta:
  - Não criar regressão
  - Não criar padrão / design / estilo de código desalinhado com o projeto
  - Procure exemplos parecidos para manter a coesão da base de código

## 4. Implementar

- Respeite a stack e o planejamento realizado

## 5. Testar

- Escrever e executar testes relacionados
- Se algum teste existente quebrar, verifique se foi causado por esse desenvolvimento. Se sim, analise possíveis causas e PERGUNTE antes de resolver - é ideal validar se alguma regra de negócio não prevista precisa ser adicionada.

## 6. Conferir contra a spec do Linear

- Escreva um checklist com os itens definidos como critérios de aceite e valide um por um


