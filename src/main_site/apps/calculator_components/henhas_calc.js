import { useState } from "react";
import HenHasPh from "./henhas_components/henhas_ph";
import HenHasPka from "./henhas_components/henhas_pka";
import HenHasRatio from "./henhas_components/henhas_ratio";

const HenHasEquation = () => {
    const[calcOption, setCalcOption] = useState(null)

    return(
        <>
            <form className="calcForm">
                <label>
                    What variable are you solving for?
                    <select className="calcSelect" onChange={(e) => setCalcOption(e.target.value)}>
                        <option defaultValue={<>Select Output</>}>Select Output</option>
                        <option value="henhasPka">pKa</option>
                        <option value="henhasPh">pH</option>
                        <option value="henhasRatio">Ratio</option>
                    </select>
                </label>
            </form>
            {calcOption === 'henhasPka' ? (
                <HenHasPka />): 
            calcOption === 'henhasPh' ? (
                <HenHasPh />): 
            calcOption === 'henhasRatio' ? (
                <HenHasRatio />):
                <></>
            }
        </>
    );
}

export default HenHasEquation;