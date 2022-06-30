require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 * DON'T UPLOAD PRIVATE KEY TO GIT BELOW IN ACCOUNTS
 */
 module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/dc8040b7af3a4a5c97c3552c76da1947",
      accounts: [`0x`]
    }
  },
  solidity: "0.8.4",
};