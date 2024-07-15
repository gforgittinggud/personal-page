function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open"); // appends the open word to the end of the class name, making it a subclass
  icon.classList.toggle("open");
}

function toggleList() {
  const elements = document.querySelectorAll("#skills, #skills-list");

  elements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });

  const button = document.getElementById("buttonToggleList");
  button.textContent =
    button.textContent === "List View" ? "Tree View" : "List View";
}

function sendEmail() {
  event.preventDefault();
  var submitted = document.getElementById("submitted");
  if (submitted.textContent == "submitted") {
    alert("You have already submitted the Form.");
    return;
  }
  var msg = document.getElementById("error-message");
  if (msg === null) {
    msg.textContent = "";
  }
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("text").value;

  if (!name || !email || !text) {
    document.getElementById("error-message").textContent =
      "All fields are required.";
    return;
  }


  axios
    .post(`https://servernode345345.site/send-email`, {
      name: name,
      email: email,
      text: text,
    })
    .then((response) => {
      alert("Form submitted successfully!");
      document.getElementById("submitted").textContent = "submitted";
    })
    .catch((error) => {
      alert("An issue occured on the server, Please try again.");
    });
}

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     var submitted = document.getElementById("submitted");
//     if (submitted.textContent == "submitted") {
//       alert("You have already submitted the Form.");
//       return;
//     }

//     event.preventDefault();

//     var msg = document.getElementById("error-message");
//     if (msg === null) {
//       msg.textContent = "";
//     }
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("comment").value;

//     if (!name || !email || !message) {
//       document.getElementById("error-message").textContent =
//         "All fields are required.";
//       return;
//     }

//   });

// function checkScreenSize() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const desiredWidth = 850;
//     const desiredHeight = 800;

//     if (width <= desiredWidth || height <= desiredHeight) {

//     }
// }

// window.onload = checkScreenSize;
// window.addEventListener('resize', checkScreenSize);
