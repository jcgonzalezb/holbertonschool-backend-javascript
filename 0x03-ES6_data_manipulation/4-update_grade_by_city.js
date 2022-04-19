/* eslint-disable */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (getListStudents instanceof Array) {
    let studentsbycity = [];
    studentsbycity = getListStudents.filter(getListStudent => getListStudent.location === city);
  }


let studentGrades = studentsbycity.map(student => {
  let newList = {
    "id": studentsbycity.Id,
    "firstName": studentsbycity.firstName,
    "location": studentsbycity.location,
    "grade": newGrades.grade,
  };
