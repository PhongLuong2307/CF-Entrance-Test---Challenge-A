function findLastElement(arr) {
    let arrLength = arr.length;

    return arr[arrLength - 1];
}

function hailstone(number) {
    let sequence = [number];
    let addNumber;

    while (findLastElement(sequence) !== 1) {
        if (findLastElement(sequence) % 2 !== 0) {
            addNumber = findLastElement(sequence) * 3 + 1;
            sequence.push(addNumber);
        } else {
            addNumber = findLastElement(sequence) / 2;
            sequence.push(addNumber);
        }
    }

    console.log(sequence);
}

hailstone(7);