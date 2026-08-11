"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import StudentService from the services folder.
const studentservice_1 = require("./services/studentservice");
// Import our logging function.
const logger_1 = require("./utils/logger");
// Create a StudentService object.
const studentService = new studentservice_1.StudentService();
// Get all students.
const students = studentService.getStudents();
// Print a message.
(0, logger_1.log)("Students loaded successfully");
// Display all students.
console.log(students);
