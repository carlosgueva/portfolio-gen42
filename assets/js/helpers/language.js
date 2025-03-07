const toggleDOM = document.getElementById('language-toggle')
const currentLang = window.location.href.includes('index-en.html')
toggleDOM.checked = currentLang

function changeLanguage(){
    toggleDOM.addEventListener('change', () => {
        if (toggleDOM.checked){
            window.location.href = 'index-en.html';
        } else {
            window.location.href = 'index.html';
        }
    });
}   

export default changeLanguage