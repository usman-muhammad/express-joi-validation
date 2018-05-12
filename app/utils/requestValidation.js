const Joi = require('joi')

module.exports = {
  userSignin: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
    // query: {
    //   name: Joi.string().required()
    // },
    // body: {
    //     age: Joi.number().required(),
    //     company: Joi.object({
    //         name: Joi.string().required(),
    //         role: Joi.string().required().valid('HR', 'Technical') //enum style validation
    //     }).required()
    // },
    // params: {
    //     id: Joi.number().required()
    // },
    // headers: {
    //     'user-agent': Joi.string().required()
    //   }
  }
}
