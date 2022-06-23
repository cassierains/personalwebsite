import { useState } from "react";
import axios from "axios";

const HenHasRatio = () => {
    const[message, setMessage] = useState('')//state for the return value
    const[state, setState] = useState({
        pH: 0.0,
        pKa: 0.0
    });//state for the input paramaters

    const handlePhChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            pH: event.target.value,
        }));//handle the pka change from user
    };

    const handlePkaChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            pKa: event.target.value,
        }));//handle the ratio change from user
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    };

    async function fetchData(pH, pKa) {
        //post request to send to the backend
        let res = await axios.post('/.netlify/functions/henhas_ratio', {
            pH: state.pH,
            pKa: state.pKa
        });
        //defines the response from the backend
        let data = res.data.message;

        console.log(data)
        setMessage(data)
    };

    const Displays = () => {
        return(
            <div className="Outputs">
                <>pH {state.pH}</><br/>
                <>pKa {state.pKa}</><br/>
                <>Ratio {message}</>
            </div>
        );
    };

    return (
        <>
            <form className="calcForm" onSubmit={handleSubmit}>
                <label>
                    Input pH
                    <input className="calcInputs" type="number" value={state.pH} onChange={handlePhChange} />
                </label>

                <label>
                    Input pKa
                    <input className="calcInputs" type="number" value={state.pKa} onChange={handlePkaChange} />
                </label>
                <input className="calcSubmit" type="submit" value={"Submit"} />
            </form>

            <Displays />
        </>
    );
}


export default HenHasRatio;