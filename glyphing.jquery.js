(function($){
//////////////////////////////////////////////////////////////////////////////

const VIEWPORT_WIDTH = 300, VIEWPORT_HEIGHT = 300;

function svgEl(tagName, attributes) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    if(attributes){
        for(var k in attributes) el.setAttribute(k, attributes[k]);
    }
    return el;
}

//----------------------------------------------------------------------------
// Glyphpad initializer

function initSVG(svg){
    var height = VIEWPORT_HEIGHT, width = VIEWPORT_WIDTH;
    var padSize = height * 0.45, circleSize = height * 0.035;

    function fictionToRealCoord(r, theta){
        var x = r * padSize * Math.cos(theta) + width / 2,
            y = height / 2 - r * padSize * Math.sin(theta);
        return [x, y];
    }

    function drawCircle(r, theta, label){
        var coord = fictionToRealCoord(r, theta);
        var x = coord[0], y = coord[1];
        var circle = svgEl("circle", {
            "cx": x, "cy": y, "r": circleSize,
            "stroke": "white",
            "stroke-width": "1px",
            "class": "glyphpad-circle",
            "data-name": label,
            "id": "glyphpad-circle-" + label,
        });

        svg.appendChild(circle);
        addMagicToCircle(circle);
        return circle;
    }

    var SIX_DEGREES = Math.PI / 3;
    drawCircle(0,   0,                  "X");
    drawCircle(0.5, SIX_DEGREES * 0.5,  "A");
    drawCircle(0.5, SIX_DEGREES * 2.5,  "B",);
    drawCircle(0.5, SIX_DEGREES * 3.5,  "C");
    drawCircle(0.5, SIX_DEGREES * 5.5,  "D",);
    drawCircle(1, SIX_DEGREES * 0.5,    "1");
    drawCircle(1, SIX_DEGREES * 1.5,    "2");
    drawCircle(1, SIX_DEGREES * 2.5,    "3");
    drawCircle(1, SIX_DEGREES * 3.5,    "4");
    drawCircle(1, SIX_DEGREES * 4.5,    "5");
    drawCircle(1, SIX_DEGREES * 5.5,    "6");
}

function addMagicToCircle(circle){
    $(circle).on("mouseover mouseleave mouseenter", function(){
        $(this).trigger("mouseover_glyph", $(this).attr("data-name"));
    });
}


//----------------------------------------------------------------------------
// Tracer for mouse/touch events


function addTracingEvents(svg){
    
    var tracing = false;
    var currentTrace = "", currentPolyline = null;
    var lastHoverCircle = null, foundStrokes = [];

    function pushPolyline(x, y){
        if(!currentPolyline){// || currentTrace.length > 100 * 4){
            currentPolyline = svgEl("polyline", {"class": "glyphpad-trace"});
            currentTrace = "";
            svg.appendChild(currentPolyline);
        }
        currentTrace += " " + x.toString() + "," + y.toString();
        currentPolyline.setAttribute("points", currentTrace);
    }

    function pushStroke(a, b){
        var stroke = [a, b], s;
        stroke.sort();
        s = stroke.join("");
        if(foundStrokes.indexOf(s) < 0){
            foundStrokes.push(s);
            drawStroke(a, b);
        }
    }

    function drawStroke(a, b){
        var circleA = svg.getElementById("glyphpad-circle-" + a),
            circleB = svg.getElementById("glyphpad-circle-" + b);
        svg.appendChild(svgEl("line", {
            x1: circleA.getAttribute("cx"),
            y1: circleA.getAttribute("cy"),
            x2: circleB.getAttribute("cx"),
            y2: circleB.getAttribute("cy"),
            "class": "glyphpad-stroke",
        }));
    }

    function removeElementsByClassName(className){
        for(var j=0; j<5; j++){
            var els = svg.getElementsByClassName(className);
            for(var i=0; i<els.length; i++){
                svg.removeChild(els[i]);
            }
        }
    }

    function startTracing(){
        tracing = true;
    }

    function endTracing(){
        var evaluation = evaluateStrokes(foundStrokes);
        if(evaluation){
            console.log(evaluation);
            $(svg).trigger("glyph_detection", evaluation);
        }
        tracing = false;
        currentTrace = "";
        currentPolyline = null;
        lastHoverCircle = null;
        foundStrokes = [];
        removeElementsByClassName("glyphpad-trace");
        removeElementsByClassName("glyphpad-stroke");
    }

    function traceMovement(e){
        if(!tracing) return;
        var eventData = e.originalEvent;
        pushPolyline(eventData.clientX, eventData.clientY);
    }

    function onGlyphCircleHovered(e, name){
        if(!tracing) return;
        if(!lastHoverCircle){
            lastHoverCircle = name;
            return;
        }
        if(name != lastHoverCircle){
            pushStroke(name, lastHoverCircle);
            lastHoverCircle = name;
        }
    }

    $(svg)
        .on("mousedown", startTracing)
        .on("mouseup", endTracing)
        .on("mousemove", traceMovement)
        .on("mouseover_glyph", onGlyphCircleHovered);
    ;

}

//----------------------------------------------------------------------------
// Evaluate strokes
var glyphtionary = {
    "1A-AX-XC-C4-45": "abandon",
    "3C-CX-XD": "adapt",
    "2B-4B": "advance",
    "1A-AX-XD-D6-61": "after",
    "4B-BC-CX-XA-AD": "repeat",
    "12-23-34-45-56-61": "all",
    "AB-AD-DX": "answer",
    "4B-B2-2A-A6": "war",
    "32-2A-A1-1D": "avoid",
    "2X-XD-D6": "barrier",
    "3B-BX-XC-C4-43": "before",
    "AB-AX-BX": "body",
};
var compiledGlyphtionary = {};
for(var seq in glyphtionary){
    var seq1 = seq.split("-");
    var seq2 = [];
    for(var i=0; i<seq1.length; i++){
        var seq3 = [seq1[i][0], seq1[i][1]];
        seq3.sort();
        seq2.push(seq3.join(""));
    }
    seq2.sort();
    compiledGlyphtionary[seq2.join("-")] = glyphtionary[seq];
}
console.log(compiledGlyphtionary);


function evaluateStrokes(strokes){
    strokes.sort();
    var index = strokes.join("-");
    console.log("Evaluate:", index);
    if(compiledGlyphtionary[index]) return compiledGlyphtionary[index];
    return null;
};



$.fn.glyphinput = function(){
    this.each(function(){
        initSVG(this);
        addTracingEvents(this);
    });

};



//////////////////////////////////////////////////////////////////////////////
})(jQuery);
