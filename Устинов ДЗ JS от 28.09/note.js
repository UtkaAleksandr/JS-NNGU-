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

// Задача 6. Не дорешал

let value = N, sum = 0;

while(value) {
    sum += value % 10;
    value = (value / 10);
}

console.log(sum)

// Задача 7. не сделано

value = N, sum = 0;

while(value) {
    sum = (sum * 10) + (value / 10);
    value = (value / 10);
}

console.log(sum)