exports.command = function(message, callback)
{
    var self = this;
    var cssSelector = "head";

    self.element("css selector", cssSelector,
        function(result)
        {
            if (result.status == 0)
            {
                self.elementIdDisplayed(result.value.ELEMENT,
                    function(result)
                    {
                        if (typeof callback === "function")
                        {
                            console.log("\x1b[1;34m● \033[0m  " + message);
                            callback(result.value);
                        }
                    }
                );
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

