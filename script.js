 /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=arg2;
        }
       
      }
      /*********** Fin de la declaración de la clase ************/    
      /*********** Definición de funciones que usan los objetos ************/  
       
        //Creación de los objetos
        var oro1 = new Carta(1,"imagenes/img1.webp");      
        var oro2 = new Carta(2,"imagenes/img2.webp");      
        var oro3 = new Carta(3, "imagenes/image3s.jpg"); 
        var oro4 = new Carta(1,"imagenes/img1.webp"); 
        var oro5 = new Carta(1,"imagenes/img1.webp"); 
        var oro6 = new Carta(1,"imagenes/img1.webp"); 
        var oro7 = new Carta(1,"imagenes/img1.webp"); 
        var oro8 = new Carta(1,"imagenes/img1.webp"); 
        var oro1 = new Carta(1,"imagenes/img1.webp"); 
        var oro1 = new Carta(1,"imagenes/img1.webp"); 


        var arrayCartas = [oro1,oro2,oro3];
        
        
        function mostrarCarta(){
           var elegido=arrayCartas[Math.floor(Math.random()*arrayCartas.length)];
           document.getElementById("demo").src=elegido.url;
        }
       

  