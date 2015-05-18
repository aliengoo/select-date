(function(app){
  
  app.controller('App', App);
  
  function App(){
    var vm = this;
    
    vm.message = 'Hello, World!';
  }
  
}(angular.module('app')));