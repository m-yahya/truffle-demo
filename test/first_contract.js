const FirstContract = artifacts.require('FirstContract');

contract('FirstContract', function(accounts) {
  it("should return the name", async() => {
    const instance = await FirstContract.deployed();
    const value = await instance.getName();

    assert.equal(value, 'oli office');
  })

  it('should change the name', async()=>{
    const instance = await FirstContract.deployed();
    await instance.changeName('lea office');
    const value = await instance.getName();

    assert.equal(value, 'lea office');
  })
});
