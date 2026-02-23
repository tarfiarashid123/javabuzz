// ===== COFFEE MENU DATA =====
const coffeeMenu = [
    // Espresso Category
    {
        id: 1,
        name: "Espresso",
        category: "espresso",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Rich and bold single shot espresso with perfect crema",
        rating: 4.8
    },
    {
        id: 2,
        name: "Double Espresso",
        category: "espresso",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Double shot of intense espresso for extra kick",
        rating: 4.9
    },
    {
        id: 3,
        name: "Espresso Macchiato",
        category: "espresso",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Espresso topped with a dash of foamy milk",
        rating: 4.7
    },
    
    // Milk Coffee Category
    {
        id: 4,
        name: "Cappuccino",
        category: "milk",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Equal parts espresso, steamed milk, and foam",
        rating: 4.9
    },
    {
        id: 5,
        name: "Latte",
        category: "milk",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Smooth espresso with lots of steamed milk",
        rating: 4.8
    },
    {
        id: 6,
        name: "Flat White",
        category: "milk",
        price: 5.29,
        image: "https://images.unsplash.com/photo-1666520111579-5e843b56f8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Australian style with velvety microfoam",
        rating: 4.8
    },
    {
        id: 7,
        name: "Mocha",
        category: "milk",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Espresso with chocolate and steamed milk",
        rating: 4.9
    },
    
    // Cold Coffee Category
    {
        id: 8,
        name: "Cold Brew",
        category: "cold",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "12-hour steeped smooth cold coffee",
        rating: 4.8
    },
    {
        id: 9,
        name: "Iced Latte",
        category: "cold",
        price: 5.29,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Chilled latte over ice",
        rating: 4.7
    },
    {
        id: 10,
        name: "Frappuccino",
        category: "cold",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Blended coffee with cream and caramel",
        rating: 4.9
    },
    {
        id: 11,
        name: "Nitro Cold Brew",
        category: "cold",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1594056142207-db9c5f3f7b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Nitrogen-infused cold brew with creamy texture",
        rating: 5.0
    },
    
    // Special Category
    {
        id: 12,
        name: "Caramel Macchiato",
        category: "special",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Vanilla syrup, milk, espresso and caramel",
        rating: 4.9
    },
    {
        id: 13,
        name: "Hazelnut Latte",
        category: "special",
        price: 6.29,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Rich latte with hazelnut flavor",
        rating: 4.8
    },
    {
        id: 14,
        name: "Pumpkin Spice",
        category: "special",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1572445273755-7f6b9f7b8b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Seasonal favorite with pumpkin and spices",
        rating: 4.9
    },
    {
        id: 15,
        name: "Irish Coffee",
        category: "special",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Coffee with Irish whiskey and cream",
        rating: 4.7
    },
    
    // Pastry Category
    {
        id: 16,
        name: "Chocolate Croissant",
        category: "pastry",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Buttery croissant with chocolate filling",
        rating: 4.8
    },
    {
        id: 17,
        name: "Blueberry Muffin",
        category: "pastry",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Fresh baked muffin with blueberries",
        rating: 4.6
    },
    {
        id: 18,
        name: "Cinnamon Roll",
        category: "pastry",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Soft roll with cinnamon and cream cheese",
        rating: 4.9
    },
    {
        id: 19,
        name: "Cheesecake",
        category: "pastry",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Creamy New York style cheesecake",
        rating: 4.9
    }
];

// ===== BLOG DATA =====
const blogPosts = [
    {
        id: 1,
        title: "The Art of Espresso Making",
        excerpt: "Learn the secrets behind pulling the perfect espresso shot with rich crema.",
        date: "2024-02-15",
        author: "John Smith",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Coffee Tips"
    },
    {
        id: 2,
        title: "Cold Brew vs Iced Coffee",
        excerpt: "What's the difference? Find out which one suits your taste better.",
        date: "2024-02-12",
        author: "Emma Watson",
        authorImage: "https://images.unsplash.com/photo-1494790108777-466d829a1f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Coffee Guide"
    },
    {
        id: 3,
        title: "5 Health Benefits of Coffee",
        excerpt: "Discover the surprising health benefits of your morning cup of joe.",
        date: "2024-02-10",
        author: "Mike Johnson",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Health"
    },
    {
        id: 4,
        title: "Latte Art Tutorial",
        excerpt: "Step-by-step guide to creating beautiful latte art at home.",
        date: "2024-02-08",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Tutorial"
    },
    {
        id: 5,
        title: "Best Coffee Beans for Home",
        excerpt: "Top recommendations for coffee beans to brew at home.",
        date: "2024-02-05",
        author: "David Brown",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Coffee Tips"
    },
    {
        id: 6,
        title: "Sustainable Coffee Farming",
        excerpt: "How we're working with farmers to promote sustainable practices.",
        date: "2024-02-02",
        author: "Lisa Wang",
        authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Sustainability"
    }
];

// ===== GLOBAL VARIABLES =====
let cart = [];

