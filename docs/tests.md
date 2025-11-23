<div align="justify">

## Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software


**Caso de Teste** | **CT01 - Criar conta (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço web da aplicação <br> 2) Clique em "Cadastre-se" <br> 2) Preencha todos os campos do formulário e selecione tenista <br> 3) Clique no botão "Criar conta"
**Requisitos associados** | RF-001
**Resultado esperado** | Redirecionar para a página de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Criar conta (Gerente de quadra)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço web da aplicação <br> 2) Clique em "Cadastre-se" <br> 2) Preencha todos os campos do formulário e selecione gerente de quadra <br> 3) Clique no botão "Criar conta"
**Requisitos associados** | RF-001
**Resultado esperado** | Redirecionar para a página de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Logar conta (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço web da aplicação <br> 2) Clique em "Entrar" <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Entrar"
**Requisitos associados** | RF-002
**Resultado esperado** | Redirecionar para a página inicial do tenista logado
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Logar conta (Gerente de quadra)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço web da aplicação <br> 2) Clique em "Entrar" <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Entrar"
**Requisitos associados** | RF-002
**Resultado esperado** | Redirecionar para a página inicial do gerente de quadra logado.
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Recuperar senha - parte 1 (Tenista/Gerente de quadra)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço web do login da aplicação <br> 2) Clique em "Esqueci minha senha" <br> 2) Preencha o campo de e-mail do formulário<br> 3) Clique no botão "Continuar"
**Requisitos associados** | RF-004
**Resultado esperado** | Redirecionar para a segunda página de recuperação de senha.
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Recuperar senha - parte 2 (Tenista/Gerente de quadra)**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique em "Confirmar"
**Requisitos associados** | RF-004
**Resultado esperado** | Senha nova é criada e é redirecionado para a página de login.
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Página inicial: Escolha onde Jogar (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Preenchimento dos campos "Estado" e "Cidade" (Bairro como opcional)<br> 2) Clique em "Escolher"
**Requisitos associados** | RF-006
**Resultado esperado** | Prosseguir para a página com as quadras disponíveis mais próximas da localização selecionada.
**Dados de entrada** | Inserção de dados válidos em "Estado" e "Cidade"
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT08 - Quadras Disponiveis (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Preenchimento dos campos obrigátorios em "Escolha onde Jogar"<br> 2) Selecionar a quadra disponível para localização desejada
**Requisitos associados** | RF-011
**Resultado esperado** | Exibição das quadras disponiveis para localização selecionada 
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT09 - Página Inicial: Minhas Quadras (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Minhas Quadras<br> 3) Exibição da "Página Inicial"
**Requisitos associados** | RF-007
**Resultado esperado** | Apresentação das quadras ativas e desativadas 
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT10 - Adicionar Quadra (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Adicionar Novas Quadras <br> 3) Preenchimento dos campos obrigátorios <br> 3) Selecionar o status atual da quadra<br> 4) Adicionar
**Requisitos associados** | RF-008
**Resultado esperado** | Adicionar quadras para a localização desejada. 
**Dados de entrada** | Campos obrigatórios: Nome, Preço, Horário, Contato, Estado, Cidade, Bairro, Rua e Status ("Regras de uso" como opcional para preenchimento).
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT11 - Marcar na minha Agenda (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar a quadra desejada em quadras disponíveis <br> 2) Selecionar a data de preferência <br> 3) Selecionar o horário de preferência <br> 3) Clique em "Agendar"
**Requisitos associados** | RF-014
**Resultado esperado** | Agendar uma data para utilização da quadra.
**Dados de entrada** | Data e Horário
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT12 - Editar Quadra (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Pagina inicial <br> 2) Clique na quadra desejada <br> 3) Editar as informações desejadas <br> 4) Salvar
**Requisitos associados** | RF-010
**Resultado esperado** | Edite as informações da quadra
**Dados de entrada** | Campos desejados (Nome, Preço, Horário, Contato, Estado, Cidade, Bairro, Rua e Status)
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT13 - Agenda (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Agenda <br> 3) Meus Agendamentos
**Requisitos associados** | RF-013
**Resultado esperado** | Visualizar os agendamentos feitos
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT14 - Excluir Quadra (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Pagina inicial <br> 2) Clique na quadra desejada <br> 3) Excluir
**Requisitos associados** | RF-010
**Resultado esperado** | Excluir quadra selecionada
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT15 - Cancelar Agendamento (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Agenda <br> 3) Meus Agendamentos <br> 4) "Cancelar agendamento"
**Requisitos associados** | RF-15
**Resultado esperado** | Cancelar o agendamento feito
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT16 - Meu Perfil (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Meu Perfil <br> 
**Requisitos associados** | RF-003
**Resultado esperado** | Visualizar "Editar Perfil" e "Minha Agenda"
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT17 - Meu Perfil (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Meu Perfil <br> 
**Requisitos associados** | RF-003
**Resultado esperado** | Visualizar "Editar Perfil" e "Minhas Quadras"
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT18 - Editar Perfil (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Meu Perfil <br> 3) Editar Perfil <br> 4) Salvar Alterações
**Requisitos associados** | RF-003
**Resultado esperado** | Visualizar "Editar Perfil" e "Minhas Quadras"
**Dados de entrada** | Preenchimento de algum dos campos: "Editar Nome", "Editar Email" ou "Redefinir Senha" 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT19 - Editar Perfil (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Meu Perfil <br> 3) Editar Perfil <br> 4) Salvar Alterações
**Requisitos associados** | RF-003
**Resultado esperado** | Visualizar "Editar Perfil" e "Minhas Quadras"
**Dados de entrada** | Preenchimento de algum dos campos: "Editar Nome", "Editar Email" ou "Redefinir Senha" 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT20 - Previsão do tempo (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Previsão do tempo <br> 3) Selecione a localização <br> 4) Clique em "Buscar Previsão"
**Requisitos associados** | RF-005
**Resultado esperado** | Visualizar a previsão do tempo para o dia atual
**Dados de entrada** | Preenchimento obrigátorio do campo "Cidade"
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT21 - Sair (Gerente)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Sair 
**Requisitos associados** | RF-00
**Resultado esperado** | Deslogar da conta
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT22 - Sair (Tenista)**
 :--------------: | ------------
