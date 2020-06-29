(function (window) {
  var kesavgreeter={};
  kesavgreeter.name="kesav";
  var greeting=" Hello ";
  kesavgreeter.sayHello= function () {
	console.log(greeting +kesavgreeter.name);
  }

  window.kesavgreeter=kesavgreeter;

})(window);