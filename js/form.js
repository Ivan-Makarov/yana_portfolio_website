'use strict';

const contactsForm = document.forms.contacts_form;

const formElements = Array.from(contactsForm.elements);

formElements.forEach(element => {
    element.addEventListener('blur', () => {
        if (element.value) {
            element.classList.add('complete')
        }
    });
    element.addEventListener('focus', () => {
        element.classList.remove('complete')
    });
})
