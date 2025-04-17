// call function
const navigation = createNavigation();
      navigation.createProductWrapper();
      navigation.createCloseIcon();
      navigation.createProductList([
            "AE01", "AE02", "AE04", "AE05", "AE06",
            "AE08", "AE13", "AE18", "AE21", "AE26",
            "AE27", "AE28", "AE29", "AE31", "AE32",
            "AE33", "AE34", "AE37", "AE40", "AE43",
            "AK82", "AK83", "AL45", "AL50", "AL68",
            "AP27", "AP30", "AP32", "AP35", "AP36",
            "AP37", "AP41", "AP54", "AP55", "AP57", 
            "AP58", "AP59", "AP61", "AP66", "AP75", 
            "AP87" 
        ]);

search();

function createNavigation(){
    
    let navigation = document.querySelector('[compoment=navigation]');
    let imgPath = navigation.getAttribute('imgPath');
    let hrefPath = navigation.getAttribute('linkHrefPath');  
    let homePath = navigation.getAttribute('homepath');

    return {
        createProductWrapper(){
        
            // create form for search product and product-wrapper
            // <!-- form -->
            // <form formData = "form" class="form">
            //      <input formData = "input" type = "text" placeholder="search die-type">
            //      <button type="submit"><img src="${imgPath}search-icon.png" alt="search-icon"></button>
            //      <small></small>
            //  </form>
            //   <!-- product-wrapper -->
            //  <div class="link-wrapper">
            //      <small class="result" show-result="result"></small>
            //      <div class="auto-fill" nav-list-wrapper="all-list"></div>
            //  </div>

            navigation.innerHTML = `
                <!-- form -->
                <form formData = "form" class="form">
                    <input formData = "input" type = "text" placeholder="search die-type">
                    <button type="submit"><img src="${imgPath}search-icon.png" alt="search-icon"></button>
                    <small></small>
                </form>

                <!-- link-wrapper -->
                <div class="link-wrapper">
                    <small class="result" show-result="result"></small>
                    <div class="auto-fill" nav-list-wrapper="all-list"></div>
                </div>`;
        },

        createCloseIcon() {

            // create icon close and go to home 
            // <button formData = close><img src="${imgPath}close.png"></button>
            // <a href="${homePath}index.html"><img src="${imgPath}home.png"></a>          

            let form = document.querySelector('[formData = form]');
            if(navigation.getAttribute('location') === 'product-page'){
                form.insertAdjacentHTML('beforeend', `
                    <button formData = close><img src="${imgPath}close.png"></button>
                    <a href="${homePath}index.html"><img src="${imgPath}home.png"></a>
                `);
            };
        },
        
        createProductList(product){

            // create element a link 
            // <a nav-list="product" href="${hrefPath}/productFolder/productFlie.html">
            //      <img src="${imgPath}folder.png" alt="folder-icon">
            //      <span>${el}</span>
            // </a>
            
            let listwrapper = navigation.querySelector('[nav-list-wrapper=all-list]');
            product.forEach(el=> {
                let nodeList = document.createElement('a');
                    nodeList.setAttribute('nav-list', `${el}`);
                    nodeList.setAttribute('href', `${hrefPath}${el}/${el}.html`);
                    nodeList.innerHTML = `<img src="${imgPath}folder.png" alt="folder-icon"><span>${el}</span>`;
                    listwrapper.appendChild(nodeList);
            });
        }
    }
};

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