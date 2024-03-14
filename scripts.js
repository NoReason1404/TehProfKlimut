
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.querySelector('.close');
    var popup = document.getElementById('popup');

    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

document.querySelectorAll('.nav__link').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
    });
  });

  
  
  var slides = document.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function() {
      Array.prototype.forEach.call(slides, function(s) {
        s.style.display = 'none'; // скрываем все карточки
      });
      this.style.display = 'block'; // показываем только нажатую карточку
    });
  }

  




  document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const categoryFilter = document.getElementById('category-filter');

    categoryFilter.addEventListener('change', (event) => {
        const filterValue = event.target.value;
        products.forEach(product => {
            if (product.dataset.category === filterValue || filterValue === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});



var chatIcon = document.getElementById('support-chat-icon');
var chat = document.getElementById('support-chat');
var chatCloseIcon = document.getElementById('chat-close-icon');

chatIcon.addEventListener('click', function() {
  chat.classList.toggle('hidden');
});

chatCloseIcon.addEventListener('click', function() {
  chat.classList.add('hidden');
});

document.getElementById('send-button').addEventListener('click', function() {
  var messageInput = document.getElementById('message-input');
  var messageText = messageInput.value;
  if (messageText !== '') {
    var messagesContainer = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.textContent = messageText;
    messagesContainer.appendChild(messageElement);
    messageInput.value = '';
  }
});



$(document).ready(function(){
  $('.card-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.card-item').on('click', function() {
    $('.card-container').slick('slickNext');
  });
});
