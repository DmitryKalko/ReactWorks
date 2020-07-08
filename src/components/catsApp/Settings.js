import React from 'react';

const Settings = (props) => {
    const { onChange } = props;
    return (
        <div className="settings">
            <input type="text" placeholder="Поиск по имени" className="find-cat left" name="search" onChange={onChange} />
        </div>

    );
}

export default Settings;