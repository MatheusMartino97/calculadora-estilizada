init();

function init() {
  document.getElementById("display").value = "";
}

function numberClick(num) {
  document.getElementById("display").value += num;
}

function opClick(op) {
  if (
    document.getElementById("display").value != "" &&
    document.getElementById("display").value != "-"
  ) {
    document.getElementById("display").value += op;
  }
}

function subtractClick(op) {
  if (document.getElementById("display").value != "-") {
    document.getElementById("display").value += op;
  }
}

function calculate() {
  if (document.getElementById("display").value != "") {
    let operation = document.getElementById("display").value;
    let result = eval(operation);

    document.getElementById("display").value = result;
  }
}
