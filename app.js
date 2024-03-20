/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.
*/

function encryptMessage() {
  let textInput = document.getElementById("message").value;

  let result = textInput.replaceAll(/a|e|i|o|u/gi, function (vowel) {
    if (vowel === "a") {
      return "ai";
    }
    if (vowel === "e") {
      return "enter";
    }
    if (vowel === "i") {
      return "imes";
    }
    if (vowel === "o") {
      return "ober";
    }
    if (vowel === "u") {
      return "ufat";
    }

    return textInput;
  });

  document.getElementById("message").value = "";
  document.getElementById("tempMessage").style.display = "none";

  document.getElementById("newMessage").style.display = "block";

  const paragMessage = document.getElementById("txtMessage");
  paragMessage.innerHTML = result;

  document.getElementById("newMessage").style.display = "flex";
}

function decryptMessage() {
  let textInput = document.getElementById("message").value;

  let result = textInput.replaceAll(
    /ai|enter|imes|ober|ufat/gi,
    function (crypt) {
      // console.log(crypt);
      if (crypt === "ai") {
        return "a";
      }
      if (crypt === "enter") {
        return "e";
      }
      if (crypt === "imes") {
        return "i";
      }
      if (crypt === "ober") {
        return "o";
      }
      if (crypt === "ufat") {
        return "u";
      }
      return textInput;
    }
  );

  document.getElementById("message").value = "";
  document.getElementById("txtMessage").innerHTML = result;
}

// copy text function
function copyText() {
  let copyText = document.getElementById("txtMessage").innerText;

  navigator.clipboard.writeText(copyText);

  document.getElementById("copyMessage").innerHTML =
    "Message copied to clipboard!";
  setTimeout(() => {
    document.getElementById("copyMessage").innerHTML = "Copy message";
  }, 2000);
}
