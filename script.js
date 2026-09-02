function goToPage(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

document.getElementById("enter-btn").addEventListener("click", () => goToPage("page-2"));
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => goToPage(`page-${btn.dataset.next}`));
});

function spawnPetals(){
  const layer = document.getElementById("petal-layer");
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const count = window.innerWidth < 600 ? 7 : 12;
  for(let i = 0; i < count; i++){
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${14 + Math.random() * 10}s`;
    petal.style.animationDelay = `${Math.random() * 14}s`;
    petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 60}px`);
    layer.appendChild(petal);
  }
}
spawnPetals();
