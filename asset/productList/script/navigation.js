// call function
createNavigation();
createCloseIcon();
search();

// function search
function search(){
    let form = document.querySelector('[formData = form]');
    let inputSearch = document.querySelector('[formData = input]');
    let getProductList = document.querySelectorAll('[nav-list]');

    // function event from user
    function eventHanden(e){
        e.preventDefault();   
        resetError(inputSearch);

        if(inputSearch.value.trim() === ''){
            showResult([...getProductList]);
            showDisplay([...getProductList]);
        }else{
            if(/[a-zA-Z0-9]/.test(inputSearch.value)){
                showResult(filter(inputSearch.value, [...getProductList]));
                showDisplay(filter(inputSearch.value, [...getProductList]));
            }else{
                showError(inputSearch, 'Wrong language, press enter character a-z or 0-9');
            }
        }
    };

    function showError(input, message){
        let formControl = input.parentElement;
        let small = formControl.querySelector('small');
        formControl.setAttribute('state', 'error');
        small.innerText = message;
    };

    function resetError(input){
        let formControl = input.parentElement;
        let small = formControl.querySelector('small');
        formControl.removeAttribute('state');
        small.innerText = '';    
    };

    // search product
    function filter(keyword, allproduct){
        return allproduct.filter(search => search.getAttribute('nav-list').includes(keyword.toUpperCase()));
    };

    // show display
    function showDisplay(target){
        document.querySelectorAll('[nav-list]').forEach(el=>el.setAttribute('state', 'hide'));
        target.forEach(el=>el.removeAttribute('state'));
    };

    // show result
    function showResult(result){
        if(result.length <= 0){
            document.querySelector('[show-result = result]').setAttribute('state', 'show');
            document.querySelector('[show-result = result]').innerText = 'No result...'
        }else{
            document.querySelector('[show-result = result]').removeAttribute('state');
            document.querySelector('[show-result = result]').innerText = ''
        }
    };

    form.addEventListener('submit', eventHanden);
    inputSearch.addEventListener('keyup', eventHanden);
};

function createCloseIcon() {
    let navigation = document.querySelector('[compoment=navigation]');
    let form = document.querySelector('[formData = form]');
    let imgPath = navigation.getAttribute('imgPath');
    let homePath = navigation.getAttribute('homepath');

    if(navigation.getAttribute('location') === 'product-page'){
        form.insertAdjacentHTML('beforeend', `
            <button formData = close><img src="${imgPath}close.png"></button>
            <a href="${homePath}index.html"><img src="${imgPath}home.png"></a>
        `);
    };
};

function createNavigation(){
    let navigation = document.querySelector('[compoment=navigation]');
    let imgPath = navigation.getAttribute('imgPath');
    let hrefPath = navigation.getAttribute('linkHrefPath');  

    navigation.innerHTML = `
    <form formData = "form" class="form">
        <input formData = "input" type = "text" placeholder="search die-type">
        <button type="submit"><img src="${imgPath}search-icon.png" alt="search-icon"></button>
        <small></small>
    </form>
    <div class="link-wrapper">
        <small class="result" show-result="result"></small>
        <div class="auto-fill">
            <a nav-list="AE01" href="${hrefPath}AE01/AE01.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE01</span></a>
            <a nav-list="AE02" href="${hrefPath}AE02/AE02.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE02</span></a>
            <a nav-list="AE04" href="${hrefPath}AE04/AE04.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE04</span></a>
            <a nav-list="AE05" href="${hrefPath}AE05/AE05.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE05</span></a>
            <a nav-list="AE06" href="${hrefPath}AE06/AE06.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE06</span></a>
            <a nav-list="AE08" href="${hrefPath}AE08/AE08.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE08</span></a>
            <a nav-list="AE13" href="${hrefPath}AE13/AE13.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE13</span></a>
            <a nav-list="AE18" href="${hrefPath}AE18/AE18.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE18</span></a>
            <a nav-list="AE21" href="${hrefPath}AE21/AE21.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE21</span></a>
            <a nav-list="AE26" href="${hrefPath}AE26/AE26.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE26</span></a>
            <a nav-list="AE27" href="${hrefPath}AE27/AE27.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE27</span></a>
            <a nav-list="AE28" href="${hrefPath}AE28/AE28.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE28</span></a>
            <a nav-list="AE29" href="${hrefPath}AE29/AE29.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE29</span></a>
            <a nav-list="AE31" href="${hrefPath}AE31/AE31.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE31</span></a>
            <a nav-list="AE32" href="${hrefPath}AE32/AE32.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE32</span></a>
            <a nav-list="AE33" href="${hrefPath}AE33/AE33.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE33</span></a>
            <a nav-list="AE34" href="${hrefPath}AE34/AE34.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE34</span></a>
            <a nav-list="AE37" href="${hrefPath}AE37/AE37.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE37</span></a>
            <a nav-list="AE40" href="${hrefPath}AE40/AE40.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE40</span></a>
            <a nav-list="AE43" href="${hrefPath}AE43/AE43.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AE43</span></a>
            <a nav-list="AP87" href="${hrefPath}AP87/AP87.html"><img src="${imgPath}folder.png" alt="folder-icon"><span>AP87</span></a>
        </div>
    </div>`;
};
