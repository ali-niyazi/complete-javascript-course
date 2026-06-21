"use strict";

/*
==================================================
1. DOM ELEMENT CACHING
==================================================
*/
// querySelectorAll returns a static NodeList containing all matching elements
const btnModals = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

/*
==================================================
2. UI STATE HANDLERS (DRY Principle)
==================================================
*/
// Encapsulated functions to manage repetitive ClassList mutations
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/*
==================================================
3. EVENT LISTENERS (Mouse Interaction)
==================================================
*/
// Iterating over the NodeList to attach listeners to all trigger buttons
for (let i = 0; i < btnModals.length; i++) {
  btnModals[i].addEventListener("click", openModal);
}

// Close modal via Close Button OR clicking the background Overlay
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*
==================================================
4. GLOBAL EVENT LISTENERS (Keyboard Interaction)
==================================================
*/
// Listening for the Escape key on the entire document object
document.addEventListener("keydown", function (e) {
  // Execute closure only if 'Escape' is pressed AND the modal is currently visible
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
