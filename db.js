const Sequelize = require('sequelize');

const sequelizeComponent = new Sequelize('dbcrud', 'admin', 'abcd1234',
{
    dialect: 'mysql', host: 'dbcrud.csiiohobm4ma.us-east-1.rds.amazonaws.com', port: 3306
}
)

module.exports = sequelizeComponent;