// import React, { useState } from 'react';
// import { fetchNumbers } from './apiService';

// const AverageCalculator: React.FC = () => {
//     const [id, setId] = useState('');
//     const [data, setData] = useState<any>(null);
//     const [error, setError] = useState('');

//     const handleFetchNumbers = async () => {
//         try {
//             const result = await fetchNumbers(id);
//             setData(result);
//             setError('');
//         } catch (error: any) {
//             console.error('Error:', error);
//             setError(error.response?.data || 'Failed to fetch numbers');
//         }
//     };

//     return (
//         <div>
//             <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID (p/f/e/r)" />
//             <button onClick={handleFetchNumbers}>Fetch Numbers</button>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             {data && (
//                 <div>
//                     <h3>Previous Window State: {JSON.stringify(data.windowPrevState)}</h3>
//                     <h3>Current Window State: {JSON.stringify(data.windowCurrState)}</h3>
//                     <h3>Numbers: {JSON.stringify(data.numbers)}</h3>
//                     <h3>Average: {data.avg}</h3>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AverageCalculator;
import React, { useState } from 'react';
import { fetchNumbers } from './apiService';

const AverageCalculator: React.FC = () => {
    const [id, setId] = useState("");
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState('');

    const handleFetchNumbers = async () => {
        try {
            const result = await fetchNumbers(id);
            setData(result);
            setError('');
        } catch (error: any) {
            console.error('Error:', error);
            setError(error.response?.data || 'Failed to fetch numbers');
        }
    };

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID (p/f/e/r)" />
            <button onClick={handleFetchNumbers}>Fetch Numbers</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {data && (
                <div>
                    <h3>Previous Window State: {JSON.stringify(data.windowPrevState)}</h3>
                    <h3>Current Window State: {JSON.stringify(data.windowCurrState)}</h3>
                    <h3>Numbers: {JSON.stringify(data.numbers)}</h3>
                    <h3>Average: {data.avg}</h3>
                </div>
            )}
        </div>
    );
};

export default AverageCalculator;
