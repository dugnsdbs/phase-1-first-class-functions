function receivesAFunction(index){
  return index();
}
let spy = function() {return 1+1};

receivesAFunction(spy);


(function returnsANamedFunction(named){
  return named;
})();