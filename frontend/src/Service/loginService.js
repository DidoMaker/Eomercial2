import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


// const login = (Username, Password) => {
//     return axios.post(API_URL+ "login" , {
//         Username,
//         Password,
//       })
//       .then(function (response) {
//         console.log(response)
//         return response.data;
//       })
//       .catch(function (error) {
//         console.log("error");
//       });
//   };
  const login = (Username, Password) => {
    return axios({
      method: 'post',
      url: API_URL+ "login" ,
      data: {
        Username,
        Password,
      }
    });
  };



  const  register = (firstName, lastName, Username, Password, Email, Contact) => {
    return axios.post(API_URL +"register", {
        firstName,
        lastName,
        Username,
        Password,
        Email,
        Contact,
      })
      .then(function (response) {
        console.log(response);
      })
  };


//   const handleLoginAPI = (Username, Password) => {
//     return axios.post('http://localhost:8080/api/auth/login', {Username,Password });
// }

const handleLoginAPI= async (Username, Password) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/login", {Username,Password }, {
          body: JSON.stringify(Username, Password),
          headers: {
            'Content-Type': 'application/json'
          }
    });
    return response.data; // Or handle the response as needed
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Handle the error or throw it to be caught elsewhere
  }
};

//   let checkAuth =  () =>{
//     return new Promise (async(resolve,reject)=>{
//         axios.get('localhost:8080/api/auth/login')
//         .then((response) =>{
//             const data = response => ({
//                 errCode: response.data.errCode,
//                 message: response.data.message,
//                 user: response.data.user
//             });
//         resolve(data)
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     })
// }


const loginService = {
    login,
    register,
    handleLoginAPI: handleLoginAPI
    // checkAuth,
  }
  
  export default loginService;




