import { useState } from "react";
import axios from "axios";

const HenHasPh = () => {
    const[message, setMessage] = useState('')//state for the return value
    const[state, setState] = useState({
        pka: 0.0,
        ratio: 0.0
    });//state for the input paramaters

    const handlePkaChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            pka: event.target.value,
        }));//handle the pka change from user
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
        fetchData()
    };

    const Displays = () => {
        return(
            <div className="Outputs">
                <>pKa {state.pka}</><br/>
                <>Ratio {state.ratio}</><br/>
                <>pH {message}</>
            </div>
        );
    };
    //api function
    async function fetchData(pKa, ratio) {
        //post request to send to the backend
        let res = await axios.post('/.netlify/functions/henhas_ph', {
            pKa: state.pka,
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
                    Input pKa
                    <input className="calcInputs" type="number" value={state.pka} onChange={handlePkaChange} />
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


export default HenHasPh;