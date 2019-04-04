import express from 'express';
import config from './config';
import index from '../server/routes/index.route';

const app = express();

app.get('/', (req, res) => res.send(`server started on port ${config.port}`));

app.use('/api', index);

app.use((req, res) => {
  res.status(404).send('Sorry can\'t find that!');
});

export default app;
