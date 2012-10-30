var argv = require('optimist').argv;

exports.command = function(message, type, callback)
{
    var self = this;
    var cssSelector = "head";

    self.element("css selector", cssSelector,
        function(result)
        {
            if (result.status == 0) {
                self.elementIdDisplayed(result.value.ELEMENT,
                    function(result) {

                        if(argv.s) {
                            console.log("##teamcity[testSuiteFinished name='" + message + "']");
                        }
                    });
            }
            else {
                if (typeof callback === "function") {
                    callback(result);
                }
            }
        }
    );

};
