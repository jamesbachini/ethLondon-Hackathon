const { expect } = require("chai");
describe("Unit Test", function () {
  let contract;
  async function deploy() {
    [user1, user2] = await ethers.getSigners();
    const Example = await ethers.getContractFactory("Example");
    contract = await Example.deploy();
  }
  describe("Deployment", async function () {
    it("Should deploy", async function () {
      await deploy();
      expect(await contract.test()).to.eq('hello world');
    });
  });
});