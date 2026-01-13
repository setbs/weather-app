import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../store/unitSlice";

function UnitSwitcher() {
    const dispatch = useDispatch();
    const unit = useSelector((state) => state.unit.value);

    return (
        <div className="unit-switcher" aria-label="Switch temperature unit">
            <button className={unit === "C" ? "active" : ""} onClick={() => dispatch(setUnit("C"))}>°C</button>
            <button className={unit === "F" ? "active" : ""} onClick={() => dispatch(setUnit("F"))}>°F</button>
            <button className={unit === "K" ? "active" : ""} onClick={() => dispatch(setUnit("K"))}>K</button>
        </div>
    );
}

export default UnitSwitcher;