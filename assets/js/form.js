// Ambil elemen-elemen yang diperlukan
const courseOptions = document.querySelectorAll('input[name="course"]');
const jadwalContainer = document.getElementById('jadwal-container');
const jadwalSelect = document.getElementById('jadwal');

// Definisikan jadwal untuk setiap course
const jadwalByCourse = {
  course1: ['Wednesday, 28 June 2023', 'Friday, 30 June 2023', 'Monday, 3 July 2023'],
  course2: ['Tuesday, 27 June 2023', 'Thursday, 29 June 2023', 'Tuesday, 4 July 2023'],
  course3: ['Thursday, 6 July 2023', 'Monday, 10 July 2023', 'Wednesday, 12 July 2023']
};

// Fungsi untuk menampilkan jadwal berdasarkan course yang dipilih
function displayJadwal(course) {
  // Bersihkan pilihan jadwal sebelumnya
  jadwalSelect.innerHTML = '';

  // Ambil jadwal yang sesuai dengan course yang dipilih
  const jadwal = jadwalByCourse[course];

  // Buat elemen <option> untuk setiap jadwal
  jadwal.forEach((jadwalItem) => {
    const option = document.createElement('option');
    option.text = jadwalItem;
    jadwalSelect.add(option);
  });

  // Aktifkan elemen <select> jadwal
  jadwalSelect.disabled = false;
}

// Tambahkan event listener untuk setiap radio button course
courseOptions.forEach((courseOption) => {
  courseOption.addEventListener('change', (e) => {
    const selectedCourse = e.target.value;

    // Tampilkan pilihan jadwal jika course dipilih
    if (e.target.checked) {
      displayJadwal(selectedCourse);
      jadwalContainer.style.display = 'block';
    } else {
      // Sembunyikan pilihan jadwal jika course tidak dipilih
      jadwalContainer.style.display = 'none';
      jadwalSelect.disabled = true;
    }
  });
});