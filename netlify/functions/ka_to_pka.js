const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)
 
    //henderson hasselbalch equation solving for the ratio of base to acid
    function kaToPka(ka) {
        pKa =  -Math.log10(ka)
        return(pKa)
    }
    return {
        statusCode: 200,
        body: JSON.stringify({message: kaToPka(input.ka)
    })}
}