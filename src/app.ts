// Import StudentService from the services folder.
import { StudentService } from "./services/studentservice";

// Import our logging function.
import { log } from "./utils/logger";

// Create a StudentService object.
const studentService = new StudentService();

// Get all students.
const students = studentService.getStudents();

// Print a message.
log("Students loaded successfully");

// Display all students.
console.log(students);