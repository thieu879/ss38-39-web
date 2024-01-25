let start = 1;

function next() {
  if (start < 4) {
    start++;
    updateSteps();
    updateButtons();
  }
}

function prev() {
  if (start > 1) {
    start--;
    updateSteps();
    updateButtons();
  }
}

function updateSteps() {
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById(`step${i}`);
    if (i <= start) {
      step.classList.add("mau");
    } else {
      step.classList.remove("mau");
    }
  }
}

function updateButtons() {
  let back = document.getElementById("back");
  let next = document.getElementById("next");

  back.disabled = start === 1;
  next.disabled = start === 4;
  if (back.disabled) {
    back.classList.add("disabled");
  } else {
    back.classList.remove("disabled");
  }

  if (next.disabled) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}
updateSteps();

updateButtons();
