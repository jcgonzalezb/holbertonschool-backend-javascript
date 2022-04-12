export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: success,
      });
    } else {
      reject(new Error(''));
    }
  });
}
