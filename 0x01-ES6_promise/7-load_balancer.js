export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise.race([chinaDownload, USDownload]).then((value) => {
    console.log(value);
  });
}
