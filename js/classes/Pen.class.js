
var Pen = function()
{
    this.color = 'black';
    this.size  = 1;
};


Pen.prototype.configure = function(slateCanvasContext)
{
    slateCanvasContext.strokeStyle = this.color;
    slateCanvasContext.lineWidth   = this.size;
};

Pen.prototype.setColor = function(color)
{
    this.color = color;
};

Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

   document.getElementById('actuelcolor').style.background = this.color;
   document.getElementById('actuelcolor').dataset.color = this.color;
};

Pen.prototype.setSize = function(size)
{
    this.size = size;
};