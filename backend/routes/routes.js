module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })

    server.get('/games', (require, response) => {
        const sql = 'SELECT pedidos.id_pedido, clientes.nome_cliente, pedidos.qtd, games.nome_game, games.preco, categorias.nome_categoria FROM pedidos JOIN clientes ON pedidos.fk_idcliente = clientes.id_cliente JOIN games ON pedidos.fk_idgames = games.id_game JOIN categorias ON games.fk_idcategoria = categorias.id_categoria';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } //console.log("games: ", res);
            response.json(res)
        })
    })
};
