import { Router } from 'express';

let router = Router();

import {DisplayHomePage, DisplayBookListPage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

router.get('/list', DisplayBookListPage);

export default router;