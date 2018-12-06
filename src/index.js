(function($) {

    $.fn.javascriptCalcInit = init;

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

    function init(options) {
        $(this).css({
            margin: 'auto',
            width: '480px',
            height: '355px',
            border: '2px solid black',
            marginTop: '50px',
            background: options && options.background ?options.background :'#e8e8e8',
            borderRadius: '5px'
        }).addClass('root').append(styleTag);
        buildBasicStructure();
        buildNumbers(options);
        buildClearAndEqualDivs(options)
        buildCalcOperators(options)
    }

    function buildBasicStructure(){
        var input = $('<input/>').css(value).addClass('value').attr({
            'readonly':true
        });
        input.on('keydown',onKeyDownTrigger)
        var bodyWrapper = $('<div></div>').css(bodyWrapperClassObj).addClass('body-wrapper');
        var numbersWrapper = $('<div></div>').css(numbersWrapperClassObj).addClass('numbers-wrapper')
        var operatorsWrapper = $('<div></div>').css(operatorsWrapperClassObj).addClass('operators-wrapper')
        $(bodyWrapper).append(numbersWrapper);
        $(bodyWrapper).append(operatorsWrapper);
        $(".root").append(input);
        $(".root").append(bodyWrapper);
    }

    function onKeyDownTrigger(e) {
        var keyCode = e.keyCode;
        var operators = ['+','-', '*', '/'];
        if (operators.indexOf(e.key) >= 0) {
            e.target.value = e.target.value + " " + e.key +" ";
            return;
        }
        // this condition is for '=' has keyCode 187
        if(keyCode == 187){
            var currentInputValue = $('.value').val();
            var result = eval(currentInputValue);
            $('.value').val(result);
            return;
        }
        // first condition is for without numpad numbers
        // second condition is for with numpad numbers
        if ((keyCode <= 57 && keyCode >= 48)||(keyCode <= 105 && keyCode >= 96) ) {
            e.target.value += e.key
        }
        // this condition is for "backspace" has keyCode 8
        if(keyCode == 8){
            var currentInputValue = $('.value').val();
            var slicedStr = currentInputValue.slice(0,currentInputValue.length-1)
            $('.value').val(slicedStr)
        }
    }

    function buildNumbers(options) {
        var numberWrapper = $('.numbers-wrapper')
        for (var i = 0; i < 10; i++) {
            var numbersDiv = $('<div></div>').css({
                width: '75px',
                height: '40px',
                display: 'inline-block',
                margin: '10px 19px 19px 19px',
                border: '2px solid lightblue',
                padding: '10px',
                color:options && options.numbersColor ?options.numbersColor :'black',
                background: options && options.numbersBackground ?options.numbersBackground :'white',
                cursor: 'pointer',
                borderRadius: '5px'
            }).addClass('numbers').attr('id', 'numbersDiv' + i);
            var textDiv = $('<div></div>').css({textAlign: 'center'})
            textDiv[0].innerText = i
            $(numbersDiv).append(textDiv);
            $(numberWrapper).append(numbersDiv)
            var onClickNumbersBtn = numberWrapper.find("#numbersDiv" + i);
            onClickNumbersBtn.on('click', onNumbersClick)
        }
    }

    function buildClearAndEqualDivs(options) {
        var arr = ['c', '='];
        var numberWrapper = $('.numbers-wrapper')
        for (var j = 0; j < arr.length; j++) {
            var numbersDiv = $('<div></div>').css({
                width: '75px',
                height: '40px',
                display: 'inline-block',
                margin: '10px 19px 19px 19px',
                border: '2px solid lightblue',
                padding: '10px',
                color:options && options.clearAndEqualColors ?options.clearAndEqualColors :'black',
                background: options && options.clearAndEqualBackgrounds ?options.clearAndEqualBackgrounds :'white',
                cursor: 'pointer',
                borderRadius: '5px'
            }).addClass('numbers').attr('id', 'clearOrEqualDivs' + j);
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

    function buildCalcOperators(options) {
        var operators = ['+', '-', '*', '/'];
        var operatorWrapper = $('.operators-wrapper')
        for (var j = 0; j < operators.length; j++) {
            var numbersDiv = $('<div></div>').css({
                width: '75px',
                height: '40px',
                display: 'inline-block',
                margin: '10px 19px 19px 19px',
                border: '2px solid lightblue',
                padding: '10px',
                color:options && options.operatorsColor ?options.operatorsColor :'black',
                background: options && options.operatorsBackground ?options.operatorsBackground :'white',
                cursor: 'pointer',
                borderRadius: '5px'
            }).addClass('numbers').attr('id', 'operatorsDivs' + j);
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