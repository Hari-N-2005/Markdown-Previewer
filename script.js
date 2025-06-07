const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

const defaultMarkdown = `# Hello!

## Welcome to the Markdown Previewer

This is a paragraph, and here’s some **bold** text, _italic_, and \`inline code\`.

\`\`\`
function example() {
  return "This is a code block!";
}
\`\`\`

- List Item 1
- List Item 2

[Link to freeCodeCamp](https://www.freecodecamp.org)

> Blockquote!

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

editor.value = defaultMarkdown;
preview.innerHTML = marked.parse(defaultMarkdown);

editor.addEventListener("input", () => {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText);
});
