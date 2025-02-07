export default function generateTemplate(templateHTML: string): Node {
  const template = document.createElement("template");
  template.innerHTML = templateHTML;
  return template.content.cloneNode(true);
}
