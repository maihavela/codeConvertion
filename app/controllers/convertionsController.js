const convertions = require('../models/convertions');

exports.toMorse = function(req, res) {
    var txt = req.params.txt;    
    convertions.toMorse(txt, function(converted, err) {
        console.log('err ' + err);
        console.log('err ' + err);
        if(err) {
            return res.status(404).json({
                message: 'Text is missing.',
                error: err,
            });
        }

        return res.status(200).json({
            success: {
                "total": 1
            },
            contents: {
                "translated": converted,
                "text": txt,
                "translation": {
                    "source": "Human Code",
                    "destination": "Morse Code"
                }
            }
        });
    });
}

   
exports.toText = function(req, res) {
    var txt = req.params.txt;
    console.log(txt);
    convertions.toText(txt, function(converted, err) {
        if(err) {
            return res.status(400).json({
                message: 'Bad Request: text is missing.',
                error: err,
            });
        }

        return res.status(200).json({
            success: {
                "total": 1
            },
            contents: {
                "translated": converted,
                "text": txt,
                "translation": {
                    "source": "Morse Code",
                    "destination": "Human Code"
                }
            }
        });
    });
}

