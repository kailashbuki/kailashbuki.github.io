$( document ).ready(function() {
    // Corrigendum
    $( ".corrigendum-link" ).click(function() {
        var corrigendumLinkId = $( this ).attr("id");
        var corrigendumTextId = corrigendumLinkId + "-corrigendum";
        var corrigendumTextElem = $( "#" + corrigendumTextId );
        var displayMode = corrigendumTextElem.css("display");
        if (displayMode == "none") {
            corrigendumTextElem.show( );
        } else {
            corrigendumTextElem.hide( )
        }
    });
});
