 /*********** Definición de la clase cubo ************/
  class Carta {
      constructor (arg1, arg2) {
          this.valor=parseFloat(arg1);
          this.url=arg2;
      }
      
    }
    /*********** Fin de la declaración de la clase ************/    
    /*********** Definición de funciones que usan los objetos ************/  
      
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
      var capaZ=0;
      function SacarCarta() {
          if (valorMax<=7.5) { 
            
            // 1. CREAMOS una nueva etiqueta <img>
            var nuevaImagen = document.createElement("img");

            // 2. Le asignamos la ruta de la carta
            var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
            var elegido = arrayCartas[cartaAleatoria];
            valorMax += elegido.valor;
            nuevaImagen.src = elegido.url;
             nuevaImagen.style.zIndex = capaZ; 
            capaZ++; //
            arrayCartas.splice(cartaAleatoria, 1); //array.splice(indice, cantidad);cantidad: Cuántos elementos quieres eliminar a partir de ahí (en nuestro caso, suele ser 1).
            console.log(arrayCartas.length);
            document.getElementById("cartasJugador").appendChild(nuevaImagen);
            if (valorMax > 7.5) {
            document.body.style.backgroundImage = "url(imagenes/perd.jpg)"; // Rojo
            document.getElementById("sacar").disabled = true; // Bloqueamos botones
            console.log("Te has pasado de 7.5. ¡Gana la máquina!");
            }
           
          }
      }
      
      // Esta constante toma el tiempo que debe esperar la promesa hasta seguir ejecutando el código
      const esperar = (segundos) => new Promise(resolve => setTimeout(resolve, segundos * 1000));
      
      var maquinav=0;
      // Se debe usar una async function para poder usar el await (y la promesa) 
      async function Plantarse() {
        document.getElementById("letras").innerHTML="Máquina";
        document.getElementById("sacar").disabled = true;
        // Si el jugador ya se pasó, no hace falta que la máquina saque cartas
    if (valorMax > 7.5) {
        document.body.style.backgroundImage = "url(imagenes/perd.jpg)";
        return; 
    }
        while(maquinav<valorMax && maquinav<=7.5){
             var nuevaImagen = document.createElement("img");
  
              // 2. Le asignamos la ruta de la carta
              var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
              var elegido = arrayCartas[cartaAleatoria];
              maquinav+= elegido.valor;
              nuevaImagen.src = elegido.url;
          
              arrayCartas.splice(cartaAleatoria, 1); //array.splice(indice, cantidad);cantidad: Cuántos elementos quieres eliminar a partir de ahí (en nuestro caso, suele ser 1).
              console.log(arrayCartas.length);
              document.getElementById("cartasMaquina").appendChild(nuevaImagen);
              await esperar(1); // Usamos el await para que la máquina no saque todas sus cartas de golpe  
            }
            if (maquinav > 7.5) {
         // La máquina se pasó. Gana el jugador.
         document.body.style.backgroundImage = "url(imagenes/gan.png)"; // Verde
     } 
     else if (maquinav >= valorMax) {
         // La máquina te iguala o supera sin pasarse. Gana la máquina.
         document.body.style.backgroundImage ="url(imagenes/perd.jpg)"; // Rojo (ejemplo)
     } 
     else {
         // Este caso se daría si tú te pasaste de 7.5 antes de darle a plantarse
         // o por alguna regla especial.
         document.body.style.backgroundImage = "url(imagenes/perd.jpg)"; // Rojo
     }
     console.log(maquinav);
     console.log(valorMax);

        }
            

    

