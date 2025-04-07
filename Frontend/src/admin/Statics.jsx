import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Statics.css';

Chart.register(...registerables);

function Statics() {
    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/home')
            .then((response) => response.json())
            .then((data) => setHomeData(data))
            .catch((error) => console.error('Error fetching home data:', error));
    }, []);

    if (!homeData) {
        return <div>Loading...</div>;
    }

    const chartData = {
        labels: homeData.map((item) => item.name),
        datasets: [
            {
                label: 'Views',
                data: homeData.map((item) => item.view),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="statics-container">
            <div className="stats-section">
                <h1 className="section-title">Last 24h Statistics</h1>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-content">
                            <p className="stat-label">Users</p>
                            <p className="stat-value">+{homeData.reduce((acc, item) => acc + item.view, 0)}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">💰</div>
                        <div className="stat-content">
                            <p className="stat-label">Income</p>
                            <p className="stat-value">$2,873.88</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">📄</div>
                        <div className="stat-content">
                            <p className="stat-label">Invoices</p>
                            <p className="stat-value">+79</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-section">
                <h1 className="section-title">Last 24h Incomes</h1>
                <div className="income-grid">
                    {homeData.slice(0, 4).map((income, index) => (
                        <div className="income-card" key={index}>
                            <div className="income-icon">💰</div>
                            <div className="income-content">
                                <p className="income-amount">${income.view * 10}</p>
                                <p className="income-source">{income.name}</p>
                                <p className="income-date">24 Nov 2022</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="stats-section">
                <h1 className="section-title">Trending Views</h1>
                <div className="chart-container">
                    <Bar data={chartData} options={{ responsive: true }} />
                </div>
            </div>
        </div>
    );
}

export default Statics;