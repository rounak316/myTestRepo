require(['jquery', 'jira/analytics'], function ($, analytics) {
    'use strict';

    /**
     * Capture analytics events from DOM elements with an appropriate attribute.
     * This saves us registering a number of redundant and repetitive
     * event handlers everywhere to track simple things.
     */

    function bindEvents() {
        // limitation, it does not work for dynamically added elements!
        // you may want to refactor this if you need such feature
        // one of possible solutions is using skate.js(MutationObserver) but it comes with a cost
        $("[data-track-pageview]").each(function (idx, element) {
            analytics.send({ name: $(element).data("track-pageview") });
        });
    }

    // We can register a delegated event handler immediately, since document will always exist
    $(document).on("click", "[data-track-click]", function () {
        analytics.send({ name: $(this).data("track-click") });
    });

    // Initialise on DomContentLoaded.
    $(bindEvents);
});