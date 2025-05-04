export default function cpfVerify (field) {
    const cpf = field.value.replace(/\.|-/g, "");
    if (repeatNumbersVerify(cpf) || firstDigitVerify(cpf) || secondDigitVerify(cpf)) {
        field.setCustomValidity('Esse cpf não é valido')
    }  
} 

function repeatNumbersVerify (cpf) {
    const repeatedNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return repeatedNumbers.includes(cpf);
}

function firstDigitVerify (cpf) {
    let sum = 0;
    let mulplier = 10;

    for (let size = 0; size < 9; size++) {
        sum += cpf [size] * mulplier;
        mulplier--
    }

    sum = (sum * 10) % 11; 

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf [9];

} 

function secondDigitVerify (cpf) {
    let sum = 0;
    let mulplier = 11;

    for (let size = 0; size < 10; size++) {
        sum += cpf [size] * mulplier;
        mulplier--
    }

    sum = (sum * 10) % 11; 

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf [10];
}
