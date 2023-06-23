import Joi from 'joi';

const validate=(body: any[])=>{
    let result = Joi.object({
        title: Joi.string().min(3).max(20).required(),
        date: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required()
    }).validate(body)

    // const invalid = result.error ? true :false
    // return invalid;
    return result;
}

export default validate ;