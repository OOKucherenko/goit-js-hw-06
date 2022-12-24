const navEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, navEl.length)

for (let i = 0; i < navEl.length; i += 1) {
    const elemEl = navEl[i].querySelector(`h2`);
    console.log(`Category:`, elemEl.textContent);
    const elemUl = navEl[i].querySelector('ul').childElementCount
    console.log(`Elements:`, elemUl);
}