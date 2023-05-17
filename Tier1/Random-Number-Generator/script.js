function generator() {
    const range1Input = document.getElementById("range1");
    const range2Input = document.getElementById("range2");
    const amountSelect = document.getElementById("amount");
    const generateButton = document.querySelector(".button-container button");
    const msg = document.getElementById("msg");
  
    generateButton.addEventListener("click", generateRandomNumbers);
  
    function sortNumbers(a, b) {
      return a - b;
    }
  
    const numberTypeSelect = document.getElementById("numberType");

    function generateRandomNumbers() {
      const range1 = parseInt(range1Input.value);
      const range2 = parseInt(range2Input.value);
      const amount = parseInt(amountSelect.value);
  
      if (Number.isNaN(range1) || Number.isNaN(range2) || Number.isNaN(amount)) {
        msg.innerHTML = "Please enter valid numerical values.";
        return;
      }
  
      if (range1 >= range2) {
        msg.innerHTML = "The Range 1 value must be less than the Range 2 value.";
        return;
      }
  
      const numberType = numberTypeSelect.value;

      const randomNumbers = new Set();
      while (randomNumbers.size < amount) {
        let randomNumber;
  
        if (numberType === "integer") {
          randomNumber = Math.floor(Math.random() * (range2 - range1 + 1) + range1);
        } else if (numberType === "negative") {
          randomNumber = Math.floor(Math.random() * (range2 - range1 + 1) + range1) * -1;
        } else if (numberType === "decimal") {
          randomNumber = Math.random() * (range2 - range1) + range1;
        }
  
        randomNumbers.add(randomNumber);
      }
  
      const sortedNumbers = Array.from(randomNumbers).sort(sortNumbers);
  
      msg.innerHTML = sortedNumbers.join(", ");
    }
  }
  generator();
  