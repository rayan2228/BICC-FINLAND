// Cache DOM elements
const tabButtons = Array.from(document.querySelector(".tab-btn").children);
const tabContents = document.querySelectorAll(".tab-content");
const donateElm = document.querySelectorAll(".donate");
const registerElm = document.querySelectorAll(".registerbtn");
const paymentModal = document.getElementById("paymentModal");
const registerModal = document.getElementById("registerModal");

// Utility function to open modal
const openModal = (modal) => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  modal.classList.replace("hidden", "flex");
};

// Utility function to close modal
const closeModal = (modal) => {
  modal.classList.replace("flex", "hidden");
  document.body.style.overflow = "auto";
};

// Register button event listeners
registerElm.forEach((elm) => {
  elm.addEventListener("click", () => openModal(registerModal));
});

// Donate button event listeners
donateElm.forEach((elm) => {
  elm.addEventListener("click", () => openModal(paymentModal));
});

// Tab switching functionality
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Remove active states from all buttons and contents
    tabButtons.forEach((btn) => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-secondary");
    });
    tabContents.forEach((content) => content.classList.remove("modal-active"));

    // Add active state to clicked button and corresponding content
    button.classList.remove("btn-secondary");
    button.classList.add("btn-primary");
    document.getElementById(tabId).classList.add("modal-active");
  });
});

// Close modals when clicking outside
const modals = [paymentModal, registerModal];
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});
