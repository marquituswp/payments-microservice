import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  STRIPE_SECRET: string;
  STRIPE_SECRET_WEBHOOK: string;
  SUCCESS_URL: string;
  CANCEL_URL: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required().default(3000),
    STRIPE_SECRET: joi.string().required(),
    STRIPE_SECRET_WEBHOOK: joi.string().required(),
    SUCCESS_URL: joi.string().uri().required(),
    CANCEL_URL: joi.string().uri().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  stripeSecret: envVars.STRIPE_SECRET,
  stripeWebhookSecret: envVars.STRIPE_SECRET_WEBHOOK,
  successUrl: envVars.SUCCESS_URL,
  cancelUrl: envVars.CANCEL_URL,
};
