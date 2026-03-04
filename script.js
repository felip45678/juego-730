class Carta {
    constructor(arg1, arg2) {
        this.valor = parseFloat(arg1);
        this.url = arg2;
    }
}

// Asegúrate de tener aquí TODO tu array de cartas como lo tenías al principio
var arrayCartas = [
    new Carta(1, "imagenes/1oros.png"), new Carta(2, "imagenes/2oros.png"),
    new Carta(3, "imagenes/3oros.png"), new Carta(4, "imagenes/4oros.png"),
    new Carta(5, "imagenes/5oros.png"), new Carta(6, "imagenes/6oros.png"),
    new Carta(7, "imagenes/7oros.png"), new Carta(0.5, "imagenes/caballooros.png"),
    new Carta(0.5, "imagenes/reyoros.png"), new Carta(0.5, "imagenes/sotaoros.png"),
    // ... añade el resto aquí ...
];

var valorMax = 0; 
var maquinav = 0; 
var capaZ = 1;    

function SacarCarta() {
    if (valorMax <= 7.5) {
        var contenedor = document.getElementById("cartasJugador");
        var nuevaImagen = document.createElement("img");

        var indice = Math.floor(Math.random() * arrayCartas.length);
        var elegido = arrayCartas[indice];

        valorMax += elegido.valor;
        
        // --- ACTUALIZACIÓN DE PUNTUACIÓN EN TIEMPO REAL ---
        document.getElementById("letras").innerHTML = "Tu puntuación: " + valorMax;
        // --------------------------------------------------

        nuevaImagen.src = elegido.url;
        nuevaImagen.style.zIndex = capaZ;
        capaZ++;

        arrayCartas.splice(indice, 1);
        contenedor.appendChild(nuevaImagen);

        if (valorMax > 7.5) {
            document.getElementById("letras").innerHTML = "¡TE PASASTE! (" + valorMax + ")";
            document.getElementById("sacar").disabled = true;
            document.body.style.boxShadow = "inset 0 0 100px red"; 
        }
    }
}

const esperar = (segundos) => new Promise(resolve => setTimeout(resolve, segundos * 1000));

async function Plantarse() {
    // Bloqueamos botones para evitar clics extra
    document.getElementById("sacar").disabled = true;

    if (valorMax > 7.5) return; // Si ya perdió, no hace nada

    // Mientras la máquina tenga menos puntos que tú y no se pase de 7.5
    while (maquinav < valorMax && maquinav <= 7.5) {
        document.getElementById("letras").innerHTML = "La Máquina está pensando...";
        await esperar(0.8); 
        
        var contenedor = document.getElementById("cartasMaquina");
        var nuevaImagen = document.createElement("img");

        var indice = Math.floor(Math.random() * arrayCartas.length);
        var elegido = arrayCartas[indice];

        maquinav += elegido.valor;
        nuevaImagen.src = elegido.url;
        
        nuevaImagen.style.zIndex = capaZ;
        capaZ++;

        arrayCartas.splice(indice, 1);
        contenedor.appendChild(nuevaImagen);
    }

    // Lógica final de resultados
    if (maquinav > 7.5) {
        document.getElementById("letras").innerHTML = "¡HAS GANADO! La máquina se pasó con " + maquinav;
        document.body.style.boxShadow = "inset 0 0 100px green"; 
    } else if (maquinav >= valorMax) {
        document.getElementById("letras").innerHTML = "GANA LA MÁQUINA: " + maquinav + " vs " + valorMax;
        document.body.style.boxShadow = "inset 0 0 100px red";
    } else {
        document.getElementById("letras").innerHTML = "¡HAS GANADO! " + valorMax + " vs " + maquinav;
        document.body.style.boxShadow = "inset 0 0 100px green"; 
    }
}