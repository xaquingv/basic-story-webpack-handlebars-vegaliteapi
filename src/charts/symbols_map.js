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

  const base = vl.markGeoshape({fill: '#e0e0e0', stroke: '#fff', strokeWidth: 1})
    .data(vl.topojson(spain).feature('espana'))

  const symbols = vl.markCircle()
    .data(data)
    .encode(
      vl.latitude().fieldQ('lat'),
      vl.longitude().fieldQ('lon'),
      vl.size().fieldQ('denuncias').scale({range: [0, 30000]}).legend(null),
      vl.tooltip().fieldQ('denuncias').format('.0f')
    );

  const map = vl.layer(base, symbols)
    .project('conicEqualArea')
    .width(el.getBoundingClientRect().width)
    .height(el.getBoundingClientRect().height)
    .autosize({type: 'fit', contains: 'padding'})
    .toJSON();  

  vegaEmbed('.js-test', map);

}