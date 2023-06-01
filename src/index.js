import { html, render } from "@github/jtml";

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  update() {
    render(html`
      <style>
        * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 64px;
          height: 64px;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>
      <button onclick="${() => this.dec()}">-</button>
      <span>${this.count}</span>
      <button onclick="${() => this.inc()}">+</button>
    `,
    this.shadowRoot);
  }
}

customElements.define("my-counter", MyCounter);
