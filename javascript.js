//Create the setup function
function setup() {
    
    const xhr = new XMLHttpRequest();
    const data = "https://api.unsplash.com/photos/random/?client_id=3b99852b9f284da3cb658af9ea863821df164f8351f90a7af13c563a83c737fb&query=animal&orientation=landscape&count=9";
    const main = document.querySelector('main');
    const title = document.querySelector('h1');
    let iCount = 1;
    const quote = document.querySelector('header p');
    
    
    
    xhr.onload = function() {
        
        if (xhr.status === 200)  {
            
            var resObj = JSON.parse(xhr.responseText);
            
            for (let i=0; i != 9; i++) {
                
                main.innerHTML += "<article><img src='"+resObj[i].urls.small+"' srcset='"+resObj[i].urls.small+" 600w, "+resObj[i].urls.regular+" 800w, "+resObj[i].urls.full+" 1200w' sizes='(max-width: 600px) 100vw, (min-width: 800px) 33vw, 800px' alt='Animal Image' /><div class='info'><p>" +resObj[i].user.name+ "</p> <p>"+resObj[i].likes+"</p></div></article>";
            }
        }
    };
    
    xhr.open('GET', data, true);
    xhr.send(null);
    
    function animate() {
        title.className = "animate";
        title.style.animationPlayState = "running";
        quote.className = "change";
        quote.style.animationPlayState = "running";
        quote.innerHTML = "&quotAn animal's eyes have the power to speak a great language.&quot &#45; Martin Buber";
    }
    
    if (title !== null) {
        title.addEventListener('click', animate, false);
    }
}

//Listen for the window load event
window.addEventListener("load", setup, false);