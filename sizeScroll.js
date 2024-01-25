// №1
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// №2
// let div = document.createElement('div');
// let scrollWidth = div.offsetWidth - div.clientWidth;

// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// div.remove();

// document.body.append(div);
// console.log(scrollWidth);

// №3
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

// №4
// С точки зрения CSS width:auto – совершенно нормально, но нам-то в JavaScript нужен конкретный размер в px, который мы могли бы использовать для вычислений. 
// №1 clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.

// Есть и ещё одна причина: полоса прокрутки. 
// №2 Бывает, без полосы прокрутки код работает прекрасно, но стоит ей появиться, как начинают проявляться баги. Так происходит потому, что полоса прокрутки «отъедает» место от области внутреннего содержимого в некоторых браузерах. Таким образом, реальная ширина содержимого меньше CSS-ширины. Как раз это и учитывают свойства clientWidth/clientHeight.

// …Но с getComputedStyle(elem).width ситуация иная. Некоторые браузеры (например, Chrome) возвращают реальную внутреннюю ширину с вычетом ширины полосы прокрутки, а некоторые (например, Firefox) – именно CSS-свойство (игнорируя полосу прокрутки). 
// №3 Эти кроссбраузерные отличия – ещё один повод не использовать getComputedStyle, а использовать свойства-метрики.