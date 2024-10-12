# es-call
Gerenciamento de chamados

## Descrição e Objetivo

<p>Projeto visa resolver o problema do gerenciamento de chamados. Este problema ocorre quando se perde o fluxo dos chamados abertos pelos clientes, a ordem em que foram abertos não é respeitada, não tem priorização, ..., basicamente deixando o gestor sem visão do que está ocorrendo com os chamados e reparos da empresa.</p>

<p>O objetivo é facilitar o gerenciamento desses chamados, dando mais visibilidade para o gestor, permitindo-o visualizar quantos chamados foram abertos, quantos estão em aberto/atendimento/concluído, direcionar um chamado para um atendente/técnico, dentre outras ações de administração de chamados</p>

## Equipe
<ul>
  <li>Vinicus Trindade (Fullstack)</li>
  <li>Gustavo Ferreira Dias (Frontend)</li>
  <li>Lucas Campos (Backend)</li>
</ul>

## Tecnologias
<ul>
  <li>JavaScript/TypeScript</li>
  <li>Node</li>
  <li>PostgreSql</li>
  <li>Docker</li>
</ul>

## Backlog do Produto
<ul>
  <li>1 - Como gestor, quero visualizar uma lista de chamados em aberto para acompanhar o status de cada um.</li>
  <li>2 - Como gestor, quero atribuir um técnico a um chamado.</li>
  <li>3 - Como gestor, quero realocar chamados de um técnico para outro, caso o técnico esteja indisponível.</li>
  <li>4 - Como gestor, quero priorizar chamados com base em sua importância, para que eles sejam resolvidos primeiro.</li>
  <li>5 - Como gestor, quero gerar relatórios semanais sobre a quantidade de chamados abertos, fechados e em andamento, para acompanhar a performance da equipe.</li>
  <li>6 - Como gestor, quero poder cancelar um chamado que não precisa mais de atendimento.</li>
  <li>7 - Como técnico, quero ser notificado quando um chamado for atribuído a mim.</li>
  <li>8 - Como técnico, quero poder pausar um chamado quando estiver aguardando informações do cliente ou alguma outra necessidade, para que o gestor saiba o andamento do chamado e as demandas dele.</li>
  <li>9 - Como cliente, quero poder abrir chamados, especificando minhas necessidades.</li>
  <li>10 - Como cliente, quero abrir chamados com anexos (imagens ou documentos), para fornecer mais informações ao técnico. </li>
  <li>11 - Como cliente, quero receber atualizações sobre o status do meu chamado, para que eu saiba quando ele está sendo resolvido.</li>
  <li>12 - Como cliente, quero poder reabrir um chamado concluído se o problema persistir, para que o atendimento continue sem que eu tenha que abrir um novo chamado.</li>
  <li>13 - Como gestor, quero saber do feedback do cliente sobre o atendimento e solução do técnico.</li>

</ul> 

## Backlog do Sprint
<ul>
  <li>História 1: Como gestor, quero visualizar uma lista de chamados em aberto para acompanhar o status de cada um.</li>
    <p>Criar o container do aplicativo no Docker.</p>
    <p>Instalar banco de dados para armazenar chamadas e dados de usuários.</p>
    <p>Instalar node.js.</p>
    <p>Fazer código backend que preencha e atualize tabelas do banco de dados com as entradas dos usuários.</p>
    <p>Implementar a interface visual de preenchimento de dados e visualização de chamados.</p>
    <p>Exibir status de cada chamado.</p>
  
</ul>
