var t,lit,i;
function tree(liter) {
    lit=liter;
    i=1;
    t = setInterval(show, 75);  //развертываем/сворачиваем с заданным интервалом
}

function show() {
    var el;
    if(el = document.getElementById(lit + i)) {
        el.style.display = (el.style.display == 'block')?'none':'block';
        i++;
    }
else clearInterval(t);
}