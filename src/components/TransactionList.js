import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { formatRupiah } from '../utils/formatter';

const TransactionList = ({ transactions, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="transaction-list">
      <div className="list-header">
        <h2>Daftar Transaksi</h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Semua</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </div>

      <div className="transactions">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.reverse().map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <div className="category-badge">{transaction.category}</div>
                <h4>{transaction.description}</h4>
                <p>{formatDate(transaction.date)}</p>
              </div>
              <div className="transaction-actions">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'expense' ? '-' : '+'} 
                  Rp{formatRupiah(transaction.amount)}
                </span>
                <button 
                  onClick={() => onDelete(transaction.id)}
                  className="delete-btn"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-state">Tidak ada transaksi</p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;