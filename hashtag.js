$(function () {
    var $container = $('#container');
    var $symbol = $('#symbol');
    var $hashtag = $('#hashtag');
    var $tools = $('#tools');

    function hashchange () {
        var hash = window.location.hash;
        var tag = hash ? decodeURIComponent(hash.substr(1)) : hash;
        if (tag) {
            setHashTag(tag);
        }
    }

    function setHashTag (tag) {
        $hashtag.text('');

        var hashtag = '#' + tag;
        hashtag.split('').forEach(function (symbol, i) {
            var $a = $('<a/>')
                .click(symbol, showSymbol)
                .attr('href', '#')
                .text(symbol)
                .append('<sub>' + i + '</sub>');
            $hashtag.append($a);
        })
        $container.bigtext();
    }

    function showSymbol (event) {
        $hashtag.text('');
        setSymbol(event.data);
        $container.bigtext();
        return false;
    }

    function setSymbol (symbol) {
        $symbol.text(symbol);
    }

    hashchange();
});