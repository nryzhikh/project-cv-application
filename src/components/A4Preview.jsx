import '../styles/A4Preview.css';

function A4Preview(props) {
    return (
        <div className="a4-container">
            {props.children}
        </div>
    );
}

export default A4Preview;