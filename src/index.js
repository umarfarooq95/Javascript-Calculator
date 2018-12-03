(function($) {

    $.fn.javascriptCalcInit = init;

    var root = {
        margin: 'auto',
        width: '480px',
        height: '355px',
        border: '2px solid black',
        marginTop: '50px',
        background: '#e8e8e8',
        borderRadius: '5px',
        "box-sizing": 'border-box'
    };
    var value = {
        width: '90%',
        margin: '19px',
        height: '35px',
        padding: '10px'
    };

    var bodyWrapperClassObj = {
        display: 'flex'
    };

    var numbersWrapperClassObj = {
        width: '345px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse'
    };

    var operatorsWrapperClassObj = {
        display: 'flex',
        flexDirection: 'column'
    };

    var numbersClassObj = {
        width: '75px',
        height: '40px',
        display: 'inline-block',
        margin: '10px 19px 19px 19px',
        border: '2px solid lightblue',
        padding: '10px',
        background: 'white',
        cursor: 'pointer',
        borderRadius: '5px'
    }
    var styleTag = '<style>*{box-sizing: border-box;body{margin: 0;}'+
    'input[type=number]::-webkit-inner-spin-button,'+
    'input[type=number]::-webkit-outer-spin-button {'+
        '-webkit-appearance: none;'+
        'margin: 0;'+
    '}<style>';

    function init() {
        $(this).css(root).addClass('root').append(styleTag);
        buildBasicStructure();
        buildNumbers();
        buildClearAndEqualDivs()
        buildCalcOperators()
    }

    function buildBasicStructure(){
        var input = $('<input/>').css(value).addClass('value').attr('readonly', true);
        var bodyWrapper = $('<div></div>').css(bodyWrapperClassObj).addClass('body-wrapper');
        var numbersWrapper = $('<div></div>').css(numbersWrapperClassObj).addClass('numbers-wrapper')
        var operatorsWrapper = $('<div></div>').css(operatorsWrapperClassObj).addClass('operators-wrapper')
        $(bodyWrapper).append(numbersWrapper);
        $(bodyWrapper).append(operatorsWrapper);
        $(".root").append(input);
        $(".root").append(bodyWrapper);
    }

    function buildNumbers() {
        var numberWrapper = $('.numbers-wrapper')
        for (var i = 0; i < 10; i++) {
            var numbersDiv = $('<div></div>').css(numbersClassObj).addClass('numbers').attr('id', 'numbersDiv' + i);
            var textDiv = $('<div></div>').css({textAlign: 'center'})
            textDiv[0].innerText = i
            $(numbersDiv).append(textDiv);
            $(numberWrapper).append(numbersDiv)
            var onClickNumbersBtn = numberWrapper.find("#numbersDiv" + i);
            onClickNumbersBtn.on('click', onNumbersClick)
        }
    }

    function buildClearAndEqualDivs() {
        var arr = ['c', '='];
        var numberWrapper = $('.numbers-wrapper')
        for (var j = 0; j < arr.length; j++) {
            var numbersDiv = $('<div></div>').css(numbersClassObj).addClass('numbers').attr('id', 'clearOrEqualDivs' + j);
            var textDiv = $('<div></div>').css({textAlign: 'center'})
            textDiv[0].innerText = arr[j]
            $(numbersDiv).append(textDiv);
            $(numberWrapper).append(numbersDiv)
            var onClickClearOrClearBtn = numberWrapper.find("#clearOrEqualDivs" + j);
            onClickClearOrClearBtn.on('click', onClearOrEqualClick)
        }
    }

    function onClearOrEqualClick() {
        var clickedDiv = $(this);
        var clickedDivText = clickedDiv[0].innerText
        if (clickedDivText != 'c') {
            var currentInputValue = $('.value').val();
            var result = eval(currentInputValue);
            $('.value').val(result);
            return;
        };
        $('.value').val("");
    }

    function onNumbersClick() {
        var clickedNumbersDiv = $(this);
        var clickedNumbersDivText = +clickedNumbersDiv[0].innerText
        var currentInputValue = $('.value').val();
        currentInputValue += clickedNumbersDivText
        $('.value').val(currentInputValue);
    }

    function buildCalcOperators() {
        var operators = ['+', '-', '*', '/'];
        var operatorWrapper = $('.operators-wrapper')
        for (var j = 0; j < operators.length; j++) {
            var numbersDiv = $('<div></div>').css(numbersClassObj).addClass('numbers').attr('id', 'operatorsDivs' + j);
            var textDiv = $('<div></div>').css({textAlign: 'center'})
            textDiv[0].innerText = operators[j]
            $(numbersDiv).append(textDiv);
            $(operatorWrapper).append(numbersDiv)
            var onClickOperatorsBtn = operatorWrapper.find("#operatorsDivs" + j);
            onClickOperatorsBtn.on('click', onOperatorsClick)
        }
    }

    function onOperatorsClick() {
        var clickedOperatorDiv = $(this);
        var clickedOperatorDivText = clickedOperatorDiv[0].innerText
        var currentInputValue = $('.value').val();
        currentInputValue = currentInputValue + " " + clickedOperatorDivText + " "
        $('.value').val(currentInputValue);
    }

}(jQuery));

$(document).ready(function(){
    $('.wrapper').javascriptCalcInit()
})