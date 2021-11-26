import CopyToClipboard from "react-copy-to-clipboard"

const Options = ({ paragraphs,
    tag,setTag,inputValue,setInputValue,includeHtml,setIncludeHtml }) => {
    return (
        <div className="options">
            <div className="wrapper">
                <div className="optionsContainer">
                    <div className="paragraphs">
                        <p>Paragraphs: </p>
                        <input type="number" min="1" max="10"
                            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <div className="tags">
                        <p>Tags: </p>
                        <select name="" id="" defaultValue={tag} onChange={(e) => setTag(e.target.value)}>
                            <option value="p">&lt;p&gt;</option>
                            <option value="h1">&lt;h1&gt;</option>
                            <option value="h2">&lt;h2&gt;</option>
                            <option value="h3">&lt;h3&gt;</option>
                            <option value="h4">&lt;h4&gt;</option>
                            <option value="h5">&lt;h5&gt;</option>
                            <option value="h6">&lt;h6&gt;</option>
                            <option value="span">&lt;span&gt;</option>
                        </select>
                    </div>

                    <div className="include">
                        <p>Include HTML: </p>
                        <select name="" id="" defaultValue={includeHtml} onChange={(e) => setIncludeHtml(e.target.value)}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="copy">
                        <CopyToClipboard
                            onCopy={() => alert('Text has been copied!')}
                            text={paragraphs.map(p => includeHtml === 'yes' ? `<${tag}>${p}</${tag}>` : p)}>
                            <button>Copy to clipboard</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
