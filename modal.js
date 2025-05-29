(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();



const hamburgerBtn = document.getElementById('hamburgerBtn');
        const menuOverlay = document.getElementById('menuOverlay');
        const mainPage = document.getElementById('mainPage');

        function openMenu() {
            hamburgerBtn.classList.add('active');
            menuOverlay.classList.add('active');
            
            mainPage.style.filter = 'blur(2px)';
        }

        function closeMenu() {
            hamburgerBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            
            mainPage.style.filter = 'none';
        }

    
        document.addEventListener('click', (e) => {
            if (menuOverlay.classList.contains('active') &&
                !e.target.closest('.menu-overlay') &&
                !e.target.closest('.hamburger-btn')) {
                closeMenu();
            }
        });

