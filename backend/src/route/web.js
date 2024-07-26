import express from "express";
import homeControllers from "./../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.gethomePage);
    router.get('/ab', (req,res) => {
        return res.send('Hello Word')
    });
    return app.use("/",router);
}

module.exports = initWebRoutes