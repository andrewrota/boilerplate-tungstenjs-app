(function() {
  var data = {name: 'world'};
  if (typeof window === 'undefined') {
    module.exports = data;
  } else {
    window.data = data;
  }
}());