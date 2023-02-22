import './style.scss'

const Button = ({label, onClick, variant, icon, disabled}) => {
    return(
        <button className={`button ${variant}`} onClick={onClick}>{label && label} {icon && <image src={icon} alt={icon} disabled={disabled} />}</button>
    )
}

export default Button