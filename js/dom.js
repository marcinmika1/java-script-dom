/*wyświetlanie */

'use strict';
//console.log(window);
//console.log(window.innerHeight);
//console.log(window.outerHeight);
//
//console.log(document);
//console.log(document.element);
//console.log(document.head);
//console.log(document.body);

//***************************************************************
/*tworzenie zmeinnych na elementach obiektow html*/

//var parFirst = document.getElementById('parFirst');
//console.log(parFirst);
//
//var link = document.getElementsByClassName('superlink');
//console.log(link);
//
//var linkPoTagu = document.getElementsByTagName('a');
//console.log(linkPoTagu);
//
//var divPoID = document.getElementById('parSecond');
//console.log(divPoID);
////***************************************************************
///*NODES węzły*/
//
var pierwszyDiv = document.getElementById('parFirst');
//console.log(pierwszyDiv);
//console.log(pierwszyDiv.childNodes); /* wyswietla wszystko co jest np komentarze pusty tekst*/
//console.log(pierwszyDiv.children); /*wyswietla same obiekty html*/

//console.log(pierwszyDiv.firstChild);
//
//console.log(pierwszyDiv.lastChild);

console.log(pierwszyDiv.nextSibling.nextSibling.nextSibling);

//***************************************************************
/*tworzenie dodawanie i usuwanie węzłów */

console.log(document.getElementById('parFirst').children);

var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(istniejacyWezel);

var newElement = document.createElement('p'); /*stworzenie nowego elementu paragrafu */

var newElementContent = document.createTextNode('to jest nowy element');  /*tworzenie nowego elementu typu text i jego wartość czyli jego tekst*/

newElement.appendChild(newElementContent); /*dodatnie tekstu do paragrafu */

istniejacyWezel.appendChild(newElement);

