// ===== FEATURED PRODUCTS =====
function displayFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    const featuredItems = coffeeMenu.slice(0, 4);
    
    featuredGrid.innerHTML = featuredItems.map(item => `
        <div class="featured-card">
            <div class="featured-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="featured-overlay">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id}); event.stopPropagation();">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div class="featured-info">
                <h3>${item.name}</h3>
                <span class="category">${item.category}</span>
            </div>
        </div>
    `).join('');
}

// ===== BLOG FUNCTIONS =====
function displayBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-date">
                    <i class="far fa-calendar-alt"></i>
                    ${new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                    })}
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-footer">
                    <div class="blog-author">
                        <img src="${post.authorImage}" alt="${post.author}">
                        <span>${post.author}</span>
                    </div>
                    <div class="blog-share">
                        <a href="#" onclick="shareBlog(${post.id}, 'facebook')"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" onclick="shareBlog(${post.id}, 'twitter')"><i class="fab fa-twitter"></i></a>
                        <a href="#" onclick="shareBlog(${post.id}, 'pinterest')"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function shareBlog(postId, platform) {
    const post = blogPosts.find(p => p.id === postId);
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${post.image}&description=${title}`;
            break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    showToast('Opening share dialog...');
}

// ===== CART FUNCTIONS =====
function addToCart(productId) {
    const product = coffeeMenu.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to your order!`);
    
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast(`${product.name} removed from order`);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('javaBuzzCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('javaBuzzCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartCount) return;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('active');
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`Order placed! Total: $${total.toFixed(2)}. Thank you for choosing Java Buzz!`);
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// ===== UPDATED MAP FUNCTIONS (Stargate Location - 2 Card Layout) =====
function initMap() {
    // Stargate, Metro Mall, Lahore coordinates
    const map = L.map('map').setView([31.5204, 74.3587], 17);

    // Dark theme map tiles (matches website theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Custom coffee marker with pulse animation
    const coffeeIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                background: #A67B5B;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid #FDF8F2;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                animation: pulse 2s infinite;
            ">
                <i class="fas fa-mug-hot" style="color: #FDF8F2; font-size: 24px;"></i>
            </div>
        `,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25]
    });

    // Add marker
    const marker = L.marker([31.5204, 74.3587], { icon: coffeeIcon }).addTo(map);
    
    // Custom popup
    marker.bindPopup(`
        <div style="
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 15px;
            min-width: 250px;
        ">
            <h3 style="
                color: #3C2A1F;
                margin: 0 0 10px 0;
                font-size: 1.3rem;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            ">☕ Java Buzz Coffee</h3>
            

            
            <div style="color: #3C2A1F; font-size: 0.9rem;">
                <i class="fas fa-clock"></i> 9AM - 11PM Daily
            </div>
        </div>
    `).openPopup();

    // Add a circle to highlight area
    L.circle([31.5204, 74.3587], {
        color: '#A67B5B',
        fillColor: 'rgba(166, 123, 91, 0.1)',
        fillOpacity: 0.1,
        radius: 30
    }).addTo(map);

    // Add parking marker
    const parkingIcon = L.divIcon({
        className: 'parking-marker',
        html: `
            <div style="
                background: #5C3B2A;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #FDF8F2;
                box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            ">
                <i class="fas fa-parking" style="color: #FDF8F2; font-size: 14px;"></i>
            </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    L.marker([31.5210, 74.3580], { icon: parkingIcon }).addTo(map)
        .bindPopup('Parking Entrance - Level B1');

    // Add CSS animation for pulse effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 5px 15px rgba(166,123,91,0.3); }
            50% { transform: scale(1.1); box-shadow: 0 5px 25px rgba(166,123,91,0.6); }
            100% { transform: scale(1); box-shadow: 0 5px 15px rgba(166,123,91,0.3); }
        }
    `;
    document.head.appendChild(style);
}

// ===== CONTACT FORM WITH LOCALSTORAGE =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const savedData = localStorage.getItem('javaBuzzContact');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('name').value = data.name || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('saveInfo').checked = true;
    }
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const saveInfo = document.getElementById('saveInfo').checked;
        
        if (saveInfo) {
            const contactData = {
                name: name,
                email: email,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('javaBuzzContact', JSON.stringify(contactData));
        } else {
            localStorage.removeItem('javaBuzzContact');
        }
        
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ===== PARTICLES BACKGROUND =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(166, 123, 91, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `floatParticle ${15 + Math.random() * 10}s infinite linear`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayBlogs();
    loadCart();
    initMap();
    initContactForm();
    createParticles();
    
    // Add particle animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            from {
                transform: translateY(0) translateX(0);
            }
            to {
                transform: translateY(-100vh) translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Footer newsletter
    document.getElementById('footerNewsletter')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Thanks for subscribing with ${email}!`);
        e.target.reset();
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CLOSE CART ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar && cartSidebar.classList.contains('active') && 
        !cartSidebar.contains(e.target) && 
        !e.target.closest('.cart-icon')) {
        cartSidebar.classList.remove('active');
    }
});