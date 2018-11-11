const SecondContract = artifacts.require('SecondContract');
const truffleAssert = require('truffle-assertions');

contract('SecondContract', function(accounts) {

  let instance;
  beforeEach('should set up the contract instance',async() =>{
    instance = await SecondContract.deployed();
  })

  it("should return the message", async() =>{
   const value = await instance.getMessage();
   assert.equal(value, 'hello testing');
  });

  it("should return the owner", async() =>{
   const value = await instance.getOwner();
   assert.equal(value, accounts[0]);
  });

  it('should check the type of the event', async()=>{
    let result = await instance.changeMessage('hello event');
    truffleAssert.eventEmitted(result, 'MessageEvent');
  })

  it('should emit with correct paremeters', async()=>{
    let result = await instance.changeMessage('hello event');
    truffleAssert.eventEmitted(result, 'MessageEvent', (event) =>{
      return event.message == 'hello event';
    });
  })

  it('should check the type of the event', async()=>{
    let result = await instance.changeMessage('hello event');
    truffleAssert.prettyPrintEmittedEvents(result);
  })

  it('only owner should change the message', async()=>{
    await instance.changeMessage('hello', {'from': accounts[0]});
    const value = await instance.getMessage();

    assert.equal(value, 'hello');
  })

  it('should fail', async()=>{
    await truffleAssert.reverts(instance.changeMessage('hello', {'from': accounts[1]}))
  })
});
