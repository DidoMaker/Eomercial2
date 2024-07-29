import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);



let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassWordFromBcrypt = await hashUserPassword(data.Password)
            await db.User.create({
                Username: data.Username,
                Password: hashPassWordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                Email: data.Email,
                Contact: data.Contact,
            })
            resolve('create new user succeed');

        } catch (e) {
            reject(e);
        }
    })

}
let hashUserPassword = (Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            //lưu ý, truyền vào đúng password cần hash
            // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
            let hashPassWord = await bcrypt.hashSync(Password, salt);

            resolve(hashPassWord);
        } catch (e) {
            reject(e);
        }

    })
}

let getAlluser = () => {
    return new Promise(async(resolve, reject) =>{
        try {
            let User  = db.User.findAll({
                raw : true,
            });
            resolve(User)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAlluser:getAlluser,
}