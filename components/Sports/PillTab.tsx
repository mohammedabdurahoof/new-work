import React from 'react';

interface PillTabProps {
    icon: React.ReactNode;
    label: string;
}

const PillTab: React.FC<PillTabProps> = ({ icon, label }) => {
    return (
        <div className="bt111 bt204 bt1255 bt116 bt122" data-editor-id="pillTabs">
            <div className="bt118 bt201" data-editor-id="pillTabsIcon">
                {icon}
            </div>
            <div className="bt119">
                <div className="bt121">{label}</div>
            </div>
        </div>
    );
};

export default PillTab;
