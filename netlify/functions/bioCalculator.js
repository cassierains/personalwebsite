const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)

    //henderson hasselbalch equation solving for pKa
    function henHasPka(pH, ratio) {
        pKa = Number(pH) - Math.log10(ratio)
        return(pKa)
    }

    //henderson hasselbalch equation solving for the ratio of base to acid
    function henHasRatio(pH, pKa) {
        ratio =  10**(pH-pKa)
        return(ratio)
    }

    return {
        statusCode: 200,
        body: JSON.stringify({message: henHasPh(input.pKa, input.ratio)
    })}
}