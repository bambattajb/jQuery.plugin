(function ( $ ) {

    /**
     *
     * @param options - all the default options in json
     * @constructor
     */
    $.fn.PluginName = function (options) {

        /**
         * Create a jQuery object from passed element
         */
        var _elem = $(this.selector);

        /**
         * Assign default settings if not
         * set in options
         */
        var settings = $.extend({
            myGreeting : 'Hello World'
        }, options);

        /**
         * Class with all our methods
         * @constructor
         */
        function PluginName () {

            /**
             * Whilst inside the PluginName execution context
             * store its contents in $this so we can continue
             * to access it in other methods inside this class
             */
            var $this = this;

            /**
             * CONSTRUCTOR METHOD
             *
             * The constructor method is called
             * when new instance of class is created
             */
            this.__construct = function() {

                /**
                 * Call example method PluginName.greet()
                 */
                console.log('Element : ' + _elem);
                console.log($this.greet());

                return false;
            };

            /**
             * PUBLIC METHOD
             *
             * An example of a method
             * @returns {string}
             */
            this.greet = function() {

                /**
                 * Return the contents of settings.MyGreeting
                 */
                return settings.myGreeting;
            };

            /**
             * Run the construct method when new instance
             * of class is created
             */
            $this.__construct();
        }

        /**
         * Store object in variable
         * @type {PluginName}
         */
        var plugin = new PluginName();

    };
}(jQuery));


