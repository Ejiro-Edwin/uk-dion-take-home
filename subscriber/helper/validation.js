const Joi = require("@hapi/joi");
const addSubSchema = (params) => {
    const schema = {
        url: Joi.string().required(),
        email: Joi.string().min(5).max(100).required()
    };
    return Joi.validate(params, schema);
};

module.exports = {
    addSubSchema
};