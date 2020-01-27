let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Invalid or already found value in the list.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (values.length == 0) {
        window.alert('Add values ​​before finalizing.')
    } else {
        let tot = values.length
        let big = values[0]
        let small = values [0]
        let sum = 0
        let average = 0
        for(let pos in values) {
            sum += values[pos]
            if(values[pos] > big)
            big = values[pos]
            if(values[pos] < small)
            small = values[pos]
        }
        average = sum / tot
        let trate = parseFloat(average.toFixed(2));
        res.innerHTML = ''
        res.innerHTML += `<p>In all, we have ${tot} numbers registered.</p>`
        res.innerHTML += `<p>The highest reported value was ${big}.</p>`
        res.innerHTML += `<p>The lowest value reported was ${small}.</p>`
        res.innerHTML += `<p>Adding all the values, we have ${sum}.</p>`
        res.innerHTML += `<p>The average of the values ​​entered is ${trate}.</p>`
    }
}
