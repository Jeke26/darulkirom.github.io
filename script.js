// Tangani form kontak
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  msg.innerText = "Terima kasih, pesanmu sudah terkirim!";
  msg.style.color = "green";
  form.reset();
});
