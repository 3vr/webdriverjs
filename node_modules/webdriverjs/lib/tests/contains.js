exports.command = function(text, contains, message)
{
    var self = this;
    var value = false;

    self.element("partial link text", text, function(result)
        {
            if (result.status === 0) {

                value = true;

                //theTest, receivedValue, expectedValue, message
                self.showTest(value === contains, value, contains, message);
                if (typeof callback === "function")
                {
                    callback(null);
                }
            }
            else if (result.status === 7)
            {
                self.showTest(value === contains, value, contains, message);
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