import { IValidator } from '../interfaces/Auth';
import { RequireAtLeastOne } from '../interfaces/Common';

import Joi from 'joi';

const ToDosValidation: RequireAtLeastOne<IValidator> = {
  POST: {
    default: Joi.object({
      body: Joi.object({
        userId: Joi.number().required(),
        description: Joi.string().required()
      }).required()
    }),
  },
  GET: {
    default: Joi.object({
      query: Joi.object({
        userId: Joi.number().required(),
      }).required(),
    }),
  },
};

export default ToDosValidation;
