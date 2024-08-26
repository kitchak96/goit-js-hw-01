function getElementWidth (content, padding, border) {
    const contentWidth = parseInt(content);
  const paddingWidth = parseInt(padding);
  const borderWidth = parseInt(border);
    return contentWidth + (2 * paddingWidth) + (2 * borderWidth);

}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
<script src="./js/task-3.js"></script>