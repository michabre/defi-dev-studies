const TestBeachSideResort = artifacts.require("BeachSideResort");
const TestLamboToken = artifacts.require("LamboToken");

let testBeachSideResortContract;
let lamboToken;
let owner, user1, user2, other;

contract("TestLamboToken", () => {
  it("contract has been deployed", async () => {
    await TestLamboToken.deployed();
    lamboToken = TestLamboToken.address; 
    return assert.isTrue(true);
  });
});

contract("TestBeachSideResort", function (accounts) {

  it("Contract has been deployed.", async () => {
    await TestBeachSideResort.deployed(lamboToken);
    return assert.isTrue(true);
  });

  beforeEach(async () => {
    testBeachSideResortContract = await TestBeachSideResort.new(lamboToken);
    //accounts
    owner = accounts[0];
    user1 = accounts[1];
    user2 = accounts[2];
    other = accounts[3];
  });

  it("The token name should be: Lambo Token", async () => {
    const name = await testBeachSideResortContract.getTokenName();
    return assert.equal(name, "Lambo Token");
  });

  it("The token symbol should be: LAM", async () => {
    const symbol = await testBeachSideResortContract.getTokenSymbol();
    return assert.equal(symbol, "LAM");
  });

  it("The number of decimals should be: 18", async () => {
    const decimals = await testBeachSideResortContract.getTokenDecimals();
    return assert.equal(decimals.toNumber(), 18);
  });

  it("The owner should have 1,000,000 Lambo Tokens.", async () => {
    const balance = await testBeachSideResortContract.getBalanceOf(owner);
    return assert.equal(balance.toNumber(), 1000000);
  });

  it("The current total supply should be 1,000,000.", async () => {
    const supply = await testBeachSideResortContract.getTokenTotalSupply();
    return assert.equal(supply.toNumber(), 1000000);
  });


});

// 63 961 640 5010