// let i = 1;
// setInterval(() => {
//     showNotification({
//         top: 10,              
//         right: 10,           
//         html: "Привет " + i++, 
//         className: "welcome"
//     });
// }, 2000);
// function showNotification({top = 0, right = 0, className, html}) {
//     let div = document.createElement("div");
//     div.className = "notification" + (className ? (" " + className) : "");
//     div.innerHTML = html;
//     div.style.top = top + "px";
//     div.style.right = right + "px";
//     document.body.append(div);
//     setTimeout(() => div.remove(), 1500);
// }