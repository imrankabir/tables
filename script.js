const getNumbers = e => JSON.parse(localStorage.getItem('table-numbers')) ?? [];
const saveNumbers = numbers => localStorage.setItem('table-numbers', JSON.stringify(numbers));

const getNumber = e => localStorage.getItem('table-number') ?? 2;
const saveNumber = number => localStorage.setItem('table-number', number);

document.querySelector('#tc').addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        e.target.querySelector('span').classList.toggle('hide');
    }
});

document.querySelector('#t').addEventListener('keyup', e => {
    saveNumber(document.querySelector('#t').value);
});

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [a[i], a[r]] = [a[r], a[i]];
  }
  return a;
};

const gt = (force = false) => {
    const t = document.querySelector('#t').value;
    if (!t || t < 2 || t > 20) {
        alert('Please enter a number between 2 and 20.');
        return;
    }
    let th = '';
    let numbers = getNumbers();
    if (numbers.length === 0 || force === true) {
        numbers = [];
        for (let i = 1; i <= 10; i++) {
            if (Math.random() > .5) {
                numbers.push(i);
            }
        }
        shuffle(numbers);
        saveNumbers(numbers);
    }
    for (n of numbers) {
        th += `<tr><td>${t} x ${n} = <span class="hide">${t * n}</span></td></tr>`;
    }
    document.querySelector('#tc').innerHTML = th;
};

(e => {
    document.querySelector('#t').value = getNumber();
    gt();
})();