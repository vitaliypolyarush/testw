import React, { useState } from 'react';
import DisplayResults from './components/DisplayResults';
import BenefitsSection from './components/BenefitsSection';
import PurposeSection from './components/PurposeSection';
import AdvantagesSection from './components/AdvantagesSection'; // Переконайтесь, що цей компонент створений
import { GrTest } from "react-icons/gr";

import './App.css'; // Головний файл стилів

function App() {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Запуск індикатора завантаження
        setError(null); // Очищення попередніх помилок
        const API_KEY = 'AIzaSyCig_j83fEMhRzJei4m1F3pQ1NXG4j4Vf8'; // Замініть на ваш реальний API ключ

        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Помилка при запиті до API', error);
            setError('Не вдалося отримати дані. Будь ласка, спробуйте ще раз.');
        } finally {
            setIsLoading(false); // Зупинка індикатора завантаження
        }
    };

    return (
        <div className="app">
            <BenefitsSection />
            <div className="icon-container">
                <GrTest size="3em" /> {/* Розмір іконки */}
            </div>
            <PurposeSection />
            
            <div className="form-container">
                <h1>Тест продуктивності веб-сайту</h1>
                <form onSubmit={handleSubmit} className="test-form">
                    <input
                        type="text"
                        placeholder="Введіть URL вашого веб-сайту"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit" disabled={isLoading}>Розпочати тестування</button>
                </form>
                {isLoading && <p>Завантаження...</p>}
                {error && <p>{error}</p>}
                {!isLoading && !error && results && <DisplayResults results={results} />}
            </div>
            
            <AdvantagesSection />
      
        </div>
    );
}

export default App;
