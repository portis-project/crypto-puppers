var Adoption = artifacts.require('./Adoption.sol');

module.exports = function(deployer) {
  deployer.deploy(Adoption, '0x537f27a04470242ff6b2c3ad247a05248d0d27ce'); // rinkeby gas relay hub
};
