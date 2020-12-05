import express from 'express';

import routes from './routes';

const app = express();

app.listen(4444, () => {
  console.log('Server started at por 4444');
});
