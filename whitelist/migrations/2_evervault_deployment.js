const EverVault = artifacts.require("EverVault")

module.exports = function (deployer) {
  deployer.deploy(EverVault)
}
