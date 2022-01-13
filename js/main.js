window.onload = function () {

	const filterItems = document.querySelectorAll('.filter-body__cards-item');
	const faqTabs = document.querySelectorAll('.faq__tab');
	const checkboxParameters = document.getElementById('parameters');
	const checkboxNumber = document.getElementById('number');
	const filterBody = document.querySelector('.filter-body');
	const filterBottom = document.querySelector('.filter-bottom');
	const filterCalculateNumber = document.querySelector('.filter__calculate-number');
	const modal = document.querySelector('.modal-overlay');
	const body = document.querySelector('body');
	const closed = document.querySelector('.modal__closed');
	const modalSmoll = document.querySelector('.modal-small');
	const closedSmoll = document.querySelector('.modal-small__closed');
	const faqSubtitleModal = document.querySelector('.faq__subtitle-modal');
	const width = window.screen.width;


	// Фильтрафия по чекбоксам filter-top

	if (checkboxParameters) {
		checkboxParameters.addEventListener('click', function () {
			filterCalculateNumber.style.display = "none";
			filterBody.style.display = "block";
			filterBottom.style.display = "block";
		});
	}
	if (checkboxNumber) {
		checkboxNumber.addEventListener('click', function () {
			filterBody.style.display = "none";
			filterBottom.style.display = "none";
			filterCalculateNumber.style.display = "flex";
		});
	}

	// Карточки фильтров
	for (i = 0; i < filterItems.length; i++) {
		filterItems[i].addEventListener('click', function () {
			for (i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	};

	// Табы FAQ

	for (i = 0; i < faqTabs.length; i++) {
		faqTabs[i].addEventListener('click', function () {
			for (i = 0; i < faqTabs.length; i++) {
				faqTabs[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	};

	//  Подставляем город по клику в инпут  // Рассчитать по параметрам авто

	$('.filter-bottom__body-city__list-link').click(function () {
		let val = $(this).text();
		$('.filter-bottom__body-input').val(val);
	});

	//  Подставляем город по клику в инпут  // Рассчитать по номеру авто

	$('.box-right__link').click(function () {
		let val = $(this).text();
		$('.box-right__input').val(val);
	});

	//  Мобильное меню

	const mobileMenu = document.querySelector('.menu-link');
	const mobileMenuList = document.querySelector('.nav__list');
	mobileMenu.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
		if (mobileMenu.classList.contains('active')) {
			mobileMenuList.classList.add('active');
		}
		else {
			mobileMenuList.classList.remove('active');
		}
	});

	// Маленькое модальное окно

	closedSmoll.addEventListener('click', function () {
		modalSmoll.style.display = 'none';

	});


	// Большое модальное окно

	function showModal() {
		body.style.overflow = 'hidden';
		modal.style.display = 'block';
	}
	setTimeout(showModal, 5000);

	closed.addEventListener('click', function () {
		modal.style.display = 'none';
		body.style.overflow = 'auto';
	});
	if (faqSubtitleModal) {
		faqSubtitleModal.addEventListener('click', function () {
			showModal();
		});
	}

	//  Hover Card

	const cardVisible = document.querySelector('.card-visible');
	const cardImg = document.querySelector('.card-img > img');

	function cardImgShow() {
		cardImg.style.display = 'block';
	}
	function cardImgHide() {
		cardImg.style.display = 'none';
	}
	if (cardVisible) {
		cardVisible.addEventListener('mouseenter', function () {
			cardImgShow();
		});
		cardVisible.addEventListener('mouseout', function () {
			cardImgHide();
		});
	}



};