// navbar
let burgerIcon = <HTMLDivElement>document.getElementById("burgerIcon"),
  ulNavBar = <HTMLUListElement>document.getElementById("ulNavBar"),
  anchorsNavBar = <HTMLAnchorElement[]> Array.from(document.querySelectorAll("#ulNavBar li a")),
  // Sections
  aboutSection = <HTMLDivElement>document.getElementById("About"),
  skillsSection = <HTMLDivElement>document.getElementById("Skills"),
  projectsSection = <HTMLDivElement>document.getElementById("Projects"),
  contactSection = <HTMLDivElement>document.getElementById("Contact"),
  containers = <HTMLDivElement[]>Array.from(document.querySelectorAll(".containerAnimation")),
  fillProgress = <HTMLSpanElement[]>Array.from(document.querySelectorAll(".fill-progress"))

handleNavBar();

window.addEventListener("scroll", () => {
  // Active Links
  handleScrollNavbar()
  // containers
  if (window.scrollY >= aboutSection.offsetTop - 200) {
    containers[0].classList.add("fadeInDown")
  }
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    containers[1].classList.add("fadeInDown")
    setTimeout (() => {
      fillProgress.forEach((span) => span.style.width = `${span.dataset.progress}`)
    }, 200) 
  }
  if (window.scrollY >= projectsSection.offsetTop - 500) {
    containers[2].classList.add("fadeInDown")
  }
  if (window.scrollY >= contactSection.offsetTop - 700) {
    containers[3].classList.add("fadeInDown")
  }
}) 

function handleScrollNavbar(): void {
  function addAndRemoveActive(activeLink: HTMLAnchorElement) {
    anchorsNavBar.forEach((a) => a.classList.remove("active"));
    activeLink.classList.add("active");
  }
  if ( window.scrollY < aboutSection.offsetTop - 120 ) {
    anchorsNavBar.forEach((a) => a.classList.remove("active"));
  }
  if (window.scrollY >= aboutSection.offsetTop - 120) {
    addAndRemoveActive(anchorsNavBar[0])
  }
  if (window.scrollY >= skillsSection.offsetTop - 120) {
    addAndRemoveActive(anchorsNavBar[1])
  }
  if (window.scrollY >= projectsSection.offsetTop - 400) {
    addAndRemoveActive(anchorsNavBar[2])
  }
  if (window.scrollY >= contactSection.offsetTop - 400) {
    addAndRemoveActive(anchorsNavBar[3])
  }
}

burgerIcon.onclick = (): void => { 
  ulNavBar.classList.toggle("ul-flex");
}

window.addEventListener("resize", () => {
  handleNavBar();
});

function handleNavBar(): void {
  if (window.innerWidth <= 600) {
      anchorsNavBar.forEach((a) => a.addEventListener("click", function () {
      ulNavBar.classList.remove("ul-flex");
    }));
  }
}