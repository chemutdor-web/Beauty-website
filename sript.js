// Button click
document.querySelector(".book-btn").addEventListener("click", function () {
  alert("Booking feature coming soon!");
});

// Form Validation & local storage
document
  .querySelector(".booking-form")
  .addEventListener("submit", function (event) {
    const name = document.querySelector(".name").value;
    const date = document.querySelector(".date").value;
    const message = document.querySelector(".message").value;

    if (name === "" || date === "") {
      alert("please fill in all fields!");
      event.preventDefault();
    } else {
      // create booking objects
      const bookingData = {
        customerName: name,
        customerEmail:email,
        customerMessage:message


      };
      // convert the object to a string and save it
      localStorage.setItem("latestBooking", JSON.stringify(bookingData));

    //   succes message

      alert("Appointment booked succefully!");
    }
  });

// retrive data when the page loads
window.onload = function(){
    const saveData = localStorage.getItem("latestBooking");
    if(savedData){
        const booking = JSON.parse(savedData);
        console.log("Last bookingfound for:",booking.customersName);
    }
}

// image click effect
let images = document.querySelectorAll(".salon-image");

images.forEach(function (img) {
  img.addEventListener("click", function () {
    this.style.transform = "scale(1.2)";
    this.style.transition = "0.3s";
  });
});
