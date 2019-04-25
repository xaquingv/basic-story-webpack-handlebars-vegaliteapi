import * as vl from 'vega-lite-api'
import vegaEmbed from 'vega-embed'
import denuncias from '../data/denuncias_tiempo.json'

document.addEventListener('articleRendered', () =>{
  init();
})

function init() {

  const div = document.querySelector('.js-test');
  const width = div.getBoundingClientRect().width;
  const height = div.getBoundingClientRect().height;

  const data = {values: denuncias};

  const plot = vl.markBar({stroke:"#FFF", fill:"#505050"})
    .data(data)
    .transform(
      vl.filter("datum.provincia === 'ALMERIA' && datum.tipo === 'DENUNCIAS RECIBIDAS - TOTAL'")
    )
    .encode(
      vl.x().fieldO('anos'),
      vl.y().fieldQ('numero')
    )
    .width(width)
    .height(height)
    .autosize({"type": "fit","contains": "padding"})
    .toJSON()

  vegaEmbed('.js-test', plot)


}