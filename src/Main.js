var Core = require('../NGCore/Client/Core').Core;
var GL2 = require('../NGCore/Client/GL2').GL2;
var UI = require('../NGCore/Client/UI').UI;

console.log('parsing Main.js 2');

var loadBackground = function(width, height)
{
    this._backdrop = new GL2.Primitive();
    this._backdrop.setType(GL2.Primitive.Type.TriangleFan);
    this._backdrop.pushVertex(new GL2.Primitive.Vertex([0, 0], [0, 0], [0, 0, 0]));
    this._backdrop.pushVertex(new GL2.Primitive.Vertex([width, 0], [0, 0], [0, 0, 0]));
    this._backdrop.pushVertex(new GL2.Primitive.Vertex([width, height], [0, 0], [0, 0, 0]));
    this._backdrop.pushVertex(new GL2.Primitive.Vertex([0, height], [0, 0], [0, 0, 0]));
    GL2.Root.addChild(this._backdrop);
}

var addText = function(width, height)
{
    var label = new GL2.Text();
    label.setSize(width, height);
    label.setAnchor(0, 0);
    label.setText('Dzien Dobry');
    label.setColor(0, 0, 0);
    GL2.Root.addChild(label);
}

function main()
{
    console.log('starting main');
    
    var glView = new UI.GLView();
    var width = UI.Window.getWidth();
    var height = UI.Window.getHeight();
    glView.setFrame(0, 0, width, height);
    
    glView.setOnLoad(function()
    {
        console.log('adding background');
        loadBackground(width, height);
        addText(width, height);
    });
    
    glView.setActive(true);
}