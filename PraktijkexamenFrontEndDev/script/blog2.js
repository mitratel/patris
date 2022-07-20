$(document).ready(function() {

    $.ajaxSetup({
        error: function(x, ) {
            if (x.status == 0) {
                $('#divRes2').text('Check Network.')
                    // alert(' Check Network.');
            } else if (x.status == 404) {
                $('#divRes2').text('Requested URL not found.')
                    // alert('Requested URL not found.');
            } else if (x.status == 500) {
                $('#divRes2').text('Internal Server Error.')
                    // alert('Internal Server Error.');
            } else {
                $('#divRes2').text('Unknown Error.\n' + x.responseText)
                    //  alert('Unknown Error.\n' + x.responseText);
            }
        }
    });

    $.get('/blogcontent.html', function(data) {

        const $respons = $('<div />').html(data);
        $('#divRes2')
            .append($respons.find('a').css("font-size", "10px"))
            .append($respons.find('h2').css("font-size", "15px"))
            .append('<hr width="95%" color="brown" />')
            // .append($respons.find('#artikel2'))
            // .append('<hr width="95%" color="brown" />')
            // .append($respons.find('#artikel3'))

        // .find("h1")

    }, 'html');

    //Artikel1 scripts
    $(document).ready(function() {
        $(function() {
            $('#jqueryui').delay(400).slideDown();
        });
    });

    $(".main").tiltedpage_scroll({
        sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
        angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
        opacity: true, // You can toggle the opacity effect with this option. The default value is true
        scale: true, // You can toggle the scaling effect here as well. The default value is true.
        outAnimation: true // In case you do not want the out animation, you can toggle this to false. The default value is true.
    });

    $('#my-video-display').prettyEmbed({
        videoID: 'P6sAcREDhwA',
        previewSize: 'hd', // use either this option...
        customPreviewImage: '', // ...or this option

        // Embed controls
        showInfo: false,
        showControls: true,
        loop: false,

        colorScheme: 'dark',
        showRelated: false,

        useFitVids: true
    });

    $(function() {
        $("#toolTip").tooltip({
            show: {
                effect: "slideDown",
                delay: 250
            }
        });

    });

});