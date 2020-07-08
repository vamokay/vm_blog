// KaTeX v0.9.0
{% include js/katex.min.js %}
{% include js/katex.copy-tex.min.js %}
{% include js/katex.auto-render.min.js %}

document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {'delimiters' : [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
    ]});

    document.querySelectorAll("script[type='math/tex; mode=display']").forEach(function(el) {
        el.outerHTML = katex.renderToString(el.textContent.replace(/%.*/g, ''), { displayMode: true });
    });
});