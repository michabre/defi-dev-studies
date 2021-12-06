const TestBeachSideResort = artifacts.require("BeachSideResort");
const TestLamboToken = artifacts.require("LamboToken");

let testBeachSideResortContract;
let lamboToken;

contract("TestLamboToken", () => {
  it("contract has been deployed", async () => {
    await TestLamboToken.deployed();
    lamboToken = TestLamboToken.address; 
    return assert.isTrue(true);
  });
});

contract("TestBeachSideResort", function (/* accounts */) {

  it("Contract has been deployed.", async () => {
    await TestBeachSideResort.deployed(lamboToken);
    return assert.isTrue(true);
  });

  beforeEach(async () => {
    testBeachSideResortContract = await TestBeachSideResort.new(lamboToken);
  });
});
