/* eslint-disable */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    let numbers = [];
    for (let { id: n } of students) {
      numbers.push(n);
    }
    const sum = numbers.reduce((total, amount) => total + amount);
    return sum;
  }
}
