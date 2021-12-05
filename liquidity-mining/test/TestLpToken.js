const TestLpToken = artifacts.require("LpToken");
let testLpTokenContract;

contract("TestLpToken", function () {
  it("Contract has been deployed.", async () => {
    await TestLpToken.deployed();
    return assert.isTrue(true);
  });

  // beforeEach(async () => {
  //   testLpTokenContract = await TestLpToken.new();
  // });
});