import React from 'react';
import { render } from 'react-dom';

const user = {
    firstName: 'Test',
    lastName: 'User'
};

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

render(element, document.getElementById('root'));
