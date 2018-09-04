
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "drama depend vast delay wisdom almost mask fiscal talent denial donkey kick";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/38920f9f73b84e6194d87dbdc7035dd3")
        },
        network_id: 4
    },
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    }    
  }
};
