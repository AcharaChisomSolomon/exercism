//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = new Set();
    this.names = new Set();
  }

  roster() {
    return Array
              .from(this.students)
              .toSorted()
              .map(student => student.split(" ")[1])
  }

  add(name, grade) {
    const gradeName = `${grade} ${name}`;
    if (this.names.has(name)) {
      return false;
    }

    this.students.add(gradeName);
    this.names.add(name);
    return true;
  }

  grade(grade) {
    return Array
              .from(this.students)
              .filter(student => student.startsWith(String(grade)))
              .toSorted()
              .map(student => student.split(" ")[1])
  }
}
