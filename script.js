// let a = document.querySelector.bind(document);
// let b = document.querySelectorAll.bind(document);

// let tabs = b(`.tab-item`);
// let panes = b(`.tab-pane`);
// let tabActive = a(`.tab-item.active`);
// let line = a(`.tabs .line`);

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

// tabs.forEach((tab, index) => {
//   let pane = panes[index];

//   tab.addEventListener(`click`, (e) => {
//     a(`.tab-item.active`).classList.toggle(`active`);
//     a(`.tab-pane.active`).classList.toggle(`active`);

//     line.style.left = tab.offsetLeft + "px";
//     line.style.width = tab.offsetWidth + "px";

//     tab.classList.add(`active`);
//     pane.classList.add(`active`);
//   });
// });




let a = document.querySelector.bind(document);
let b = document.querySelectorAll.bind(document);

let tabs = b(`.tab-item`);
let panes = b(`.tab-pane`);
let tabActive = a(`.tab-item.active`);
let line = a(`.tabs .line`);

line.style.left = tabActive.offsetLeft + `px`;
line.style.width = tabActive.offsetWidth + `px`;

tabs.forEach((tab, index) => {
  let pane = panes[index];

  tab.addEventListener(`click`, (e) => {
    a(`.tab-item.active`).classList.toggle(`active`);
    a(`.tab-pane.active`).classList.toggle(`active`);

    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

    tab.classList.add("active");
    pane.classList.add("active");
  });
});
