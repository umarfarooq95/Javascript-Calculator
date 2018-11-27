(function($) {

    $.fn.javascriptCalcInit = init;

    function init() {
        $(this).addClass('root')
        buildBasicStructure();
        buildNumbers();
        buildClearAndEqualDivs()
        buildCalcOperators()
    }

    function buildBasicStructure(){
        var input = $('<input/>').addClass('value').attr('readonly', true);
        var bodyWrapper = $('<div></div>').addClass('body-wrapper');
        var numbersWrapper = $('<div></div>').addClass('numbers-wrapper')
        var operatorsWrapper = $('<div></div>').addClass('operators-wrapper')
        $(bodyWrapper).append(numbersWrapper);
        $(bodyWrapper).append(operatorsWrapper);
        $(".root").append(input);
        $(".root").append(bodyWrapper);
    }

    function buildNumbers() {
        var numberWrapper = $('.numbers-wrapper')
        for (var i = 0; i < 10; i++) {
            var numbersDiv = $('<div></div>').addClass('numbers').attr('id', 'numbersDiv' + i);
            var textDiv = $('<div></div>').addClass('text-center')
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
            var numbersDiv = $('<div></div>').addClass('numbers').attr('id', 'clearOrEqualDivs' + j);
            var textDiv = $('<div></div>').addClass('text-center')
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
            var numbersDiv = $('<div></div>').addClass('numbers').attr('id', 'operatorsDivs' + j);
            var textDiv = $('<div></div>').addClass('text-center')
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