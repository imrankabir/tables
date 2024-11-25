const getNumbers = e => JSON.parse(localStorage.getItem('numbers')) ?? [];
const setNumbers = numbers => localStorage.setItem('numbers', JSON.stringify(numbers));

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
        setNumbers(numbers);
    }
    for (n of numbers) {
        th += `<tr><td>${t} x ${n} = <span class="hide">${t * n}</span></td></tr>`;
    }
    document.querySelector('#tc').innerHTML = th;
};

gt();

document.querySelector('#tc').addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        e.target.querySelector('span').classList.toggle('hide');
    }
});