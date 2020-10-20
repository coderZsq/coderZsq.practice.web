(function () {
  require.config({
    baseUrl: '',
    paths: {
      'bar': './modules/bar',
      'foo': './modules/foo'
    }
  });

  require(['foo'], function (foo) {

  });
})();