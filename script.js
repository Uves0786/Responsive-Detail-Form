document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const FirstName = document.getElementById("firstname");
  const LastName = document.getElementById("lastname");
  const Email = document.getElementById("email");
  const Message = document.getElementById("message-input");
  const QueryButtons = document.querySelectorAll(
    'input[name="general-enquiry"]'
  );
  const Checkbox = document.querySelector(".me");
  const submitButton = document.getElementById("submit-button");
  const errorMessages = document.querySelectorAll(".paragraph");
  const successMessage = document.querySelector(".box");

  //   function success() {
  //     // if (
  //     //   Checkbox.checked != null &&
  //     //   Message.value !== null &&
  //     //   Email.value !== null &&
  //     //   LastName.value !== null &&
  //     //   FirstName.value != null
  //     // ) {
  //     //   const boxs = document.querySelect(".box");
  //     //   boxs.style.display = "block";
  //     // }
  //   }
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;

    // Check first name
    if (!FirstName.value) {
      FirstName.classList.add("error");
      FirstName.nextElementSibling.style.display = "block";
      valid = false;
    } else {
      FirstName.classList.remove("error");
      FirstName.nextElementSibling.style.display = "none";
    }

    // Check last name
    if (!LastName.value) {
      LastName.classList.add("error");
      LastName.nextElementSibling.style.display = "block";
      valid = false;
    } else {
      LastName.classList.remove("error");
      LastName.nextElementSibling.style.display = "none";
    }

    // Check email
    if (!Email.value) {
      Email.classList.add("error");
      Email.nextElementSibling.style.display = "block";
      valid = false;
    } else {
      Email.classList.remove("error");
      Email.nextElementSibling.style.display = "none";
    }

    // Check message
    if (!Message.value) {
      Message.classList.add("error");
      Message.nextElementSibling.style.display = "block";
      valid = false;
    } else {
      Message.classList.remove("error");
      Message.nextElementSibling.style.display = "none";
    }

    // Check query type
    let queryChecked = false;
    QueryButtons.forEach((button) => {
      if (button.checked) {
        queryChecked = true;
      }
    });

    if (!queryChecked) {
      QueryButtons[0].parentNode.parentNode.nextElementSibling.style.display =
        "block";
      QueryButtons.forEach((button) => button.classList.add("error"));
      valid = false;
    } else {
      QueryButtons[0].parentNode.parentNode.nextElementSibling.style.display =
        "none";
      QueryButtons.forEach((button) => button.classList.remove("error"));
    }

    // Check checkbox
    if (!Checkbox.checked) {
      Checkbox.classList.add("error");
      Checkbox.nextElementSibling.style.display = "block";
      valid = false;
    } else {
      Checkbox.classList.remove("error");
      Checkbox.nextElementSibling.style.display = "none";
    }

    if (valid) {
      form.submit();
    }
    if (valid) {
      successMessage.style.display = "block"; // Show success message
      setTimeout(() => {
        successMessage.style.display = "none"; // Hide success message after 3 seconds
        form.submit();
      }, 3000);
    }
  });
});
