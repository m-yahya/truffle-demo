pragma solidity ^0.4.22;


contract SecondContract {
  address public owner;
  string public message;
  address public lastCaller;

  event MessageEvent(string message);

  constructor() {
    owner = msg.sender;
    message = 'hello testing';
  }

  modifier onlyOwner() {
    require(msg.sender == owner);

    _;
  }

  function getMessage() public view returns (string) {
    return message;
  }

  function getOwner() public view returns (address) {
    return owner;
  }

  function getLastCaller() public view returns (address) {
    return lastCaller;
  }

  function changeMessage(string _message) onlyOwner {
    message = _message;
    lastCaller = msg.sender;

    emit MessageEvent(message);
  }
}
