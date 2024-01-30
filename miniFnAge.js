function submitForm() {
    // Get the values from the input fields
    let name = document.getElementById("name").value;
    let birthdayString = document.getElementById("birthday").value;

    // Parse the birthday string into a Date object
    let birthday = new Date(birthdayString);

    // Get the current date
    let currentDate = new Date();

    // Check if the entered birthday is before today
    if (birthday <= currentDate) {
        // Clear the input fields
        document.getElementById("birthday").value = "";

        // Display a warning message
        let output = document.getElementById("output");
        output.innerHTML = "⚠️Please enter your next birthday, which is a date after current date.";

        // Prevent the form from submitting and refreshing the page
        return false;
    }

    // Calculate the countdown
    let countDown = birthday - currentDate;

    let countDownSec = Math.round(countDown / 1000);
    let countDownMin = Math.round(countDownSec / 60);
    let countDownhour = Math.round(countDownMin / 60);
    let countDownDay = Math.round(countDownhour / 24);

    // Get the output element
    let output = document.getElementById("output");

    // Update the output with the countdown information
    if(countDownDay === 1 || countDownDay === 0){
        output.innerHTML = "🎆🎆🎆Hello, " + name + "! There is only 1 day until your next birthday.🎆🎆🎆";
    }
    else{output.innerHTML = "🎆Hello, " + name + "! There are " + countDownDay + " days until your next birthday.🎆";}

    // Display the fireworks animation
    document.getElementById('firework').style.display = 'block';
    
    // Add the animation class after a slight delay to allow the output to render first
    setTimeout(function() {
        document.getElementById('firework').classList.add('fireworks-animation');
    }, 100);

    // Prevent the form from submitting and refreshing the page
    return false;
}
