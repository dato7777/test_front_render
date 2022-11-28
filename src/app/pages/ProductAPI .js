// A mock function to mimic making an async request for data
// async (2)
import axios from "axios";
const URL_ADD = "https://project-jacobs-dreams-backend.onrender.com/addproduct/"
const URL_PRODS = "https://project-jacobs-dreams-backend.onrender.com/getproducts/"
const DEL_PROD = "https://project-jacobs-dreams-backend.onrender.com/deleteproduct/"
const UPD_PROD = "https://project-jacobs-dreams-backend.onrender.com/updateproduct/"

export function addProduct(action) {
  const data = {
    'user':action.userID,
    'prod_desc': action.productDesc,
    'catg_id': action.productCatID,
    'prod_price': action.productPrice,
    'image': action.myImage,
    
}
  action.token=action.token.replace(/"/g, '')
  
  return new Promise((resolve) =>
    axios.post(URL_ADD, data, {
      headers: {
        'Authorization': `Bearer ${action.token}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => resolve({ data: res.data }))
  );
}

export function getProducts(catId) {
  
  return new Promise((resolve) =>
    axios(URL_PRODS + catId).then((res) => resolve({ data: res.data }))
    
  );
}
export function deleteProduct(prodID,token) {
  token=token.replace(/"/g, '')
  return new Promise((resolve) =>
  axios.delete(DEL_PROD+prodID, {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ prodID}))
  );
}
export function updateProduct(prodID,newPrice, token) {
  token=token.replace(/"/g, '')
  return new Promise((resolve) =>
  axios.put(UPD_PROD+prodID, { price:newPrice }, {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ data:res.data}))
  );
}
