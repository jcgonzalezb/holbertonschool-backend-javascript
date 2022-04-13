/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signedUser = await signUpUser(firstName, lastName).then((info) => ({
    status: 'fulfilled',
    value: info,
  }));

  const uploadedPhoto = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  return [signedUser, uploadedPhoto];
}
