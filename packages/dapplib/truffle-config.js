require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million prosper install near front skill'; 
let testAccounts = [
"0x1890e8427e76e04dc7529209bb04eadcaf941f407bfb3f1583be74a9b9106ee4",
"0x105c92c84b31cc61036b3f664e6ae9d52cff931de33e05ce634be12f0b158530",
"0x329881d53a950cf2558bcb008fc2a14008cb077f0e9f0e257c9a4f105d70916b",
"0x498a555fbf047609fa432ab9a3cdd055bdf7374c56c69d5527ce1a59eb664390",
"0x241388ac7c3f426ccacc39869b12d7778d4232029625a2931dc62da56a3ea575",
"0x848f89e90259d94cb986a5a0ba8f194d9bdb77eaaac17471d1fa05040e781dea",
"0x8194e827331e35197eac6663b2cad4abff027a348f9b8dc4d3ac033e717fc919",
"0x08034a61f1bfd2a371090e57237b9843a413752c0f5f9cdfd34884c3a9f29257",
"0x99070567c299507b7daa9099f1cb9fd73f7cec2e3a7e05c6c66a561d53cff090",
"0xeecef844e5a2d3514ad3ef2d32edccc5262fbf10d97249b326b66f7b82ec6f0d"
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
            version: '^0.8.0'
        }
    }
};

