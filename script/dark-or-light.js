window.addEventListener("load", function () {
  const agora = new Date();
  const hora = agora.getHours();

  if (hora >= 18 || hora < 6) {
    document.querySelectorAll(".light").forEach(cls => {
      cls.classList.remove("light");
      cls.classList.add("dark");
    });
  }
});