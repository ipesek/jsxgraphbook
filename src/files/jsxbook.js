"use strict";

(function jsxReplace() {
    var replaced = $("#sidebar").html();
    replaced = replaced.replace(/{lang=EN}/g,'<span style="display:none" class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<span style="display:none" class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<span style="display:none" class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</span>');
    $("#sidebar").html(replaced);

    var replaced = $("#content").html();
    replaced = replaced.replace(/{lang=EN}/g,'<div style="display:none" class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<div style="display:none" class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<div style="display:none" class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</div>');
    $("#content").html(replaced);

    var replaced = $("#menu-title").html();
    replaced = replaced.replace(/{lang=EN}/g,'<span style="display:none" class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<span style="display:none" class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<span style="display:none" class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</span>');
    $("#menu-title").html(replaced);

})();