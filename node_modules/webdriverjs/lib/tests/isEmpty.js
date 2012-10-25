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
                self.showTest(result.value === expected, result.value, expected, "Asserting result:`"+result.value+"` is as expected");
                if (typeof callback === "function")
                {
                    callback(null);
                }
            }
            else
            {
                if (typeof callback === "function")
                {
                    callback({message: "Expected value not in result", result: result, expected: expected});
                }
            }
        }
    );
};