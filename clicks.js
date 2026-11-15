// Link click tracking: reports each link click to GoatCounter as an event.
// Events show up in the GoatCounter dashboard as "click: <link text>", with
// the page it was clicked on and where it goes as the title.
// Visits you've excluded with #toggle-goatcounter are skipped by GoatCounter itself.
(function () {
    function label(link) {
        const text = (link.getAttribute('aria-label') || link.textContent || '')
            .replace(/\s+/g, ' ')
            .trim();
        return (text || link.getAttribute('href')).slice(0, 80);
    }

    function track(e) {
        const link = e.target.closest && e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.charAt(0) === '#' || href.indexOf('javascript:') === 0) return;
        if (!window.goatcounter || typeof window.goatcounter.count !== 'function') return;

        window.goatcounter.count({
            path: 'click: ' + label(link),
            title: location.pathname + ' → ' + link.href,
            event: true,
        });
    }

    document.addEventListener('click', track);
    // Middle-click / open in new tab
    document.addEventListener('auxclick', function (e) {
        if (e.button === 1) track(e);
    });
})();
