$(function () {
    function initList() {
        $.ajax({
            type: 'get',
            url: '/books',
            dataType: 'json',
            success: function (data) {
                let html = template('indexTpl', {list: data});
                $('#dataList').html(html);
            }
        });
    }
    initList();

    $('#addBookId').click(function () {
        let form = $('#addBookForm');
        let mark = new MarkBox(600, 400, '添加图书', form.get(0));
        mark.init();
        form.find('input[type=button]').click(function () {
            $.ajax({
                type: 'post',
                url: '/books/book',
                data: form.serialize(),
                dataType: 'json',
                success: function (data) {
                    mark.close();
                    if (data.flag === '1') {
                        initList();
                    }
                }
            });
        });
    });
});