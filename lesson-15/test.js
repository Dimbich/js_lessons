let assert = chai.assert;

describe("Проверка функции SUM", function() {
	it("Сумма параметров больше 10", function() {
		assert.equal(sum(12,1),true);
	})
});

describe("Проверка массива arr1", function() {
	it("arr1[1][1] = 5?", function() {
		assert.equal(arr1[1][1], 5);
	})
});

describe("Проверка функции each", function() {

  describe("Проверка возвращаемого типа", function() {
    it ("Строка?", function(){
      assert.typeOf(each(arr2, myFunc),'string');
	});
	it ("Число?", function(){
      assert.typeOf(each(arr2, myFunc),'number');
	});	
	it ("Может быть массив?", function(){
      assert.typeOf(each(arr2, myFunc),'array');
	});			
  });

  describe("Колиство элементов массива", function() {

    function makeTest(a,b) {
        for (let i=a; i<b; i++) {
         it(`Длинна массива равна ${i}?`, function() {
          assert.equal(each(arr2, myFunc).length, i);
         });        
       }
    }

    makeTest(3,7);

  });

});
   
