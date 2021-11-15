import './Toggle.css'

const Toggle = props => {

    const darkMode = () => {
        const body = document.querySelector('body')
        body.classList.toggle('dark-mode')
    }

    return (
        <div className="dark-mode-container">
        <label className="label">
            <div className="toggle">
                <input id="checkbox" className="toggle-state" type="checkbox" name="check" value="check" onChange={darkMode} />
                <div className="indicator"></div>
            </div>
        </label>
            <p>Dark Mode</p>
        </div>
    )
}

export default Toggle