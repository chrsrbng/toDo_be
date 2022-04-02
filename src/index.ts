/* eslint-disable no-console */
import createServer from './App';
import { APP, NODE_ENV, PORT } from './shared/configs/app';
import { connection } from './shared/configs/db';
import logger from './shared/utils/Logger';

const app = createServer();

app.listen(PORT, async () => {
  logger.info(`Listening on PORT: ${PORT}, APP: ${APP} NODE_ENV: ${NODE_ENV}`);

  await connection
  .then(() => console.log('Connected to db!'))
  .catch((err) => console.log(err))
});