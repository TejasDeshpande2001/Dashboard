import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions }) => {
    return (
        <div>
            <h2>Transaction List</h2>
            {transactions.length > 0 ? (
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.title}</td>
                                <td>{transaction.description}</td>
                                <td>${transaction.price}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.sold ? 'Yes' : 'No'}</td>
                                <td><img src={transaction.image} alt={transaction.title} width="50" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No transactions available for the selected month.</p>
            )}
        </div>
    );
};

export default TransactionTable;









// import React, { useState } from 'react';
// import './TransactionTable.css';

// const TransactionTable = ({ transactions }) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;

//     // Calculate the index of the first and last transactions on the current page
//     const indexOfLastTransaction = currentPage * itemsPerPage;
//     const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    
//     // Filter transactions for the current page
//     const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

//     // Handle "Next" and "Previous" button clicks
//     const handleNextPage = () => {
//         if (currentPage < Math.ceil(transactions.length / itemsPerPage)) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     return (
//         <div>
//             <h2>Transaction List</h2>
//             {currentTransactions.length > 0 ? (
//                 <>
//                     <table className="transaction-table">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Title</th>
//                                 <th>Description</th>
//                                 <th>Price</th>
//                                 <th>Category</th>
//                                 <th>Sold</th>
//                                 <th>Image</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {currentTransactions.map((transaction) => (
//                                 <tr key={transaction.id}>
//                                     <td>{transaction.id}</td>
//                                     <td>{transaction.title}</td>
//                                     <td>{transaction.description}</td>
//                                     <td>${transaction.price}</td>
//                                     <td>{transaction.category}</td>
//                                     <td>{transaction.sold ? 'Yes' : 'No'}</td>
//                                     <td><img src={transaction.image} alt={transaction.title} width="50" /></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <div className="pagination-controls">
//                         <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//                             Previous
//                         </button>
//                         <span> Page {currentPage} of {Math.ceil(transactions.length / itemsPerPage)} </span>
//                         <button onClick={handleNextPage} disabled={currentPage === Math.ceil(transactions.length / itemsPerPage)}>
//                             Next
//                         </button>
//                     </div>
//                 </>
//             ) : (
//                 <p>No transactions available for the selected month.</p>
//             )}
//         </div>
//     );
// };

// export default TransactionTable;
