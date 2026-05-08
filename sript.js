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


