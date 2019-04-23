# Plantilla de webpack básica con {handlebars} y Vega Lite API 
Para instalar e iniciar:

`npm install`, después `npm start`

## Sobre las plantillas de {handlebars}
La plantilla compila el informe a partir de un `JSON` — que viene de un [ArchieML](http://archieml.org/) que habremos producido en un documento de Google, y que habremos publicado usando la página que se facilita en el taller.

Hay tres tipos de `blocks` prehechos: `text`, `graphic` y `scrolly`. Puedes hacer más — necesitarás de incluirlos en el `partial` `block.handlebars`. (El uso es un poco rebuscado, pero es lo más fácil, dado como funciona `handlebars-loader`)

En la carpeta `render` están todas las plantillas.

## Sobre Vega Lite API
[Vega-Lite tiene por fin una API de Javascript](https://observablehq.com/@vega/vega-lite-api) que te permite escribir especificaciones de Vega-Lite de manera programática. Para que cargar la visualización en página utilizamos Vega-Embed.

Ya hay [algún ejemplo para inspirarse](https://observablehq.com/collection/@vega/vega-lite-api)