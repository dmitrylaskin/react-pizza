import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const AddBtn = ({onClick, className, outline, children}) => {
    return (
        <button onClick={onClick} className={cn('button', className, {'button-outline': outline})}>
            {children}
        </button>
    );
};

AddBtn.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    outline: PropTypes.string,
    children: PropTypes.node
}

export default AddBtn;