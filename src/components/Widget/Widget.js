import { useState } from "react";

import Section from './Section'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Notification from './Notification'

const options = ['good', 'neutral', 'bad']

function Widget () {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const feedbaks = {
        good,
        neutral,
        bad
    };

   const leaveFeedback = (feedback) => {
       switch (feedback) {
           case 'good':
               setGood(prev => prev + 1)
               break;
           case 'neutral':
               setNeutral(prev => prev + 1)
               break;
           case 'bad':
               setBad(prev => prev + 1)
               break;
           default: console.log('Invalid type')
        }
    };

   const countTotalFeedback = ({good, neutral, bad} ) => {
        return (good + neutral + bad)
    };
   const countPositiveFeedbackPercentage = ({good, neutral, bad}) => {
        return (good / ((good + neutral + bad) / 100))
    };

    return (
        <Section title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
            {countTotalFeedback(feedbaks) ?
                <Statistics options={options} feedbaks={feedbaks} total={countTotalFeedback(feedbaks)} positivePercentage={countPositiveFeedbackPercentage(feedbaks)} /> :
                <Notification message="No feedback given" />
            }
        </Section>
    );
};
export default Widget
