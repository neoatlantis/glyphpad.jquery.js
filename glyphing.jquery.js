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
    var padSize = height * 0.45, circleSize = height * 0.025;

    function fictionToRealCoord(r, theta){
        var x = r * padSize * Math.cos(theta) + width / 2,
            y = height / 2 - r * padSize * Math.sin(theta);
        console.log(x, y);
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
        if(foundStrokes.indexOf(s) < 0) foundStrokes.push(s);
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
        var traces = svg.getElementsByClassName("glyphpad-trace");
        for(var i=0; i<traces.length; i++){
            svg.removeChild(traces[i]);
        }
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
const glyphtionary = {
    "AB-AX-BX": "body",
}
function evaluateStrokes(strokes){
    strokes.sort();
    var index = strokes.join("-");
    if(glyphtionary[index]) return glyphtionary[index];
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
