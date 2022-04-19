/* eslint-disable */
export default function getStudentIdsSum(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let int8View = new Int8Array(buffer);
  int8View[position] = value;

  return int8View;
}
