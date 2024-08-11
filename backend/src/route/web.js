import express from "express";
import homeControllers from "./../controllers/homeController";
import cors from "cors";
import userController from './../controllers/userController'



const router = express();
router.use(cors());
router.use(express.json());

let initWebRoutes = (app) => {
    router.get('/', homeControllers.gethomePage);
    router.get('./about',homeControllers.getAboutPage);
    router.get('./crud',homeControllers.getCRUD);
    router.post('/api/login/', homeControllers.Login);
    router.post('/api/register', homeControllers.postCRUD);
    router.get('/api/datauser',homeControllers.dataUser);


    router.post('/api/testlog', userController.handleLoging)

    return app.use("/",router);
}

module.exports = initWebRoutes