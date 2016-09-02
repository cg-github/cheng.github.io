var myImg = document.querySelector("img");
var myBtn = document.querySelector('button');
var myHead = document.querySelector('h1');

myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if( mySrc === 'images/header-logo.png'){
		myImg.setAttribute('src','images/firefox.jpg');
	}else{
		myImg.setAttribute('src','images/header-logo.png');
	}
}

var setUserName = function(){
	var myName = prompt('input your name:');
	localStorage.setItem('name',myName);
	myHead.innerHTML = 'Fuck you ' + myName;
}

myBtn.onclick = function(){
	setUserName();
}

if(localStorage.getItem('name')){
	myHead.innerHTML = 'Fuck you again '+ localStorage.getItem('name');
}else{
	setUserName();
}