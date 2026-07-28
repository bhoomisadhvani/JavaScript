// lexical scope means function cas access based on where it is defining in the code.

var x = 1000;

function parent() {
  var x = 10;


  function child() {
    var x = 100;

    console.log(x);
  }

  child();
}

parent();
