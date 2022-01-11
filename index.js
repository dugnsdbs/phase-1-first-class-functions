function receivesAFunction(index){
  return index();
}
let spy = function() {return 1+1};

function returnsANamedFunction(){
  return returnsANamedFunction;
};

function returnsAnAnonymousFunction(){
  return function(){return returnsAnAnonymousFunction};
}