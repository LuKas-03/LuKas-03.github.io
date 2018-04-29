var elems = document.getElementsByClassName('item');

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", swichStatus);
  }

function swichStatus() {
    this.style.background = '#ebebeb';
    const hiddenInput = this.getElementsByTagName('i')[0];
    hiddenInput.style.color = '#e54235'
    if (hiddenInput.getAttribute('class') == 'far fa-square') {
        hiddenInput.setAttribute('class', 'fas fa-check-square');
    }
    else if (hiddenInput.getAttribute('class') == 'fas fa-check-square') {
        hiddenInput.setAttribute('class', 'far fa-square');
    }
    setTimeout(sleep, 500, hiddenInput, this);
}

function sleep(hiddenInput, item) {
    hiddenInput.style.color = '#000';
    item.style.background = 'rgba(0, 0, 0, 0)';
    } 

resultPrint.addEventListener('click', event => {
    const items = document.getElementById('checkList').getElementsByTagName('i');
    let value= 0;
    const cell = event.target;
    if (cell.getAttribute('class').indexOf('unclicked') === -1) {
        return;
    }
    for (var i = 0; i < items.length; i++ )
    {
        if (items[i].getAttribute('class') == 'fas fa-check-square') {
            value++;
        }
    }
    var assessmen = "Неудовлетворительно";
    if (value >= 4 && value < 6) {
        assessmen = "Удовлетворительно";
    } else if (value >= 6 && value < 8) {
        assessmen = "Хорошо";
    } else if (value >= 8) {
        assessmen = "Отлично";
    }
    cell.innerHTML = "Результат:<br><span class='percent'>" + (value * 10) + "%</span><br>" + assessmen;
    cell.style.margin = "100px 0";
    cell.setAttribute('class', 'button');
    
    const checkBoxs = document.getElementById('checkList').getElementsByClassName('item');
    for (var i = 0; i < checkBoxs.length; i++ )
    {
        checkBoxs[i].style.width = '0px';
        checkBoxs[i].style.height= '0px';
        checkBoxs[i].style.overflow = 'hidden';
    }
});