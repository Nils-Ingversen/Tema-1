import "./Quote.css";

export default function Quote({ description, name, product }) {
    return (
        <div className="guillemets_content">
            <p className="guillemets">"</p>
            <h2 className="title">{description}</h2>
            <div className="details">
                <p className="details_name">{name}</p>
                <div className="dot"></div>
                <p className="details_product">{product}</p>
            </div>
        </div>
    );
}
