const checkbox = ({ value, index, onChange, children }) => {

    return (
        <label>
            <input type="checkbox" checked={value} onChange={(e) => onChange(e, index)} />
            {children}
        </label>
    );
}

export default checkbox;