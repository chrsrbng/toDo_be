import { IValidator } from '../interfaces/Auth';
import { RequireAtLeastOne } from '../interfaces/Common';

import Joi from 'joi';

const UsersValidations: RequireAtLeastOne<IValidator> = {
  POST: {
    default: Joi.object({
      body: Joi.object({
        ipAddress: Joi.string().required()
      }).required(),
    }),
  },
  GET: {
    default: Joi.object({
      query: Joi.object({
        ipAddress: Joi.string().required(),
      }).required(),
    }),
  },
};

export default UsersValidations;
