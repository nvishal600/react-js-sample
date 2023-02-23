import * as React from 'react';
import './style.css';

export default function App() {
  let data = 'html in &#8217; code';
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: data }}></h1>
    </div>
  );
}
