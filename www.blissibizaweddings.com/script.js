const markers = Array.from(document.querySelectorAll(".map-marker"));
const cards = Array.from(document.querySelectorAll(".map-card"));
const tooltip = document.querySelector(".map-tooltip");
const yearEl = document.getElementById("currentYear");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const summaries = cards.reduce((acc, card) => {
  const summary = card.dataset.summary?.trim();
  if (summary) {
    acc[card.id] = summary;
  }
  return acc;
}, {});

let activeId = cards.find((card) => card.classList.contains("is-active"))?.id;

function activateLocation(id, force = false) {
  if (!id || !summaries[id]) return;
  if (!force && activeId === id) return;

  activeId = id;

  cards.forEach((card) => {
    card.classList.toggle("is-active", card.id === id);
  });

  markers.forEach((marker) => {
    marker.classList.toggle("is-active", marker.dataset.location === id);
  });

  if (tooltip) {
    tooltip.textContent = summaries[id];
    tooltip.classList.add("is-visible");
  }
}

markers.forEach((marker) => {
  const { location } = marker.dataset;
  marker.addEventListener("click", () => activateLocation(location));
  marker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateLocation(location);
    }
  });
  marker.addEventListener("mouseenter", () => activateLocation(location));
  marker.addEventListener("focus", () => activateLocation(location));
});

cards.forEach((card) => {
  const { id } = card;
  card.addEventListener("mouseenter", () => activateLocation(id));
  card.addEventListener("focusin", () => activateLocation(id));
});

if (activeId) {
  activateLocation(activeId, true);
}
