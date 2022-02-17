# Instruções de uso
- Instalar componentes do backend e frontend (npm i)
- Backend na porta 5000
- Frontend na porta 3000


#  Necessidade do Ambiente devidamente configurado
- Mysql
- Node


# Caracteristicas da base de dados e seus relacionamentos
- Base de Dados: "game-shop"

- Tabela: "categorias"
    id_categoria int()
    nome_categoria|varchar(100)

- Tabela: "clientes"
    id_cliente int()
    nome_cliente|varchar(30)

- Tabela: "games"
    id_game int()
    nome_game|varchar(100)
    preco decimal()
    fk_idcategoria int()

- Tabela: "pedidos"
    id_pedido int()
    fk_idcliente int(11)
    fk_idgames int(11)
    qtd int(11)

- Consulta avançada, exemplo:
    SELECT pedidos.id_pedido, clientes.nome_cliente, pedidos.qtd, games.nome_game, games.preco, categorias.nome_categoria FROM pedidos 
        JOIN clientes ON pedidos.fk_idcliente = clientes.id_cliente 
        JOIN games ON pedidos.fk_idgames = games.id_game 
        JOIN categorias ON games.fk_idcategoria = categorias.id_categoria



# Autor original
- https://github.com/nathyts?tab=repositories