function bin2dec() {
    var binary = document.getElementById('nun').value;
    var str = binary.toString();
    var isValid = /^[01]+$/.test(str);
    var outp = document.getElementById('output');
    if (isValid) {
        var decimal = parseInt(str, 2);
        outp.innerHTML = decimal;
        outp.classList.remove('error-message');
    } else {
        outp.innerHTML = "Enter a valid binary number (0 or 1).";
        output.classList.add('error-message');
    }
}

