import './Section.css';

function Section(props) {
    return (
        <article>
            <div>
                <li>{props.todo}</li>
            </div>
        </article >
    );
}

export default Section;
