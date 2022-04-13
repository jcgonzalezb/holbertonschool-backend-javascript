/* eslint-disable */
import { signUpUser } from "./4-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signedUser = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    value: data,
  }));

  const uploadedPhoto = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  return [signedUser, uploadedPhoto];
}
