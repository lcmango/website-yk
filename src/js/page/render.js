 function render(soucerTpl, data, targetEle) {
        var swiperTpl = $(soucerTpl).html();
        var template = Handlebars.compile(swiperTpl);
        var html = template(data);
        $(targetEle).html(html);
   }