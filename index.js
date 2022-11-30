let isModalOpen = false;
const scaleFactor = 1 / 20;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open";

}