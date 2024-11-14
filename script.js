document.addEventListener("DOMContentLoaded", () => {
  // Shopping Cart functionality
  let cart = [];

  // Variables for view cart modal
  const modal = document.querySelector(".hidden");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnsOpenModal = document.querySelector(".show-modal");

  // Open modal functionality
  const openModal = function () {
    modal.classList.remove("hidden");
  };

  // Close modal functionality
  const closeModal = function () {
    modal.classList.add("hidden");
  };

  // Open modal from view shopping cart
  btnsOpenModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    console.log("button clicked");
  });

  // Close modal from the modal X button
  btnCloseModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    console.log("button clicked");
  });

  // Add event listeners to add product buttons
  document.querySelectorAll(".addToCart").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("p").textContent;
      cart.push(productName);
      alert("Item added to the cart");
    });
  });

  // Check if the view cart button exists before adding the event listener
  if (btnsOpenModal) {
    btnsOpenModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      const cartModal = document.getElementById("cart-modal");
      if (cartModal) {
        const cartItemsDiv = cartModal.querySelector(".cart-items");
        cartItemsDiv.innerHTML = "";
        cart.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.textContent = item;
          cartItemsDiv.appendChild(itemDiv);
        });
      }
    });
  }

  // Clear cart functionality
  const clearCartButton = document.querySelector(".clear-cart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      if (cart.length > 0) {
        alert("Cart cleared");
        modal.classList.add("hidden");
        cart = [];
        const cartItemsDiv = document.querySelector(".cart-items");
        if (cartItemsDiv) {
          cartItemsDiv.innerHTML = "";
        }
      } else {
        alert("No items to clear");
      }
    });
  }

  // Process order functionality
  const processOrderButton = document.querySelector(".process-order");
  if (processOrderButton) {
    processOrderButton.addEventListener("click", () => {
      if (cart.length > 0) {
        alert("Thank you for your order");
        cart = [];
        const cartItemsDiv = document.querySelector(".cart-items");
        if (cartItemsDiv) {
          cartItemsDiv.innerHTML = "";
        }
        modal.classList.add("hidden");
      } else {
        alert("Cart is empty");
      }
    });
  }

  // Feedback form submission
  const feedbackForm = document.querySelector(".feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("click", (event) => {
      event.preventDefault();
      const customerName = document.getElementById("name");
      const customerEmail = document.getElementById("email");
      const customerMessage = document.getElementById("message");

      // Check if any field is empty
      if (
        (customerName.value.trim() === "",
        customerEmail.value.trim() === "",
        customerMessage.value.trim() === "")
      );
      {
        alert("Please include your name, email, and message.");
        return;
      }

      const formInput = new FormInput(event.target);
      console.log("Feedback submitted:",
        Object.FormInput(formInput.entries())
      );
      alert("Thank you for your message");
      event.target.reset();
    });
  }

  // Subscription functionality
  const subscribeButton = document.querySelector(".subscribe-button");
  if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
      alert("Thank you for subscribing");
    });
  }

  // Store data in local storage as JSON
  const userData = {
    username: "Ally Keightley",
    email: "allysonkeightley@outlook.com",
    message:
      "Hello! I am looking for some peonies to plant this fall. Do you have any in stock?",
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  // Retrieve data from local storage and parse it back to an object
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  console.log("User Data from Local Storage:", storedUserData);

  // Store data in session storage as JSON
  const sessionData = {
    sessionID: "123456",
    groups: ["GroupYoga", "GroupKickBoxing", "GroupPilates"],
  };

  sessionStorage.setItem("sessionData", JSON.stringify(sessionData));

  // Retrieve data from session storage and parse it back to an object
  const storedSessionData = JSON.parse(sessionStorage.getItem("sessionData"));
  console.log("Session Data from Session Storage:", storedSessionData);

  // Display local storage data on the webpage
  document.getElementById("localStorageData").textContent = JSON.stringify(
    storedUserData,
    2
  );

  // Display session storage data on the webpage
  document.getElementById("sessionStorageData").textContent = JSON.stringify(
    storedSessionData,
    2
  );
});

// Display of products on home page to be responsive
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}