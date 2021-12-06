const root = require('../root/root');
const express = require('express');
const app = express();


const expressGraphQLMiddleware = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
};
module.exports = expressGraphQLMiddleware;