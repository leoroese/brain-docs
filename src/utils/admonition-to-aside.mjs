export default function admonitionToAside() {
  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (node.lang && node.lang.startsWith("ad-")) {
        const admonitionType = node.lang.substring(3); // Extract type after 'ad-'
        const lines = node.value.split("\n");
        const titleLine = lines[0];
        const titleMatch = titleLine.match(/^title:\s*(.*)$/);
        const title = titleMatch ? titleMatch[1] : "";
        const content = lines.slice(1).join("\n").trim();

        const htmlContent = escapeHtml(content); // You need to define escapeHtml

        const newNode = {
          type: "html",
          value: `<aside class="starlight-aside starlight-aside--${admonitionType}">\n<p class="starlight-aside__title" aria-hidden="true">${title}</p>\n<section class="starlight-aside__content"><pre>${htmlContent}</pre></section>\n\n</aside>`,
        };

        // Replace the current node with the new HTML node
        if (parent && typeof index === "number") {
          parent.children.splice(index, 1, newNode);
        }
      }
    });
  };
}

function escapeHtml(str) {
  // Simple function to escape HTML special characters
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function visit(node, type, visitor, parent, index) {
  if (node.type === type) {
    visitor(node, index, parent);
  }

  if (node.children) {
    node.children.forEach((child, idx) => {
      visit(child, type, visitor, node, idx);
    });
  }
}
