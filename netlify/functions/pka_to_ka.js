const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)
 
    //henderson hasselbalch equation solving for the ratio of base to acid
    function pkaToKa(pKa) {
        ka =  10**(-pKa)
        return(ka)
    }
    return {
        statusCode: 200,
        body: JSON.stringify({message: pkaToKa(input.pKa)
    })}
}