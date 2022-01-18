// function receivesAFunction(index){
//   return index();
// }


// function returnsANamedFunction(){
//   return returnsANamedFunction;
// };

// function returnsAnAnonymousFunction(){
//   return function(){return returnsAnAnonymousFunction};
// }











function receivesAFunction(cb){
  return cb();
}
receivesAFunction(()=>console.log("hi"))

function returnsANamedFunction(){
  return function named(){return named;}
}

function returnsAnAnonymousFunction(){
  return function(){console.log('yeohoon')}}