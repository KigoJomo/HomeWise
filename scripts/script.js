const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const container = document.querySelector(".container");
const sections = document.querySelectorAll("section");
const sectionAnchors = document.querySelectorAll(".section-anchor");

function HandleScroll() {
  sections.forEach((section) => {
    if (elementIsVisibleInViewport(section)) {
      const sectionId = section.id;
      //get the id of the section that is currently in view
      const sectionAnchor = document.querySelector(`a[href="#${sectionId}"]`);
      //get the anchor element that points to the section in view
      sectionAnchors.forEach((anchor) => anchor.classList.remove("active"));
      //remove the active class from all sections
      sectionAnchor.classList.add("active");
      //add the active class to the anchor whose target is in view
    }
  });
}
HandleScroll();
container.addEventListener("scroll", HandleScroll);

sectionAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    sectionAnchors.forEach((link) => link.classList.remove("active"));
    anchor.classList.add("active");
  })
})

const clientsContainer = document.querySelector(".clients-container");
const leftClients = document.querySelectorAll(".client-left");
const rightClients = document.querySelectorAll(".client-right");
leftClients.forEach((client) => {
  client.addEventListener("mouseover", () => {
    clientsContainer.style.scrollBehaviour = 'smooth'; clientsContainer.scrollLeft -= client.offsetWidth*3;
  })
})
rightClients.forEach((client) => {
  client.addEventListener("mouseover", () => {
    clientsContainer.style.scrollBehaviour = "smooth";
    clientsContainer.scrollLeft += client.offsetWidth*3;
  })
})

const pricingContainer = document.querySelector(".pricing-plans");
const plansButton = document.getElementById("plans-btn");
const tints = document.querySelectorAll(".tint");
plansButton.addEventListener("click", () => {
  pricingContainer.style.display = "flex";
})
tints.forEach((tint) => {
  tint.addEventListener("click", () => {
    pricingContainer.style.display = "none";
  })
})
