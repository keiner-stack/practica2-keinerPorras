async function cargarSaludo() {
 const res = await fetch("/api/saludo");
 const data = await res.json();
 document.getElementById("mensaje").textContent = data.mensaje;
}
cargarSaludo();