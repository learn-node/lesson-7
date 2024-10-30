const { Router } = require('express');
const service    = require('../services/studentsService');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const items = await service.getStudents();
        res.json(items);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async ({ body }, res) => {
    try {
        const item = await service.createStudent(body.name);
        res.json(item);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
