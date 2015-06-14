var app = angular.module('tdeeCalcApp', []);

// TODO make this an actual controller
app.controller('tdeeCalculatorCtrl', function($scope){
	$scope.activityLevels = [
		{'name': 'Sedentary',
		 'value': 1.2,
		 'description': 'little or no exercise, desk job'},
		{'name': 'lightly active',
		 'value': 1.375,
		 'description': 'light exercise/sports 1-3 days/wk'},
		{'name': 'moderately active',
		 'value': 1.55,
		 'description': 'moderate exercise/sports 3-5 days/wk'},
		{'name': 'very active',
		 'value': 1.725,
		 'description': 'hard exercise/sports 6-7 days/wk'},
		{'name': 'extremely active',
		 'value': 1.9,
		 'description': 'hard daily exercise/sports & physical \
		 				 job or 2 X day training, marathon, \
		 				 football camp, contest, etc.'}
	];

	$scope.currentActivityLevel = "1.2";

    /*
      Since the Katch-McArdle formula accounts for LBM, this single formula applies
      equally to both men and women and it is the most accurate method of determining your
      daily calorie needs.

	  LBM = Mass * (1-(Fat%/100))
      BMR = 370 + (21.6 * LBM)
    */
	$scope.calculateBMR = function(weight, bodyFat){
		return 370 + (21.6 * (weight * (100-bodyFat)/100));
	};

	/*
	TDEE = BMR * ActivityLevel
	*/
	$scope.calculateTDEE = function(weight, bodyFat, activityLevel){
		return $scope.calculateBMR(weight, bodyFat) * activityLevel;
	};

	/*
	  BMI = Mass / Height^2
	*/
	$scope.calculateBMI = function(weight, height){
		return weight/(height*height/100);
	};
});
