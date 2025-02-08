const axios = require('axios');
const router = require('express').Router();

module.exports = router;

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const baseUrl = 'http://www.db.chgk.info';
    try {
        const data = await axios.get(baseUrl + `/questions/${id}`);
        res.send(data.data);
    } catch {
        res.send(undefined);
    }
});
