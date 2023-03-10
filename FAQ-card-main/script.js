`use strict`;

const boxItem = document.querySelectorAll(`.item`);

// const open = function () {
//   boxItem.forEach(() => {
//     this.classList.toggle(`open`);
//   });
// };
// boxItem.forEach((el) => el.addEventListener(`click`, open));
boxItem.forEach((el) =>
  el.addEventListener(`click`, function () {
    el.classList.toggle(`open`);
  })
);
