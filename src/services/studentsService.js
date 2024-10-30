const StudentsModel = require('../models/studentsModel');

module.exports = {
  getStudents: async () => await StudentsModel.getAllStudents(),
  createStudent: async (name) => await StudentsModel.createStudent(name)
};
