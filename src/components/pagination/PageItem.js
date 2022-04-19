function PageItem(props) {
    return (
        <li
            className={`page-item ${props.active === true ? "active" : ""} ${
                props.disabled === true ? "disabled" : ""
            }`}
        >
            <button className="page-link shadow-none">{props.children}</button>
        </li>
    );
}

export default PageItem;
