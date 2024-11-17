  //Get items from session storage OR empty array.
  var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

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

  /* Open modal from view shopping cart
  btnsOpenModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    console.log("button clicked");
  });  */

  // Close modal from the modal X button
  btnCloseModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    console.log("button clicked");
  }); 

  // Add items to cart and session storage
  document.querySelectorAll(".addToCart").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("p").textContent;
      cartItems.push(productName);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Item added to the cart");
    });
  });

  // add items to modal
  if (btnsOpenModal) {
    btnsOpenModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      const cartModal = document.getElementById("cart-modal");
      if (cartModal) {
        const cartItemsDiv = cartModal.querySelector(".cart-items");
        cartItemsDiv.innerHTML = "";
        cartItems.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.textContent = item;
          cartItemsDiv.appendChild(itemDiv);
        });
      }
    });
  }

  // Clear cart 
  const clearCartButton = document.querySelector(".clear-cart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      if (cartItems.length > 0) {
        alert("Cart cleared");
        modal.classList.add("hidden");
        cartItems = [];
        sessionStorage.removeItem("cartItems");
        const cartItemsDiv = document.querySelector(".cart-items");
        if (cartItemsDiv) {
          cartItemsDiv.innerHTML = "";
        }
      } else {
        alert("No items to clear");
      }
    });
  }

  // Process order
  const processOrderButton = document.querySelector(".process-order");
  if (processOrderButton) {
    processOrderButton.addEventListener("click", () => {
      if (cartItems.length > 0) {
        alert("Thank you for your order");
        cartItems = [];
        sessionStorage.removeItem("cartItems");
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
 function submitForm(){
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const feedback = document.getElementById("message").value;
      const customOrder = document.getElementById("custom-order").checked;
      const customerInfo = {
             name, email, phone, feedback, customOrder
     };
    
     const keyValue = name;

     //save customer information to localStorage
      localStorage.setItem(keyValue, JSON.stringify(customerInfo));

      //get and parse local data out of localStorage. 
      const who = JSON.parse( localStorage.getItem(name) );
      alert("Thank you for your message, "+ who.name +"!");
      }

      // // Subscription 
      const subscribeButton = document.querySelector(".subSubmit");
        if (subscribeButton) {
          subscribeButton.addEventListener("click", () => {
          alert("Thanks for subscribing!");
         });
  }

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