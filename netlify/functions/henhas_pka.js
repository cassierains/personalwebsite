const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)

    //henderson hasselbalch equation solving for pKa
    function henHasPka(pH, ratio) {
        pKa = Number(pH) - Math.log10(ratio)
        return(pKa)
    }

    return {
        statusCode: 200,
        body: JSON.stringify({message: henHasPka(input.pH, input.ratio)
    })}
}