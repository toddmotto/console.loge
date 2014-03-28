/**
 * Loge.js
 */
describe('Loge', function () {

  /**
   * addClass
   */
  describe('console.loge()', function () {

    beforeEach(function () {
      console.loge('wow');
    });

    it('should have the .loge() method', function () {
      expect(console.loge).toBeDefined();
    });

  });

});
