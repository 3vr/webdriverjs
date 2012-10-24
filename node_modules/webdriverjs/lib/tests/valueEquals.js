exports.command = function(cssSelector, expected, message)
{
    var self = this;
    self.getValue(cssSelector,
        function(result)
        {
            self.showTest(result === expected, result, expected, message);
        }
    );

};