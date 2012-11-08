exports.command = function(cssSelector, expected, message)
{
    var self = this;
    self.getText(cssSelector,
        function(result)
        {
            self.showTest(result.value === expected, result.value, expected, message);
        }
    );

};