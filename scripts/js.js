var lit,i;
function tree(liter) {
    lit=liter;
    i=0;
    show();  //развертываем/сворачиваем с заданным интервалом
}

function show() {
    var el;
    if(el = document.getElementById(lit + i)) {
        el.style.display = (el.style.display == 'block')?'none':'block';
        i++;
        show();
    }
}