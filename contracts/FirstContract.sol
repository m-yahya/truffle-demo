pragma solidity ^0.4.22;


contract FirstContract {
  string public name = 'oli office';

  function getName() public view returns (string) {
    return (name);
  }

  function changeName(string _name) public {
    name = _name;
  }
}
