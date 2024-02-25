const axios = require('axios');
    const cryptocompare = require('cryptocompare');

    async function convertCryptoToRupiah(crypto, amount) {
        const price = await cryptocompare.price(crypto, 'IDR');
        return price['IDR'] * amount;
    }

    convertCryptoToRupiah('BTC', 1)
        .then(result => console.log(result))
        .catch(error => console.error(error));