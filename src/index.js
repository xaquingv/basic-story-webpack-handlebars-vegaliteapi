import article from './render/article'
import './index.scss';
import * as vl from 'vega-lite-api'
import vegaEmbed from 'vega-embed'  

document.addEventListener('articleRendered', () =>{
  initCharts();
})

function initCharts() {

  const el = document.querySelector('.js-test');

  const plot = vl.markBar()
    .data([
      {a: 'A', b: 28}, {a: 'B', b: 55}, {a: 'C', b: 43},
      {a: 'D', b: 91}, {a: 'E', b: 81}, {a: 'F', b: 53},
      {a: 'G', b: 19}, {a: 'H', b: 87}, {a: 'I', b: 52}
    ])
    .encode(
      vl.x().fieldN('a'),
      vl.y().fieldQ('b')
    )
    .width(el.getBoundingClientRect().width)
    .height(el.getBoundingClientRect().height)
    .autosize({type: 'fit', contains: 'padding'})
    .toJSON()

  vegaEmbed('.js-test', plot);

}