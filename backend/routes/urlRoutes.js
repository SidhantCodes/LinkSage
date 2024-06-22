const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const URL = require('../models/urlModel');
const dotenv = require('dotenv');

dotenv.config();

router.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const uniqueId = shortid.generate().slice(0, 6);
    const shortId = `miit${uniqueId}`;

    const newUrl = new URL({ originalUrl, shortId });
    await newUrl.save();

    res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
});

router.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;
    const urlEntry = await URL.findOne({ shortId });

    if (!urlEntry) {
        return res.status(404).json({ error: 'URL not found' });
    }

    urlEntry.clicks += 1;
    await urlEntry.save();
    res.redirect(urlEntry.originalUrl);
});

module.exports = router;
