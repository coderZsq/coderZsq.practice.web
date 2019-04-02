$(function () {
    function initList() {
        $.ajax({
            type: 'get',
            url: '/books',
            dataType: 'json',
            success: function (data) {
                let html = template('indexTpl', {list: data});
                $('#dataList').html(html);
                $('#dataList').find('tr').each(function (index, element) {
                    let td = $(element).find('td:eq(5)');
                    let id = $(element).find('td:eq(0)').text();
                    td.find('a:eq(0)').click(function () {
                        editBook(id);
                    });
                    td.find('a:eq(1)').click(function () {
                        deleteBook(id);
                    });
                    addBook();
                    let form = $('#addBookForm');
                    form.get(0).reset();
                    form.find('input[type=hidden]').val('');
                });
            }
        });
    }
    initList();


    function deleteBook(id) {
        $.ajax({
            type: 'delete',
            url:'/books/book/' + id,
            dataType: 'json',
            success: function (data) {
                if (data.flag == '1') {
                    initList();
                }
            }
        });
    }


    function editBook(id) {
        let form = $('#addBookForm');
        $.ajax({
            type: 'get',
            url: '/books/book/' + id,
            dataType: 'json',
            success: function (data) {
                let mark = new MarkBox(600, 400, '编辑图书', form.get(0));
                mark.init();
                form.find('input[name=id]').val(data.id);
                form.find('input[name=name]').val(data.name);
                form.find('input[name=author]').val(data.author);
                form.find('input[name=category]').val(data.category);
                form.find('input[name=description]').val(data.description);
                form.find('input[type=button]').unbind('click').click(function () {
                    $.ajax({
                        type: 'put',
                        url: '/books/book',
                        data: form.serialize(),
                        dataType: 'json',
                        success: function (data) {
                            if (data.flag == '1') {
                                mark.close();
                                initList();
                            }
                        }
                    });
                });
            }
        });
    }


    function addBook() {
        $('#addBookId').click(function () {
            let form = $('#addBookForm');
            let mark = new MarkBox(600, 400, '添加图书', form.get(0));
            mark.init();
            form.find('input[type=button]').unbind('click').click(function () {
                $.ajax({
                    type: 'post',
                    url: '/books/book',
                    data: form.serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.flag == '1') {
                            mark.close();
                            initList();
                        }
                    }
                });
            });
        });
    }
});