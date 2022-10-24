function insert(num) {
  var numero = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numero + num;
}

function clean() {
  document.getElementById("result").innerHTML = "";
}
clean()


function back() {
  var result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}

function calculate() {
  var resutado = document.getElementById("result").innerHTML;
  if (result) {
    document.getElementById("result").innerHTML = eval(resutado);
  } else {
    document.getElementById("result").innerHTML = "Calcular"
  }
}