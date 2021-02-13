let search = document.querySelector('.search-form');

search.onfocus = function() {
    if (search.value == 'Поиск:') {
        search.value = '';
    };  
};

search.onblur = function() {
    if (search.value == '') {
        search.value = 'Поиск:';  
    };  
};
