import { useEffect,useState } from 'react';
import './App.css';
import Options from './components/Options';
import Output from './components/Output';

function App() {
  const [paragraphs,setParagraphs] = useState([])
  const [tag,setTag] = useState('p')
  const [inputValue,setInputValue] = useState(1)
  const [includeHtml,setIncludeHtml] = useState('yes')

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}s=1&start-with-lorem=1`

    fetch(url).then(res => res.json())
      .then(data => setParagraphs(data))
      .catch(err => console.error(err))
    return () => {
    }
  },[inputValue])

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Lorem Ipsum Text Generator</h1>
        <Options
          paragraphs={paragraphs}
          inputValue={inputValue}
          setInputValue={setInputValue}
          includeHtml={includeHtml}
          setIncludeHtml={setIncludeHtml}
          tag={tag}
          setTag={setTag}
        />
        <Output
          paragraphs={paragraphs}
          tag={tag}
          includeHtml={includeHtml}
        />
      </div>
    </div>
  );
}

export default App;
