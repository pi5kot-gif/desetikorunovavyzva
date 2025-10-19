// celé políčko "Sdílej výzvu" je klikací
const shareCard = document.getElementById("shareStep");

shareCard.addEventListener("click", async () => {
  const shareData = {
    title: "Desetikorunová výzva 💛",
    text: "Pošli dobrovolný dar 10 Kč a pomoz změnit svět.",
    url: "https://pi5kot-gif.github.io/desetikorunovavyzva/"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      showToast("Díky, že výzvu sdílíš 💛");
    } catch (err) {
      console.log("Sdílení zrušeno");
    }
  } else {
    navigator.clipboard.writeText(shareData.url);
    showToast("Odkaz na výzvu byl zkopírován do schránky 📋");
  }
});

// 🟡 jednoduchý toast (moderní oznámení)
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
