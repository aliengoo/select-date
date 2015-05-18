(function(app){
  
  app.controller('App', App);
  
  function App(){
    let vm = this;
    
    vm.message = 'Hello, World!';
  }
  
}(angular.module('app')));