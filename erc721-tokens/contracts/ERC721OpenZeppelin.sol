pragma solidity ^0.7.3;

import '@openzepplin/contracts/token/ERC721/ERC721.sol';

contract ERC721OpenZepplin1 is ERC721 {
  constructor() ERC721('Token Name', 'Token Symbol') {}
}

contract ERC721OpenZepplin2 is ERC721 {
  constructor() ERC721('Token Name', 'Token Symbol') {
    _safeMint(msg.sender, 0); // mints 1 token
  }
}

contract ERC721OpenZepplin3 is ERC721 {
  address public admin;

  constructor() ERC721('Token Name', 'Token Symbol') {
    admin = msg.sender;
  }

  function mint(address to, uint tokenId) external {
    require(msg.sender == admin, 'only admin');
    _safeMint(to, tokenId);
  }
}

// Includes Faucet for Development
contract ERC721OpenZepplin4 is ERC721 {

  constructor() ERC721('Token Name', 'Token Symbol') {}

  function faucet(address to, uint tokenId) external {
    _safeMint(to, tokenId);
  }
}