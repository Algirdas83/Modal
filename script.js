'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
///Mano varijantas
// const closeModal = element => {
//   element.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
//};
//Jono varijantas
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Jono varijantas
const closeModel2 = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);
//// model closing
/// mano varijantas
// closeModal(btnCloseModal);
// closeModal(overlay);
///////////////////////////
///Jono varijntas
btnCloseModal.addEventListener('click', closeModel2);

overlay.addEventListener('click', closeModel2);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModel2();
});
