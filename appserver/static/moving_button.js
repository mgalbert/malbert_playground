require([
    "jquery",
    "splunkjs/mvc/simplexml/ready!"
], function($) {
    $(document).ready(function() {
        const button = $("#moveButton");

        // Limit movement to a smaller area within the dashboard container
        const movementMargin = 50; // Margin to keep button movement constrained
        const container = $(".dashboard-body"); // Restrict to the dashboard body

        button.on("mouseenter", function() {
            // Get container dimensions and offset
            const containerWidth = container.width();
            const containerHeight = container.height();
            const containerOffset = container.offset();

            // Calculate valid movement boundaries
            const minX = containerOffset.left + movementMargin;
            const maxX = containerOffset.left + containerWidth - button.outerWidth() - movementMargin;
            const minY = containerOffset.top + movementMargin;
            const maxY = containerOffset.top + containerHeight - button.outerHeight() - movementMargin;

            // Generate random positions within the restricted area
            const randomX = Math.max(minX, Math.min(maxX, Math.floor(Math.random() * (maxX - minX + 1))));
            const randomY = Math.max(minY, Math.min(maxY, Math.floor(Math.random() * (maxY - minY + 1))));

            // Move the button to the new position
            button.css({
                position: "absolute",
                zIndex: 9999, // Ensure it stays on top of other elements
                left: `${randomX}px`,
                top: `${randomY}px`,
                transition: "all 0.3s ease-in-out"
            });
        });
    });
});

