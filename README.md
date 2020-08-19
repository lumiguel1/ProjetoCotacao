# ProjetoCotacao
DESCRIÇÃO: O sistema deve exibir um menu de opções para o usuário escolher entre quais tipos de moedas ele deseja ver:
- Todos
- Dólar Americano
- Dólar Canadense
- Euro
- Iene
- Libra
- Yuan
- Bitcoin
Ao escolher, o sistema deve retornar o Nome, Alta, Baixa e Conversão em reais(R$) da Moeda. Perguntar se o usuário quer repetir a operação com outra moeda, se não, finalizar o sistema.

PROBLEMAS:
- Criar um menu
- Validar a escolha do usuário
- Retornar a conversão
- Criar um loop até o usuário quiser finalizar a operação

MÉTODOS:
- Classe: Cotacao()
- GerarCotacao()

Funções para conversão única 
- DolarAmericado()
- DolarCanadense()
- Euro()
- Iene()
- Libra()
- Yuan()
- Bitcoin()

Cotacao():
- Cria o menu de escolhas

GerarCotacao():
- Valida a escolha do usuário
- Retorna a Cotação
- Cria um loop

API:
- https://docs.awesomeapi.com.br/api-de-moedas