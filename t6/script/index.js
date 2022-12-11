const input = document.getElementById('input');
const result = document.getElementById('result');

document.getElementById('revert').addEventListener('click', function() {
    let valueReverse = input.value.split("").reverse().join("");
    printValor(valueReverse);
});

document.getElementById('bold-vowel').addEventListener('click', function() {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let valueBoldVowel = '';

    for (var i=0; i<input.value.length; i++) { 
        if(vowel.indexOf(input.value[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")) != -1) {
            console.log('vasco')
            valueBoldVowel += input.value[i].bold();
        } else {
            valueBoldVowel += input.value[i];
        }
    }

    printValor(valueBoldVowel);
});

document.getElementById('string-array').addEventListener('click', function() {
    let stringArray = input.value.split(' ');
    let values = [];
    let numbers = [];
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let trLabel = document.createElement('tr');
    let thValues = document.createElement('th');
    let thNumber = document.createElement('th');
    let tBody = document.createElement('tbody');

    result.innerHTML = '';

    table.classList.add('table')
    thValues.classList.add('col');
    thNumber.classList.add('col');
    thValues.innerText = 'Palavras';
    thNumber.innerText = 'Ocorrências'

    trLabel.appendChild(thValues);
    trLabel.appendChild(thNumber);
    thead.appendChild(trLabel);
    table.appendChild(thead);
    table.appendChild(tBody);
    result.appendChild(table);


    stringArray.forEach((v) => {
        if(values.indexOf(v) != -1) {
            numbers[values.indexOf(v)] = numbers[values.indexOf(v)] + 1;
        } else {
            values.push(v);
            numbers.push(1);
        }
    });

    values.forEach((v, index) => {
        tBody.innerHTML += `
            <tr>
                <td>${v}</td>
                <td>${numbers[index]}</td>
            </tr>
        `
    });
});

document.getElementById('occurrence').addEventListener('click', function() {
    let stringArray = input.value.split(' ');
    let values = [];
    let numbers = [];

    stringArray.forEach((v) => {
        if(values.indexOf(v) != -1) {
            numbers[values.indexOf(v)] = numbers[values.indexOf(v)] + 1;
        } else {
            values.push(v);
            numbers.push(1);
        }
    });

    let max = Math.max.apply(null, numbers);
    let index = numbers.indexOf(max);

    printValor(`${values[index]} | ${max}`);
});

document.getElementById('replace').addEventListener('click', function() {
    const search = document.getElementById('search').value;
    const replaceString = document.getElementById('replace-string').value;

    let newValue = input.value.replace(search, replaceString);

    printValor(newValue);
});

document.getElementById('days').addEventListener('click', function() {
    const date = document.getElementById('date').value;

    let nasc = new Date(date);
    let currentDate = new Date();

    let diferenceDate = currentDate.getTime() - nasc.getTime();

    let days = diferenceDate / (1000 * 3600 * 24);

    if(days) {
        printValor(parseInt(days));
    }
});

document.getElementById('days-2').addEventListener('click', function() {
    const date = document.getElementById('date-2').value;

    let result = new Date(date).toLocaleDateString('pt-br', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    
    if(date) {
        printValor(result);
    }
});

function printValor(value) {
    result.innerHTML = value;
}