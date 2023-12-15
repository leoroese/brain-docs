export default function formatQuestionAnswer() {
  return (tree) => {
    traverseTree(tree);
  };
}

function traverseTree(node, parent = null, index = null) {
  if (node.type === "paragraph") {
    processParagraph(node, parent, index);
  } else if (node.children) {
    node.children.forEach((child, idx) => {
      traverseTree(child, node, idx);
    });
  }
}

function processParagraph(node, parent, index) {
  // Check if the paragraph matches the specific criteria
  const isTargetParagraph = node.children.some(
    (child) =>
      child.type === "text" &&
      (/^TARGET DECK/.test(child.value) ||
        /^Q:/.test(child.value) ||
        /^A:/.test(child.value)),
  );

  if (isTargetParagraph && parent) {
    // Construct the new node with <pre> tag
    const content = node.children.map((child) => child.value).join("");
    const newNode = {
      type: "html",
      value: `<pre style="word-wrap: break-word; white-space: pre-wrap;">${escapeHtml(
        content,
      )}</pre>`,
    };

    // Replace the paragraph node with the new node
    parent.children.splice(index, 1, newNode);
  }
}

function escapeHtml(str) {
  // Function to escape HTML special characters
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
