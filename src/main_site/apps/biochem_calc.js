import { useState } from "react";
import HenHasEquation from "./calculator_components/henhas_calc";
import KaPkaCalculator from "./calculator_components/pka_ka_calc";

const BiochemCalculator = () => {
    const[calcOption, setCalcOption] = useState(null)
    return(
        <div className="biochemcalc">
            <div className="biotitle">Cassie's Biochemistry Calculator</div>
            <form className="calcForm">
                <label>
                    What equation do you need to use?
                    <select className="calcSelect" onChange={(e) => setCalcOption(e.target.value)}>
                        <option defaultValue={<>Select Equation</>}>Select Equation</option>
                        <option value="kapkaEquation">Convert between Ka and pKa</option>
                        <option value="henhasEquation">Henderson Hasselbach Equation</option>
                    </select>
                </label>
            </form>
            {calcOption === 'kapkaEquation' ? (
                <KaPkaCalculator />):
                calcOption === 'henhasEquation' ? (
                <HenHasEquation />):
                <></>
            }
        </div>

    )
};

export default BiochemCalculator;