import './Toggle.css'

const Toggle = props => {

    return (
        <label className="label">
            <div className="toggle">
                <input id="checkbox" className="toggle-state" type="checkbox" name="check" value="check" />
                <div className="indicator"></div>
            </div>
        </label>
    )
}

export default Toggle