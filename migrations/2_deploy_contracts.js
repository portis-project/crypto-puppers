var Adoption = artifacts.require('./Adoption.sol');

module.exports = function(deployer) {
  deployer.deploy(Adoption, '0x1349584869A1C7b8dc8AE0e93D8c15F5BB3B4B87'); // ropsten gas relay hub
  // deployer.deploy(Adoption, '0x49a984490a7762B0e5d775f0FfA608899Ebe2ee8'); // xdai gas relay hub
};
