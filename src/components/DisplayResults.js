import React from 'react';
import '../App.css';


function DisplayResults({ results }) {
    // Перевірка на базову наявність результатів
    if (!results) {
        return <p>Результати не доступні. Будь ласка, запустіть тест.</p>;
    }

    // Функція для отримання значень метрик з аудитів
  

    // Список ключових метрик для відображення
    const metrics = [
        { key: 'first-contentful-paint', label: 'Перше значуще відображення (FCP)' },
        { key: 'speed-index', label: 'Індекс швидкості' },
        { key: 'largest-contentful-paint', label: 'Найбільший значущий елемент (LCP)' },
        { key: 'interactive', label: 'Час до інтерактивності' },
        { key: 'total-blocking-time', label: 'Загальний час блокування' },
        { key: 'cumulative-layout-shift', label: 'Кумулятивний зсув макету (CLS)' },
        // Додайте інші метрики за бажанням
        { key: 'first-meaningful-paint', label: 'Перше значуще відображення (FMP)' },
        { key: 'max-potential-fid', label: 'Максимально потенційна затримка першого вводу (Max FID)' },

        { key: 'uses-long-cache-ttl', label: 'Використання довгого TTL кешу для статичних ресурсів' },

        { key: 'total-byte-weight', label: 'Уникнення великих мережевих вантажів' },
        { key: 'modern-image-formats', label: 'Подання зображень у форматах нового покоління' },

        { key: 'unused-javascript', label: 'Невикористаний JavaScript' },
        { key: 'server-response-time', label: 'Час відповіді сервера' },
  
        { key: 'dom-size', label: 'Розмір DOM' },
        { key: 'critical-request-chains', label: 'Критичні ланцюги запитів' },

        { key: 'bootup-time', label: 'Час завантаження' },
        { key: 'mainthread-work-breakdown', label: 'Навантаження на головний потік' },


        { key: 'interactive', label: 'Час до інтерактивності' },
        { key: 'speed-index', label: 'Індекс швидкості' },



        { key: 'network-rtt', label: 'Мережевий круговий час передачі (RTT)' },
        { key: 'network-server-latency', label: 'Затримка сервера мережі' },



    ];

    return (
        <div className="results-container">
            {metrics.map(({ key, label }) => {
                const audit = results.lighthouseResult.audits[key];
                return (
                    <div key={key} className="result-item">
                        <h3>{label}</h3>
                        <p>{audit && audit.displayValue ? audit.displayValue : 'Недоступно'}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayResults;
