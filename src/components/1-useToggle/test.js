function solve(input) {
    let command = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command != "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input.shift();
            continue;
        }
        let flag = true;

        if (num == 1) {
            flag = false;
        } else {
            for (let i = num; i >= 2; i--) {
                if (num % i == 0 && i != num) {
                    flag = false;
                    break;
                }
            }
        }

        if (flag) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        command = input.shift();
    }

function abc(name1) {
    const array = [1, 2, 3]
const [name] = array

function dimoFn(name){
 console.log(name, name1);
}
return [name, dimoFn]
};

abc('name');

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

    solve(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);
    