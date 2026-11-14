// Shared dark mode: load this right after <body> so the theme applies before the page paints.
// Follows the visitor's system setting (prefers-color-scheme) and updates live if it changes.
(function () {
    const body = document.body;
    const hadLight = body.classList.contains('light-theme');
    const query = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function apply(dark) {
        body.classList.toggle('dark-theme', dark);
        // Only swap light-theme on pages that use it (the resume page doesn't)
        if (hadLight) body.classList.toggle('light-theme', !dark);
    }

    apply(!!(query && query.matches));

    if (query) {
        const onChange = function (e) { apply(e.matches); };
        if (query.addEventListener) query.addEventListener('change', onChange);
        else if (query.addListener) query.addListener(onChange);
    }
})();
