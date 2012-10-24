exports.command = function(expected, callback)
{
    var self = this;

    self.element("partial link text", expected,
        function(result)
        {
            self.elementIdText(result.value.ELEMENT,
                function(result)
                {
                    if (result)
                    {
                        //theTest, receivedValue, expectedValue, message
                        self.showTest(result.value.indexOf(expected) !== -1, result.value, expected, "Link contains:`"+expected+"`");
                        if (typeof callback === "function")
                        {
                            callback(null);
                        }
                    }
                    else
                    {
                        if (typeof callback === "function")
                        {
                            callback(result);
                        }
                    }
            });
        }
    );
};