**Procedimento**  | 1) Menu <br> 2) Sair 
**Requisitos associados** | RF-00
**Resultado esperado** | Deslogar da conta
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT23 - Mudar status quadras (Gerente)**
 :--------------: | ------------
**Procedimento**  |1) Pagina inicial - Minhas quadras <br> 2) Clique na quadra desejada <br> 3) Editar as informações desejadas <br> 4) Status <br> 5) Salvar <br>
**Requisitos associados** | RF-009
**Resultado esperado** | Mudar o status da quadra
**Dados de entrada** | Status "ATIVA" ou "INATIVA"
**Resultado obtido** | Sucesso 



## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01 - Criar conta (Tenista)*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir o cadastro de tenistas e gerentes de quadras.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQA9zvIO4wj2S6LGTTaVzRSdAZfnJYxe0Z69V9AEJTbjwA0)|

|*Caso de Teste*                                 |*CT02 - Criar conta (Gerente de quadra)*                              |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir o cadastro de tenistas e gerentes de quadras.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBiFlWwVSCmRIQVIgad-6DdAYVUXYkgbw-thyzbh6g4Q6E) | 

|*Caso de Teste*                                 |*CT03 - Logar conta (Tenista)*                                        |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir o login de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQB807FF1MhDSZX07HaO2tZSAUomHXp4meNG4OmfCVYbnUM)| 

|*Caso de Teste*                                 |*CT04 - Logar conta (Gerente de quadra)*                              |
|---|---
|Requisito Associado | RF-002 - A aplicação deve permitir o login de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQC8H0bqFPMhSLclPxAwvFxfASiVqzfP_fzJJCtAI9AwnWY) | 

|*Caso de Teste*                                 |*CT05 - Recuperar senha - parte 1 (Tenista/Gerente de quadra)*                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBpJhxRZMWxR7Q_63pO-KlTAZaEhLdjRoAWC8JKcL9UGLI) | 

|*Caso de Teste*                                 |*CT06 - Recuperar senha - parte 2 (Tenista/Gerente de quadra)*                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQDZBnL6gt2qSbeh6BEVth2XAb0d-M3yo-hNM1pVRtMRP2E) | 

|*Caso de Teste*                                 |*CT07 - Página inicial: Escolha onde Jogar (Tenista)*                       |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve permitir o tenista filtrar a quadra de acordo com a localização desejada.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQCAMcMg6Xz0TqZgDNnNnrYeAarzTnxbhxnDUwepV45Ddl8) | 

|*Caso de Teste*                                 |*CT08 - Quadras Disponiveis (Tenista)*                       |
|---|---|
|Requisito Associado | RF-011 - A aplicação deve mostrar as quadras disponiveis para o tenista de acordo com a disponibilidade para região.|
|Link do vídeo do teste realizado:  | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQCAMcMg6Xz0TqZgDNnNnrYeAarzTnxbhxnDUwepV45Ddl8) | 

|*Caso de Teste*                                 |*CT09 - Página Inicial: Minhas Quadras (Gerente)*                       |
|---|---|
|Requisito Associado | RF-007 - A aplicação deve aparecer as quadras ativas e inativas do gerente de quadra.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQDn-HnGkVfVT7RacPwcvHwhAXK1Oinnb2yEWgf7mDLorrw) | 

