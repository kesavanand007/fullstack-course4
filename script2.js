(function (window) {
var ravigreeter={};
ravigreeter.name="Ramu";
var greeting=" Hi ";
ravigreeter.sayHi=function () {
	console.log(greeting +ravigreeter.name);
}  

window.ravigreeter=ravigreeter;

})(window);