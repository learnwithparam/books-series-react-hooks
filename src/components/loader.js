import React from 'react';

const Loader = ({ loading, searchTerm }) => {
    return (
        <>
            {
                loading && <div style={{color: `green`}}>fetching books for "<strong>{searchTerm}</strong>"</div>
            }
        </>
    );
};

export default Loader;