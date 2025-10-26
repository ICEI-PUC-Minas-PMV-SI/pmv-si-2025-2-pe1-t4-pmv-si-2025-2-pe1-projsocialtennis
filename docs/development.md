<div align="justify">
# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Artefato | 
|------|------------------------|------------|
|RF-001| A aplicação deve permitir o cadastro de tenistas. | cadastro.html |
|RF-002| A aplicação deve permitir o login de gerentes de quadras e tenistas. | login.html | 
|RF-003| A aplicação deve permitir a inclusão e edição de informações do perfil do usuário. | meuperfil.html</br> alterarsalvo.html | 
|RF-004| A aplicação deve permitir recuperação de senha de gerentes de quadras e tenistas. | recuper_senha_passo1.html</br> recuperar_senha_passo2.html | 
|RF-005| A aplicação deve fornecer um acompanhamento da previsão do tempo para tenistas. | previsaotempo.html | 
|RF-006| A aplicação deve permitir o tenista filtrar os valores de uso das quadras, inclusive as gratuitas.| quadras_disponiveis.html | 
|RF-007| A aplicação deve permitir a localização de quadras de tênis de acordo com a localização fornecida pelo tenista. | escolha_onde_jogar.html |
|RF-008| A aplicação deve permitir que os gerentes de quadras cadastrem novas quadras e edite as já existentes, inative ou até mesmo exclua. | adicionar_quadras.html</br> editar_quadras.html |
|RF-009| A aplicação deve permitir a disponibilização de contato do local responsável pela quadra cadastrada. | adicionar_quadra.html |
|RF-010| A aplicação deve fornecer detalhes do agendamento realizado pelo tenista. | agendamento_confirmado.html</br> meusagendamentos.html |
|RF-011| A aplicação deve disponibilizar o calendário para o tenista. | marcar_na_minha_agenda.html |
|RF-012| A aplicação deve mostrar as imagens das quadras contendo descrições abaixo delas. | quadras_disponiveis.html | 
|RF-013| A aplicação deve ter descrições nas imagens (atributos alt) para pessoas com deficiência visual navegar. | a ser implementado |

## Estruturas de dados

### Descrição das estruturas:

### Cadastro usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Nome           | Texto	           | Nome completo do usuário                  | Luana Cristina            |
| Email          | Texto	           | Endereço de e-mail cadastrado	           | luana@gmail.com           |
| Endereço	     | Texto             | Endereço completo do usuário	             | Rua das Flores, 123, Centro, Belo Horizonte, Minas Gerais |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |

### Login usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Email          | Texto	           | Endereço de e-mail cadastrado	           | luana@gmail.com           |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |

### Escolha onde jogar
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**               |
|:--------------:|-------------------|-------------------------------------------|---------------------------|
| Estado	       | Texto             | Estado do País onde se deseja pesquisar quadras próximas | Minas 1Gerais |
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
| Nome           | Texto	           | Nome completo do usuário                  | Luana Cristina            |
| Email          | Texto	           | Endereço de e-mail cadastrado	           | luana@gmail.com           |
| Endereço	     | Texto             | Endereço completo do usuário	             | Rua das Flores, 123, Centro, Belo Horizonte, Minas Gerais |
| Senha          | Texto             | Senha de acesso do usuário (armazenada de forma segura no sistema) | ******** |
| Foto Perfil	   | Imagem	           | Foto de perfil do usuário exibida na página | usuario.png |

## Instruções para acesso e verificação da implementação

As páginas desenvolvidas nesta etapa são páginas estáticas, implementadas em HTML e CSS, e estão organizadas dentro da pasta src/ do projeto.
Cada página representa uma parte funcional da aplicação SocialTennis (por exemplo: escolha do local, agenda, previsão do tempo e perfil do usuário).

### Estrutura de diretórios
src/
- adicionar_quadras.html
- agendamento_confirmado.html
- alterarsalvo.html
- cadastro.html
- editar_quadras.html
- editarperfil.html
- escolha_onde_jogar.html
- home.html
- index.html
- login.html
- marcar_na_minha_agenda.html
- meuperfil.html
- meusagendamentos.html
- pagina_inicial_gerente.html
- quadras_disponiveis.html
- recuperar_senha_passo1.html
- recuperar_senha_passo2.html
- styles.css
- stylesperfil.css
- forms.css
- home.css
- check.png
- logo-oficial.png
- usuario.png

### Como acessar e verificar a implementação

Baixe ou clone o repositório em seu computador:

git clone https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-projsocialtennis.git](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t4-pmv-si-2025-2-pe1-projsocialtennis

Acesse a pasta src/ e abra qualquer uma das páginas .html em um navegador web (por exemplo, Google Chrome ou Edge).

### Para verificar a estrutura e os dados representados:

Clique com o botão direito na página e selecione “Ver código-fonte da página”.

Localize as seções principais de cada página (header, main, footer).

Observe os elementos HTML que representam os dados descritos na seção “Estruturas de dados” deste documento.

Caso deseje inspecionar o layout e a organização visual:

Utilize as ferramentas de desenvolvedor (botão direito do mouse ou pressione F12 → guia Elements ou Inspecionar).

É possível visualizar as classes CSS aplicadas a cada componente e confirmar o posicionamento, imagens e textos exibidos.

Observação: nesta etapa, as páginas ainda não possuem funcionalidade dinâmica (JavaScript ou banco de dados).
Os dados apresentados nas páginas são exemplos estáticos que seguem o modelo definido nas estruturas de dados.




## Explicação padrão da página

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |
</div>
