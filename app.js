console.log("loaded")


document.addEventListener("DOMContentLoaded", function() {
    console.log("Ready to go");
    const userInput = document.getElementById('userInput');
    const sendBtn = document.querySelector('#sendBtn');
    const chatbotContainer = document.querySelector('.chatbotContainer');
    const userThings = document.querySelector('.userThings');
    const messageBox = document.querySelector('.messageBox');

    function botGreeting() {
        const greetingValue = document.createElement('div');
        greetingValue.classList.add('greeting');
        greetingValue.textContent = 'Hi! How can I help you with your physical needs?';
        messageBox.appendChild(greetingValue);

        greetingValue.style.backgroundColor = 'salmon';
        greetingValue.style.margin = '10px';
        greetingValue.style.padding = '10px';
        greetingValue.style.borderRadius = '10px'
        greetingValue.style.alignSelf = 'flex-start';
        console.log("Greeting added to convo");
    }
    // Bot initial greeting
    botGreeting();

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

    function botResponse1(userMessage) {
        if (!userMessage) return;

        const responseValue = document.createElement('div');
        responseValue.classList.add('response');

        // Analyze user message
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes('gain') || lowerCaseMessage.includes('bulk') || lowerCaseMessage.includes('increase') || lowerCaseMessage.includes('muscle')) {
            responseValue.innerHTML = "The healthiest way to gain weight is through building lean muscle mass. I have a few questions that will help us find a good starting base for the amount of macronutrients required to reach your goals.<br>What is your current height and weight? <br>And what is your desired weight?"
        } else if (lowerCaseMessage.includes('lose') || lowerCaseMessage.includes('cut') || lowerCaseMessage.includes('reduce') || lowerCaseMessage.includes('decrease') || lowerCaseMessage.includes('loss') || lowerCaseMessage.includes('fat')) {
            responseValue.innerHTML = "It's great that you want to lose weight and improve your heath. <br>What's your current height and weight, and what do you want to get to?"
        } else {
            responseValue.innerHTML = "Can you please provide more details about your goals?"
        }

        responseValue.style.backgroundColor = 'salmon';
        responseValue.style.margin = '10px';
        responseValue.style.padding = '10px';
        responseValue.style.borderRadius = '10px'
        responseValue.style.alignSelf = 'flex-start';
        console.log("Response added to convo");
    }
    // Bot analyzed response 1 (Choosing Path)
    


    

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

