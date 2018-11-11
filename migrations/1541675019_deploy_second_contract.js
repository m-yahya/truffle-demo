const SecondContract = artifacts.require('SecondContract');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(SecondContract);
};
