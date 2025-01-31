const axios = require('axios');
const router = require('express').Router();

module.exports = router;

router.get('/:page', async (req, res) => {
    const page = req.params.page;
    const baseUrl = 'http://www.db.chgk.info';
    try {
        const data = await axios.get(baseUrl + `/questions?page=${page}&itemsPerPage=15`);
        res.send(data.data);
    }
    catch (e) {
        res.send(undefined);
    }
});
