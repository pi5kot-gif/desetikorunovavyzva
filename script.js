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
      alert("Díky, že výzvu sdílíš 💛");
    } catch (err) {
      console.log("Sdílení zrušeno");
    }
  } else {
    navigator.clipboard.writeText(shareData.url);
    alert("Odkaz na výzvu byl zkopírován do schránky 📋");
  }
});
