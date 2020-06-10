// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/* for my gallery */

var filenames = ["/Images/myimage1.JPG", 
				"Images/myimage2.JPG",
				"/Images/IMG2.JPG",
				"/Images/IMG3.JPG",
				"/Images/IMG4.jpeg",
                "/Images/IMG5.jpg",
                "/Images/IMG6.JPG",
                "/Images/IMG7.jpeg",
                "/Images/IMG8.jpeg"];

var currentImage = 0;	



function update(){
	var filename = filenames[currentImage];
	document.getElementById("myImage").src = filename;
	
}

function next(){
	currentImage = (currentImage + 1) % filenames.length
	update();
}

function prev(){
	if (currentImage > 0) {
  		currentImage = currentImage - 1;
	}	
	update();
}


var myVar = setInterval(next, 4000);



/**
 // Fetches a message from the server and adds it to the DOM.
 
function getMessage() {
  console.log('Fetching a message.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
// Handles response by converting it to text and passing the result to
 // addQuoteToDom().

function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addMessageToDom);
}

// Adds a message to the DOM. 
function addMessageToDom(message) {
  console.log('Adding message to dom: ' + message);

  const messageContainer = document.getElementById('the-message');
  messageContainer.innerText = message;
}

*/

/**
 * The above code is organized to show each individual step, but we can use an
 * ES6 feature called arrow functions to shorten the code. This function
 * combines all of the above code into a single Promise chain. You can use
 * whichever syntax makes the most sense to you.
 */

function getMessageUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((message) => {
    document.getElementById('the-message').innerText = message;
  });
}

/**
 * Another way to use fetch is by using the async and await keywords. This
 * allows you to use the return values directly instead of going through
 * Promises.
 
async function getMessageUsingAsyncAwait() {
  const response = await fetch('/data');
  const message = await response.text();
  document.getElementById('the-message').innerText = message;
}

*/