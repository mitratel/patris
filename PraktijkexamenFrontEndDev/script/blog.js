$(document).ready(function() {

    // $.ajax({
    // url: 'blogcontent.html',
    //  cache: false,
    //     data: ({ id: artikel1 }),
    //     success: function(data) {

    //         $('#divRes').html(data);

    //     },
    //     error: function() {
    //         $('#divRes').append('Er is iets fout gegaan!')
    //     }
    // });


    //$('#divRes').load('blogcontent.html #artikel3, #artikel1').fadeIn('slow');
    // // $('#divRes').append('blogcontent.html #artikel1').fadeIn('slow');


    // var page = $('<div />').load('blogcontent.html #artikel3, #artikel1');
    // var artikel3 = page.find('#artikel3');
    // var artikel1 = page.find('#artikel1');
    // $('#divRes')
    //     .html(artikel3)
    //     .append('<hr/>')
    //     .append(artikel1);

    $.ajaxSetup({
        error: function(x, e) {
            if (x.status == 0) {
                $('#divRes').text('Check Network.')
                    // alert(' Check Network.');
            } else if (x.status == 404) {
                $('#divRes').text('Requested URL not found.')
                    // alert('Requested URL not found.');
            } else if (x.status == 500) {
                $('#divRes').text('Internal Server Error.')
                    // alert('Internal Server Error.');
            } else {
                $('#divRes').text('Unknown Error.\n' + x.responseText)
                    //  alert('Unknown Error.\n' + x.responseText);
            }
        }
    });

    $.get('/blogcontent.html', function(data) {

        const $respons = $('<div />').html(data);
        $('#divRes')
            .append($respons.find('#artikel1'))
            .append('<hr width="95%" color="brown" />')
            .append($respons.find('#artikel2'))
            .append('<hr width="95%" color="brown" />')
            .append($respons.find('#artikel3'))



    }, 'html');
    //    $('#divRes2').load('blogcontent.html #artikel3, #artikel1, #artikel2')

});