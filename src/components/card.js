const template = document.createElement("template");
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<div class="card" style="width: 18rem;">
  <a href="#">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>      
    </div>
  </a>  
</div>
`;

export class Card extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("imgCampeonato");
    this.shadowRoot.querySelector("h5").innerText = this.getAttribute("campeonato");
  }

  connectedCallback() {
    this.img = this.getAttribute("imgCampeonato");
    this.h5 = this.getAttribute("campeonato");
    this.div;
  }

  render() {
    this.img;
    this.h5;
  }
}
window.customElements.define('my-card', Card);