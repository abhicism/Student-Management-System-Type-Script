"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
// Import the existing student data.
const studentdata_1 = require("../data/studentdata");
// StudentService contains the business logic
// for managing students.
class StudentService {
    // Store the students inside this service.
    students = studentdata_1.students;
    // Return all students.
    getStudents() {
        return this.students;
    }
}
exports.StudentService = StudentService;
