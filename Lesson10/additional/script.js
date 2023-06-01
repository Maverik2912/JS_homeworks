// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
const classes = [];
function explorer(htmlElement) {
    const classList = htmlElement.classList;
    const children = htmlElement.children;

    if(classList.length){
        for (const className of classList) {
            classes.push(className);
        }
    }
    if(children.length){
        for (const child of children) {
            explorer(child);
        }
    }
}

explorer(document.body);
console.log(classes)