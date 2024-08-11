import db from '../models/index';
import bcrypt from 'bcryptjs';



let handleUserLogin = (Username, Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(Username);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes: ['Username', 'Password'],
                    where: { Username: Username },
                    raw: true,

                });
                if (user) {
                    //compare Password: dùng cách 1 hay cách 2 đều chạy đúng cả =))
                    // Cách 1: dùng asynchronous (bất đồng bộ)
                    let check = await bcrypt.compare(Password, user.Password);


                    // Cách 2: dùng synchronous  (đồng bộ)
                    // let check = bcrypt.compareSync(Password, user.Password);

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        delete user.Password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong Password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }

            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's Username isn't exist in our system, plz try other Username`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { Username: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        } catch (e) {
            reject(e)
        }
    })
}



module.exports = {
    handleUserLogin: handleUserLogin,
}