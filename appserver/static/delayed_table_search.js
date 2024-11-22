require([
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function($, mvc) {
    // Delay time in milliseconds (5 seconds)
    var delayTime = 5000;

    // Get the search manager for the table panel
    var searchManager = mvc.Components.get('tableSearch'); // Adjust the search manager name if different

    if (searchManager) {
        // Temporarily disable the search
        var originalQuery = searchManager.settings.get("search");
        searchManager.settings.unset("search");

        // Set the search back after the delay
        setTimeout(function() {
            searchManager.settings.set("search", originalQuery);
        }, delayTime);
    }
});

