import template from './article.handlebars'

document.addEventListener('DOMContentLoaded', () => {

  const div = document.createElement('div');
  console.log('Pagina sin renderizar')
  fetch('http://projects.xocas.com.s3.amazonaws.com/documents/midv_grupo1.json')
  .then((res) => res.json())
  .then((json) => {
    let html = template(json);
    div.innerHTML = html;
    document.body.appendChild(div);

    const event = new Event('articleRendered');
    document.dispatchEvent(event);
  });
      
});