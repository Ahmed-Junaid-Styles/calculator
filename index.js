var a = document.querySelector('.buttons')
var b = document.querySelector('.inp-1')
var c = document.querySelector('.inp-2')
var d = document.querySelectorAll('.element')
var e = document.querySelector('.row')

let username = 'the ln(e) is 1';
console.log(username.indexOf('ln('))



function piAnde() {
    if (b.value.charAt(b.value.indexOf('e') - 1) == '+' || b.value.charAt(b.value.indexOf('e') - 1) == '-' || b.value.indexOf('e') == 0) {
        b.value = b.value.replaceAll('e', '2.718')
    } else {
        b.value = b.value.replaceAll('e', '*2.718')
    }
    if (b.value.charAt(b.value.indexOf('π') - 1) == '+' || b.value.charAt(b.value.indexOf('π') - 1) == '-' || b.value.indexOf('π') == 0) {
        b.value = b.value.replaceAll('π', '3.141')
    } else {
        b.value = b.value.replaceAll('π', '*3.141')
    }
}
Array.from(d).forEach((z) => {
    let val = '';
    z.onclick = () => {
        val = b.value;
        val2 = c.value;
        switch (z.innerHTML) {
            case 'AC':
                b.value = '';
                c.value = '';
                break;
            case '=':
                b.value = b.value.replaceAll('×', '*')
                b.value = b.value.replaceAll('÷', '/')
                lnOf =  Math.log(b.value.slice(b.value.indexOf('ln(')+2, b.value.indexOf(')')))
                haha = b.value.slice(b.value.indexOf('ln(')+2, b.value.indexOf(')'))
                b.value.replaceAll(haha, lnOf)
                piAnde();
                c.value = b.value.replaceAll('%', '/100')
                c.value = eval(b.value);
                b.value = b.value.replaceAll('*','×')
                b.value = b.value.replaceAll('/','÷')
                break;
            case 'Del':
                delFun = JSON.stringify(b.value);
                b.value = delFun.slice(1, b.value.length);
                break;
            case '000':
                if (b.value != "") {
                    b.value = val + '000';
                }
                break;
            case '00':
                if (b.value != "") {
                    b.value = val + '00';
                }
                break;
            case '√':
                b.value = JSON.stringify(Math.sqrt(b.value));
                b.value = b.value.slice(0, 6)
                break;
            case 'log':
                piAnde();
                b.value = Math.log(b.value) / Math.log(10)
                b.value = b.value.slice(0, 6)
                break;
            case 'ln':
                piAnde();
                b.value = val + 'ln(';
                //b.value = Math.log(b.value)
                //b.value = b.value.slice(0, 6)
                break;
            case 'More':
                document.querySelector('.calculator').style.opacity = "0"
                document.querySelector('.learn').style.opacity = "1"
                document.querySelector('.learn-more').innerHTML = 'DO YOU WANNA LEARN MORE'
                break;
            case 'Others':
                document.querySelector('.calculator').style.opacity = "0"
                document.querySelector('.learn').style.opacity = "1"
                document.querySelector('.learn-more').innerHTML = 'DO YOU WANNA LEARN OTHERS'
            break;
            default:
                b.value = val + z.innerHTML;
        }
    }
})

document.querySelector('.no').onclick = () => {
    window.location.reload();
}