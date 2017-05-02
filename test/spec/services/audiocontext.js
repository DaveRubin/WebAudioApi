'use strict';

describe('Service: AudioContext', function () {

  // load the service's module
  beforeEach(module('webAudioApiApp'));

  // instantiate service
  var AudioContext;
  beforeEach(inject(function (_AudioContext_) {
    AudioContext = _AudioContext_;
  }));

  it('should do something', function () {
    expect(!!AudioContext).toBe(true);
  });

});
