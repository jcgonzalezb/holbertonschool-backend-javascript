/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter(student => student.location === city);

  const newStudents = studentsByCity.map((student) => {
    for (const newGrade of newGrades) {
      student.grade = newGrade.grade;
      return student;
    }

    student.grade = 'N/A';
    return student;
  });
  return newStudents;
}
