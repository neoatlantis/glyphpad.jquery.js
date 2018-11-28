(function($){
//////////////////////////////////////////////////////////////////////////////

const glyphtionary = {
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
    "2C-5C-5D": "begin",
    "5C-5D-AB-AD-BC": "human",
    "AB-AX-BX": "body",
    "1A-3B-AX-BX": "breath",
    "1D-45-4C-CX-DX": "capture",
    "5D-5X-CX": "change",
    "12-1A-23-34-5C-AX-CX": "chaos",
    "2X-5X": "clear",
    "12-16-23-2X-34-45-56-5X": "clear-all",
    "AB-BX-CX": "complex",
    "4B-6A-AD-BC-CD": "conflict",
    "3B-6D-BC-CD": "consequence",
    "12-16-56-5C-AX-BC-BX": "contemplate",
    "6A-AD": "reduce",
    "4B-BC-CD": "courage",
    "1A-4C-AX-CX": "create",
    "16-1A-34-3B-4C-6D-BX-DX": "idea",
    "2B-5X-BX": "danger",
    "2A-5C-AX-CX": "data",
    "1D-3C-5C-5D": "defend",
    "16-56": "destination",
    "5C-AD-AX-BX-CD": "destiny",
    "3B-6D-BX-DX": "destroy",
    "4C-BX-CX": "deteriorate",
    "4C-6D-CX-DX": "die",
    "1A-AD-CX-DX": "difficult",
    "16-45-56": "discover",
    "23-34": "outside",
    "5C-AX-CX": "easy",
    "12-1D-2X-5D-5X": "end",
    "12-16-2B-56-AB-AX-BX": "enlightened",
    "AB-AD-BC": "equal",
    "12-1A-AB-BC": "escape",
    "2X-BC-BX": "evolution",
    "2X-AD-AX": "failure",
    "1D-AB-AD": "fear",
    "16-1A-2A": "follow",
    "4C": "forget",
    "1A-6D-AD": "future",
    "3C": "gain",
    "1A-3B-AD-BC-CD": "civilization",
    "4B-BC": "grow",
    "2A-2B-6D-AX-BX-DX": "harm",
    "2A-2B-5C-5D-AX-BX-CX-DX": "harmony",
    "5C-CX-DX": "have",
    "3B-BX-CD-CX": "help",
    "1A-1D-AB-CD": "hide",
    "5A-5B-AB": "me",
    "6D": "ignore",
    "AC-AX-BC-BX-CX": "imperfect",
    "1A-AX-DX": "improve",
    "5X-BC-BX-CX": "impure",
    "1A-4C-AX-BC-BX": "intelligence",
    "2X-34-3B-4C-5X-BX-CX": "interrupt",
    "1A-34-3B-45-AX-BX": "journey",
    "5A-5B-AX-BX": "knowledge",
    "23-34-4C-5C": "lead",
    "12-1A-23-3B-4C-6D-AD-BC": "legacy",
    "AX-BX": "less",
    "12-1A-4B-AX-BX": "liberate",
    "AD-AX-BC-BX-DX": "lie",
    "1A-4B-AX-BC-CX": "reincarnate",
    "1D": "loss",
    "1D-4B-BX-DX": "message",
    "5C-5X-BC-BX": "mind",
    "CX-DX": "more",
    "2A-2B-3B-AB-BC": "mystery",
    "2A-2B-2X-5X-AX-BX": "n'zeer",
    "4C-6D-AB-AD-BC": "nature",
    "6D-AD": "new",
    "AB-AD": "inside",
    "45-4C-5X-CX": "nourish",
    "3B-BC": "old",
    "5C-5D-CD": "open",
    "12-16-23-34-45-56-5C-5D-CD": "open-all",
    "16-1A-34-3B-4C-6D-AB-CD": "portal",
    "3B-4C-BC": "past",
    "2X-4C-CX": "path",
    "2X-45-4C-56-6D-CX-DX": "perfect",
    "2A-2B-4C-6D-AX-BX-CX-DX": "perspective",
    "16-2X-6D-DX": "potential",
    "5C-5D-AD-AX-BC-BX-CD": "presence",
    "AD-BC-CD": "now",
    "2X-AD-AX-DX": "pure",
    "2A-2B-3B": "pursue",
    "2A-AB-BC": "question",
    "6D-AB-BX-DX": "react",
    "16-1A-3C-AX-CX": "rebel",
    "23-2X-3B-BX": "repair",
    "2B-2X-5C-5X-AB": "resistance",
    "3B-56-6D-BX-DX": "restraint",
    "2A-6A": "retreat",
    "4B-6A-AB": "safety",
    "1D-CX-DX": "save",
    "2B": "see",
    "AB-AX-BC-CD": "search",
    "45-56": "self",
    "3B-6D-AD-AX-BC-CX": "separate",
    "2A-2B-4C-6D-AD-BC": "shaper",
    "45-4C-6D-CD": "share",
    "CD": "simple",
    "5D-5X-AD-AX": "soul",
    "4C-6D-CD": "stay",
    "AB-AD-BC-CD": "strong",
    "1A-6D-AX-BC-BX-CX-DX": "technology",
    "2C-CD": "them",
    "4C-AB-AX-BX-CX": "together",
    "AD-AX-BC-BX-CX-DX": "truth",
    "12-1D-23-34-45-56-AB-AX-BC-CD": "unbounded",
    "1D-DX": "use",
    "2A-2B-5A-5B": "victory",
    "4C-5C-5D": "want",
    "5A-AB": "us",
    "3B-AB-AD": "weak",
    "1D-3C-CX-DX": "worth",
    "AB-AD-BC-CX-DX": "xm",
    "2C-2D-CD": "you",
};

function svgEl(tagName, attributes) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    if(attributes){
        for(var k in attributes) el.setAttribute(k, attributes[k]);
    }
    return el;
}

function addClass(target, className){
    var clsstr = target.getAttribute("class") || "";
    if(clsstr.indexOf(className) < 0){
        target.setAttribute("class", clsstr + " " + className);
    }
}

//----------------------------------------------------------------------------
// Screen scroll blocker

var blockingScreenScroll = false;

function blockScreenScroll(){ blockingScreenScroll = true; }
function unblockScreenScroll(){ blockingScreenScroll = false; }

$(window).on("touchmove", function(e){
    if(blockingScreenScroll) e.preventDefault();
});


//----------------------------------------------------------------------------
// Glyphpad initializer

function initSVG(svg){
    var height = svg.viewBox.baseVal.height,
        width = svg.viewBox.baseVal.width;
    var padSize = height * 0.4, circleSize = height * 0.035;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

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
        //addMagicToCircle(circle);
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

/*function addMagicToCircle(circle){
    $(circle).on("vmouseover vmousemove mouseleave mouseenter", function(){
        $(this).trigger("mouseover_glyph", $(this).attr("data-name"));
    });
}*/


//----------------------------------------------------------------------------
// Tracer for mouse/touch events


function addTracingEvents(svg){
    
    var tracing = false;
    var currentTrace = "", currentPolyline = null;
    var lastHoverCircle = null, foundStrokes = [];
    var circlesPosition = {};

    function pushPolyline(x, y){
        if(!currentPolyline || currentTrace.length > 100){
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
        blockScreenScroll();
        // snapshot of circles position, for tracking mouse & touch movement
        // and calculating if a circle is entered(hover event doesn't work
        // reliably in touchscreen!)
        var circles = svg.getElementsByTagName("circle");
        for(var i=0; i<circles.length; i++){
            circlesPosition[circles[i].getAttribute("data-name")] =
                [
                    parseFloat(circles[i].getAttribute("cx")),
                    parseFloat(circles[i].getAttribute("cy")),
                    parseFloat(circles[i].getAttribute("r")),
                ];
        }
    }

    function endTracing(){
        var evaluation = evaluateStrokes(foundStrokes);
        if(evaluation){
            $(svg).trigger("detection", evaluation);
        }
        tracing = false;
        currentTrace = "";
        currentPolyline = null;
        lastHoverCircle = null;
        foundStrokes = [];
        removeElementsByClassName("glyphpad-trace");
        removeElementsByClassName("glyphpad-stroke");
        resetCircles();
        unblockScreenScroll();
    }

    function traceMovement(eventData){
        if(!tracing) return;
        pushPolyline(eventData.clientX, eventData.clientY);
        // find if a circle is entered
        for(var label in circlesPosition){
            if(
                Math.pow(eventData.clientX - circlesPosition[label][0], 2) +
                Math.pow(eventData.clientY - circlesPosition[label][1], 2)
                <=
                Math.pow(circlesPosition[label][2] * 1.5, 2)
            ){
                onGlyphCircleHovered(null, label);
                break;
            }
        }
    }

    function onGlyphCircleHovered(e, name){
        if(!tracing) return;
        var el = svg.getElementById("glyphpad-circle-" + name);
        addClass(el, "glyphpad-circle-active");
        if(!lastHoverCircle){
            lastHoverCircle = name;
            return;
        }
        if(name != lastHoverCircle){
            pushStroke(name, lastHoverCircle);
            lastHoverCircle = name;
        }
    }

    function resetCircles(){
        var circles = svg.getElementsByTagName("circle");
        for(var i=0; i<circles.length; i++){
            circles[i].setAttribute("class", "glyphpad-circle");
        }
    }

    return $(svg)
        .on("vmousedown", startTracing)
        .on("vmouseup", endTracing)
        .on("vmousemove", traceMovement)
        .on("mouseover_glyph", onGlyphCircleHovered);
    ;

}

//----------------------------------------------------------------------------
// Evaluate strokes

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


function evaluateStrokes(strokes){
    strokes.sort();
    var index = strokes.join("-");
    console.log("Evaluate:", index);
    if(compiledGlyphtionary[index]){
        return compiledGlyphtionary[index];
    }
    return null;
};



$.fn.glyphpad = function(){
    return this.each(function(){
        initSVG(this);
        return addTracingEvents(this);
    });

};



//////////////////////////////////////////////////////////////////////////////
})(jQuery);
