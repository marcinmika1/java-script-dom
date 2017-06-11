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

