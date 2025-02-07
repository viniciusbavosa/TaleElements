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
            --max-w: 90ch;
            --min-w: 35ch;

            inline-size: clamp(var(--min-w), 50%, var(--max-w));
            padding: 0.5em;
            margin: auto;
            border-radius: 8px;
            background-color: #3c3c3c;
            color: #00ff00;
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
