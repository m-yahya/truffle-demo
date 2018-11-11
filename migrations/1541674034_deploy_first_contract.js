const FirstContract = artifacts.require('FirstContract');
const fs = require('fs');
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(FirstContract);
  fs.writeFileSync('test.json', JSON.stringify(FirstContract.abi));
};
