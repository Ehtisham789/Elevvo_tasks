const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const overlay = document.getElementById("overlay");
const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

toggleBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.querySelector(".text").textContent;

    menuItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(targetId).classList.add("active");

    if (window.innerWidth <= 768) toggleSidebar();
  });
});
