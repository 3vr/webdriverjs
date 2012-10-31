exports.command = function(cssSelector, count, message, callback)
{
    var self = this;

    self.elements("css selector", cssSelector, function(result)
    {
        if (result.status === 0) {

            //theTest, receivedValue, expectedValue, message
            self.showTest(result.value.length === count, result.value.length, count, message);
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
};

