import generateTemplate from "../../utils/generateTemplate.ts";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "checkbox"
  | "radio"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "file"
  | "hidden";

type IVariant = "secondary" | "red" | "ghost";
type IShape = "square";
type IShadowMode = "open" | "closed";

export default class TInput extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: this.mode });
    const templateClone = generateTemplate(`
      <style>
        input {
          --white: #eeeeee;
          --black: #121212;
          --red: crimson;
          --soft-green: #B7E4C7;
          --soft-blue_text: #2C3E50;

          background-color: var(--white);
          padding: 0.75rem 0.75rem;
          margin: 8px 0;
          inline-size: clamp(5cqi, 80px, 50cqi);
          font-family: inherit;
          border-color: transparent;
          outline-color: transparent;
          border-radius: 16px;
          opacity: 0.9;
        }

        .secondary {
          background-color: var(--black); 
          color: var(--white); 
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

        input:user-valid {
          border-color: hsl(120, 100%, 60%);
          outline-color: hsl(120, 100%, 60%);
        }

        input:user-invalid {
          border-color: hsl(0, 100%, 50%);
          outline-color: hsl(0, 100%, 50%);
        }

        input:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
      </style>
      <label part="t-label" for="${this.name}" class="${this.labelClass}">${
      this.labelText
    }</label>
      <input part="t-input"
        type=${this.type}
        name=${this.name}
        id="${this.id}"
        class="${this.inputClass} ${this.variant} ${this.shape}"
        maxLength=${this.maxlength} 
        minLength=${this.minlength}
        ${this.required && "required"}
        ${this.disabled && "disabled"}
        ${this.checked && "checked"}


        />
      `);
    shadowRoot.append(templateClone);
  }

  static get observedAttributes() {
    return [
      "mode",
      "variant",
      "shape",
      "labelText",
      "labelClass",
      "inputClass",
    ];
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {}

  /* Custom Attributes */
  get mode() {
    return (this.getAttribute("mode") as IShadowMode) ?? "closed";
  }

  set mode(value: IShadowMode) {
    this.setAttribute("mode", value);
  }

  get variant() {
    return (this.getAttribute("variant") as IVariant) ?? "default";
  }

  set variant(value: IVariant) {
    this.setAttribute("variant", value.toLowerCase());
  }

  get shape() {
    return (this.getAttribute("shape") as IShape) ?? "default";
  }

  set shape(value: IShape) {
    this.setAttribute("shape", value.toLowerCase());
  }

  /* Native Attributes */

  get type() {
    return (this.getAttribute("type") as InputType) ?? "text";
  }

  set type(value: string) {
    this.setAttribute("type", value.toLowerCase());
  }

  get name() {
    return this.getAttribute("name") ?? "";
  }

  set name(value: string) {
    this.setAttribute("name", value.toLowerCase());
  }

  get minlength() {
    return this.getAttribute("minLength") ?? "";
  }

  set minlength(value: string) {
    this.setAttribute("minLength", value.toLowerCase());
  }

  get maxlength() {
    return this.getAttribute("maxLength") ?? "";
  }

  set maxlength(value: string) {
    this.setAttribute("maxLength", value.toLowerCase());
  }

  get placeholder() {
    return this.getAttribute("placeholder") ?? "";
  }

  set placeholder(value: string) {
    this.setAttribute("placeholder", value);
  }

  get inputClass() {
    return this.getAttribute("inputClass") ?? "";
  }

  set inputClass(value: string) {
    this.setAttribute("inputClass", value);
  }

  get required() {
    return this.hasAttribute("required");
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  get checked() {
    return this.hasAttribute("checked");
  }

  /* Label Attributes */

  get labelText() {
    return this.getAttribute("labelText") ?? "";
  }

  set labelText(value: string) {
    this.setAttribute("labelText", value);
  }

  get labelClass() {
    return this.getAttribute("labelClass") ?? "";
  }

  set labelClass(value: string) {
    this.setAttribute("labelClass", value);
  }
}

customElements.define("t-input", TInput);
