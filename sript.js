document.querySelector(".book-btn").addEventListener("click", function(){
    alert(".Booking feature coming soon!");
});
// Form validation& local storage

document.querySelector(".booking-form").addEventListener("submit", function (event){
    event.preventDefault();

    const name = document.querySelector(".name").value;
    const date = document.querySelector(".date").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;

    if(name === ""|| date === ""|| email === ""){
        alert("please fill in all fields");

    } else{
        // create booking object
        const bookingData = {
        customerName: name,
        customerEmail:email,
        customerDate:date,
        customerMessage:message


    };
    // save to local storage
    localStorage.setItem(
        "latestBooking",
        JSON.stringify(bookingData)
    );

    // success message
    alert("Appointment booked successfully!");

}

    

});

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

