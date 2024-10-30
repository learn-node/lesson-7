const pool = require("../db");

module.exports = {
    getAllStudents: async () => {
        const { rows } = await pool.query("SELECT * FROM Students");

        return rows || [];
    },
    createStudent: async (name) => {
        const { rows } = await pool.query("INSERT INTO Students (name) VALUES ($1)", [name]);

        console.log('target: rows', rows);

        return rows[0];
    }
};
