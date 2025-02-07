import generateTemplate from "../../utils/generateTemplate.ts";

// TypeScript Types
type IButtonType = "submit" | "button" | "menu" | "reset";
type IVariant = "secondary" | "red" | "ghost";
type IShape = "square";
type IShadowMode = "open" | "closed";

export default class TButton extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: this.mode });
    const templateClone = generateTemplate(`
      <style>
       button {
          --white: #eeeeee;
          --black: #121212;
          --red: crimson;

          --ff: "Mukta", sans-serif;

          background-color: var(--black);
          color: var(--white);
          font: bold 0.75em var(--ff);
          padding: 0.75em 2.75em;
          border-radius: 20px;
          outline-color: transparent;
          letter-spacing: 1px;
          text-transform: uppercase;
          contain: paint;
          text-wrap-style: balance;
          cursor: pointer;
        }

        .secondary {
          background-color: var(--white);
          border: 1px solid var(--black); 
          color: black; 
        }

        .red {
          background-color: var(--red);
          border: 1px solid var(--white);
          color: var(--white);
        }

        .ghost {
          border: 1px solid var(--black);
          background-color: transparent;
          color: black;
        }

        .square {
          border-radius: 8px;
        }

        button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

      </style>
        <button
          type="${this.type}"  
          part="t-button" 
          ${this.disabled && "disabled"}
          class="${this.buttonClass} ${this.variant} ${this.shape}">${
      this.innerHTML || "Button"
    }</button>
        `);
    shadowRoot.append(templateClone);
  }

  /* 
    Watch for custom attributes
  */
  static get observedAttributes() {
    return ["mode", "variant", "shape", "disabled", "type", "buttonClass"];
  }

  get mode() {
    return (this.getAttribute("mode") as IShadowMode) ?? "closed";
  }

  /* Custom attributes */
  set mode(value: IShadowMode) {
    this.setAttribute("mode", value);
  }

  get variant() {
    return (this.getAttribute("variant") as IVariant) ?? "";
  }

  set variant(value: IVariant) {
    this.setAttribute("variant", value.toLowerCase());
  }

  get shape() {
    return (this.getAttribute("shape") as IShape) ?? "";
  }

  set shape(value: IShape) {
    this.setAttribute("shape", value.toLowerCase());
  }

  /* Native attributes */

  get type() {
    return (this.getAttribute("type") as IButtonType) ?? "";
  }

  set type(value: IButtonType) {
    this.setAttribute("type", value.toLowerCase());
  }

  get buttonClass() {
    return this.getAttribute("buttonClass") ?? "";
  }

  set buttonClass(value: string) {
    this.setAttribute("buttonClass", value.toLowerCase());
  }

  get disabled() {
    return this.hasAttribute("disabled") ?? "";
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {}
}

customElements.define("t-button", TButton);
