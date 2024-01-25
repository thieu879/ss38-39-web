document.addEventListener("DOMContentLoaded", function () {
    let number1 = document.querySelector(".tw");

    function run1() {
      let number = 1;

      function updateNumber() {
        number1.textContent = number;
        number++;

        if (number <= 12000) {
          setTimeout(updateNumber, 0.02);
        }
      }

      updateNumber();
    }

    run1();
  });

  document.addEventListener("DOMContentLoaded", function () {
    let number1 = document.querySelector(".ytb");

    function run1() {
      let number = 1;

      function updateNumber() {
        number1.textContent = number;
        number++;

        if (number <= 5000) {
          setTimeout(updateNumber, 0.02);
        }
      }

      updateNumber();
    }

    run1();
  });
  document.addEventListener("DOMContentLoaded", function () {
    let number1 = document.querySelector(".fb");

    function run1() {
      let number = 1;

      function updateNumber() {
        number1.textContent = number;
        number++;

        if (number <= 7500) {
          setTimeout(updateNumber, 0.02);
        }
      }

      updateNumber();
    }

    run1();
  });