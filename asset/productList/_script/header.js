createButton();
onclickButton();

window.addEventListener('load', function(){
    document.querySelector("[product-page='1']").click(); 
});

// create button follow product-page
function createButton(){
    let product = document.querySelectorAll('[productPage]');
    let groupBtn = document.querySelector('[header-compoment = group-btn]');
    
    [...product].forEach((el, index) => {
        let btn = document.createElement('button');
            btn.setAttribute('class', 'btn');
            btn.setAttribute('type', 'button');
            btn.setAttribute('product-page', `${index + 1}`);
            btn.innerText = `${index + 1}`;
            groupBtn.appendChild(btn);
    });
};

// onclick button show product-page 1,2,3,...
function onclickButton(){    
    let btn = document.querySelectorAll('[product-page]');
        btn.forEach(el => {
            el.addEventListener('click', function(e){
                document.querySelectorAll("[productPage]").forEach(item => item.setAttribute("stateProductList", "hide"));
                document.querySelector(`[productPage = page${el.getAttribute('product-page')}]`).removeAttribute("stateProductList");
                document.querySelectorAll('[product-page]').forEach(item => item.removeAttribute('stateButton'));
                e.target.setAttribute('stateButton', 'click');
        });
    });
};