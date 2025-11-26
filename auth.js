const DEMO_USER = {
    login: 'admin',
    password: '123456',
    username: 'Admin User'
};

function isAuthenticated() {
    const user = getCurrentUser();
    return user !== null;
}
function getCurrentUser() {
    const userJson = sessionStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
}

function signIn(login, password) {
    if (login === DEMO_USER.login && password === DEMO_USER.password) {
        const user = {
            login: DEMO_USER.login,
            username: DEMO_USER.username,
            signedInAt: new Date().toISOString()
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        sessionStorage.setItem('isAuthenticated', 'true');
        
        return {
            success: true,
            user: user
        };
    }
    
    return {
        success: false,
        message: 'Invalid login or password. Please try again.'
    };
}

function signOut() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
}

function protectPage() {
    if (!isAuthenticated()) {
        const currentPage = window.location.pathname.split('/').pop();
        window.location.href = `signin.html?return=${currentPage}`;
        return false;
    }
    return true;
}

function updateNavbar() {
    const user = getCurrentUser();
    const userIconLink = document.querySelector('.nav-icons a[href="signin.html"]');
    
    if (user && userIconLink) {
        const userDropdown = document.createElement('div');
        userDropdown.className = 'user-dropdown';
        userDropdown.innerHTML = `
            <div class="user-info">
                <svg class="icon user-icon" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span class="username">${user.username}</span>
            </div>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item" id="accountLink">My Account</a>
                <a href="#" class="dropdown-item" id="ordersLink">My Orders</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item logout-item" onclick="signOut(); return false;">
                    <svg class="logout-icon" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Sign Out
                </a>
            </div>
        `;
        
        userIconLink.replaceWith(userDropdown);
        
        const userInfo = userDropdown.querySelector('.user-info');
        const dropdownMenu = userDropdown.querySelector('.dropdown-menu');
        
        userInfo.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        });
        
        document.addEventListener('click', (e) => {
            if (!userDropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        updateNavbar();
    }, 100);
    
    const protectedLinks = document.querySelectorAll('.menu-item a, a[href*="patek-index"], a[href*="rolex-index"], a[href*="cartier-index"], a[href*="omega-index"], a[href*="richard-millie-index"], a[href*="audemars-piguet-index"], a[href*="breitling-index"]');
    
    protectedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && (href.includes('-index.html') || href.includes('patek') || href.includes('rolex') || href.includes('cartier') || href.includes('omega') || href.includes('richard-millie') || href.includes('audemars-piguet') || href.includes('breitling'))) {
                if (!isAuthenticated()) {
                    e.preventDefault();
                    window.location.href = `signin.html?return=${href}`;
                }
            }
        });
    });
});