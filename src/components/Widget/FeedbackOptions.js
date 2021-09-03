import styles from './Widget.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div className={styles.btn_container}>
            {options.map((option) => {
                return (<button key={option} className={styles.btn} onClick={() => onLeaveFeedback(option)} >{option}</button>)
            })}
        </div>
    );
};
export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
};