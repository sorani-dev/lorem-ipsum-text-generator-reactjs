const Output = ({ paragraphs,tag,includeHtml }) => {
    return (
        <div className='output'>
            {includeHtml === 'yes' ? (
                <p>{paragraphs.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
            ) :
                <p>{paragraphs.map(sentence => sentence)}</p>
            }
        </div>
    )
}

export default Output
