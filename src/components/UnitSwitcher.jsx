import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../store/unitSlice";

function UnitSwitcher() {
    const dispatch = useDispatch();
    const unit = useSelector((state) => state.unit.value);

    return (
        <div>
            <button onClick={() => dispatch(setUnit("C"))}>°C</button>
            <button onClick={() => dispatch(setUnit("F"))}>°F</button>
            <button onClick={() => dispatch(setUnit("K"))}>K</button>

            <p> Chosen unit: {unit}</p>
        </div>
    );
}

export default UnitSwitcher;