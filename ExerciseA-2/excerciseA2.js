function freeShipping(order) {
    let isFreeShip = false;

    let valueArr = Object.values(order);
    let arrSum = 0;

    for (let i = 0; i < valueArr.length; i++) {
        arrSum += valueArr[i];
    }

    if(arrSum > 50) {
        isFreeShip = true;
    } else {
        isFreeShip = false;
    }

    return isFreeShip;
}


freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
freeShipping({ "Flatscreen TV": 399.99 });
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 });
freeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 });