let passiveSelectBoxes = document.querySelectorAll('input[type=checkbox][')

for (let i = 0; i < passiveSelectBoxes.length; i++) {
    passiveSelectBoxes[i].addEventListener('checked', log('hello'))
}





