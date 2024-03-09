// function validateCredentials(email, password) {
//     // Email validation
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       console.log("Invalid email address.");
//       return false;
//     }
  
//     // Password validation
//     if (password.length < 8) {
//       console.log("Password must be at least 8 characters long.");
//       document.getElementById("password").style.borderColor = "red";
//       return false;
//     }
  
//     if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
//       console.log("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
//       document.getElementById("password").style.borderColor = "red";
//       return false;
//     }
  
//     console.log("Credentials are valid.");
//     document.getElementById("password").style.borderColor = "green";
//     return true;
//   }
  