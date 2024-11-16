   const cart = [];
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


  // Close modal from the modal X button
  if (btnCloseModal) {
  btnCloseModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    console.log("button clicked");
  });}

  // Add cart items to session storage
  function addToCart(productName)
  {
     cart.push(productName);
     sessionStorage.setItem("productName", JSON.stringify(cart));
  }

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
          addToCart;
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
        const cart = [];
        modal.classList.add("hidden");
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
        sessionStorage.removeItem("cartItemsDiv");
        displayCartItemsDiv();
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
  const feedbackForm = document.querySelector(".submitFeedback");
  if (feedbackForm) {
    feedbackForm.addEventListener("click", () => {
      console.log("click");
      alert("Thank you for your message");
    }); }

    //Create function of submit form for feedback form button
    function submitForm()
    {
               const name = document.getElementById("fbName").value;
               const email = document.getElementById("fbEmail").value;
               const phone = document.getElementById("fbPhone").value;
               const feedback = document.getElementById("fbFeedback").value;
               const customOrder = document.getElementById("fbCustom-order").checked;
               const customerInfo = {
                       name, email, phone, feedback, customOrder
               };
               const keyValue = name;
               //save customer information to localStorage
               localStorage.setItem(keyValue, JSON.stringify(customerInfo));
               //access and parse local data back out of localStorage. 
               const who = JSON.parse( localStorage.getItem(name) );
               alert("Thank you for your message, "+ who.name +"!");
    }

    
// Subscription functionality
const subsciptionForm = document.querySelector(".subscribeButton");
    subsciptionForm.addEventListener("click", () => {
      console.log("button clicked");
      alert("Thank you for subscribing");
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