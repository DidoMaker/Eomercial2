import userService from '../services/userService';

let handleLoging = async (req, res) => {
    let Username = req.body.Username;
    let Password = req.body.Password;

    if (!Username || !Password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(Username, Password)
    //check Username exist
    //Password nhap vao ko dung
    //return userInfor
    // access_token :JWT json web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}



module.exports = {
    handleLoging: handleLoging
}