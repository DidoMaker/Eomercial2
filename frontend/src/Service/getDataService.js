import axios from "axios";

let getInfor =  () =>{
    return new Promise (async(resolve,reject)=>{
        axios.get('http://localhost:8080/api/datauser/')
        .then((response) =>{
            const data = response.data.map((row) => ({
              id: row.id,
              Username: row.Username,
              Password: row.Password,
              firstName: row.firstName,
              lastName: row.lastName,
              Email: row.Email,
              Contact: row.Contact,
              joinDate: row.createdAt,
              updateDate: row.updatedAta,
              role: row.role,
            }));
        resolve(data)
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}
const AuthService = {
   getInfor,
  }
export default AuthService;