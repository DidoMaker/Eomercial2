import express from "express";
import homeControllers from "./../controllers/homeController";
import cors from "cors";



const router = express();
router.use(cors());
router.use(express.json());

let initWebRoutes = (app) => {
    router.get('/', homeControllers.gethomePage);
    router.get('./about',homeControllers.getAboutPage);
    router.get('./crud',homeControllers.getCRUD);

    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/get-crud',homeControllers.displaygetCRUD);

    return app.use("/",router);
}

module.exports = initWebRoutes