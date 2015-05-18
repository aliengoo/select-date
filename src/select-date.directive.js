(function(app){

	app.directive('selectDate', selectDate);

	function selectDate(){
		return {
			restrict: 'E',
			templateUrl: 'select-date.directive.html',
			link: link
		};

		function link(scope, element){

			let actualEl = element[0];

			function createOption(value, textContent){
				let option = document.createElement('option');
				option.value = '';
				option.textContent = '';
				return option;
			}


			function fillDays(){
				var day = actualEl.querySelector('day');
				var option = createOption('', '');

				for(var d = 1; d < 32; d++){
					
				}
			}
		}
	}
  
}(angular.module('app')));