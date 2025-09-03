import React, { useState } from 'react';
import { formatRupiah, parseRupiah, handleAmountChange } from '../utils/formatter';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'makanan'
  });

  const [rawAmount, setRawAmount] = useState(''); // Menyimpan nilai numerik asli

  const categories = {
    expense: ['makanan', 'transportasi', 'belanja', 'hiburan', 'kesehatan', 'lainnya'],
    income: ['gaji', 'freelance', 'investasi', 'hadiah', 'lainnya']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !rawAmount) return;

    onSubmit({
      ...formData,
      amount: parseInt(rawAmount.replace(/\D/g, '')) || 0 // Simpan sebagai number
    });

    // Reset form
    setFormData({
      description: '',
      amount: '',
      type: 'expense',
      category: 'makanan'
    });
    setRawAmount('');
  };

  const handleAmountInputChange = (e) => {
    const value = e.target.value;
    setRawAmount(value); // Simpan nilai asli
    
    // Format untuk tampilan
    handleAmountChange(value, (formattedValue) => {
      setFormData(prev => ({...prev, amount: formattedValue}));
    });
  };

  return (
    <div className="transaction-form">
      <h2>Tambah Transaksi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Jenis Transaksi</label>
          <div className="type-toggle">
            <button
              type="button"
              className={formData.type === 'expense' ? 'active' : ''}
              onClick={() => setFormData({...formData, type: 'expense', category: 'makanan'})}
            >
              Pengeluaran
            </button>
            <button
              type="button"
              className={formData.type === 'income' ? 'active' : ''}
              onClick={() => setFormData({...formData, type: 'income', category: 'gaji'})}
            >
              Pemasukan
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Kategori</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            {categories[formData.type].map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Deskripsi</label>
          <input
            type="text"
            placeholder="Deskripsi transaksi"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Jumlah (Rp)</label>
          <input
            type="text"
            placeholder="0"
            value={formData.amount} // Tampilkan nilai yang diformat
            onChange={handleAmountInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Tambah Transaksi
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;