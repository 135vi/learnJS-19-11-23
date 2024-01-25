// №1
// 1. elem.append(document.createTextNode(text));
// 3. elem.textContent = text;

// №2
// function clear(elem) {
//     while(elem.firstChild) {
//       elem.firstChild.remove();
//     }
// };

// №3
// потому что текст "ааа" без тегов;

// №4
// function list() {
// 	let text;
// 	let ul = document.createElement("ul");
// 	let txt = document.createTextNode("Create List");
// 	document.body.appendChild(txt);
// 	document.body.appendChild(ul);
// 	do {
// 	    text = prompt("Введите текст");
// 		if(text !== "" && text != null) {
// 		 	let li = document.createElement("li");
// 		 	li.appendChild(document.createTextNode(text));
// 		 	ul.appendChild(li);
// 	 	}
// 	} while(text !== "" && text != null);
// };
// list()

// №5
// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {},
//     },
//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {},
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {},
//         }
//     }
// };
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }
// function createTreeText(obj) {
//     var li = '';
//     for (var key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//         var ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }
// var container = document.getElementById('container');
// createTree(container, data);

// №6
// let lis = document.getElementsByTagName('li');
// for (let li of lis) {
//     let descendantsCount = li.getElementsByTagName('li').length;
//     if (!descendantsCount) continue;
//     li.firstChild.data += ' [' + descendantsCount + ']';
// }

// №7
// function createCalendar(id, year, month) {
//     var elem = document.getElementById(id);
//     var mon = month - 1;
//     var d = new Date(year, mon);
//     var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
//     for(var i = 0; i < getDay(d); i++) {
//         table += '<td></td>';
//     }
//     while(d.getMonth() == mon) {
//         table += '<td>'+d.getDate()+'</td>';
//         if(getDay(d) % 7 == 6) {
//             table += '</tr><tr>';
//         }
//         d.setDate(d.getDate()+1);
//     }
//     if(getDay(d) != 0) {
//         for(var i = getDay(d); i < 7; i++) {
//             table += '<td></td>';
//         }
//     }
//     table += '</tr></table>';
//     elem.innerHTML = table;
// }
// function getDay(date) {
//     var day = date.getDay();
//     if(day == 0) day = 7;
//     return day - 1;
// }
// createCalendar("calendar", 2012, 9)

// №8
// let timerId;
// function update() {
//     let clock = document.getElementById('clock');
//     let date = new Date();

//     let hours = date.getHours();
//     if(hours < 10) hours = '0' + hours;
//     clock.children[0].innerHTML = hours;

//     let minutes = date.getMinutes();
//     if(minutes < 10) minutes = '0' + minutes;
//     clock.children[1].innerHTML = minutes;

//     let seconds = date.getSeconds();
//     if(seconds < 10) seconds = '0' + seconds;
//     clock.children[2].innerHTML = seconds;
// }
// function clockStart() {
//     if(!timerId) {
//         timerId = setInterval(update, 1000);
//     }
//     update();
// }
// function clockStop() {
//     clearInterval(timerId);
// }

// №9
// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// №10
// const sorting = tbody => {
//     let [loc, rows] = ['en-US-u-kf-upper', [...tbody.rows]];
//     tbody.innerHTML = '';
//     tbody.append(...rows.sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText, loc)));
// };
// sorting(document.querySelector('tbody'));