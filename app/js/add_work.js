let myModule = (function() {

  let init = function () {
    _setListners();
  };

  let _setListners = function () {
    // прослушка событий
    document.getElementById('add-project').addEventListener('click', _showModal);    // открыть модальное окно

    window.addEventListener('click', e => {
      const target = e.target
      if (target.closest('.popup-wrap') && target.closest('.popup-btn')) {
        document.getElementById('new-project-popup').classList.remove('active');
      }
    })  // закрыть модальное окно
  };

  let _showModal = function (event) {
    event.preventDefault();
    document.getElementById('new-project-popup').classList.add('active');
  }

  return {
    init: init
  };

})();

myModule.init();