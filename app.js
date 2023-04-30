let image = document.getElementById("show");
let password = document.getElementById("password");
let close = "/asssets/eye-close.svg";
let open = "/asssets/eye-open.svg";

function reveal() {
  if (password.type === "password") {
    password.type = "text";
    image.setAttribute("src", open);
  } else {
    password.type = "password";
    image.setAttribute("src", close);
  }
}

image.addEventListener("click", reveal);
