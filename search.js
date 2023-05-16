function sayHi(){
    if (document.querySelector('.search-drop-header-nothidden') ){
        let elem = document.querySelector('.search-drop-header-nothidden');
        elem.classList.add("search-drop-header");
        elem.classList.remove("search-drop-header-nothidden");
    } else {
        let elem = document.querySelector('.search-drop-header');
        elem.classList.add("search-drop-header-nothidden");
        elem.classList.remove("search-drop-header");
       
    }
    
}

function search(){
    let input = document.querySelector('.input-search');
    let titles = document.querySelectorAll('.project-title');

    let stringToFind = input.value.toUpperCase();
    titles.forEach(item => {
        let title = item.textContent;

        if(title.includes(stringToFind)){
            item.closest('.container-section').style.display = 'block';
        } else {
            item.closest('.container-section').style.display = 'none';
        }
      } 
    )
}

function menu() {
    if(document.querySelector('.left_column')) {
        let magic = document.querySelector('.left_column');
        let mag = document.querySelector('.div_mob-container-header')
        magic.classList.add('left_column_open');
        mag.classList.add('div_mob-container-header_open');
        magic.classList.remove('left_column');
        mag.classList.remove('div_mob-container-header');
    } else {
        let magic = document.querySelector('.left_column_open');
        let mag = document.querySelector('.div_mob-container-header_open');
        magic.classList.add('left_column');
        mag.classList.add('div_mob-container-header');
        magic.classList.remove('left_column_open');
        mag.classList.remove('div_mob-container-header_open');
    }
    
}
function search_left_column(){
    let input = document.querySelector('.input-search_left_column');
    let titles = document.querySelectorAll('.project-title');

    let stringToFind = input.value.toUpperCase();
    titles.forEach(item => {
        let title = item.textContent;

        if(title.includes(stringToFind)){
            item.closest('.container-section').style.display = 'block';
        } else {
            item.closest('.container-section').style.display = 'none';
        }
      } 
    )
}
