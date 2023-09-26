/* 1. Por un lado habrás de crear una variable `cargador` donde habrá de guardar unos 7 **_"pium!"_**

2. El otro elemento será nuestra **chauchat**, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

    `chauchat(cargador)`

    Cuando ejecutemos dicho código, veremos impresos todos los **_"pium!"_** del cargador, uno tras otro.

    En el caso de 3 **_"pium!"_** en el cargador, veremos en la consola:

    ```
    pium!
    pium!
    pium!
    ``` */

    var cargador=["pium!","pium!","pium!","pium!","pium!","pium!","pium!"]

 
    function chauchat(cargador){
        for (let i=0; i<=cargador.length;i++){
            let randomNumber= Math.floor(Math.random()*10);
            if(randomNumber>=8){
                console.log("Illo, me he quedao pillá!")
            }
          if( i==!0 && i%3===0){
                console.log('espacio')
            }
            else {
                console.log('pium!')
            }
        }
    }
chauchat(["pium!","pium!","pium!","pium!","pium!","pium!","pium!"]);

/*     _Zona premium:_

Representaremos los 2 principales problemas:

3. Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita".

    Digamos que existe un 80% de probabilidad de que se quede "pillada":

    - Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: _"Illo, me he quedao pillá!"_

    En este enlace sabrás cómo generar números aleatorios: [Math.random()](https://www.w3schools.com/js/js_random.asp)

4. Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:

    ```
    pium!
    pium!
    pium!

    pium!
    pium!
    pium!

    pium!
    pium!
    pium!
    ``` */