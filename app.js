function Ticket (age, isStudent, dayOfWeek, isParquet, is3D, isLong){
    this.age = age,
    this.student = isStudent,
    this.dayOfWeek = dayOfWeek,
    this.isParquet = isParquet,
    this.is3D = is3D,
    this.isLong = isLong,
    this.price = 0
}

function makeOrder(isLong, dayOfWeek, isParquet, is3D, customers){
    order = [];
    for (i in customers){
        var ticket = new Ticket(customers[i].age, customers[i].isStudent, dayOfWeek, isParquet, is3D, isLong );
        order.push(ticket);
    } 
    return ticketPricing(order);
}

function ticketPricing(order){
    var pricedTickets = [];
    function addExtras(ticket){
        if (ticket.is3D) ticket.price += 3; //is 3D
        if (ticket.isParquet) ticket.price += 2;  //is parquet seating 
        if (ticket.isLong || ticket.dayOfWeek == 7 || ticket.dayOfWeek == 0) ticket.price += 1.5; //is overlength or weekend
        pricedTickets.push(ticket);
    }
    
    if (order.length >= 20 ){ //groups
        for (i in order ){
            order[i].age < 13 ? order[i].price += 5.5 : order[i].price += 6; 
            addExtras(order[i]);
        }
    } else { //non groups
        for (i in order){
            order[i].age >= 65 ? order[i].price += 6 : order[i].age < 13 ? order[i].price += 5.5 : order[i].price += 11;
            order[i].student == true ? order[i].price -= 3: order[i].price; //student & thursday discounts
            order[i].dayOfWeek == 4 ? order[i].price -= 2 : order[i].price;
            addExtras(order[i]);
        }
    }
    return finishOrder(pricedTickets);
}

function finishOrder(pricedTickets) {
    var totalPrice = 0;
    for (i in pricedTickets) totalPrice += pricedTickets[i].price;
    return totalPrice;
}

module.exports = makeOrder;