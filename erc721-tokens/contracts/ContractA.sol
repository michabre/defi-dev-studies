pragma solidity ^0.7.3;

import '@openzepplin/contracts/token/ERC721/ERC721Holder.sol'; // be able to receieve erc721 tokens
import '@openzepplin/contracts/token/ERC721/IERC721.sol'; // for interacting with erc721 tokens


contract ContractB is ERC721Holder {
function deposit(uint tokenId) external;
function withdraw(uint tokenId) external;
}

contract ContractA is ERC721Holder {
  IERC721 public token;
  ContractB public contractB;

  constructor(address _token, address _contractB) {
    token = IERC721(token); // define pointer
    contractB = ContractB(_contractB);
  }

  // receive the token
  function deposit(uint tokenId) external {
    // deposit token into the contract
    token.safeTransferFrom(msg.sender, address(this), tokenId);
    token.approve(address(contractB), tokenId);  
    contractB.deposit(tokenId);
  }

  function withdraw(uint tokenId) external {
    contractB.withdraw(tokenId);
    token.safeTransferFrom(address(this), msg.sender, tokenId);
  }
}

