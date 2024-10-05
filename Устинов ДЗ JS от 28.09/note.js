//  Значение N
const N = 10;

// Задача 1.

let total = 0;

for(let i = 1; i != N+1; i++) {
    total += i
}
console.log("1. Вывести сумму чисел от 1 до N")
console.log(total)

// Задача 2.

total = 1;

for(let i = 1; i != N+1; i++) {
    total *= i;
}

console.log("2. Вывести факториал числа N")
console.log(total)

// Задача 3 нечетные числа.

for(let i = 1; i < 100; i++) {
    if(i % 2 == 1) {
        console.log(i)
    }
}

// Задача 3 четные числа.

for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

// Задача 4.

total = 0;

for(let i = 1; i != N; i++) {
    if(N % i == 0) {
        total += 1
    }
}

if(total != 1) console.log("Это не простоe число");
else console.log("Это простоe число");

// Задача 5.

for(let i = 1; i != N+1; i++) {
    console.log(i + " + " + N + " = " + (i*N))
}

// Задача 6.

let value = N, sum = 0;

while(value) {
    sum += value % 10;
    value = Math.round(value / 10);
}

console.log(sum)

// Задача 7.

value = N, sum = 0;

while(value) {
    sum = (value % 10);
    sum *= 10;
    value = (Math.round(value / 10));
}

console.log(sum/10)

// Задача 8.

value = N;
total = 0;

while(value != 0) {
    value = Math.floor(value / 10);
    total += 1;
}

console.log(total)


// Задание 9.

value = N;
var n1 = N, n2 = 0;

while(n2) {
    n2 = (value % 10);
    n2 *= 10;
    value = (Math.round(value / 10));
}

if(n1 == n2) {
    console.log("Число " + n1 + " паллиндром")
} else {
    console.log("Число " + n1 + " не паллиндром")
}


// Задание 10.

total = 0;

for(let i = 1; i != N+1; i++) {
    total += i*i
}
console.log("Сумма квадратов чисел = " + total)
