// Import the Student interface.
import { Student } from "../models/student";

// Import the existing student data.
import { students } from "../data/studentdata";

// StudentService contains the business logic
// for managing students.
export class StudentService {

    // Store the students inside this service.
    private students: Student[] = students;

    // Return all students.
    getStudents(): Student[] {

        return this.students;

    }

}