# PROJECT NAME
Reto 1

Primer reto para Front-End de la Hackathon, consiste en la visualizacion de unos componentes en PC y Movil/Tablet.

## Usage
El uso de este proyecto es ver como cambia la distribución del componente dependiendo del dispositivo en el que estemos. Para ello se ha usado HTML5, CSS3 y Javascript, todo esto con la libreria React. Para poder hacer los cambios de distribución, se han usado media queries de CSS3. Para los datos se han usado unos datos de prueba, y se han iterado esos datos para generar mas de un componente en pantalla.

## API/Component
Los componentes estan divididos en dos, el componente Regalo que es cada regalo que se muestra en pantalla y contiene un titulo, descripcion y una array de tags, y el PageRegalos que es el componente que muestra los regalos en pantalla y pasa la información por props al componente Regalo. A este último se le pasa el título de la página por props.
Los componentes estan hechos a traves de StoryBook ya que es un requerimento del reto.

Al clickar uno de los Regalos en pantalla se muestra un el item que has clickado en la consola. Quedaria así para poder implementar alguna funcion en un futuro. 

## Installation
Esta subido en Vercel a esta direccion para poder probar su funcionalidad sin tener que descargar el código: https://hackathon-job-arcelona22-87qpbt9m9-balhus.vercel.app/

Para poder ejecutarlo, hay que seguir los pasos mencionados abajo.
En caso de ya estar en la carpeta del proyecto, podemos saltarnos el comando "cd Reto1"

```shell
    #Clone or install commands
    git clone https://github.com/Balhus/Hackathon-JOBarcelona22.git
    cd Reto1
    npm i 
    npm run dev 
```

## License 
[MIT](https://opensource.org/licenses/MIT)

