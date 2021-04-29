const drugValidation = artifacts.require("drugValidation");

module.exports = async function(deployer) {
	await deployer.deploy(drugValidation)
};