<div align="justify">

# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Artefato | 
|------|------------------------|------------|
|RF-001| A aplicação deve permitir o cadastro de tenistas e gerentes de quadras. | cadastro.html |
|RF-002| A aplicação deve permitir o login de gerentes de quadras e tenistas. | login.html | 
|RF-003| A aplicação deve permitir a inclusão e edição de informações do perfil do usuário. | meuperfil.html meuperfil_gerente.html editarperfil.html editarperfil_gerente.html | 
|RF-004| A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas. | recuper_senha_passo1.html</br> recuperar_senha_passo2.html | 
|RF-005| A aplicação deve fornecer o acompanhamento da previsão do tempo para tenistas. | previsao_do_tempo.html | 
|RF-006| A aplicação deve permitir o tenista filtrar a quadra de acordo com a localização desejada.| quadras_disponiveis.html | 
|RF-007| A aplicação deve aparecer as quadras ativas e inativas do gerente de quadra. | pagina_inicial_gerente.html |
|RF-008| A aplicação deve permitir que o gerente de quadra consiga adicionar quadras. | adicionar_quadras.html |
|RF-009| A aplicação deve permitir que o gerente de quadra ative e desative as quadras. | editar_quadras.html |
|RF-010| A aplicação deve permitir que o gerente de quadra edite informações da quadra. |  editar_quadras.html |
|RF-011| A aplicação deve mostrar as quadras disponiveis para o tenista de acordo com a disponibilidade para região. | quadras_disponiveis.html |
|RF-012| A aplicação deve permitir a disponibilização de contato do local responsável pela quadra cadastrada. | meusagendamentos.html | 
|RF-013| A aplicação deve fornecer detalhes do agendamento realizado pelo tenista. | agendamento_confirmado.html |
|RF-014| A aplicação deve disponibilizar o calendário para o tenista. | marcar_na_minha_agenda.html |
|RF-015| A aplicação deve permitir o cancelamento do agendamento. | meusagendamentos.html |

## Estruturas de dados

### Descrição das estruturas:

### Cadastro usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Nome           | Texto	           | Nome completo do usuário                  | Beltrana Beltranax        |
| Email          | Texto	           | Endereço de e-mail cadastrado	           | exemplo@gmail.com         |
| Endereço	     | Texto             | Endereço completo do usuário	             | Rua das Flores, 123, Centro, Belo Horizonte, Minas Gerais |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |

### Login usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Email          | Texto	           | Endereço de e-mail cadastrado	           | exemplo@gmail.com         |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |

### Escolha onde jogar
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Estado	       | Texto             | Estado do País onde se deseja pesquisar quadras próximas | Minas Gerais |
| Cidade         | Texto             | Cidade onde se deseja pesquisar quadras próximas | Belo Horizonte |
| Bairro         | Texto             | Bairro onde se deseja pesquisar quadras próximas | Savassi |

### Agenda
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Título         | Texto             | Nome do local onde o jogo será realizado  | Parque Villa Lobos        |
| Data           | Texto             | Data do agendamento                       | 25/10/2025                |
| Horario        | Numero (Inteiro)  | Horário do jogo	                         | 14:00                     |
| Endereço	     | Texto             | Endereço completo do local	               | Rua das Palmeiras, 123    |
| Cidade         | Texto             | Cidade do local do jogo	                 | São Paulo                 |
| Contato      |  Número (Inteiro)   | Telefone para contato ao local da quadra	 | +55 (00)1234-5678 |
| Valor Entrada	 | Texto	           | Valor da entrada no local	               | Gratuito                  |
| Status	       | Texto	           | Situação atual do agendamento	           | Agendado                  |

### Adicionar/Editar quadra
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Nome           | Texto             | Nome da quadra                            | Parque Villa Lobos        |
| Preço          | Texto             | Valor da entrada no local	               | Gratuito                  |
| Adicionar/editar foto | Imagem     | Fotos da quadra	                         | imagem.png                |
| Horário	     | Número (Inteiro)    | Horário de funcionamento do local	       | 07:00 - 11:00 15:00 - 19:00 |
| Contato      |  Número (Inteiro)   | Telefone para contato ao local da quadra	 | +55 (00)1234-5678 |
| Endereço	   | Texto	             | Endereço completo do local	            | Rua das Palmeiras, 123, Pinheiros, São Paulo |
| Regras de Uso | Texto	             | DEscrição das regras de uso do local          | Poribido fumar no local, pagamento efetuado um dia antes da data, levar seu próprio equipamento. |
| Status	       | Texto	           | Situação atual do cadastro da quadra na aplicação web. | Ativa, inativa. |

### Edição do perfil do usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Nome           | Texto	           | Nome completo do usuário                  | Beltrana Beltranax        |
| Email          | Texto	           | Endereço de e-mail cadastrado	           | exemplo@gmail.com         |
| Endereço	     | Texto             | Endereço completo do usuário	             | Rua das Flores, 123, Centro, Belo Horizonte, Minas Gerais |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |
| Foto Perfil	   | Imagem	           | Foto de perfil do usuário exibida na página | usuario.png |

