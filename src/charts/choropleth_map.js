import * as vl from 'vega-lite-api'
import vegaEmbed from 'vega-embed'
import denuncias from '../data/denuncias.json'
import spain from '../data/espana.json'

document.addEventListener('articleRendered', () =>{
  init();
})

function init() {

  const el = document.querySelector('.js-test');

  const data = {values:denuncias}

  const plot = vl.markGeoshape()
    .data(vl.topojson(spain).feature('espana'))
    .project('conicEqualArea')
    .transform(
      vl.lookup('id').from(vl.data(data).key('id').fields('den_per_10000'))
    )
    .encode(
      vl.color().fieldQ('den_per_10000').scale({domain: [30, 120]}),
      vl.tooltip().fieldQ('den_per_10000').format('.0f')
    )
    .width(el.getBoundingClientRect().width)
    .height(el.getBoundingClientRect().height)
    .autosize({type: 'fit', contains: 'padding'})
    .toJSON();  

  console.log(plot)

  vegaEmbed('.js-test', plot);

}