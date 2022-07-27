const Sequelize = require ('sequelize');

const FileModel = require('./models/films');
const UserModel = require('./models/users');

const StateModel = require('./models/states');
const VulnerabilityModel = require('./models/vulnerabilitys');
const SourceModel = require('./models/sources');





const sequelize = new  Sequelize('novatec', 'root', '' , {
    host: 'localhost',
    dialect: 'mysql'
});

const Film = FileModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);


const State = StateModel(sequelize, Sequelize);
const Vulnerability = VulnerabilityModel(sequelize, Sequelize);
const Source = SourceModel(sequelize, Sequelize);




sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas Sincronizadas')
})

module.exports = {
    Film,
    User,

    State,
    Vulnerability,
    Source
}