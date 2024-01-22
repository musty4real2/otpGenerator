let generate = () => {
    const otpLength = 6; // defining the length of OTP generated
    const otp = Math.floor(100000 + Math.random() * 900000); // random OTP generation

    document.getElementById('otpShow').textContent = otp;
};

document.getElementById('genButton').addEventListener("click", generate);
window.addEventListener("load", generate);