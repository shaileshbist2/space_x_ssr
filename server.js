const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
        const server = express();
        server.get('/data/:query', (req, res) => {
            const actualPage = '/data/:query';
            // const queryParams = { query: req.params.query };
            app.render(req, res, actualPage, req.params.query);
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3001, (err) => {
            if (err) {
                throw err
            } else {
                console.log('> Ready on http://localhost:3001');
            }
        });
    })
    .catch(ex => {
        console.log(ex.stack);
        process.exit(1)
    });
