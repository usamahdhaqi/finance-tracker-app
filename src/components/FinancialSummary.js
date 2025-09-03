import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import { formatRupiah } from '../utils/formatter';

const FinancialSummary = ({ transactions }) => {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="financial-summary">
      <div className="summary-card">
        <div className="card-icon">
          <Wallet />
        </div>
        <div className="card-content">
          <h3>Saldo</h3>
          <p className={`amount ${balance >= 0 ? 'positive' : 'negative'}`}>
            {balance >= 0 ? '+' : '-'}Rp{formatRupiah(Math.abs(balance))}
          </p>
        </div>
      </div>

      <div className="summary-card">
        <div className="card-icon income">
          <TrendingUp />
        </div>
        <div className="card-content">
          <h3>Pemasukan</h3>
          <p className="amount positive">+Rp{formatRupiah(totalIncome)}</p>
        </div>
      </div>

      <div className="summary-card">
        <div className="card-icon expense">
          <TrendingDown />
        </div>
        <div className="card-content">
          <h3>Pengeluaran</h3>
          <p className="amount negative">-Rp{formatRupiah(totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;