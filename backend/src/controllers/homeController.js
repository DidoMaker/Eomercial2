import db from '../models/index';

let gethomePage = async (req,res) =>{
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
        
    }
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}


let postCRUD =  (req,res) =>{
    console.log(req.body);
    return res.send('post crud')
}


module.exports = {
    gethomePage: gethomePage,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getAboutPage: getAboutPage,
}