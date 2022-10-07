import { useState } from "react";
import axios from "axios";

const KaToPka = () => {
    const[message, setMessage] = useState('')//state for the return value
    const[state, setState] = useState({
        ka: 0.0,
    });//state for the input paramaters

    const handleKaChange = (event) => {
        event.persist();
        setState((values) => ({
            ...values,
            ka: event.target.value
        }));//handle the pka change from user
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    };

    const Displays = () => {
        return(
            <div className="Outputs">
                <>Ka {state.ka}</><br/>
                <>pKa {message}</>
            </div>
        );
    };

    async function fetchData(ka) {
        //post request to send to the backend
        let res = await axios.post('/.netlify/functions/ka_to_pka', {
            ka: state.ka
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
                    Input Ka
                    <input className="calcInputs" type="number" value={state.ka} onChange={handleKaChange} />
                </label>
                <input className="calcInputs" type="submit" value={"Submit"} />
            </form>

            <Displays />
        </>
    );
}


export default KaToPka;