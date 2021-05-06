class Elipse {
  constructor(xpoint, ypoint, radius, color, borderColor, lineWidth) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.radius = radius;
    this.borderColor = borderColor;
    this.color = color;
    this.lineWidth = lineWidth;
  }
  drawCircle(ctx) {
    ctx.beginPath();
    ctx.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }
}
class Rectangle {
  constructor(xpoint, ypoint, width, height, fillStyle) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.width = width;
    this.height = height;
    this.fillStyle = fillStyle;
  }
  drawRect(ctx) {
    ctx.beginPath();
    ctx.rect(this.xpoint, this.ypoint, this.width, this.height);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
  }
}
