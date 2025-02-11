import generateTemplate from "../../utils/generateTemplate.ts";

type IShadowMode = "open" | "closed";

export default class TConsole extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: this.mode });
    const templateClone = generateTemplate(`
        <style>
         :host(r-console) {
            display: block;
          }

          div {
            
            overflow-x: clip;
            padding: 0.5rem;
            margin: 1rem auto;
            border-radius: 8px;
            background-color: #3c3c3c;
            color: #00ff00;
            text-wrap: balance;

          
          }

          .white {
            background-color: aliceblue;
            color: black;
            border: 1px solid teal;
          }

          .red {
            background-color: crimson;
            color: cornsilk;
          }
        </style>

        <div part="r-console-wrapper" class="${this.variant}">
          <code part="r-code">
            <pre part="r-pre">
              ${this.innerHTML}
            </pre>
          </code>
        </div>

      `);
    shadowRoot.append(templateClone);
  }

  /* 
    Watch for custom attributes
  */
  static get observedAttributes() {
    return ["mode", "variant"];
  }

  get mode() {
    return (this.getAttribute("mode") as IShadowMode) ?? "closed";
  }

  set mode(value: IShadowMode) {
    this.setAttribute("mode", value);
  }

  get variant() {
    return this.getAttribute("variant") ?? "";
  }
  set variant(value: string) {
    this.setAttribute("variant", value.toLowerCase());
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {}
}

customElements.define("t-console", TConsole);
