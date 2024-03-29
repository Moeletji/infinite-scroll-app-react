global.fetch = require('node-fetch');
const config = require('universal-config');
const {createApi} = require('unsplash-js');
const express = require('express');

const unsplash = createApi({
    accessKey: config.get('APPLICATION_ID'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, res) => {
    unsplash.photos.list({
        page: req.query.start,
        perPage: req.query.count
    })
    .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));