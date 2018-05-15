var gradeBook = {
	_grades: [],
	
	addGrade: function(grade){
		this._grades.push(grade);
	},
	
	getCountOfGrades: function(){
		return this._grades.length;
	},
	
	getTotalGradeScore: function(){
		var totalGrades = 0;
		for (var i = 0; i < this._grades.length; i++) {
			totalGrades += this._grades[i];
		}
		return totalGrades;
	},
	
	getAverageGradeScore: function(){
		var gradeCounts = this.getCountOfGrades();
		var totalGrades = this.getTotalGradeScore();
		return totalGrades / gradeCounts;			
	},
	
	getLetterGrade: function(){
		var averageGradeScore = this.getAverageGradeScore();
		if (averageGradeScore >= 90) // no switch?
			return 'A';
		else if (averageGradeScore >= 80)
			return 'B';
		else if (averageGradeScore >= 70)
			return 'C';
		else if (averageGradeScore >= 60)
			return 'D';
		else if (averageGradeScore >= 50)
			return 'E';
		else
			return 'F';
	},
	
	clear: function(){
		this._grades = [];
	}
};

exports.book = gradeBook;