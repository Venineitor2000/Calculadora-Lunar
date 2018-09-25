var Peso;
var PesoFinal;
var Texto = document.getElementById("Txt_Peso");
var Boton_Luna_Apretado = document.getElementById("Luna_Boton");
var Boton_Marte_Apretado = document.getElementById("Marte_Boton");
var Boton_Jupiter_Apretado = document.getElementById("Jupiter_Boton");

Boton_Luna_Apretado.addEventListener ("click", ElegirLuna);
Boton_Marte_Apretado.addEventListener ("click", ElegirMarte);
Boton_Jupiter_Apretado.addEventListener ("click", ElegirJupiter);

function ElegirLuna(tag, texto)
{
  Peso = Texto.value;
  Peso = parseInt(Peso);
  if (Peso >= 0)
  {PesoFinal = (Peso / 9.81) * 1.622;
  PesoFinal = parseInt(PesoFinal);
  tag = document.createElement("p");
  texto = document.createTextNode("Tu peso en Jupiter seria de: " + PesoFinal + "kg");
  tag.appendChild(texto);
  document.body.appendChild(tag);
}
}

function ElegirMarte(tag, texto)
{
  Peso = Texto.value;
  Peso = parseInt(Peso);
  if (Peso >= 0)
 {
  PesoFinal = (Peso / 9.81) * 3.7;
  PesoFinal = parseInt(PesoFinal);
  tag = document.createElement("p");
  texto = document.createTextNode("Tu peso en Jupiter seria de: " + PesoFinal + "kg");
  tag.appendChild(texto);
  document.body.appendChild(tag);
}
}
function ElegirJupiter(tag, texto)
{
  Peso = Texto.value;
  Peso = parseInt(Peso);
  if (Peso >= 0)
  {
  PesoFinal = (Peso / 9.81) * 24.8;
  PesoFinal = parseInt(PesoFinal);
  tag = document.createElement("p");
  texto = document.createTextNode("Tu peso en Jupiter seria de: " + PesoFinal + "kg");
  tag.appendChild(texto);
  document.body.appendChild(tag);

}
}
