module.exports = (app) => {
    const sampleController = app.controllers.sample;
    app.routes.get('/sample', sampleController.getSample);
};