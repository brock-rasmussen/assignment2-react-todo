'use strict';

import config from 'config';
import express from 'express';

const app = express();

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));