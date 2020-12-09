require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift regret oven huge guess credit future slam'; 
let testAccounts = [
"0xa34fe38c9436020a7488640ba299d87c24c8e17f92672bbc83fed9d5319236b2",
"0xc43d9ce0561044e50dfcfd91d6fc34458dfbd0a4badff3f8965a300f2ea77a2a",
"0x561eaa73f57ca4a86b3b44fb99b016e7319a993ae26c25d3c244599f635d298f",
"0x0f99b0805eda3cc2dee516c606fc0084cd739dee12eafe7ab265991938173c81",
"0x74e30edacfbbdb7bb88fd5defc71dbb53c8c61b61492492d63895e652a2c2e14",
"0xd047884c14ae00e3b91e900542faacdf10f776f875c070fc914b9273ba1b25f8",
"0x211913f6eb6f653cfc9cd806945af810447d1d3295b9b1f3b12b676feef5bfaf",
"0x5ea4d03390fc610345809c21cf18e449c70789656bbd026724dc60f1a4f89fb9",
"0x9f89cef20f76d46e4f09a9c02ac771351230fe21ff42f87bce3e8fd6820f505a",
"0x0d1b5ffb3f3da12b1bf0fb1854eaa19aed18c2b39cd309a148849abb55bbd2a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
