import db from '../models/index';
import register from '../services/register'

let gethomePage = async (req,res) =>{
    try {
        let data = await db.User.findAll();
        return res.render(__dirname + "/views/homepage.ejs",{
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
        
    }
    return res.render(homePage.jsx)
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}


let postCRUD = async (req, res) => {
    let message = await register.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from serer');v

}

let dataUser = async (req, res) => {
    let data = await register.getAlluser();
    return res.send(data);
}



let Login = async (req, res) => {
    let data = req.body
    console.log(data);
    return res.send(data)

}


module.exports = {
    gethomePage: gethomePage,
    Login : Login,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getAboutPage: getAboutPage, 
    dataUser:dataUser,
}