
import axios from "axios";
const URL_ADD_DET = "https://project-jacobs-dreams-backend.onrender.com/updateusercheckout/"
const URL_ADD_PAY_DET = "https://project-jacobs-dreams-backend.onrender.com/updateuserpaymentdetails/"

export function addUserDetail(token, userID,userBirth, uCity,uStreetNumber, uMobilePhone,uZipCode,uFirstName,uLastName) {
  token=token.replace(/"/g, '')
  return new Promise((resolve) =>
    axios.put(URL_ADD_DET+userID, { userBirth: userBirth, uCity: uCity, uStreetNumber: uStreetNumber, uMobilePhone: uMobilePhone,uZipCode:uZipCode, uFirstName:uFirstName, uLastName:uLastName}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((res) => resolve({ data: res.data }))
  );
}
export function addUserPaymentDetails(token, userID,uNameOnCard, uCreditCard,uCardExp, uCcv3digit) {
  token=token.replace(/"/g, '')
  return new Promise((resolve) =>
    axios.put(URL_ADD_PAY_DET+userID, { uNameOnCard: uNameOnCard, uCreditCard: uCreditCard, uCardExp: uCardExp, uCcv3digit: uCcv3digit}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((res) => resolve({ data: res.data }))
  );
}
