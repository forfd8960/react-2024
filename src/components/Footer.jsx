const Footer = (props) => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

export default Footer;