var testBook = require("../grades").book;

exports["setUp"]=function(callBack) {
	// Don't like this - I've just added a clear function purely for the tests :-(
	// Can't I just create a new book?
	testBook.clear();
	callBack();
};

exports["Can add new grade"] = function(test) {
	var expected = 1;
	
	testBook.addGrade(90);
	var actual = testBook.getCountOfGrades();
	
	test.equal(expected, actual);
	
	test.done();
};

exports["Can score total grades"] = function(test) {
	var expected = 150;
	
	testBook.addGrade(100);
	testBook.addGrade(50);
	
	var actual = testBook.getTotalGradeScore();
	
	test.equal(expected, actual);
	
	test.done();
};

exports["Can average grades"] = function(test) {
	var expected = 75;
	
	testBook.addGrade(100);
	testBook.addGrade(50);
	
	var actual = testBook.getAverageGradeScore();
	
	test.equal(expected, actual);
	
	test.done();
};

exports["Can compute letter grade of A"] = function(test) {
	var expected = 'A';
	
	testBook.addGrade(100);
	testBook.addGrade(90);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of B"] = function(test) {
	var expected = 'B';
	
	testBook.addGrade(86);
	testBook.addGrade(90);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of C"] = function(test) {
	var expected = 'C';
	
	testBook.addGrade(86);
	testBook.addGrade(72);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of borderline C"] = function(test) {
	var expected = 'C';
	
	testBook.addGrade(70);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of D"] = function(test) {
	var expected = 'D';
	
	testBook.addGrade(66);
	testBook.addGrade(59);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of borderline D"] = function(test) {
	var expected = 'D';
	
	testBook.addGrade(60);
	testBook.addGrade(60);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of E"] = function(test) {
	var expected = 'E';
	
	testBook.addGrade(59);
	testBook.addGrade(50);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}

exports["Can compute letter grade of F"] = function(test) {
	var expected = 'F';
	
	testBook.addGrade(51);
	testBook.addGrade(45);
	
	var actual = testBook.getLetterGrade();
	
	test.equal(expected, actual);
	
	test.done();
}