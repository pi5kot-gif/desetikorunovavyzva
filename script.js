// --- Sdílení výzvy ---
const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Desetikorunová výzva 💛",
    text: "Pošli dobrovolný dar 10 Kč a pomoz změnit svět.",
    url: "https://pi5kot-gif.github.io/desetikorunovavyzva/"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      showToast("Díky, že výzvu sdílíš 💛");
    } catch {
      console.log("Sdílení zrušeno");
    }
  } else {
    navigator.clipboard.writeText(shareData.url);
    showToast("Odkaz na výzvu byl zkopírován do schránky 📋");
  }
});

// --- Toast oznámení ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// --- QR modál ---
const qrImage = document.getElementById("qrImage");
const qrModal = document.getElementById("qrModal");
const closeModal = document.getElementById("closeModal");
const donateStep = document.getElementById("donateStep");

function openModal() {
  qrModal.classList.add("show");
}

function closeModalFn() {
  qrModal.classList.remove("show");
}

qrImage.addEventListener("click", openModal);
donateStep.addEventListener("click", openModal);

closeModal.addEventListener("click", closeModalFn);
qrModal.addEventListener("click", (e) => {
  if (e.target === qrModal) closeModalFn();
});
