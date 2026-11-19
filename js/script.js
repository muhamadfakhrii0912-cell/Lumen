/**
 * LUMEN - Website Kampanye Hemat Listrik di Sekolah (Fase 1)
 * Kelompok 7, Kelas PPLG XI-4
 * Logika Interaktif Bersih, Ringkas, dan Aksesibel
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initRoomSimulator();
  initCommitmentTracker();
  initScrollSpy();
  initEnergyCharts();
});

/* ==========================================================================
   1. Navigasi Responsif & Header
   ========================================================================== */
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  // Buka atau tutup menu mobile
  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup menu saat tautan navigasi diklik
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Aksesibilitas Keyboard: Tutup menu saat tombol Escape ditekan
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   2. Simulator Interaktif Saklar Ruang Kelas
   ========================================================================== */
function initRoomSimulator() {
  const switchBtn = document.getElementById('switch-simulator-btn');
  const roomDisplay = document.getElementById('simulator-room');
  const statusBadge = document.getElementById('simulator-status-badge');
  const lampDot = document.getElementById('dot-lamp');
  const compDot = document.getElementById('dot-comp');
  const acDot = document.getElementById('dot-ac');
  const lampText = document.getElementById('text-lamp');
  const compText = document.getElementById('text-comp');
  const acText = document.getElementById('text-ac');

  if (!switchBtn || !roomDisplay) return;

  let isSavingMode = false;

  switchBtn.addEventListener('click', () => {
    isSavingMode = !isSavingMode;

    if (isSavingMode) {
      // Keadaan Hemat Energi Aktif
      roomDisplay.classList.add('is-energy-saving');
      statusBadge.textContent = 'Mode Hemat Aktif';
      statusBadge.classList.add('saving');

      lampDot.className = 'status-dot off';
      compDot.className = 'status-dot off';
      acDot.className = 'status-dot off';

      lampText.textContent = 'Meredup (Cahaya Alami)';
      compText.textContent = 'Dimatikan Sepenuhnya';
      acText.textContent = 'Suhu Ideal 24°C';

      switchBtn.textContent = 'Kembalikan ke Kondisi Awal';
      switchBtn.className = 'btn btn-secondary btn-block';
    } else {
      // Keadaan Bebas / Boros Energi
      roomDisplay.classList.remove('is-energy-saving');
      statusBadge.textContent = 'Beban Penuh';
      statusBadge.classList.remove('saving');

      lampDot.className = 'status-dot';
      compDot.className = 'status-dot';
      acDot.className = 'status-dot';

      lampText.textContent = 'Menyala Penuh';
      compText.textContent = 'Standby Menyala';
      acText.textContent = 'Suhu 18°C Dingin Berlebih';

      switchBtn.textContent = 'Simulasikan Mode Hemat Listrik';
      switchBtn.className = 'btn btn-primary btn-block';
    }
  });
}

/* ==========================================================================
   3. Pelacak Komitmen Aksi Hemat Listrik
   ========================================================================== */
function initCommitmentTracker() {
  const checkboxes = document.querySelectorAll('.action-checkbox');
  const fillBar = document.getElementById('commitment-fill');
  const countText = document.getElementById('commitment-count');
  const feedbackText = document.getElementById('commitment-feedback');

  if (!checkboxes.length || !fillBar || !countText) return;

  const totalActions = checkboxes.length;

  const messages = {
    0: 'Pilih aksi nyata yang siap kamu lakukan di sekolah hari ini.',
    1: 'Langkah awal yang baik. Satu kebiasaan kecil memberi dampak nyata.',
    2: 'Bagus. Konsistensi kamu membantu efisiensi energi di sekolah.',
    3: 'Lengkap. Seluruh komitmen siap kamu terapkan bersama warga sekolah.'
  };

  function updateTracker() {
    let checkedCount = 0;

    checkboxes.forEach(cb => {
      const parentOption = cb.closest('.option-item') || cb.closest('.action-label');
      if (cb.checked) {
        checkedCount++;
        parentOption?.classList.add('is-checked');
      } else {
        parentOption?.classList.remove('is-checked');
      }
    });

    const percentage = Math.round((checkedCount / totalActions) * 100);
    fillBar.style.width = `${percentage}%`;
    countText.textContent = `${checkedCount} dari ${totalActions} Aksi Terpilih`;

    if (percentage === 100) {
      fillBar.style.backgroundColor = '#15803d';
    } else {
      fillBar.style.backgroundColor = '#c25e00';
    }

    if (feedbackText) {
      feedbackText.textContent = messages[checkedCount] || messages[0];
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateTracker);
  });

  updateTracker();
}

/* ==========================================================================
   4. Scroll Spy untuk Navigasi Aktif
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   5. Visualisasi Data Perilaku Energi (Fase 2) Menggunakan Chart.js
   ========================================================================== */
