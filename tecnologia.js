const Sequelize = require('sequelize');

const database = require('./db');

const Tecnologia = database.define('Tecnologia',
{
    Id:
    {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    Nome:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Lancamento:
    {
        type: Sequelize.DATE,
        allowNull: false,
    }
    
}
)

module.exports = Tecnologia;