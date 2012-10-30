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
                            console.log("##teamcity[testSuiteStarted name='" + message + "']");
                        }
                        else {
                            if (type === "parent") {

                                console.log("\x1b[1;35m" + message);
                            }
                            else {
                                console.log("\x1b[1;34m● \033[0m  " + message);
                            }
                        }

                        if (typeof callback === "function") {
                            callback(result);

                        }
                });
            }
            else
            {
                if (typeof callback === "function")
                {
                    callback(result);
                }
            }
        }
    );

};

