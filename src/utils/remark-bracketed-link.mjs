// GPT 4 Turbo baby!
export default function remarkBracketedLink() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      if (parent && typeof node.value === "string") {
        const newNodes = [];

        const regex = /\[\[([^\]]+)\]\]/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(node.value)) !== null) {
          // Add text before the match
          if (match.index > lastIndex) {
            newNodes.push({
              type: "text",
              value: node.value.slice(lastIndex, match.index),
            });
          }

          // Process the match
          // Process the match
          const rawText = match[1].trim();
          const friendlyText = rawText
            .split("-")
            .map((word, i) =>
              i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
            )
            .join(" ");
          const url = `/notes/${rawText.replace(/\s+/g, "-").toLowerCase()}`;
          newNodes.push({
            type: "html",
            value: `<a href="${url}">${friendlyText}</a>`,
          });
          lastIndex = match.index + match[0].length;
        }

        // Add any remaining text after the last match
        if (lastIndex < node.value.length) {
          newNodes.push({ type: "text", value: node.value.slice(lastIndex) });
        }

        // Replace the current node with the new nodes
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
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
