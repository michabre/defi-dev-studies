// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./UnderlyingToken.sol";
import "./LpToken.sol";
import "./GovernanceToken.sol";

contract LiquidityPool is LpToken {
  mapping(address => uint) public checkpoints;
  UnderlyingToken public underlyingToken;
  GovernanceToken public governanceToken;
  uint constant public REWARD_PER_BLOCK = 1;

  constructor(address _underlyingToken, address _governanceToken) {
    underlyingToken = UnderlyingToken(_underlyingToken);
    governanceToken = GovernanceToken(_governanceToken);
  }
  /**
   * @dev User provides liquidity to the pool. 
   * Investor is rewarded for the amount of tokens. Checkpoints are used as a 
   * reference for the reward.
   *
   * ie. if the investor deposits at block 10 and then withdraws at block 15, 
   * they will get a reward for the duration of 5 blocks.
   * @param {uint} _amount Amount of tokens to deposit
   */
  function deposit(uint _amount) external {
    if(checkpoints[msg.sender] == 0) {
      checkpoints[msg.sender] = block.number;
    }
    _distributeRewards(msg.sender);
    underlyingToken.transferFrom(msg.sender, address(this), _amount);
    _mint(msg.sender, _amount);
  }

  function withdraw(uint _amount) external {
    require(balanceOf(msg.sender) >= _amount, "Not enough LP Tokens.");
    _distributeRewards(msg.sender);
    underlyingToken.transfer(msg.sender, _amount);
    _burn(msg.sender, amount);
  }

  /**
   * @dev Distribute the rewards to the beneficiary.
   */
  function _distributeRewards(address _beneficary) internal {
    uint checkpoint = checkpoints[_beneficary];
    if(block.number - checkpoint > 0) {
      uint distributionAmount = balanceOf(_beneficary) * (block.number - checkpoint) * REWARD_PER_BLOCK;
      governanceToken.mint(_beneficary, distributionAmount);
      checkpoints[_beneficary] = block.number;
    }
  }

}