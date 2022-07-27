
const router = require('express').Router();

const middlewares = require('./middlewares');
const apiFilmsRouter = require('./api/films');
const apiUsersRouter = require('./api/users');


const apiStatesRouter = require('./api/states');
const apiVulnerabilitysRouter = require('./api/vulnerabilitys');
const apiSourcesRouter = require('./api/sources');


router.use('/films', middlewares.checkToken,apiFilmsRouter);
router.use('/users',apiUsersRouter);


router.use('/states',apiStatesRouter);
router.use('/vulnerabilitys',apiVulnerabilitysRouter);
router.use('/sources',apiSourcesRouter);

module.exports = router;