## Instruções para acesso e verificação da implementação

As páginas desenvolvidas nesta etapa são páginas estáticas, implementadas em HTML e CSS, e estão organizadas dentro da pasta src/ do projeto.
Cada página representa uma parte funcional da aplicação SocialTennis (por exemplo: escolha do local, agenda, previsão do tempo e perfil do usuário).

### Estrutura de diretórios
src/
adicionar_quadras.html
agendamento_confirmado.html
cadastro.html
editar_quadras.html
editarperfil.html
editarperfil_gerente.html
escolha_onde_jogar.html
index.html
login.html
marcar_na_minha_agenda.html
meuperfil.html
meuperfil_gerente.html
meusagendamentos.html
pagina_inicial_gerente.html
previsao_do_tempo.html
quadras_disponiveis.html
recuperar_senha_passo1.html
recuperar_senha_passo2.html

### Como acessar e verificar a implementação

Baixe ou clone o repositório em seu computador:

git clone https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-projsocialtennis.git](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t4-pmv-si-2025-2-pe1-projsocialtennis

Acesse a pasta src/ e abra qualquer uma das páginas .html em um navegador web (por exemplo, Google Chrome ou Edge).

## Tipagem e Validação dos Campos

| Página                         | Campo                  | Tipo de Input | Regra/Validação                                    |
|--------------------------------|------------------------|---------------|----------------------------------------------------|
| cadastro.html                  | Nome                   | text          | Obrigatório (preenchimento)                        |
| cadastro.html                  | E-mail                 | text          | Obrigatório (preenchimento)                        |
| cadastro.html                  | Senha                  | password      | Obrigatório (preenchimento)                        |
| cadastro.html                  | Perfil                 | select        | Obrigatório (Tenista ou Gerente de quadra)         |
| login.html                     | E-mail                 | text          | Obrigatório (preenchimento)                        |
| login.html                     | Senha                  | password      | Obrigatório (preenchimento)                        |
| recuperar_senha_passo1.html    | E-mail                 | text          | Obrigatório (preenchimento)                        |
| recuperar_senha_passo2.html    | Nova senha             | password      | Obrigatório (preenchimento)                        |
| recuperar_senha_passo2.html    | Confirmar senha        | password      | Obrigatório (preenchimento e deve coincidir)       |
| escolha_onde_jogar.html        | Estado                 | text          | Obrigatório                                        |
| escolha_onde_jogar.html        | Cidade                 | text          | Obrigatório                                        |
| escolha_onde_jogar.html        | Bairro                 | text          | Opcional                                           |
| adicionar_quadras.html         | Nome da quadra         | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Preço                  | text          | Opcional (máscara R$ XX,XX, apenas números)        |
| adicionar_quadras.html         | Horário                | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Contato                | text          | Obrigatório (máscara telefone, apenas números)     |
| adicionar_quadras.html         | Estado                 | select        | Obrigatório (27 estados brasileiros)               |
| adicionar_quadras.html         | Cidade                 | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Bairro                 | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Rua                    | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Número                 | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Complemento            | text          | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Regras de Uso          | textarea      | Obrigatório (preenchimento)                        |
| adicionar_quadras.html         | Status da quadra       | select        | Obrigatório (Ativa ou Inativa)                     |
| editar_quadras.html            | Nome da quadra         | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Preço                  | text          | Opcional (máscara R$ XX,XX, apenas números)        |
| editar_quadras.html            | Horário                | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Contato                | text          | Obrigatório (máscara telefone, apenas números)     |
| editar_quadras.html            | Estado                 | select        | Obrigatório (27 estados brasileiros)               |
| editar_quadras.html            | Cidade                 | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Bairro                 | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Rua                    | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Número                 | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Complemento            | text          | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Regras de Uso          | textarea      | Obrigatório (preenchimento)                        |
| editar_quadras.html            | Status da quadra       | select        | Obrigatório (Ativa ou Inativa)                     |
| editarperfil.html              | Nome                   | text          | Opcional (mantém valor anterior se vazio)          |
| editarperfil.html              | E-mail                 | text          | Opcional (mantém valor anterior se vazio)          |
| editarperfil.html              | Senha                  | password      | Opcional (mantém valor anterior se vazio)          |
| editarperfil_gerente.html      | Nome                   | text          | Opcional (mantém valor anterior se vazio)          |
| editarperfil_gerente.html      | E-mail                 | text          | Opcional (mantém valor anterior se vazio)          |
| editarperfil_gerente.html      | Senha                  | password      | Opcional (mantém valor anterior se vazio)          |
| marcar_na_minha_agenda.html    | Data                   | date          | Obrigatório (não pode ser no passado)              |
| marcar_na_minha_agenda.html    | Horário                | select        | Obrigatório (08:00 às 20:00)                       |
| previsao_do_tempo.html         | Cidade                 | text          | Obrigatório (preenchimento)                        |
| previsao_do_tempo.html         | Estado                 | text          | Opcional                                           |
