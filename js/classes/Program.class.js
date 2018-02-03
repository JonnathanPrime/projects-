
var Program = function()
{
    this.colorPalette = new ColorPalette();
    this.pen          = new Pen();
    this.canvas       = new Slate(this.pen);
};


Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').fadeIn('slow');
};

Program.prototype.onClickPenColor = function(event)
{
    var div;
    var penColor;

    div = event.currentTarget;

    penColor = div.dataset.color;  

    this.pen.setColor(penColor);
};

Program.prototype.onClickPenSize = function(event)
{
    var button;
    var penSize;

    button = event.currentTarget;

    penSize = button.dataset.size;   

    this.pen.setSize(penSize);
};

Program.prototype.onPickColor = function()
{
    var color;

    color = this.colorPalette.getPickedColor();

    this.pen.setColorAsRgb(color.red, color.green, color.blue);

    $('#color-palette').fadeOut('slow');
};


Program.prototype.start = function()
{
    $('#tool-clear-canvas').on('click', this.canvas.clear.bind(this.canvas));
    $('#tool-color-picker').on('click', this.onClickColorPicker.bind(this));

    $('.pen-color').on('click', this.onClickPenColor.bind(this));
    $('.pen-size').on('click',  this.onClickPenSize.bind(this));


    $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
};