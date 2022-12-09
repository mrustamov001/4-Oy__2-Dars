// Birinchi MASALA
function func1(arr){
    let str = arr.sort((a,b) => b-a)
    return str[1]
}

console.log(func1([10, 40, 30, 20, 50]));




// Ikkinchi MASALA
function func2(arr){
    let result = 0
    for(let i=0; i<arr.length; i++){
        result += arr[i].score
    }
    return result
}

console.log(func2([
    { title: "N", score: 1},
    { title: "K", score: 5},
    { title: "Z", score: 10},
    { title: "X", score: 8},
    { title: "D", score: 2},
    { title: "A", score: 1},
    { title: "E", score: 1},
]));




// Uchinchi MASALA
function func3(arr,n){
    let obj = {}
    for(let i in arr){
        obj[i] = arr[i]+n
    }
    return obj
}

console.log(func3({
    'Baby' : 2,
    'Child' : 8,
    'Teenager' : 15,
    'Adult' : 25,
    'Elderly' : 71,
},19));




// To'rtinchi MASALA
function func4(arr,n){
    let obj = {}
    for(let i in arr){
        if(arr[i] > n){
            obj[i] = arr[i]
        }
    }
    return obj
}

console.log(func4({
    'a': 3000,
    'b': 200,
    'c': 1050,
},1000));




// Beshinchi MASALA
function func5(arr){
    let fgh = arr.split(' ')
    let str = []
    let result = {a:4, s:5, i:1, o:0, e:3}
    for(let i=0; i<fgh.length; i++){
        if(fgh[i].includes(result)){
            str+=fgh[i]
        }
    }
    return result.length
}

console.log(func5('javascript is cool'));