|*Caso de Teste*                                 |*CT10 - Adicionar Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve permitir que o gerente de quadra consiga adicionar e editar quadras.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQAo3lyC2gRESaQ0a3n7ogG7AWEbOVvE2QGQD4XRoIw6bAg) | 

|*Caso de Teste*                                 |*CT11 - Marcar na minha Agenda (Tenista)*                       |
|---|---|
|Requisito Associado | RF-014 - A aplicação deve disponibilizar o calendário para o tenista.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQDUNnFobn1ER4x0XqRNgeorAYQDCHgBJ3b8KwuE4pcS490) | 

|*Caso de Teste*                                 |*CT12 - Editar Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve permitir que o gerente de quadra edite informações da quadra..|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQAP6bSOTPEdR5CR9YmW-L9UAbfpAlZIUmS4PqSmkfOC_vw) | 

|*Caso de Teste*                                 |*CT13 - Agenda (Tenista)*                       |
|---|---|
|Requisito Associado | RF-013 - A aplicação deve fornecer detalhes do agendamento realizado pelo tenista.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQB56cqnaEFRSa1JZp1R6OQfAeTvAtRkS3u5l073xn_VV8A) | 

|*Caso de Teste*                                 |*CT14 - Excluir Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve permitir que o gerente de quadra edite informações da quadra.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQDXtkqre9T8SLoLY9qVGV3zAQiKX6kqoA65uHn19AN7C9g) | 

|*Caso de Teste*                                 |*CT15 - Cancelar Agendamento (Tenista)*                       |
|---|---|
|Requisito Associado | RF-015 - A aplicação deve permitir o cancelamento do agendamento.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQC6ifnXTmuaSJcr7XHfy_GqAbktyZ90HeL9Iyj54wbLVjE) | 

|*Caso de Teste*                                 |*CT16 - Meu Perfil (Tenista)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBrEy_67PkjRLDn1fa5v-FXAQCvSlSooxV7PQFaksGHQqY) | 

|*Caso de Teste*                                 |*CT17 - Meu Perfil (Gerente)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQC84XwR7BbhS7WDBx_fJyXrARAp6QHbp6BJBLPFgAEya3s) | 

|*Caso de Teste*                                 |*CT18 - Editar Perfil (Tenista)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQD4L49r8UQ3SqfzUeUndZdKAWl6rXFiqMDkFj7c-ktsoHc) | 

|*Caso de Teste*                                 |*CT19 - Editar Perfil (Gerente)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBrLVqQEX-CRoQy2eZ-Puy3AYyMitkhHY4jxLDxTLO-eaU) | 

|*Caso de Teste*                                 |*CT20 - Previsão do tempo (Tenista)*                       |
|---|---|
|Requisito Associado | RF-005 - A aplicação deve fornecer o acompanhamento da previsão do tempo para tenistas.|
|Link do vídeo do teste realizado: |  [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQApQfMGMvEkSKozKcKkE6UwAVYTQK8UbFIYz-CQpQi5y9Q) | 

|*Caso de Teste*                                 |*CT21 - Sair (Gerente)*                       |
|---|---|
|Requisito Associado | RF-000|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQDzzYvHHEALRLlBM46viycFAXlpir6lRDPRneKCx_tjEoA)| 

|*Caso de Teste*                                 |*CT22 - Sair (Tenista)*                       |
|---|---|
|Requisito Associado | RF-000|
|Link do vídeo do teste realizado: | [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQAjYMD7jz1hQbnVIumhlEc9AY9-5v03_NO1Vq7jMWEjYLk) | 

|*Caso de Teste*                                 |*CT23 - Mudar status quadras (Gerente)*                       |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve pemitir que o gerente de quadra ative e desative as quadras.|
|Link do vídeo do teste realizado: |  [clique aqui](https://sgapucminasbr-my.sharepoint.com/personal/1629415_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBhM_kSrUOxToazTywXTXEMARVHoaInNOUYXvsPncZ9_wk) | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

### Funcionalidades Avaliadas, Grupo de Usuários e Ferramentas

**Funcionalidades avaliadas:**
  * Cadastro e login de utilizadores (RF-001 - RF-002).
  * Inclusão de novas quadras por parte do Gerente de quadra (RF-008).
  * Ativação e Inativação de quadra por parte do Gerente de quadra (RF-009).
  * Localização de quadra mais próxima sendo tenista (RF-011).
  * Intuitividade e design geral da plataforma.

* **Grupo de usuários:** O grupo foi composto por 2 participantes
  
**Ferramentas utilizadas:**
  * **VS Code:** Para executar a programação do site.
  * **Cronômetro online:** Para verificar o tempo de conclusão de cada cenário.
  * **Excel:** Para registro dos dados durante as avaliações.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | O tenista deve realizar o cadastro pela primeira vez dentro do site |
| 2             | O gerente de quadra deve adicionar uma quadra pela primeira vez |
| 3             | O tenista deve realizar um agendamento de quadra |
| 4             | O gerente de quadra desativar a quadra para uso |



## Registro de Testes de Usabilidade

Cenário 1: Você é um tenista e deve realizar o cadastro pela primeira vez dentro do site.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 01:16 (76 segundos)             |
| 2       | SIM             | 4                    | 00:37 segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 4                    | 56,5 segundos                   |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 00:19 segundos |

    Comentários dos usuários: 
    1) Login deveria estar na página inicial ao invés de procurar no menu.
    2) Apenas o sistema de segurança de senha deixou a desejar (usando a senha 123).

