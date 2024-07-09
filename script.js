const _divID = document.getElementById('divID');


function hideNSeek(){
	_divID.classList.toggle('visible');
}

function backColor(){
	_divID.classList.toggle('bg-color');
}

function textColor(){
	_divID.classList.toggle('text-color');
}


//add
_divID.classList.add('addClass')

//remove
_divID.classList.remove('removeClass')

//contains will return true if it has class of 'foo' or false if it does not
_divID.classList.contains('containsClass')

//replace
_divID.classList.replace("foo", "bar");
