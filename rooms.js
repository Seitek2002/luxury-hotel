document.addEventListener('DOMContentLoaded', () => {

    const roomItems = [
        {
            slider: [
                './assets/images/single-room.png'
            ],
            h2: 'SINGLE ROOM',
            price: '$147 Avg/night'
        },
        {
            slider: [
                './assets/images/double-room.png',
                './assets/images/double-room2.jpg',
                './assets/images/double-room3.jpg'
            ],
            h2: 'DOUBLE ROOM',
            price: '$155 Avg/night'
        },
        {
            slider: [
                './assets/images/twin-room.jpeg',
                './assets/images/double-room2.jpg',
                './assets/images/double-room3.jpg'
            ],
            h2: 'TWIN ROOM',
            price: '$155 Avg/night'
        }

    ]

    roomItems.forEach(item => {
        const roomContent = document.querySelector('.room__content')

        const singleRoom = document.createElement('div')
        singleRoom.className = 'room__item'

        const swiperContainer = document.createElement('div')
        swiperContainer.className = 'swiper mySwiper double-room-swiper'

        const swiperWrapper = document.createElement('div')
        swiperWrapper.className = 'swiper-wrapper'

        swiperImages = []
        item.slider.forEach(slide => {
            let swiperSlide = document.createElement('div')
            swiperSlide.className = 'swiper-slide'
            let swiperImg = document.createElement('img')
            swiperImg.className = 'swiper__img'
            swiperImg.src = slide
            swiperSlide.appendChild(swiperImg)
            swiperImages.push(swiperSlide);
        })

        const swiperPagination = document.createElement('div')
        swiperPagination.className = 'swiper-pagination'

        const h2 = document.createElement('h2')
        h2.innerHTML = item.h2

        singleRoom.appendChild(swiperContainer)
        swiperContainer.appendChild(swiperWrapper)
        singleRoom.appendChild(h2)
        swiperContainer.appendChild(swiperPagination)
        // swiperWrapper.appendChild(swiperSlide)

        swiperImages.forEach(swiper => {
            swiperWrapper.appendChild(swiper)
        })

        roomContent.appendChild(singleRoom)


        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');

        const mainMenu = document.createElement('div');
        mainMenu.classList.add('main-menu');

        const menuBtn = document.createElement('div');
        menuBtn.classList.add('menu-btn');

        const img = document.createElement('img');
        img.classList.add('plus');
        img.setAttribute('src', './assets/icons/single-room-plus.svg');
        img.setAttribute('alt', 'more');
        menuBtn.appendChild(img);

        const h3 = document.createElement('h3');
        h3.innerHTML = 'VIEW ROOM DETAILS';
        menuBtn.appendChild(h3);

        mainMenu.appendChild(menuBtn);

        const priceButton = document.createElement('button');
        priceButton.classList.add('price');

        priceButton.innerHTML = item.price;
        mainMenu.appendChild(priceButton);

        dropdownMenu.appendChild(mainMenu);

        const menu = document.createElement('div');
        menu.classList.add('menu');

        const infoRoom = document.createElement('div');
        infoRoom.classList.add('active');
        infoRoom.setAttribute('id', 'info-room');

        const shortInfoMenu = document.createElement('div');
        shortInfoMenu.classList.add('short-info-menu');

        const shortInfoTitle = document.createElement('p');
        shortInfoTitle.textContent = 'Оснащение номера';
        shortInfoMenu.appendChild(shortInfoTitle);

        const ul1 = document.createElement('ul');
        ul1.innerHTML = `
  <li>Вмещаемость : <strong>2</strong></li>
  <li>Ванные : <strong>1</strong></li>
  <li>Спальни : <strong>1</strong></li>
  <li>Кровать : <strong>1</strong></li>
`;
        shortInfoMenu.appendChild(ul1);

        const ul2 = document.createElement('ul');
        ul2.innerHTML = `
  <li>Въезд : <strong>14:00 после обеда</strong></li>
  <li>Выезд : <strong>12:00 после обеда</strong></li>
  <li>Тип номера : <strong>Комната</strong></li>
`;
        shortInfoMenu.appendChild(ul2);

        infoRoom.appendChild(shortInfoMenu);

        const bigInfoMenu = document.createElement('div');
        bigInfoMenu.classList.add('big-info-menu');

        const bigInfoTitle = document.createElement('p');
        bigInfoTitle.textContent = 'Включенные Удобства';
        bigInfoMenu.appendChild(bigInfoTitle);

        const bigInfoContent1 = document.createElement('p');
        bigInfoContent1.innerHTML = `
            Подготовка постели ко сну<br />
            Круглосуточное обслуживание номеров<br />
            Регулярно пополняемый бесшумный мини-бар<br />
            Фирменный постельный комплект Ванная комната<br />
            Ванные принадлежности ECO <br />
            Зеркало для макияжа с подсветкой, фен<br />
            Махровые халаты<br />
            Высокоскоростной доступ в Интернет<br />
            Возможность подключения компьютера<br />
            Чайник и комплиментарный набор чая и кофе<br />
            Утюг и гладильная доска<br />
`;
        bigInfoMenu.appendChild(bigInfoContent1);

        const bigInfoContent2 = document.createElement('p');
        bigInfoContent2.innerHTML = `
            Все номера и люксы некурящие<br />
            Ортопедические матрацы<br />
            Smart HD ТВ 40 и 50 дюймов<br />
            Сейф<br />
            Система климат-контроля<br />
            Меню подушек<br />
            Принадлежности для детей<br />
            Предоставление мин. воды<br />
            Охраняемая парковка<br />
            Гигиенический душ<br />
            Балкон<br />
`;
        bigInfoMenu.appendChild(bigInfoContent2);

        infoRoom.appendChild(bigInfoMenu);

        menu.appendChild(infoRoom);

        dropdownMenu.appendChild(menu);

        singleRoom.appendChild(dropdownMenu);

    })




    const dropdowns = document.querySelectorAll('.dropdown-menu');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.main-menu');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('#info-room');

        select.addEventListener('click', () => {
            select.classList.toggle('main-menu-clicked');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                select.classList.remove('main-menu-clicked');
                menu.classList.remove('menu-open');
                options.forEach(item => {
                    item.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });

    const swiper = new Swiper('.double-room-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
    });

})