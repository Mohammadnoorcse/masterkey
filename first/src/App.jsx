

// import React, { useState } from 'react';
// import Partition from './Partition';

// const App = () => {
//     const [partitions, setPartitions] = useState([{ id: 1, color: '#3498db' }]);

//     const handleRemove = (id) => {
//         if (partitions.length === 1) {
//             alert('Cannot remove the last partition.');
//             return;
//         }
//         setPartitions(partitions.filter(partition => partition.id !== id));
//     };

//     return (
//         <div className="container">
//             {partitions.map(partition => (
//                 <Partition
//                     key={partition.id}
//                     color={partition.color}
//                     onRemove={() => handleRemove(partition.id)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import Partition from './Partition';
// import './App.css';

const App = () => {
    const [partitions, setPartitions] = useState([{ id: 1, color: '#3498db' }]);

    const handleRemove = (id) => {
        if (partitions.length === 1) {
            alert('Cannot remove the last partition.');
            return;
        }
        setPartitions(partitions.filter(partition => partition.id !== id));
    };

    return (
        <div className="container">
            {partitions.map(partition => (
                <Partition
                    key={partition.id}
                    color={partition.color}
                    onRemove={handleRemove}
                    id={partition.id}
                />
            ))}
        </div>
    );
};

export default App;
