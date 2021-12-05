const TestGovernanceToken = artifacts.require("GovernanceToken");
let testGovernanceTokenContract;

contract("TestGovernanceToken", function (accounts) {

  let owner = accounts[0];
  let user1 = accounts[1];

  it("Contract has been deployed.", async () => {
    await TestGovernanceToken.deployed();
    return assert.isTrue(true);
  });

  beforeEach(async () => {
    testGovernanceTokenContract = await TestGovernanceToken.new();
  });

  it('Mint 50 tokens and send to User1.', async () => {
    await testGovernanceTokenContract.mint(user1, 50, {from: owner});
    const balance = await testGovernanceTokenContract.balanceOf(user1);
    assert.equal(balance.toNumber(), 50);
  });
});
