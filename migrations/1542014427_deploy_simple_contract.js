const SimpleContract = artifacts.require("SimpleContract");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(SimpleContract);
};
