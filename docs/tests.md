<div align="justify">

## Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

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
|Link do vídeo do teste realizado: | https://l1nq.com/pJJIY |

|*Caso de Teste*                                 |*CT02 - Criar conta (Gerente de quadra)*                              |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir o cadastro de tenistas e gerentes de quadras.|
|Link do vídeo do teste realizado: | https://l1nq.com/4wNdw | 

|*Caso de Teste*                                 |*CT03 - Logar conta (Tenista)*                                        |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir o login de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | https://l1nq.com/aiMPB | 

|*Caso de Teste*                                 |*CT04 - Logar conta (Gerente de quadra)*                              |
|---|---
|Requisito Associado | RF-002 - A aplicação deve permitir o login de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | https://sl1nk.com/IYDDt | 

|*Caso de Teste*                                 |*CT05 - Recuperar senha - parte 1 (Tenista/Gerente de quadra)*                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | https://l1nq.com/lrlfX | 

|*Caso de Teste*                                 |*CT06 - Recuperar senha - parte 2 (Tenista/Gerente de quadra)*                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas.|
|Link do vídeo do teste realizado: | https://sl1nk.com/qq62p | 

|*Caso de Teste*                                 |*CT07 - Página inicial: Escolha onde Jogar (Tenista)*                       |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve permitir o tenista filtrar a quadra de acordo com a localização desejada.|
|Link do vídeo do teste realizado: | https://sl1nk.com/ZLekR | 

|*Caso de Teste*                                 |*CT08 - Quadras Disponiveis (Tenista)*                       |
|---|---|
|Requisito Associado | RF-011 - A aplicação deve mostrar as quadras disponiveis para o tenista de acordo com a disponibilidade para região.|
|Link do vídeo do teste realizado:  | https://sl1nk.com/ZLekR | 

|*Caso de Teste*                                 |*CT09 - Página Inicial: Minhas Quadras (Gerente)*                       |
|---|---|
|Requisito Associado | RF-007 - A aplicação deve aparecer as quadras ativas e inativas do gerente de quadra.|
|Link do vídeo do teste realizado: | https://l1nq.com/Vn575 | 

|*Caso de Teste*                                 |*CT10 - Adicionar Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve permitir que o gerente de quadra consiga adicionar e editar quadras.|
|Link do vídeo do teste realizado: | https://sl1nk.com/H5hS6 | 

|*Caso de Teste*                                 |*CT11 - Marcar na minha Agenda (Tenista)*                       |
|---|---|
|Requisito Associado | RF-014 - A aplicação deve disponibilizar o calendário para o tenista.|
|Link do vídeo do teste realizado: | https://sl1nk.com/jTLvV | 

|*Caso de Teste*                                 |*CT12 - Editar Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve permitir que o gerente de quadra edite informações da quadra..|
|Link do vídeo do teste realizado: | https://sl1nk.com/2kZQn | 

|*Caso de Teste*                                 |*CT13 - Agenda (Tenista)*                       |
|---|---|
|Requisito Associado | RF-013 - A aplicação deve fornecer detalhes do agendamento realizado pelo tenista.|
|Link do vídeo do teste realizado: | https://sl1nk.com/Au5x2 | 

|*Caso de Teste*                                 |*CT14 - Excluir Quadra (Gerente)*                       |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve permitir que o gerente de quadra edite informações da quadra.|
|Link do vídeo do teste realizado: | https://l1nq.com/KYCjn | 

|*Caso de Teste*                                 |*CT15 - Cancelar Agendamento (Tenista)*                       |
|---|---|
|Requisito Associado | RF-015 - A aplicação deve permitir o cancelamento do agendamento.|
|Link do vídeo do teste realizado: | https://l1nq.com/KUeFh | 

|*Caso de Teste*                                 |*CT16 - Meu Perfil (Tenista)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | https://l1nq.com/e562v | 

|*Caso de Teste*                                 |*CT17 - Meu Perfil (Gerente)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | https://l1nq.com/zyNwT | 

|*Caso de Teste*                                 |*CT18 - Editar Perfil (Tenista)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | https://l1nq.com/OU4Uq | 

|*Caso de Teste*                                 |*CT19 - Editar Perfil (Gerente)*                       |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir a inclusão e edição de informações do perfil do usuário.|
|Link do vídeo do teste realizado: | https://l1nq.com/rzR3e | 

|*Caso de Teste*                                 |*CT20 - Previsão do tempo (Tenista)*                       |
|---|---|
|Requisito Associado | RF-005 - A aplicação deve fornecer o acompanhamento da previsão do tempo para tenistas.|
|Link do vídeo do teste realizado: | https://l1nq.com/4zRjw | 

|*Caso de Teste*                                 |*CT21 - Sair (Gerente)*                       |
|---|---|
|Requisito Associado | RF-000|
|Link do vídeo do teste realizado: | https://l1nq.com/O92rV | 

|*Caso de Teste*                                 |*CT22 - Sair (Tenista)*                       |
|---|---|
|Requisito Associado | RF-000|
|Link do vídeo do teste realizado: | https://l1nq.com/P3O7P | 

|*Caso de Teste*                                 |*CT23 - Mudar status quadras (Gerente)*                       |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve pemitir que o gerente de quadra ative e desative as quadras.|
|Link do vídeo do teste realizado: | https://sl1nk.com/vEjQ3 | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

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

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


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

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.

</div>
