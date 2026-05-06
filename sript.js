// Button click
document.querySelector("book-btn").addEventListener("click",function(){
    alert("Booking feature coming soon!");
})

// Form Validation
document.querySelector(".booking-form").addEventListener("submit",function(event{
    let name=document.querySelector(".name").value;
    let date=document.querySelector(".date").value;

    if(name ===""|| date ===""){
        alert("please fill in all fields!");
        event.preventDefault();
    }else{
        alert("Appointment booked succefully!");
    }

});

// image click effect
let images= document.querySelectorAll(".salon-image");

images.forEach(function(img){
    img.addEventListener("click",function(){
        this style.transform = "scale(1.2");
        this.style.transiyion = "0.3s";
    });
});
