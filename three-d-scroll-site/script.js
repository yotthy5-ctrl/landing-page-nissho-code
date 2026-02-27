const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("close");
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.opacity = "1";
      modal.querySelector(".modal-content").style.transform = "scale(1)";
    }, 10);
    modalImg.src = this.src;
    modalText.textContent = this.getAttribute("data-text");
  });
});

closeBtn.addEventListener("click", function() {
  modal.style.opacity = "0";
  modal.querySelector(".modal-content").style.transform = "scale(0.8)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});