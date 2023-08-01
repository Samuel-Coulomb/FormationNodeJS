#!/usr/bin/env node

const axios = require('axios');

async function main() {

    const currency = process.argv[2] 
            ? process.argv[2].toUpperCase() 
            : 'USD';

    try {

        // let currency = "USD";
        // if (process.argv[2]) {
        //     currency = process.argv[2].toUpperCase();
        // };
        
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

        if (!response.data.bpi[currency]) {
            throw new Error('Devise inconnue');
        }

        const updateAt = response.data.time.updated;
        const rate = response.data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updateAt})`);

    } catch (err) {
        console.log(err);
    }
}

main();
