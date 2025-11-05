// === QR MODÁL ===
document.addEventListener("DOMContentLoaded", () => {
  const qrModal = document.getElementById("qrModal");
  const qrImage = document.getElementById("qrImage");
  const donateStep = document.getElementById("donateStep");
  const closeModal = document.getElementById("closeModal");

  if (qrModal && qrImage && donateStep && closeModal) {
    const openModal = () => qrModal.classList.add("show");
    const closeModalFn = () => qrModal.classList.remove("show");

    qrImage.addEventListener("click", openModal);
    donateStep.addEventListener("click", openModal);
    closeModal.addEventListener("click", closeModalFn);

    qrModal.addEventListener("click", (e) => {
      if (e.target === qrModal) closeModalFn();
    });
  }

  // === SDÍLENÍ ===
  const shareButton = document.getElementById("shareButton");

  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareData = {
        title: "Desetikorunová výzva 💛",
        text: "Přidej se – 5 milionů lidí, každý pošle 10 Kč. Síla, která dokáže pomoct tam, kde je to potřeba.",
        url: "https://www.desetikorunovavyzva.cz/"
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(shareData.url);
          alert("Odkaz byl zkopírován do schránky 💛");
        }
      } catch (err) {
        console.error("Sdílení se nezdařilo:", err);
      }
    });
  }

  // === AKTUALIZACE STAVU ÚČTU ===
  async function updateProgress() {
    const API = "https://web-production-e164.up.railway.app/fio";
    try {
      const res = await fetch(API);
      const data = await res.json();
      const balance = parseFloat(data.balance || 0);
      document.getElementById("progress-text").innerHTML =
        `Na transparentním účtu je aktuálně: <strong>${balance.toLocaleString("cs-CZ")} Kč</strong>`;
    } catch (e) {
      console.error("❌ Chyba při načítání dat:", e);
      document.getElementById("progress-text").textContent = "Nelze načíst stav účtu 😔";
    }
  }

  updateProgress();
  setInterval(updateProgress, 60000);
});
