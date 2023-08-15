document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    const errorMessage = document.querySelector(".error-message");
  
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match";
      return;
    }
  
    // You can perform additional validation and registration logic here
    // For this example, let's assume successful registration and clear any errors
    errorMessage.textContent = "";
  
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
  