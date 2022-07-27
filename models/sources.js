module.exports = (sequelize, type) => {
    return sequelize.define('source', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        tool: type.INTEGER
    })


}