import { useState } from "react";
import axios from "axios";

const HenHasPka = () => {
    const[message, setMessage] = useState('')//state for the return value
    const[state, setState] = useState({
        pH: 0.0,
        ratio: 0.0
    });//state for the input paramaters
    //handle the pha change from user
    const handlePhChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            pH: event.target.value,
        }));
    };

    const handleRatioChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            ratio: event.target.value,
        }));//handle the ratio change from user
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.pH>14 || state.pH<0) {
            setMessage('Invalid pH. pH must not be greater than 14 or less than 0')// returns message if ph is invalid
        } else {
            fetchData()
        }
    };
    //shows result
    const Displays = () => {
        return(
            <div className="Outputs">
                <>pH {state.pH}</><br/>
                <>Ratio {state.ratio}</><br/>
                <>pKa {message}</>
            </div>
        );
    };
    //api function
    async function fetchData(pH, ratio) {
        //post request to send to the backend
        let res = await axios.post('/.netlify/functions/henhas_pka', {
            pH: state.pH,
            ratio: state.ratio
        });
        //defines the response from the backend
        let data = res.data.message;

        console.log(data)
        setMessage(data)
    };

    return (
        <>
            <form className="calcForm" onSubmit={handleSubmit}>
                <label>
                    Input pH
                    <input className="calcInputs" type="number" value={state.pH} onChange={handlePhChange} />
                </label>

                <label>
                    Input ratio
                    <input className="calcInputs" type="number" value={state.ratio} onChange={handleRatioChange} />
                </label>
                <input className="calcInputs" type="submit" value={"Submit"} />
            </form>

            <Displays />
        </>
    );
}


export default HenHasPka;