Cenário 2: Você é um gerente de quadra e quer adicionar pela primeira vez a sua quadra dentro do site.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 02:32 (152 segundos)            |
| 2       | SIM             | 4                    | 01:29 (89 segundos)             |
|  |  |  |  |
| **Média**     |   100%    |   3.5                | 120.5 segundos                  |        
| **Tempo para conclusão pelo especialista** | SIM | 4 | 01:10 (70 segundos) |

    Comentários dos usuários: 
    1) Usuário gostaria que já tivesse os preços definidos.
    2) Conseguiu criar uma quadra com um nome que já existia, uma recomendação é se tivesse um bloqueio de nome já utilizada por um outro gerente por exemplo 

Cenário 3: Você é um tenista e quer realizar um agendamento de quadra mais próximo a você.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 01:58 (118 segundos)            |
| 2       | SIM             | 5                    | 00:40 segundos                  |
|  |  |  |  |
| **Média**     |   100%    |        4.5           |     79 segundos                 |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 23 segundos |


    Comentários dos usuários: 
    1) O Calendário deveria ser mais simples visualmente falando ou digitar de forma manual. Outro detalhe é na parte do "Estado". Sinalizar que deve colocar apenas as inicias e não o nome inteiro do estado.
    2) Prático e rápido

Cenário 4: Você é um gerente de quadra e quer desativar a sua quadra dentro do site.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 00:21 segundos                  |
| 2       | SIM             | 5                    | 00:19 segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 5                    | 20 segundos                     |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 00:08 segundos |
    
    Comentários dos usuários: 
    1) Rápido e intuitivo. Muito bom!
    2) Prático
## Avaliação dos Testes de Usabilidade

A execução do plano de testes de software, cobrindo 3 casos de teste principais, permitiu uma análise abrangente da implementação dos requisitos funcionais do sistema SocialTennis. Os resultados obtidos foram majoritariamente positivos, validando o trabalho desenvolvido, mas também revelaram oportunidades claras para aprimoramento em futuras iterações.

Os testes de software demonstraram que o SocialTennis é uma aplicação funcional e que atende a todos os requisitos essenciais propostos. Os pontos fortes residem na implementação bem-sucedida dos fluxos de gerente de quadra e tenista. Os pontos fracos identificados não são falhas nas funcionalidades existentes, mas sim oportunidades de evolução arquitetural e de processo que fornecem um roteiro claro e profissional para os próximos passos do projeto.

A análise dos cenários dos avaliadores (1 e 2) revela insights importantes para a evolução da plataforma:

1) **(Cenário 1):** Um insight importante é a parte de login e cadastre-se estar dentro do menu e não na tela da página "home". Foi levantando esse ponto por parte do avaliador e uma implementação do botão login e cadastro dentro da página home tornaria o site mais eficiente e agradavél para o usuário.
      Outro levantamento foi a questão do sistema de segurança da senha, a ausência de incluir senhas fortes e caracteres especiais ficou faltando para um sistema maior de segurança. 

2) **(Cenário 2):** Tivemos dois feedbacks e um ponto principal visto pelo avaliador é a possibilidade de criar quadras com nomes existente dentro já do próprio site. Isso fez com que ele tivesse a reflexão de que o gerente de quadra não saberia diferenciar a sua própria quadra com um nome similiar criada por um outro gerente de quadra.

3) **(Cenário 3):** Um ponto levantando nesse cenário foi a parte de preenchimento na parte de "Estado", onde não era informado ao tenista que deveria preencher apenas as siglas. Isso deveria ser sinalizado por parte do sistema ou ter algum bloqueio que influenciaria o tenista preenchesse apenas as siglas do estado Ex: SP, MG...

Conclui-se que a aplicação tem sucesso em usabilidade, com uma base sólida e bem recebida pelos perfis de usuário. As recomendações para futuras versões são claras: Senhas com caracteres,  Login e cadastre-se na página "home", Bloqueio de criação de nomes de quadras já existentes e ter uma sinalização no preenchimento do "Estado" com siglas. 
