import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FinancialSummary from './components/FinancialSummary';
import ExpenseChart from './components/ExpenseChart';
import { getTransactions, saveTransactions } from './utils/storage';
import './styles/App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const storedTransactions = getTransactions();
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>FinTrack</h1>
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={activeTab === 'transactions' ? 'active' : ''} 
            onClick={() => setActiveTab('transactions')}
          >
            Transaksi
          </button>
          <button 
            className={activeTab === 'add' ? 'active' : ''} 
            onClick={() => setActiveTab('add')}
          >
            Tambah
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'dashboard' && (
          <>
            <FinancialSummary transactions={transactions} />
            <ExpenseChart transactions={transactions} />
            <Dashboard transactions={transactions} />
          </>
        )}
        
        {activeTab === 'transactions' && (
          <TransactionList 
            transactions={transactions} 
            onDelete={deleteTransaction} 
          />
        )}
        
        {activeTab === 'add' && (
          <TransactionForm onSubmit={addTransaction} />
        )}
      </main>
    </div>
  );
}

export default App;