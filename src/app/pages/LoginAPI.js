// A mock function to mimic making an async request for data
// async (2)
import axios from "axios";
const URL = "https://project-jacobs-dreams-backend.onrender.com/token/"
const URLreg="https://project-jacobs-dreams-backend.onrender.com/register/"
const URLregClient="https://project-jacobs-dreams-backend.onrender.com/registerclient/"

export function signIn(cred) {
  
  return new Promise((resolve) =>
    axios.post(URL,cred).then((res) => resolve({ data: res.data }))
      // localStorage.setItem('token', res.data.access)))
    
  );
 
}
// export function signOut() {
  
//   return new Promise((resolve) =>
//     axios.post(URL,{username: "eyal", password: "123"}).then((res) => resolve({ data: res.data }))
//   );
// }
export function signUp(cred) {
  
  return new Promise((resolve) =>
    axios.post(URLreg,cred).then((res) => resolve({ data: res.data })),
    console.log(cred)
  );
}
export function signUpClient(cred) {
  
  return new Promise((resolve) =>
    axios.post(URLregClient,cred).then((res) => resolve({ data: res.data })),
    console.log(cred)
  );
}
