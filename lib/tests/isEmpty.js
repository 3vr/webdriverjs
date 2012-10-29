exports.command = function(cssSelector, callback)
{
    var expected = "";
    var self = this;
    self.getText(cssSelector,

        function(result)
        {
            if (result)
            {
                //theTest, receivedValue, expectedValue, message
                self.showTest(result.value === expected, result.value, expected, "Input is empty.");
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
        }
    );
};