export const getTransactions = () => {
  const stored = localStorage.getItem('finance-transactions');
  return stored ? JSON.parse(stored) : [];
};

export const saveTransactions = (transactions) => {
  localStorage.setItem('finance-transactions', JSON.stringify(transactions));
};