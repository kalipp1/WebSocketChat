const loginForm = document.querySelector('#welcome-form');
const messagesSection = document.querySelector('#messages-section');
const messagesList = document.querySelector('#messages-list');
const addMessageForm = document.querySelector('#add-messages-form');
const userNameInput = document.querySelector('#username');
const messageContentInput = document.querySelector('#message-content');

console.log(loginForm);

let userName = '';

const login = (e) => {
    e.preventDefault();
    if(!userNameInput.value){
        alert('You need to type in user name before submiting');
        return;
        }else{
        userName = userNameInput.value;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
}

const addMessage = (author, content) => {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName){
        message.classList.add('message--self')
    }
    message.innerHTML = `
        <h3 class="message__author">
            ${author === userName ? 'You' : author}
        </h3>
        <div class="message__content">
            ${content}
        </div>
    `;
    messagesList.appendChild(message);
}

const sendMessage = (e) => {
    e.preventDefault();
    if(!messageContentInput.value){
        alert('You need to type in message before sending');
        return;
    }else{
        addMessage(userName, messageContentInput.value);
        messageContentInput.value = "";
    }
}

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage)



