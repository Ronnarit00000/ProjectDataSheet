createIcon();
openNavigation();
closeNavigation();

function createIcon(){
    let icon = document.querySelector('[compoment=icon-navigation]');
    let imgPath = icon.getAttribute('imgPath');
    icon.innerHTML = `
        <button icon-compomnt="open-navigation"><img src="${imgPath}menus.png" alt="open icon navigation"></button>
        <a href="../../../index.html"><img src="${imgPath}home.png" alt="home icon"></a>
    `;
}

// show navigation
function openNavigation(){
    let icon = document.querySelector('[icon-compomnt=open-navigation]');
    let navigation = document.querySelector('[compoment = navigation]');
    icon.addEventListener('click', function(e){
        e.preventDefault();
        navigation.removeAttribute('state');
    });
};

// hide navigation
function closeNavigation(){
    let icon = document.querySelector('[formData = close]');
    let navigation = document.querySelector('[compoment = navigation]');
    icon.addEventListener('click', function(e){
        e.preventDefault();
        navigation.setAttribute('state', 'hide');
    });
};
