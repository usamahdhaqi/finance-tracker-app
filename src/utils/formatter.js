// Fungsi untuk memformat angka ke format Rupiah
export const formatRupiah = (number) => {
  if (!number) return '';
  
  // Konversi ke string dan hapus semua karakter non-digit
  const numString = number.toString().replace(/\D/g, '');
  
  // Format dengan titik sebagai pemisah ribuan
  return numString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Fungsi untuk mengembalikan format Rupiah ke angka biasa
export const parseRupiah = (formattedString) => {
  if (!formattedString) return 0;
  
  // Hapus semua karakter non-digit dan konversi ke number
  return parseInt(formattedString.replace(/\./g, ''), 10) || 0;
};

// Fungsi untuk handle input change dengan auto-formatting
export const handleAmountChange = (value, setValueFunction) => {
  // Hapus semua karakter non-digit
  const numericValue = value.replace(/\D/g, '');
  
  // Format ke Rupiah
  const formattedValue = formatRupiah(numericValue);
  
  // Update state
  setValueFunction(formattedValue);
};