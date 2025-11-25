const tabButtons = Array.from(document.querySelector(".tab-btn").children);
const tabContents = document.querySelectorAll(".tab-content");
const donateElm = Array.from(document.getElementsByClassName("donate"));

donateElm.forEach((elm) => {
  elm.addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    paymentModal.classList.replace("hidden", "flex");
  });
});

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

// Close modal functionality
const paymentModal = document.getElementById("paymentModal");

// Close modal when clicking outside
paymentModal.addEventListener("click", (e) => {
  if (e.target === paymentModal) {
    paymentModal.style.display = "none";
  }
});
