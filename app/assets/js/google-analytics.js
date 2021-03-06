// Hook up Google Analytics: https://gist.github.com/paulcbetts/2d2de55d137a1cf9d1ac.
(function(document) {
  var cookies = {};

  document.__defineGetter__('cookie', function() {
    var output = [];

    for (var cookieName in cookies) {
      output.push(cookieName + '=' + cookies[cookieName]);
    }

    return output.join(';');
  });
  document.__defineSetter__('cookie', function(s) {
    var indexOfSeparator = s.indexOf('='),
      key = s.substr(0, indexOfSeparator),
      value = s.substring(indexOfSeparator + 1);

    cookies[key] = value;
    return key + '=' + value;
  });
  document.clearCookies = function() {
    cookies = {};
  };
  document.__defineGetter__('location', function() {
    return {
      href: 'http://atom-shell.local/',
      protocol: 'http:',
      host: 'atom-shell.local',
      port: '',
      pathname: '/',
      search: '',
      hash: '',
      username: '',
      password: '',
      origin: 'http://atom-shell.local'
    };
  });
  document.__defineSetter__('location', function() {});
})(document);
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46639323-1', 'auto');
ga('send', 'pageview');
