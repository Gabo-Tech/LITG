import React from 'react';

const Output = (props) => {
    const {paragraphs, tag, includeHtml} = props;
    return (
        <div className="output">
            {includeHtml === "Yes" ? (
                <p>{paragraphs.map((sentence) => `<${tag}>${sentence}</${tag}>`)}</p>
            ) : (
                <p>{paragraphs.map((sentence) => sentence)}</p>
            )}
        </div>
    )
}

export default Output
