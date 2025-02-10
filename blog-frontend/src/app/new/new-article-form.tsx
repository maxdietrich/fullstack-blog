'use client';

import { useState } from "react";

export default function NewArticleForm() {

  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const submitForm = async () => {
    const response = await fetch('http://localhost:8080/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ headline, body})
    });
    if (response.ok) {
      setErrorMessage(null);
      setShowSuccessMessage(true);
    } else {
      const responseBody = await response.text();
      setErrorMessage(responseBody);
      setShowSuccessMessage(false);
    }
  };

  return <div className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label htmlFor="headlineInput">Headline</label>
      <input
        className="max-w-96 text-black pl-1 pr-1"
        id="headlineInput"
        value={headline}
        onChange={event => setHeadline(event.currentTarget.value)}
        type="text" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="bodyInput">Body</label>
      <textarea
        id="bodyInput"
        className="max-w-96 min-h-[200px] text-black p-1"
        value={body}
        onChange={event => setBody(event.currentTarget.value)} />
    </div>
    <button type="submit" className="max-w-24 border" onClick={submitForm}>Submit</button>
    {showSuccessMessage && <div className="text-green-500">Successfully submitted article</div>}
    {errorMessage && <div className="text-red-500">Error during article creation: {errorMessage}</div>}
  </div>;
}