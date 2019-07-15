var textBlock = document.querySelector('.text-block');
var saveBtn = document.querySelector('.save-btn');
var editBtn = document.querySelector('.edit-btn');
var cancelBtn = document.querySelector('.cancel-btn');
var description = document.querySelectorAll('.description-text-block');
var title = document.querySelector('.title-text-block');

testLS();

// Изменение стилей при наведении на блок
textBlock.addEventListener('mousemove', function() {
    textBlock.style.opacity = '1';
    textBlock.style.border = '1px solid #304ffe';
});

textBlock.addEventListener('mouseout', function() {
    textBlock.style.opacity = '0.8';
    textBlock.style.border = 'none';
});

//Кнопка "Редактировать"
function editTextBlock() {
    for(var i = 0; i < description.length; i++) {
        description[i].setAttribute('contenteditable', true);
        description[i].style.background = '#EEEEEE';
    }

    title.setAttribute('contenteditable', true);
    title.style.background = '#EEEEEE';

    editBtn.setAttribute('disabled', true);
    saveBtn.removeAttribute('disabled');
    cancelBtn.removeAttribute('disabled');
};

editBtn.addEventListener('click', editTextBlock);

//Кнопка "Сохранить"
function saveTextBlock() {
    var titleLS = document.querySelector('.title-text-block').innerHTML;
    var descriptionLSOne = document.querySelector('.descriptionLS-one').innerHTML;
    var descriptionLSTwo = document.querySelector('.descriptionLS-two').innerHTML;

    for(var i = 0; i < description.length; i++) {
        description[i].setAttribute('contenteditable', false);
        description[i].style.background = 'none';
        localStorage.setItem('title', description[i]);
    }

    title.setAttribute('contenteditable', false);
    title.style.background = 'none';

    editBtn.removeAttribute('disabled');
    saveBtn.setAttribute('disabled', true);
    cancelBtn.setAttribute('disabled', true);

    console.log('i work');
    localStorage.setItem('title', titleLS);
    localStorage.setItem('description-one', descriptionLSOne);
    localStorage.setItem('description-two', descriptionLSTwo);
}

saveBtn.addEventListener('click', saveTextBlock);

//Кнопка "Отмена"
function cancelTextBlock() {
    for(var i = 0; i < description.length; i++) {
        description[i].setAttribute('contenteditable', false);
        description[i].style.background = 'none';
    }

    title.setAttribute('contenteditable', false);
    title.style.background = 'none';

    editBtn.removeAttribute('disabled');
    saveBtn.setAttribute('disabled', true);
    cancelBtn.setAttribute('disabled', true);

    testLS();
};

cancelBtn.addEventListener('click', cancelTextBlock);

function testLS() {
    if (localStorage.getItem('title') !== null || localStorage.getItem('description-one') !== null || localStorage.getItem('description-two') !== null) {
        title.innerHTML = localStorage.getItem('title');
        description[0].innerHTML = localStorage.getItem('description-one');
        description[1].innerHTML = localStorage.getItem('description-two');
    };
};
