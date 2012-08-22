arrayTest = new TestCase("arrayTest");

arrayTest.prototype.testEach = function(){
	var stringArr = ["abcde", "qwert", "12345", "hello"];
	var testArr = [];

	stringArr.each(function(elem){
					testArr.push(elem);
				});

	for (var i = 0; i < testArr.length; ++i){
		assertEquals(testArr[i], stringArr[i]);
	}
};
