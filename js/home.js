// Select all buttons with the class "toggle-btn"

const buttons = document.querySelectorAll("#readyBtn");

// Add an event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add the "active" class to the clicked button
    button.classList.add("active");
  });
});
