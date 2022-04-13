import { signUpUser } from "./4-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser, uploadPhoto]).then(result => {
    const firstName = result[0].firstName;
    const lastName = result[1].lastName;
    const fileName = result[2].fileName;
    console.log(result);
  }).catch(error => {
    console.log('');
  });
}
