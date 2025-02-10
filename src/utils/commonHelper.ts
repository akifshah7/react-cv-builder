export const drawFlexbox = (
  context: CanvasRenderingContext2D,
  items: string[],
  canvasWidth: number,
  yPosition: number
): void => {
  const totalWidth = items.reduce(
    (sum, item) => sum + context.measureText(item).width,
    0
  );
  const spacing = (canvasWidth - totalWidth) / (items.length + 1);

  let xPosition = spacing;

  items.forEach((item) => {
    const textWidth = context.measureText(item).width;
    context.fillText(item, xPosition, yPosition);
    xPosition += textWidth + spacing;
  });
};
