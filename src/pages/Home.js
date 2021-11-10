import '../styles/Home.css';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    return (

        <main>
            <div className="showcase-container">
                <h2 className="showcase-title">What are you cooking today?</h2>
                <div className="showcase-input-container">
                    <input type="text" className="showcase-input" placeholder="Search your meal..." />
                    <button className="showcase-button"><span className="showcase-search-button-text">Search</span></button>
                </div>
            </div>
        </main>

    );
}

export default Home;