async function initEnergyCharts() {
  const chartJurusanEl = document.getElementById('chart-jurusan');
  const chartButirEl = document.getElementById('chart-butir');
  const chartKategoriEl = document.getElementById('chart-kategori');

  if (!chartJurusanEl || typeof Chart === 'undefined') return;

  // Mengambil data dari file JSON, dengan fallback ke variabel global DATA_ENERGI
  let dataEnergi = null;
  try {
    const res = await fetch('data-perilaku-energi.json');
    if (res.ok) {
      dataEnergi = await res.json();
    }
  } catch (err) {
    // Jalur fallback saat dibuka dengan protokol file:///
  }

  if (!dataEnergi && typeof DATA_ENERGI !== 'undefined') {
    dataEnergi = DATA_ENERGI;
  }

  if (!dataEnergi) {
    console.warn('Data perilaku energi tidak ditemukan.');
    return;
  }

  // Pengaturan Tipografi & Palet Desain Sesuai DESIGN.md
  Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
  Chart.defaults.color = '#495e52';

  // --------------------------------------------------------------------------
  // Grafik 1: Rerata Skor Perilaku per Jurusan (Bar Chart)
  // --------------------------------------------------------------------------
  if (chartJurusanEl && dataEnergi.per_jurusan) {
    const labels = dataEnergi.per_jurusan.map(j => j.kode);
    const scores = dataEnergi.per_jurusan.map(j => j.rata_rata_skor);
    
    // PPLG disorot dengan warna Amber (#c25e00) sebagai fokus kampanye, lainnya Hijau Solid
    const bgColors = dataEnergi.per_jurusan.map(j => j.kode === 'PPLG' ? '#c25e00' : '#1e4635');
    const borderColors = dataEnergi.per_jurusan.map(j => j.kode === 'PPLG' ? '#9a4700' : '#153527');

    new Chart(chartJurusanEl, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Rata-rata Skor (Skala 1-4)',
          data: scores,
          backgroundColor: bgColors,
          borderColor: borderColors,
          borderWidth: 1.5,
          borderRadius: 6,
          maxBarThickness: 44
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#192620',
            padding: 10,
            titleFont: { size: 13, weight: '700' },
            bodyFont: { size: 12 },
            callbacks: {
              title: (items) => {
                const idx = items[0].dataIndex;
                const item = dataEnergi.per_jurusan[idx];
                return `${item.nama} (${item.kode})`;
              },
              label: (context) => {
                const idx = context.dataIndex;
                const item = dataEnergi.per_jurusan[idx];
                return ` Skor: ${item.rata_rata_skor} (${item.jumlah_responden} siswa)`;
              }
            }
          }
        },
        scales: {
          y: {
            min: 2.8,
            max: 3.7,
            ticks: {
              stepSize: 0.2,
              callback: (val) => val.toFixed(1)
            },
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            title: {
              display: true,
              text: 'Skor Likert (1 - 4)',
              font: { size: 11, weight: '600' }
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { weight: '700' } }
          }
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Grafik 2: 10 Indikator Butir Perilaku (Horizontal Bar Chart)
  // --------------------------------------------------------------------------
  if (chartButirEl && dataEnergi.per_butir) {
    const labels = dataEnergi.per_butir.map(b => `${b.kode}: ${b.label}`);
    const scores = dataEnergi.per_butir.map(b => b.rata_rata);
    
    // Warna pembeda: skor tinggi hijau pekat, skor rendah amber waspada
    const bgColors = dataEnergi.per_butir.map(b => {
      if (b.rata_rata >= 3.45) return '#1e4635';
      if (b.rata_rata <= 3.25) return '#c25e00';
      return '#3d7057';
    });

    new Chart(chartButirEl, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Rerata Skor Butir',
          data: scores,
          backgroundColor: bgColors,
          borderRadius: 4,
          maxBarThickness: 22
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#192620',
            padding: 12,
            callbacks: {
              title: (items) => {
                const idx = items[0].dataIndex;
                return dataEnergi.per_butir[idx].pertanyaan;
              },
              label: (context) => {
                const idx = context.dataIndex;
                const item = dataEnergi.per_butir[idx];
                return ` Rerata: ${item.rata_rata} | Kategori Sering: ${item.persen_sering}%`;
              }
            }
          }
        },
        scales: {
          x: {
            min: 3.0,
            max: 3.65,
            ticks: {
              stepSize: 0.1,
              callback: (val) => val.toFixed(1)
            },
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            title: {
              display: true,
              text: 'Rata-Rata Skor Butir (1.0 - 4.0)',
              font: { size: 11, weight: '600' }
            }
          },
          y: {
            grid: { display: false },
            ticks: {
              font: { size: 12, weight: '500' }
            }
          }
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Grafik 3: Distribusi Kategori Perilaku Siswa (Doughnut Chart)
  // --------------------------------------------------------------------------
  if (chartKategoriEl && dataEnergi.ringkasan && dataEnergi.ringkasan.kategori) {
    const kat = dataEnergi.ringkasan.kategori;
    const labels = ['Sangat Baik (59.4%)', 'Baik (36.8%)', 'Cukup (3.6%)', 'Kurang (0.2%)'];
    const values = [kat['Sangat Baik'], kat['Baik'], kat['Cukup'], kat['Kurang']];
    const colors = ['#1e4635', '#2d6a4f', '#c25e00', '#991b1b'];

    new Chart(chartKategoriEl, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '62%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 12,
              font: { size: 11, weight: '600' }
            }
          },
          tooltip: {
            backgroundColor: '#192620',
            padding: 10,
            callbacks: {
              label: (context) => {
                const total = values.reduce((a, b) => a + b, 0);
                const count = context.raw;
                const pct = ((count / total) * 100).toFixed(1);
                return ` ${count} siswa (${pct}%)`;
              }
            }
          }
        }
      }
    });
  }
}
