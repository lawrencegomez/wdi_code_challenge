#Code Callenge

Design a Movie theatre ticket pricing system, such that: 

Ticket prices:

* Adults $11
* 65 & up $6
* under 13 $5.50

Discounts:

* Groups of 20 or more pay $6 each
* Adults who are students, receive $3 discount
* Thursdays are movie days and tickets are all $2 off

Surcharges:

* Saturday and Sunday are subject to a weekend surcharge of $1.50
* Movies shown in 3D are $3 extra
* Parquet seating is $2 extra
* Movies of extended duration (over 110 minutes runtime) are subject to a surcharge of $1.50

Please test drive your solution using mocha/chai with the following test cases:

* 1 x 35 year-old, 2D, regular length, Tuesday, normal seating == $11.00
* 4 x 35 year-olds, 2D, regular length, Tuesday, normal seating == $44.00
* 4 x 35 year-olds, 3D, regular length, Tuesday, normal seating == $56.00
* 4 x 35 year-olds, 3D, regular length, Tuesday, balcony seating == $64.00
* 4 x 35 year-olds, 3D, regular length, Thursday, balcony seating == $56.00
* 4 x 35 year-olds, 2D, overlength, Monday, normal seating == $50.00
* 4 x 35 year-olds, 3D, regular length, Saturday, balcony seating == $70.00
* 4 x 9 year-olds, 2D, regular length, Monday, normal seating == $22.00
* 4 x 67 year-olds, 2D, regular length, Monday, normal seating == $24.00
* 4 x 14 year-old students, 2D, regular length, Monday, normal seating == $32.00
* 1 x each type, 2D, regular length, Monday, normal seating == $30.50
* 21 x 35 year-old, 2D, regular length, Monday, normal seating == $126.00
* 21 x 9 year-olds, 2D, regular length, Monday, normal seating == $115.50
* 21 x 35 year-old, 2D, regular length, Thursday, normal seating == $126.00
* 10 x 14 year-old students + 11 x 9 year-olds, 2D, regular length, Monday, normal seating == $120.50
* 7 x each type, 3D, overlength, Thursday, balcony seating == $346.50



###Getting started:

* mkdir code_challenge
* cd code_challenge/
* npm init -f
* npm install mocha chai --save-dev
* touch app.js
* touch appSpec.js


app.js:

```javascript
function makeOrder(){

}

module.exports = makeOrder;

```

appSpec.js:

```javascript
var expect = require('chai').expect;
var makeOrder = require('./app.js');

```


### First spec, failing 

appSpec.js:

```
describe('makeOrder', function(){

	it('1 x 35 year-old, 2D, regular length, Tuesday, normal seating == $11.00', function() {
		var subTotal = makeOrder();
        expect(subTotal).to.equal(11.00);
	});
})


```

app.js:

```
function makeOrder(){
	return 0;
}
```


### OOP? Constructor for Ticket? Construtor for Customers?

app.js:

```
function Ticket (age, isStudent, dayOfWeek, isParquet, is3D, isLong){
    this.age = age,
    this.student = isStudent,
    this.dayOfWeek = dayOfWeek,
    this.isParquet = isParquet,
    this.is3D = is3D,
    this.isLong = isLong,
    this.price = 0
}


```

appSpec.js

```
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
```




