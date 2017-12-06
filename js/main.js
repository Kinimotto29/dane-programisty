$(function () {

    function getInfo() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (info) {

            var divInfo = document.createElement('div');

            $(divInfo).attr('id', 'dane-programisty');

            $(divInfo).html(

                ' Imię: ' + info.imie + '<br> Nazwisko: ' + info.nazwisko + '<br> Zawód: ' + info.zawod + '<br> Firma: ' + info.firma

            );

            $('#get-info').after(divInfo);

        });

    }

    $('#get-info').click(getInfo);

});