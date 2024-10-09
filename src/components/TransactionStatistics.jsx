
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TransactionStatistics = ({ month }) => {
//   const [statistics, setStatistics] = useState({
//     totalSaleAmount: 0,
//     soldItems: 0,
//     notSoldItems: 0,
//   });

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         // Replace with the actual URL of the JSON file
//         const response =await fetch('/public/data/product_transaction.json');
//         const transactions = response.data;

//         // Filter transactions by the selected month (you might need to adapt this part)
//         const filteredTransactions = transactions.filter(transaction => {
//           const transactionDate = new Date(transaction.date); // Assuming 'date' field exists
//           return transactionDate.toLocaleString('default', { month: 'long' }) === month;
//         });

//         // Calculate total sale amount, sold items, and not sold items
//         const totalSaleAmount = filteredTransactions.reduce((total, transaction) => total + transaction.price * transaction.sold, 0);
//         const soldItems = filteredTransactions.reduce((total, transaction) => total + transaction.sold, 0);
//         const notSoldItems = filteredTransactions.length - soldItems; // Assuming all items are either sold or not

//         // Update statistics state
//         setStatistics({
//           totalSaleAmount,
//           soldItems,
//           notSoldItems,
//         });
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//       }
//     };

//     fetchStatistics();
//   }, [month]);

//   return (
//     <div className="statistics-box">
//       <h2>Statistics - {month}</h2>
//       <div>Total Sale: ${statistics.totalSaleAmount.toFixed(2)}</div>
//       <div>Total Sold Items: {statistics.soldItems}</div>
//       <div>Total Not Sold Items: {statistics.notSoldItems}</div>
//     </div>
//   );
// };

// export default TransactionStatistics;






import React, { useEffect, useState } from 'react';
import './TransactionStatistics.css';

const TransactionStatistics = ({ month, transactions }) => {
    const [statistics, setStatistics] = useState({
        totalSaleAmount: 0,
        soldItems: 0,
        notSoldItems: 0,
    });

    useEffect(() => {
        const filteredTransactions = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.dateOfSale);
            return transactionDate.toLocaleString('default', { month: 'long' }) === month;
        });

        const totalSaleAmount = filteredTransactions.reduce((total, transaction) => total + (transaction.sold ? transaction.price : 0), 0);
        const soldItems = filteredTransactions.reduce((total, transaction) => total + (transaction.sold ? transaction.sold : 0), 0);
        const notSoldItems = filteredTransactions.length - soldItems;

        setStatistics({
            totalSaleAmount,
            soldItems,
            notSoldItems,
        });
    }, [month, transactions]);

    return (
        <div className="statistics-box">
            <h2>Statistics - {month}</h2>
            <div>Total Sale: ${statistics.totalSaleAmount.toFixed(2)}</div>
            <div>Total Sold Items: {statistics.soldItems}</div>
            <div>Total Not Sold Items: {statistics.notSoldItems}</div>
        </div>
    );
};

export default TransactionStatistics;
