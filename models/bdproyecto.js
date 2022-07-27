module.exports = (sequelize, type) => {
    return sequelize.define('issue', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        title: type.STRING,
        text: type.STRING,
        create_date: type.STRING,
        state_id: type.INTEGER,
        vuln_id: type.INTEGER,
        severity_id: type.INTEGER,
        update_date: type.STRING,
        name_repository: type.STRING,
        user_id: type.INTEGER,
        source_id: type.INTEGER,
        reporter_id: type.INTEGER,
        risk: type.STRING,
        external_id: type.STRING,
        initiative_id: type.INTEGER,
        create_timestamp: type.STRING,
        update_timestamp: type.STRING,
        is_dataleak: type.INTEGER,
        pentes_id: type.INTEGER, 
        event_timestamp: type.STRING,
        sla_acomplished: type.INTEGER,
        business_unit_id: type.INTEGER

    })


}


module.exports = (sequelize, type) => {
    return sequelize.define('vulnerability', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        solution: type.STRING,
        summary: type.STRING,
        owasp_link: type.STRING
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('severity', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        sla: type.INTEGER,
        label_id: type.INTEGER,
        sla_extended: type.INTEGER
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('source', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        tool: type.INTEGER
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('state', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        closing: type.INTEGER,
        valid_change_sla: type.INTEGER,
        ext_code: type.INTEGER
    })


}



module.exports = (sequelize, type) => {
    return sequelize.define('approval', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        issue_id: type.STRING,
        transition_id: type.INTEGER,
        status: type.INTEGER
    })


}


module.exports = (sequelize, type) => {
    return sequelize.define('issue_closing', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        close_at: type.is_dataleak,
        issue_id: type.STRING,
        user_id: type.INTEGER,
        contact: type.STRING,
        reason: type.STRING
    })


}


module.exports = (sequelize, type) => {
    return sequelize.define('resolution', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        text: type.STRING,
        create_date: type.is_dataleak,
        dev: type.STRING,
        issue_id: type.STRING
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('trasaction', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        from: type.STRING,
        to: type.INTEGER,
        dev: type.INTEGER,
        needs_aproval: type.INTEGER
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('trasaction_field', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        trasaction_id: type.INTEGER,
        field_id: type.INTEGER,
        required: type.INTEGER,
    })


}

module.exports = (sequelize, type) => {
    return sequelize.define('fields', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        name: type.STRING,
        path: type.STRING
      
    })


}


module.exports = (sequelize, type) => {
    return sequelize.define('label', {
        id: {
            description: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        description: type.STRING,
        protected: type.INTEGER,
        color: type.STRING
      
    })


}