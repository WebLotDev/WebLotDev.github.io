const htmlContent = `
<header>
    <div class="show_desktop">
        <nav>
            <div class="logo"><a href="https://weblot.gr/js/"><img src="https://www.weblot.gr/files/img/logo-head.png" width="20%"></a></div>
            <ul>
                <li><a href="www.weblot.gr">Home</a></li>
                <li><a href="www.weblot.gr/#about">About</a></li>
                <li><a href="www.weblot.gr/post">Blog</a></li>
                <li><a href="www.weblot.gr/#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="show_mobile">
        <div class="logo"><a href="#home"><img src="https://www.weblot.gr/files/img/logo-head.png" width="20%" style="margin-left: 40%;"></a></div>
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu" style="overflow: auto;">
                <ul class="sidebarMenuInner">
                    <li class="li-menu"><a href="www.weblot.gr">Home</a></li>
                <li class="li-menu"><a href="www.weblot.gr/#about">About</a></li>
                <li class="li-menu"><a href="www.weblot.gr/post">Blog</a></li>
                <li class="li-menu"><a href="www.weblot.gr/#contact">Contact</a></li>
                </ul>
            </div>
    </div>
</header>
`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_headder_and_menu');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
