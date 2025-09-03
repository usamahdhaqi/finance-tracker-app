import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'makanan'
  });

  const categories = {
    expense: ['makanan', 'transportasi', 'belanja', 'hiburan', 'kesehatan', 'lainnya'],
    income: ['gaji', 'freelance', 'investasi', 'hadiah', 'lainnya']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    });

    setFormData({
      description: '',
      amount: '',
      type: 'expense',
      category: 'makanan'
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
            type="number"
            placeholder="0"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            min="0"
            step="100"
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