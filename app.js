console.log("loaded")

document.addEventListener("DOMContentLoaded", function() {
    console.log("Ready to go");
    const userInput = document.getElementById('userInput');
    const sendBtn = document.querySelector('#sendBtn');
    const chatbotContainer = document.querySelector('.chatbotContainer');
    const userThings = document.querySelector('.userThings');
    const messageBox = document.querySelector('messageBox');


    function sendMessage() {
        const message = userInput.value.trim();

        console.log("Send button clicked or Enter key pressed");

        if (message) {
            // Make element for message
            const messageValue = document.createElement('div');
            messageValue.classList.add('message');
            messageValue.textContent = message;

            // Append message to Chatbot Container
            messageBox.appendChild(messageValue);

            // chatbotContainer.insertBefore(messageValue, userThings);
            
            userInput.value = '';

            messageValue.style.backgroundColor = 'lightblue';
            messageValue.style.margin = '10px';
            messageValue.style.padding = '10px';
            messageValue.style.borderRadius = '10px'
            messageValue.style.alignSelf = 'flex-end';
            console.log("Message added to convo");
        }
    }

    
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    })

    console.log('Current URL:', window.location.href);
    alert('Welcome to The Kwame Health-Hot Line!');

    userInput.addEventListener('input', function() {
        if (userInput.validity.valueMissing) {
            userInput.setCustomValidity('Please enter a message');
        } else {
            userInput.setCustomValidity('');
        }
    });
});




// Cache at least one element using selectElementById.
// Cache at least one element using querySelector or querySelectorAll.
// ** Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// Iterate over a collection of elements to accomplish some task.
// Create at least one element using createElement.
// Use appendChild and/or prepend to add new elements to the DOM.
// ** Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
// Modify at least one attribute of an element in response to user interaction.
// Register at least two different event listeners and create the associated event handler functions.
// Use at least two Browser Object Model (BOM) properties or methods.
// Include at least one form and/or input with HTML attribute validation.
// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.
// Include a README file that contains a description of your application.
// Level of effort displayed in creativity, presentation, and user experience.

