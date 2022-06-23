import { useState } from "react";
import KaToPka from "./ka_pka/ka_to_pka";
import PkaToKa from "./ka_pka/pka_to_ka";

const KaPkaCalculator = () => {
    const[calcOption, setCalcOption] = useState(null)

    return(
        <>
            <form className="calcForm">
                <label>
                    What variable are you solving for?
                    <select className="calcSelect" onChange={(e) => setCalcOption(e.target.value)}>
                        <option defaultValue={<>Select Output</>}>Select Output</option>
                        <option value="katopka">Convert Ka to Pka</option>
                        <option value="pkatoka">Convert pKa to Ka</option>
                    </select>
                </label>
            </form>
            {calcOption === 'katopka' ? (
                <KaToPka />): 
            calcOption === 'pkatoka' ? (
                <PkaToKa />):
                <></>
            }
        </>
    );
}

export default KaPkaCalculator;