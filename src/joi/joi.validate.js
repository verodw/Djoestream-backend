require('joi');
const {ResponseError} = require('../error/response.error');

const validate = (schema,request) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    })
    if(result.error) {
        throw new ResponseError(400, result.error.message)
    } 
    return result.value
}

module.exports = {
    validate
}
