const axios = require('axios').default;

exports.handler = async function (event, context) {

    let input = JSON.parse(event.body)

    //henderson hasselbalch equation solving for pH
    function henHasPh(pKa, ratio) {
        pH = Number(pKa) + Math.log10(ratio)
        return(pH)
    }
    henHasPh(input.pKa, input.ratio)
    if (pH > 14 || pH < 0) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Invalid pH. pH must not be greater than 14 or less than 0"})}
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({message: pH})};
    }
}