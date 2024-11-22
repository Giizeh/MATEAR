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

document.addEventListener(
  "DOMContentLoaded", 
  e => { 
    var bouncer = new Bouncer('form', {
      disableSubmit: true,
      messageAfterField: true,
      customValidations: {
        contaseñasNoCoinciden: campo => {
          var selector = campo.getAttribute('data-bouncer-match');
          if (!selector) return false;
          var otroCampo = campo.form.querySelector(selector);
          if (!otroCampo) return false;
          return otroCampo.value !== campo.value;
        }
      },
      messages: {
        contaseñasNoCoinciden: campo => {
          var customMessage = campo.getAttribute('data-bouncer-mismatch-message');
          return customMessage ? customMessage : 'Las contraseñas deben coincidir'
        },
        missingValue: {default: 'Por favor ingresa este dato.'},
        patternMismatch: {email: 'Por favor ingresa un email válido.'},
        wrongLength: {under: 'Por favor ingresa {minLength} dígitos o más. Hasta ahora ingresaste solo {length}.'}
      }
    });

    document.addEventListener(
      'bouncerFormInvalid', 
      event => {
        window.scrollTo(0, event.detail.errors[0].offsetTop);
      }, 
      false
    );

    document.addEventListener(
      'bouncerFormValid', 
      () => {
        var url = 'https://codepen.io/lucasn1974/pen/yQrZma'

        fetch('registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            contraseña: sha3_512(sha3_512(document.getElementById('contraseña').value) + url)
          })
        })
      }, 
      false
    );
  }
)
// Seleccionar el contenedor por ID
const container = document.getElementById("Container");

// Agregar un nuevo atributo
container.setAttribute("data-visible", "true");

// Cambiar un estilo dinámicamente
container.style.backgroundColor = "#d1f7d6";

// Mostrar un atributo en la consola
console.log(container.getAttribute("data-role"));
