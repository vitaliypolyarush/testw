// TestForm.js
import React, { useState } from 'react';
import './App.css';

function TestForm({ onResults }) {
    const [url, setUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!url) return;

        const API_KEY = 'YOUR_API_KEY'; // Замініть на ваш реальний API-ключ
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            onResults(data); // Виклик функції з App компонента для оновлення стану
        } catch (error) {
            console.error('Error fetching API', error);
            onResults(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введіть URL вашого веб-сайту"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Розпочати тестування</button>
            </form>
        </div>
    );
}

export default TestForm;
