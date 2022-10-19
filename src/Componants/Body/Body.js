import React from 'react';
import MessageAndNotice from './Sub-Sections/MessageAndNotice';
import Statistics from './Sub-Sections/Statistics';

const Body = () => {
    return (
        <section>
            <MessageAndNotice />
            <Statistics/>
        </section>
    );
};

export default Body;