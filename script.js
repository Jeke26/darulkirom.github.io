// Tangani form kontak
// Load halaman dinamis
const content = document.getElementById("content");

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
      if(page === "contact") initForm(); // jika halaman contact
    })
    .catch(err => content.innerHTML = "<p>Halaman tidak ditemukan</p>");
}

// Event klik navbar
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    loadPage(page);
    window.scrollTo(0,0); // scroll ke atas
  });
});

// Form kontak
function initForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("msg");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      msg.innerText = "Terima kasih, pesanmu sudah terkirim!";
      msg.style.color = "green";
      form.reset();
    });
  }
}

// Load halaman default
loadPage("home");
