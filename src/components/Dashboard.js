import React from 'react';

const Dashboard = ({ transactions }) => {
  const recentTransactions = transactions.slice(-5).reverse();

  return (
    <div className="dashboard">
      <h2>Transaksi Terbaru</h2>
      <div className="recent-transactions">
        {recentTransactions.length > 0 ? (
          recentTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <h4>{transaction.description}</h4>
                <p>{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <span className={`amount ${transaction.type}`}>
                {transaction.type === 'expense' ? '-' : '+'} 
                Rp{transaction.amount.toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="empty-state">Belum ada transaksi</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;