'use strict';

describe('Service: Commservice', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var Commservice;
  beforeEach(inject(function (_Commservice_) {
    Commservice = _Commservice_;
  }));

  it('should do something', function () {
    expect(!!Commservice).toBe(true);
  });

});
