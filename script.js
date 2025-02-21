(function generateOTP(length = 6) {
    let otp = '';  
    
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);  
    }
    
   
    document.write(otp)
})
();

const body = document.body;
const toggleButton = document.getElementById('toggleButton');


if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});


  