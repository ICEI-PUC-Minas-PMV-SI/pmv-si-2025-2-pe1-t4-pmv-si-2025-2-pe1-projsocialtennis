# Programação de Funcionalidades

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

|ID    | Descrição do Requisito | Prioridade |
|------|------------------------|------------|
|RF-001| A plataforma deve permitir o cadastro e login de usuários  | Alta |
|RF-002| A aplicação deve permitir recuperação de senha por e-mail | Alta | 
|RF-003| A aplicação deve fornecer um acompanhamento da previsão do tempo | Alta | 
|RF-004| A aplicação deve permitir o usuário filtrar os valores de uso das quadras, inclusive as gratuitas | Alta | 
|RF-005| A aplicação deve permitir a localização de quadras de tênis de acordo com a localização do usuário | Alta | 
|RF-006| A aplicação deve fornecer detalhes do agendamento realizado | Média | 
|RF-007| A aplicação deve disponibilizar o calendário para o usurário | Média | 
|RF-008| A aplicação deve disponibilizar o agendamento do evento para enviar notificações lembrando o usuário do compromisso com antecedência | Média | 
|RF-009| A aplicação deve permitir convidar e inserir outros usuários dentro do evento para que eles também recebam as notificações de lembretes | Média | 
|RF-010| A aplicação deve mostrar as quadras particulares e direcionar o usuário para o contato com o responsável do clube | Média | 
|RF-011| A aplicação deve ter o ícone para acessar a funcionalidade LIBRAS no canto da página | Baixa | 
|RF-012| A aplicação deve enviar notificações de incentivo a praticar tênis periodicamente | Baixa |
|RF-013| A aplicação deve fornecer ao usuário a disponibilidade de fazer o "check-in" no momento que chegar ao local | Baixa |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

