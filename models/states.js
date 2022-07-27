module.exports = (sequelize, type) => {
    return sequelize.define('state', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        
        description: type.STRING,
        closing: type.INTEGER,
        valid_change_sla: type.INTEGER,
        ext_code: type.INTEGER

    })


}