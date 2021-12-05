const TestUnderlyingToken = artifacts.require("UnderlyingToken");
let testUnderlyingTokenContract;
let owner, user_1;

contract("TestUnderlyingToken", function (accounts) {
  it("Contract has been deployed.", async () => {
    await TestUnderlyingToken.deployed();
    return assert.isTrue(true);
  });

  beforeEach(async () => {
    testUnderlyingTokenContract = await TestUnderlyingToken.new();
    owner = accounts[0];
    user_1 = accounts[1];
  });

  describe("The Faucet: Development Tool", () => {
    it("User 1 Gets 20 tokens from the Faucet", async() => {
      await testUnderlyingTokenContract.faucet(user_1, 20);
      let balance = await testUnderlyingTokenContract.balanceOf(user_1);
      return assert.equal(balance.toNumber(), 20);
    });
  });
});