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

var slideshowTimer = setInterval(next, 4000);



function getTranslation() {
    const lang = document.getElementById('language').value;
    console.log(lang);
    
    const resultContainer = document.getElementById('comments-container');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('lang', lang);

    fetch('/data?' + params.toString(), {
        method: 'GET'
    }).then(response => response.json())
    .then((translatedMessage) => {
        resultContainer.innerText = '';
        translatedMessage.forEach((post) => {
        resultContainer.appendChild(
            createListElement(post.userName + ': ' + post.userComment));
        });
    });
    
}


/** Creates an <li> element containing text. */

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

