var EducationToken = artifacts.require("./EducationToken.sol");
var EducationTokenSale = artifacts.require("./EducationTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(EducationToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(EducationTokenSale, EducationToken.address, tokenPrice);
  });
};
