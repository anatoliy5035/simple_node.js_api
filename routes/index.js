var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendAnswers', function(req, res, next) {
    let testID = req.body.testID;
    let useerAnswers = req.body.userAnswers;
    let currentTest = tests.find(x => x.testID === testID);
    let rightAnswers = currentTest.rightAnswers;

    function checkTest() {
        let arrayOfScores = [];
        useerAnswers.forEach(function(answer, i, arr) {
            if (answer == rightAnswers[i]) {
                arrayOfScores.push(true);
            } else {
                arrayOfScores.push(false);
            }
        });
        return arrayOfScores;
    }
    let scoreResult = checkTest();
    res.json(
        {
            'result': scoreResult,
            'rightAnswers': rightAnswers
        });
});

>>>>>>> Stashed changes
module.exports = router;
