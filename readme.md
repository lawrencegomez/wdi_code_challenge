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
