exports.command = function(text, callback)
{
    var self = this;
    self.element("partial link text", text,
        function(result)
        {
            if (result.status == 0)
            {
                self.elementIdClick(result.value.ELEMENT,
                    function(result)
                    {
                        if (typeof callback === "function")
                        {
                            callback(result);
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