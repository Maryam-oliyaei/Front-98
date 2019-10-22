// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';

var $Slider = $('ul.slider');

function Next() {
    var Current = $Slider.find('li.active');

    if(Current.next('li').length !== 0){
        Current.next('li').addClass('active');
    }else{
        $Slider.find('li:first').addClass('active');
    }
    Current.removeClass('active')
}

function Prev() {
    var Current = $Slider.find('li.active');

    if(Current.prev('li').length !== 0){
        Current.prev('li').addClass('active');
    }else{
        $Slider.find('li:last').addClass('active');
    }
    Current.removeClass('active')
}


$('#next').on('click', function () {
    Next();
});

$('#prev').on('click', function () {
    Prev();
});