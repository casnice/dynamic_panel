function panel()
{
    this.create = function(elem)
    {
        var elemStr = "<div class = 'dynamic-panel panel panel-success col-md-3'>" +
            "<div class = 'panel-heading'>" +
            "<h3 class = 'panel-title'></h3>" +
            "</div>" +
            "<div class = 'panel-body'>" +
            "This is a Basic panel" +
            "</div>" +
            "</div>";
        elem.append(elemStr);
        $(".dynamic-panel").draggable();
    }
}
