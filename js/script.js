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
