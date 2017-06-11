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

newElement.appendChild(newElementContent); /*dodatnie tekstu do paragrafu bez tego by sie nei wstawil */

istniejacyWezel.appendChild(newElement); /* dodanie paragrafu 'newElement' do diva bez tego by nie wstawil się do diva*/

istniejacyWezel.removeChild(newElement); /*usuniecie paragrafu 'newElement' z diva */

//*************************************************************

/*ATRYBUTY TO : np id class name href ....*/

/*manipulacja wezłami edycja */


var mainHeader = document.getElementById('main-header'); /*tworzymy zeminna i pobieramy wezel main-header*/
console.log(mainHeader);

mainHeader.innerHTML='zmieniam tekst'; /* zmieniamy w nim tekst*/


var linki = document.getElementsByClassName('link')[0]; /*tworzymy zmienna i przypisujemy do wezla link [0]*/
console.log(linki);

linki.href='http://akademia108.pl'; /*zmieniamy wartosc href w linku */

linki.className='nowa-klasa'; /*zmieniamy nazwe klasy*/

mainHeader.style.color='red'; /* zmieniamy styl i w nim kolor */

//***********************************************************

/*events  zdarzenia  */

var secondLink= document.getElementsByTagName('a')[1]; /*nadanie zmiennej i przypisanie do niego wartosci z html*/
console.log(secondLink);

function alarm(e) { 
    e.preventDefault(); /* zablokowanie defaultowych ustawien */
    console.log('nie masz 18 lat');
    console.log(e); /*wyswietl co sie dzieje w funkcji e*/
}

secondLink.onclick = alarm; /*ustawienie funkcji alarm uruchamianej po kliknieciu*/



//var thirdLink= document.getElementsByTagName('a')[2];
//console.log(thirdLink);
//
//thirdLink.addEventListener('click', alarm);
//
//
//function resize(e){  
//    console.log(e.type);  
//    
//    if(e.type == 'mouseover') {  /*sprawdz typ zdarzenia */
//        mainHeader.style.fontSize = "40px";  /*jesli e.type = mouseover to powieksz fontsize */
//    }
//    else {
//        mainHeader.style.fontSize = "inherit"; /* jesli e.type rozny od mouseover to pomniejsz*/
//    }
//    
//}
//
//mainHeader.onmouseover = resize; /*po najechaniu myszka na mainHeader wywolaj funkcji resize*/
//
//mainHeader.onmouseout = resize; /*po zjechaniu myszka z mainHeader wywolaj funkcjie resize*/

//***************************************************
/*zdarzenia events */

//console.log(document.header[0]);

function klikHeader() {
    console.log('kliknales header');
}

document.getElementsByTagName('header')[0].onclick=klikHeader;

function klikH1(e) {
    
    e.stopPropagation();
    
    console.log("kliknales h1");
}

document.getElementsByTagName('h1')[0].onclick=klikH1;



