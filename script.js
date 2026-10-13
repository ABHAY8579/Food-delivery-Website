* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f6f9;
    color: #333;
}

/* Navbar */
.navbar {
    background: #ff4757;
    color: white;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.cart-btn {
    background: white;
    color: #ff4757;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
}

.cart-btn:hover { 
    background: #ffe0e3; 
}

/* Hero Section */
.hero-section {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 4rem 1rem;
}

.hero-section h1 { 
    font-size: 2.5rem; 
    margin-bottom: 0.5rem; 
}

/* Main Layout */
.main-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.filter-container {
    display: flex;
    gap: 10px;
    margin-bottom: 1.5rem;
    overflow-x: auto;
}

.filter-btn {
    padding: 8px 18px;
    border: 1px solid #ff4757;
    background: white;
    color: #ff4757;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;
}

.filter-btn.active, .filter-btn:hover {
    background: #ff4757;
    color: white;
}

.app-layout {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    gap: 2rem;
}

/* Food Grid */
.food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.5rem;
}

.food-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s;
}

.food-card:hover {
    transform: translateY(-4px);
}

.food-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.food-details { 
    padding: 1rem; 
}

.food-details h4 { 
    margin-bottom: 5px; 
}

.price { 
    color: #2ed573; 
    font-weight: bold; 
    margin-bottom: 10px; 
}

.add-btn {
    width: 100%;
    background: #ff4757;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

.add-btn:hover {
    background: #e84118;
}

/* Sidebar Cart */
.cart-sidebar {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    height: fit-content;
    position: sticky;
    top: 90px;
}

.cart-items {
    max-height: 250px;
    overflow-y: auto;
    margin: 1rem 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.qty-controls {
    display: flex;
    align-items: center;
    gap: 5px;
}

.qty-btn {
    background: #eee;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.qty-btn:hover {
    background: #ddd;
}

.summary-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.summary-line.total { 
    font-weight: bold; 
    font-size: 1.1rem; 
    color: #ff4757; 
}

.checkout-btn {
    width: 100%;
    background: #2ed573;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.2s;
}

.checkout-btn:hover {
    background: #26af5f;
}

/* Modal Styling */
.modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 450px;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px; right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
}

.form-group { 
    margin-bottom: 1rem; 
}

.form-group label { 
    display: block; 
    margin-bottom: 5px; 
    font-weight: 600; 
}

.form-group input, .form-group textarea, .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.submit-btn {
    width: 100%;
    background: #2ed573;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

.submit-btn:hover {
    background: #26af5f;
}

/* Responsive Layout */
@media (max-width: 768px) {
    .app-layout { 
        grid-template-columns: 1fr; 
    }}