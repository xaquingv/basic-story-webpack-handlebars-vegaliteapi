import * as vl from 'vega-lite-api'
import vegaEmbed from 'vega-embed'
import denuncias from '../data/denuncias_tiempo.json'

document.addEventListener('articleRendered', () =>{
  init();
})

function init() {

  const div = document.querySelector('.js-test');

  const provincias = [... new Set(denuncias.map(d=> d.provincia))]

  const data = {values:denuncias}

  const selectProvincia = vl.selectSingle('Select')
    .fields('provincia')
    .bind(vl.menu(provincias)); 

  const plot = vl.markLine()
    .data(data)
    .select(selectProvincia)
    .transform(
      vl.filter('datum.tipo === "DENUNCIAS RECIBIDAS - TOTAL"')
    )
    .encode(
      vl.x().fieldT('anos'),
      vl.y().fieldQ('numero'),
      vl.detail().fieldN('provincia'),
      vl.opacity().if(selectProvincia, vl.value(1)).value(0.5)
    )
    .width(div.getBoundingClientRect().width)
    .height(div.getBoundingClientRect().height)
    .autosize({type: 'fit', contains: 'padding'})
    .toJSON();

  vegaEmbed('.js-test', plot);

}