/* eslint-disable */
export default function getStudentIdsSum(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let Uint8View = new Uint8Array(buffer);
  Uint8View[position] = value;

  return Uint8View;
}
