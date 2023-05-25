let data = [];
let currentSize = data.length;

function push(newVal) {
    data[currentSize] = newVal;
    currentSize += 1;
}

function pop() {
    lastRemovedItem = data[currentSize - 1]
    currentSize -= 1;
    data.length = currentSize;
    return lastRemovedItem;
}


function reverseStr(item) {
    //console.log(item)
    for (let i = 0; i < item.length; i++) {
        push(item[i])
    }

    for (let i = 0; i < item.length; i++) {
        item[i] = pop()
    }
}

let str = "bhavya";
str = str.split("");
reverseStr(str);
console.log(str.join(""))


