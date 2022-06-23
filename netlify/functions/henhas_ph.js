const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)

    //henderson hasselbalch equation solving for pH
    function henHasPh(pKa, ratio) {
        pH = Number(pKa) + Math.log10(ratio)
        return(pH)
    }
    return {
        statusCode: 200,
        body: JSON.stringify({message: henHasPh(input.pKa, input.ratio)
    })}
}