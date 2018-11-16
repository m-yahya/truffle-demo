pragma solidity ^0.4.22;

contract SimpleContract {
  string public name;
  address private owner;

  constructor() {
    name = 'my name';
    owner = msg.sender;
  }

  event NameEvent(string evPram);

  modifier onlyOwner() {
    require(msg.sender == owner);

    _;
  }

  function getName() public view returns (string) {
    return (name);
  }

  function changeName(string _name) public onlyOwner {
    name = _name;
    emit NameEvent(name);
  }
}
