import { parseRupiah } from './formatter';

export const getTransactions = () => {
  try {
    const stored = localStorage.getItem('finance-transactions');
    if (!stored) return [];
    
    const transactions = JSON.parse(stored);
    
    // Pastikan amount adalah number, bukan string yang diformat
    return transactions.map(transaction => ({
      ...transaction,
      amount: typeof transaction.amount === 'string' 
        ? parseRupiah(transaction.amount) 
        : transaction.amount
    }));
  } catch (error) {
    console.error('Error loading transactions:', error);
    return [];
  }
};

export const saveTransactions = (transactions) => {
  try {
    // Simpan data asli (amount sebagai number)
    localStorage.setItem('finance-transactions', JSON.stringify(transactions));
  } catch (error) {
    console.error('Error saving transactions:', error);
  }
};