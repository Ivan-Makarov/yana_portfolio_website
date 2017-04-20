'use strict';

const contactsForm = document.forms.contacts_form;

const formElements = Array.from(contactsForm.elements);

const emailLabel = document.querySelector('.email-label');

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const sendButton = contactsForm.sendButton;

function activateSendButton() {
    let isReady = true;
    formElements.forEach(element => {
        if (element.name !== "sendButton") {
            if (!element.classList.contains('complete')) {
                isReady = false;
            }
        }
    })
    if (isReady) {
        sendButton.classList.remove('inactive-button');
        sendButton.classList.add('active-button');
        sendButton.innerHTML = 'Click to send';
    } else {
        sendButton.classList.remove('active-button');
        sendButton.classList.add('inactive-button');
        sendButton.innerHTML = 'Complete the form to send';
    }
}

formElements.forEach(element => {
    element.addEventListener('blur', () => {
        if (element.value) {
            element.classList.add('complete');
            if (element.name === "email") {
                let email = element.value;
                if (!emailRegExp.test(email)) {
                    element.classList.remove('complete');
                    element.classList.add('invalid');
                    emailLabel.innerHTML = 'invalid email';
                    emailLabel.classList.add('invalid-email');
                } else {
                    element.classList.remove('invalid')
                    emailLabel.innerHTML = 'email';
                    emailLabel.classList.remove('invalid-email')
                }

            }
        }
    });

    element.addEventListener('blur', activateSendButton)

    element.addEventListener('focus', () => {
        element.classList.remove('complete');
    });
})

contactsForm.email.addEventListener('keyup', () => {
    if (contactsForm.email.classList.contains('invalid')) {
        if (emailRegExp.test(contactsForm.email.value)) {
            contactsForm.email.classList.remove('invalid')
            emailLabel.innerHTML = 'email';
            emailLabel.classList.remove('invalid-email')
        }
    }
});
