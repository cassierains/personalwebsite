import { useState } from "react";
import axios from "axios";

const PkaToKa = () => {
    const[message, setMessage] = useState('')//state for the return value
    const[state, setState] = useState({
        pKa: 0.0,
    });//state for the input paramaters

    const handlePkaChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            pKa: event.target.value
        }));//handle the pka change from user
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    };

    const Displays = () => {
        return(
            <div className="Outputs">
                <>pKa {state.pKa}</><br/>
                <>Ka {message}</>
            </div>
        );
    };

    async function fetchData(pKa) {
        //post request to send to the backend
        let res = await axios.post('/.netlify/functions/pka_to_ka', {
            pKa: state.pKa,
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
                    <input className="calcInputs" type="number" value={state.pKa} onChange={handlePkaChange} />
                </label>
                <input className="calcInputs" type="submit" value={"Submit"} />
            </form>

            <Displays />
        </>
    );
}


export default PkaToKa;