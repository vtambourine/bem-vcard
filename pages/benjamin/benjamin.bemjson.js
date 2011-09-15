({
    block: 'b-page',
    title: 'Вениамин Тамбурин — benjamin@yandex-team.ru',
    favicon: '//yandex.ru/favicon.ico',
    head: [
        { elem: 'css', url: 'benjamin.css' },
        { elem: 'js', url: '//yandex.st/jquery/1.6.2/jquery.min.js' },
        { elem: 'js', url: 'benjamin.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Вениамин Тамбурин',
                    position: 'Разработчик интерфейсов',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6861',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'benjamin@yandex-team.ru',
                        cellular: '+7 (967) 072-30-84',
                    //  skype: 'benjamin',
                    //  github: 'vtambourine'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Benjamin Tambourine',
                    position: 'UI developer',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6861',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'benjamin@yandex-team.ru',
                        cellular: '+7 (967) 072-30-84',
                    //    github: 'benjamin'
                    }
                }
            }
        ]
    }
})
