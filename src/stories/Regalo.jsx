import PropTypes from 'prop-types';
import './regalo.css';

/**
 * Primary UI component for user interaction
 */
export const Regalo = ({ title, description, tags, ...props }) => {
    return (
        <div className="mainContainer" {...props}>
            <div className="secondaryMainContainer">
                <div className="mainTitle">
                    {title}
                </div>
                <div className="mainDescription">
                    {description}
                </div>
                <div className="mainTagContainer">
                    {tags && tags.length > 0 ? tags.map((element, idx) => { return <div key={idx} className="tagStyle">{element}</div> }) : ""}
                </div>
            </div>
        </div>
    );
};

Regalo.propTypes = {
    /**
     * What title will be displayed on the component
     */
    title: PropTypes.string,
    /**
     * Description to be displayed on the component
     */
    description: PropTypes.string,
    /**
     * Array of tags to be displayed on the component
     */
    tags: PropTypes.array,

};

/**
 * Default props to be shown if the component is not given any value on the props
 */
Regalo.defaultProps = {
    title: "No title",
    description: "No description",
    tags: ['No Tags'],
};