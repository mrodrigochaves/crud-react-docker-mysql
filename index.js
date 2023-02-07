(async() =>
{
    const database = require('./db');
    const tecnologia = require('./tecnologia');

    await database.sync();

    await tecnologia.create(
        {
            Nome: 'Javascript',
            Cadastro: Date()
        }
    )
    await tecnologia.create(
        {
            Nome: 'Ruby',
            Cadastro: Date()
        }
    )
    await tecnologia.create(
        {
            Nome: 'Python',
            Cadastro: Date()
        }
    )
    
    const alterTecno = await tecnologia.findByPk(2);
    alterTecno.Nome = 'Tecnologia alterada';
    await alterTecno.save();
    

    tecnologia.destroy({ where: { id: 1 }});

    const findTecno = await tecnologia.findByPk(3);
    console.log(findTecno);

    const findAllTecno =await tecnologia.findAllTecno();
    console.log(findTecno);
    
})();