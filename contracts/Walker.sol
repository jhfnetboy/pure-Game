pragma solidity ^0.8.7;
// SPDX-License-Identifier: UNLICENSED
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract Walker is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) public _tokenWalkerNames;
  mapping (uint256 => uint256) public _walkerContributions;
  
  constructor() ERC721("Walker", "WAT") {}
  function _setTokenName(uint256 tokenId, string memory _tokenWalkerName)
    public
    virtual
  {
    _tokenWalkerNames[tokenId] = _tokenWalkerName;
  }

  function tokenWalkerName(uint256 tokenId) 
    public
    view
    virtual
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenWalkerName = _tokenWalkerNames[tokenId];
    return _tokenWalkerName;
  }

  function _setWalkerContribution(uint256 tokenId, uint256  _walkerContribution)
    public
    virtual
  {
    _walkerContributions[tokenId] = _walkerContribution;
  }
  
  function walkerContribution(uint256 tokenId) 
    public
    view
    virtual
    returns (uint256)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    uint256 _walkerContribution = _walkerContributions[tokenId];
    return _walkerContribution;
  }

  function mint(address recipient, string memory name)
    public
    returns (uint256)
  {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenName(newItemId, name);
    return newItemId;
  }
}
// npx hardhat run scripts/Walker-deploy.js --network matic  