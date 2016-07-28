var expect = require('chai').expect;
var makeOrder = require('./app.js');

function makeCustomer(age, isStudent, customerCount){
    customers = [];
    for (i=0 ; i < customerCount ; i ++){
        customers.push(new Customer(age, isStudent))
    }

    function Customer(age, isStudent){
        this.age = age;
        this.isStudent = isStudent;
    }
    return customers;
}

describe('makeOrder', function(){

	it('4 x 35 year-olds, 2D, regular length, Tuesday, normal seating == $44.00', function() {
		var subTotal = makeOrder(false, 2, false, false, makeCustomer(35, false, 4) );
        expect(subTotal).to.equal(44.00);
	});

    it('4 x 35 year-olds, 3D, regular length, Tuesday, normal seating == $56.00', function() {
		var subTotal = makeOrder(false, 2, false, true, makeCustomer(35, false, 4));
        expect(subTotal).to.equal(56.00);
	});

    it('4 x 35 year-olds, 3D, regular length, Tuesday, balcony seating == $64.00', function() {
		var subTotal = makeOrder(false, 2, true, true, makeCustomer(35, false, 4));
        expect(subTotal).to.equal(64.00);
	});

    it('4 x 35 year-olds, 3D, regular length, Thursday, balcony seating == $56.00', function() {
		var subTotal = makeOrder(false, 4, true, true, makeCustomer(35, false, 4));
        expect(subTotal).to.equal(56.00);
	});

    it('4 x 35 year-olds, 2D, overlength, Monday, normal seating == $50.00', function() {
		var subTotal = makeOrder(true, 1, false, false, makeCustomer(35, false, 4));
        expect(subTotal).to.equal(50.00);
	});

    it('4 x 35 year-olds, 3D, regular length, Saturday, balcony seating == $70.00', function() {
		var subTotal = makeOrder(false, 7, true, true, makeCustomer(35, false, 4));
        expect(subTotal).to.equal(70.00);
	});
    
    it('4 x 9 year-olds, 2D, regular length, Monday, normal seating == $22.00', function() {
		var subTotal = makeOrder(false, 1, false, false, makeCustomer(9, false, 4));
        expect(subTotal).to.equal(22.00);
	});

    it('4 x 67 year-olds, 2D, regular length, Monday, normal seating == $24.00', function() {
            var subTotal = makeOrder(false, 1, false, false, makeCustomer(67, false, 4));
            expect(subTotal).to.equal(24.00);
        });

    it('4 x 14 year-old students, 2D, regular length, Monday, normal seating == $32.00', function() {
		var subTotal = makeOrder(false, 1, false, false, makeCustomer(14, true, 4));
        expect(subTotal).to.equal(32.00);
	});

    it('1 x each type, 2D, regular length, Monday, normal seating == $30.50', function() {
        var subTotal = makeOrder(false, 1, false, false, [{age: 20, isStudent: false},{age: 20, isStudent: true},{age: 67, isStudent: false},{age:12, isStudent:false}]);
        expect(subTotal).to.equal(30.50);
    });

    it('21 x 35 year-old, 2D, regular length, Monday, normal seating == $126.00', function() {
		var subTotal = makeOrder(false, 1, false, false, makeCustomer(35, false, 21) );
        expect(subTotal).to.equal(126.00);
	});

    it('21 x 9 year-olds, 2D, regular length, Monday, normal seating == $115.50', function() {
		var subTotal = makeOrder(false, 1, false, false, makeCustomer(9, false, 21 ));
        expect(subTotal).to.equal(115.50);
	});

    it('21 x 35 year-old, 2D, regular length, Thursday, normal seating == $126.00', function() {
		var subTotal = makeOrder(false, 4, false, false, makeCustomer(35, false, 21));
        expect(subTotal).to.equal(126.00);
	});

    it('10 x 14 year-old students + 11 x 9 year-olds, 2D, regular length, Monday, normal seating == $120.50', function() {
        var group1 = makeCustomer(14,true,10);
        var group2 = makeCustomer(9,true,11);
        group = group1.concat(group2);
		var subTotal = 
            makeOrder(false, 1, false, false, group );
        
        expect(subTotal).to.equal(120.50);
	});

     it('7 x 22 year-old students + 12 x 64 year-olds, 2D, extended length, Friday, normal seating == ', function() {
        var group1 = makeCustomer(22,true,7);
        var group2 = makeCustomer(64,true,12);
        group = group1.concat(group2);
		var subTotal = 
            makeOrder(true, 6, false, false, group );
        
        expect(subTotal).to.equal(180.5);
	});


    it('7 x each type, 3D, overlength, Thursday, balcony seating == $346.50', function() {
        var group1 = makeCustomer(9, false, 7)
        var group2 = makeCustomer(14, false, 7)
        var group3 = makeCustomer(14, true, 7)
        var group4 = makeCustomer(67, false, 7)
        var group = group1.concat(group4, group2, group3)
        //console.log(group)
        var subTotal = makeOrder(true, 4, true, true, group);
        expect(subTotal).to.equal(346.50);
    });
})