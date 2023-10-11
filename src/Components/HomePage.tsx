// src/components/HomePage.tsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './HomePage.scss';  // You'll create this CSS file next

const HomePage: React.FC = () => {
    const [isSearchFocused, setSearchFocused] = useState(false);
    const navigate = useNavigate();
    const trends = [
           { 
        id: 1, 
        name: 'Laptop', 
        rating: 4.5,
        price: '1000', 
        image: 'data:image/jpeg;base64,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'
    },
    { 
        id: 2, 
        name: 'Phone', 
        rating: 5, 
        price: '500', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9zV2Kdykohn322cIp3e8Nk4u-n6ZHR0K1w&usqp=CAU'
    },
    { 
        id: 3, 
        name: 'Tablet', 
        rating: 4.5, 
        price: '600', 
        image: 'data:image/jpeg;base64,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mU6PaRno+4w2HrtwvEsN74dgbocwzhUPNHU51PeRuQJ1nH4NK1NqVRbq6lWHceY7CNweRE4n0m4C6OcMb+voXfCutw1WlcvkUjXODmdexg6jdZKMsPJKMnF5R18LKwk0zon0/wANWw6/S66UqyAB85yK/ZUQnQ33K7g30tYm5xH0mYKnpSFSsfuJkTzZ7ad4Bljmi52I3NUl9EnHcR6S8bXbJhMOidoVWxDjsN7BR5rIPGLjcS2XFYpmLaerZy5PhQogqD4hZByyVynk7BxvpVgKKvTr4lDcFWRL1HsRYgqlyPO04ZxLGUy7eqDFMxCl7KSL9UkC9iRbSbXwr0d1XA/QOR9qsww6fgTNU+Im5cL9Hipq9YJ3YdBTPgarZnYeYltGqtpT2PGfczzqjNpyXByFOHVmGY08in6zkU18QXIzeV5McK6H1q1ii1HB500yp/8AbWyj3K07TgOjWFonMmHQt9t7u9+3M1yPKTMrndZN5lJslGEY8I5bwz0ZtoanqqfjfEP5hstMHwUzbMH0KwyAesD1rbCo10HhTWyW/dmzxKyRZw9BUXKiKqjYKAo9wl6IgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJAdKuj4xdNcrZKtM5qL6ix0JUkagGw1GoIB5WM/EA4fxXoZWard8HWztcu1E0wjsd29kot976cyRJXhXo1qGxelSp9prMcTU/AuWl851uIBqWD6DUFAFapUrAfVLerpDwp08oHnebFguH0qK5aNJEHYihffbeZcQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/2Q=='
    }
    ];
 const HandleNext=()=>{
      navigate('/products')
 }
    return (
        <div id="home-container">
            <input 
                type="text" 
                placeholder="Search..." 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
            />
            {isSearchFocused && (
                <div className="trending-suggestions">
                    {trends.map((trend, index) => (                        
                        <div key={trend.id} className="card">
                        <h2>Trending Product</h2>
                        <img src={trend.image} alt={trend.name} className="card-image" />
                        <h3>{trend.name}</h3>
                        <p>{trend.price}</p>
                      </div>
                    ))}
                </div>
            )}
            <button className='next' onClick={HandleNext}>Next Page</button>
          <img className='homelogo' style={{ width: '5%'}} src='data:image/png;base64,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' alt='/'/>
    </div>
    );
}

export default HomePage;
