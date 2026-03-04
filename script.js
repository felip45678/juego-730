class Carta {
    constructor(arg1, arg2) {
        this.valor = parseFloat(arg1);
        this.url = arg2;
    }
}

//Creación de los objetos
      var oros1 = new Carta(1,"imagenes/1oros.png");      
      var oros2 = new Carta(2,"imagenes/2oros.png");      
      var oros3 = new Carta(3, "imagenes/3oros.png"); 
      var oros4 = new Carta(4,"imagenes/4oros.png"); 
      var oros5 = new Carta(5,"imagenes/5oros.png"); 
      var oros6 = new Carta(6,"imagenes/6oros.png"); 
      var oros7 = new Carta(7,"imagenes/7oros.png"); 
      var caballooros = new Carta(0.5,"imagenes/caballooros.png"); 
      var reyoros = new Carta(0.5,"imagenes/reyoros.png"); 
      var sotaoros = new Carta(0.5,"imagenes/sotaoros.png"); 
      var bastos1 = new Carta(1,"imagenes/1bastos.png"); 
      var bastos2 = new Carta(2,"imagenes/2bastos.png"); 
      var bastos3 = new Carta(3,"imagenes/3bastos.png"); 
      var bastos4 = new Carta(4,"imagenes/4bastos.png");
      var bastos5 = new Carta(5,"imagenes/5bastos.png");
      var bastos6 = new Carta(6,"imagenes/6bastos.png");
      var bastos7 = new Carta(7,"imagenes/7bastos.png"); 
      var caballobastos = new Carta(0.5,"imagenes/caballobastos.png"); 
      var reybastos = new Carta(0.5,"imagenes/reybastos.png"); 
      var sotabastos = new Carta(0.5,"imagenes/sotabastos.png"); 
      var espadas1 = new Carta(1,"imagenes/1espadas.png");
      var espadas2 = new Carta(2,"imagenes/2espadas.png");
      var espadas3 = new Carta(3,"imagenes/3espadas.png");
      var espadas4 = new Carta(4,"imagenes/4espadas.png");
      var espadas5 = new Carta(5,"imagenes/5espadas.png");
      var espadas6 = new Carta(6,"imagenes/6espadas.png");
      var espadas7 = new Carta(7,"imagenes/7espadas.png");
      var caballoespadas = new Carta(0.5,"imagenes/caballoespadas.png"); 
      var reyespadas = new Carta(0.5,"imagenes/reyespadas.png"); 
      var sotaespadas = new Carta(0.5,"imagenes/sotaespadas.png"); 
      var copas1 = new Carta(1,"imagenes/1copas.png");
      var copas2 = new Carta(2,"imagenes/2copas.png");
      var copas3 = new Carta(3,"imagenes/3copas.png");
      var copas4 = new Carta(4,"imagenes/4copas.png");
      var copas5 = new Carta(5,"imagenes/5copas.png");
      var copas6 = new Carta(6,"imagenes/6copas.png");
      var copas7 = new Carta(7,"imagenes/7copas.png");
      var caballocopas = new Carta(0.5,"imagenes/caballocopas.png"); 
      var reycopas = new Carta(0.5,"imagenes/reycopas.png"); 
      var sotacopas = new Carta(0.5,"imagenes/sotacopas.png"); 
    
      var arrayCartas = [oros1,oros2,oros3,oros4,oros5,oros6,oros7,caballooros,reyoros,sotaoros,
                          copas1,copas2,copas3,copas4,copas5,copas6,copas7,caballocopas,reycopas,sotacopas,
                          espadas1,espadas2,espadas3,espadas4,espadas5,espadas6,espadas7,caballoespadas,reyespadas,sotaespadas,
                          bastos1,bastos2,bastos3,bastos4,bastos5,bastos6,bastos7,caballobastos,reybastos,sotabastos];
      
      var valorMax = 0;


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