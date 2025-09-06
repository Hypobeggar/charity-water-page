// Select all donation option buttons
const donationButtons = document.querySelectorAll('.donation-options button');

donationButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    donationButtons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' to the clicked one
    button.classList.add('active');
  });
});