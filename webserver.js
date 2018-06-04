// import { resolve } from 'dns';

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;


const APP = express();

APP.use(cors());
APP.use(express.json());
// app.use(express.static(resolve(_dirname, "client","dist")));

APP.listen(PORT,()=>{
    console.log(`server running at localhost:${PORT}`);
}).on('error', (err)=>{
    console.log('server error:', err.message);
    console.log(`Do you already heave a server running on PORT: ${PORT}?`);
});

