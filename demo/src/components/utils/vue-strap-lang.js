window.VueStrapLang = (function(){
    var l = { //languages

        en: {
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            limit: 'Limit reached ({{limit}} items max).',
            loading: 'Loading...',
            minLength: 'Min. Length',
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            notSelected: 'Nothing Selected',
            required: 'Required',
            search: 'Search'
        },  
        zh: {
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            limit: 'Limit reached ({{limit}} items max).',
            loading: 'Loading...',
            minLength: 'Min. Length',
            months: [
                '一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'
            ],
            notSelected: 'Nothing Selected',
            required: 'Required',
            search: 'Search'
        },

        ru: {
            daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            limit: 'Максимальное количество достигнуто ({{limit}} максимально).',
            loading: 'Загрузка...',
            minLength: 'Минимальная длинна',
            months: [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
            ],
            notSelected: 'Ничего не выбрано',
            required: 'Обязательно',
            search: 'Поиск'
        },

        es: {
            daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
            loading: 'Cargando...',
            minLength: 'Tamaño Mínimo',
            months: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ],
            notSelected: 'Nada seleccionado',
            required: 'Requerido',
            search: 'Buscar',
            limit: 'Limite alcanzado (máximo {{limit}} items).'
        },

        'pt-BR': {
            daysOfWeek: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
            limit: 'Limite atingido (máximo {{limit}} items).',
            loading: 'Cargando...',
            minLength: 'Tamanho Mínimo',
            months: [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ],
            notSelected: 'Nada selecionado',
            required: 'Requerido',
            search: 'Buscar'
        },

        fr: {
            daysOfWeek: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            limit: 'Limite atteinte ({{limit}} éléments max).',
            loading: 'Chargement en cours...',
            minLength: 'Longueur Minimum',
            months: [
                'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ],
            notSelected: 'Aucune sélection',
            required: 'Requis',
            search: 'Recherche'
        },

        de: {
            daysOfWeek: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            limit: 'Limit erreicht (max {{limit}}).',
            loading: 'Lade...',
            minLength: 'Min. Länge',
            months: [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            notSelected: 'Nichts ausgewählt',
            required: 'Benötigt',
            search: 'Suche'
        }


    };

    /**
     * Some browsers handle short language code (eg. 'en'), others handle 5 chars (eg. 'en-US').
     * With aliases you can handle a group of similar languages, using a regular expresion.
     * If the language is not found, the default language is english.
     */
    var aliases = {
        es: /^es-[A-Z]{2}$/i,
        en: /^en-[A-Z]{2}$/i,
        zh: /^zh-[A-Z]{2}$/i,
        de: /^de-[A-Z]{2}$/i,
        ru: /^ru-[A-Z]{2}$/i
    };

    return function (lang) {
        lang = lang || 'en';
        var i, tr = {};
        for (i in aliases) {
            if (aliases[i].test(lang)) lang = i;
        }
        for (i in l.en) {
            tr[i] = (l[lang] && l[lang][i]) || l.en[i];
        }

        return tr;
    };
})();