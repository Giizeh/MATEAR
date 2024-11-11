let contador = 0; 

function sumar(){ 
  contador+=1;
  
  if (contador == 3){ 
    contador = 0;
  }
}

function restar(){
  contador-=1;

  if (contador == -1){
    contador = 2;
  }
}

function cambiarContenido(){
  
  document.getElementById("imagen").style.opacity=0.2;
  
  setTimeout(function() {
  
    document.getElementById("imagen").style.opacity=1;
    
  switch(contador){ 
      
    case 0:    document.getElementById("imagen").src= './assets/img/7.png';
      
      document.getElementById("titulo").innerHTML ="Cyber Monday";
      break;
      
    case 1:     document.getElementById("imagen").src= './assets/img/8.png';
      
      document.getElementById("titulo").innerHTML ="Cyber Monday";
      break;
      
      case 2:     document.getElementById("imagen").src= './assets/img/9.png';
      
      document.getElementById("titulo").innerHTML ="Cyber Monday";
      break; 
  }
 },125) 
}