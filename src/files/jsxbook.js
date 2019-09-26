"use strict";

(function jsxReplace() {
    var replaced = $("#sidebar").html();
    replaced = replaced.replace(/{lang=EN}/g,'<span class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<span class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<span class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</span>');
    $("#sidebar").html(replaced);

    var replaced = $("#content").html();
    replaced = replaced.replace(/{lang=EN}/g,'<div class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<div class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<div class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</div>');
    $("#content").html(replaced);

    var replaced = $("#menu-title").html();
    replaced = replaced.replace(/{lang=EN}/g,'<span class="language EN">');
    replaced = replaced.replace(/{lang=SI}/g,'<span class="language SI">');
    replaced = replaced.replace(/{lang=CZ}/g,'<span class="language CZ">');
    replaced = replaced.replace(/{\/lang}/g,'</span>');
    $("#menu-title").html(replaced);

})();