questionList.forEach(function (item, index) {
    item.answerList.forEach(function (item, index){
        if (item.correct == "1") {
            var answerId = item.answerId;
            Array.prototype.forEach.call(document.getElementsByTagName('i'), function (item, index) {
                if (item.getAttribute('answer_id') == answerId) {
                    item.click();
                }
            });
        }
    }); 
});