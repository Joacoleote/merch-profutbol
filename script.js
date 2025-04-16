// Seleccionamos los botones de filtro y el contenedor de productos
const filterButtons = document.querySelectorAll('.list');
const productContainer = document.querySelector('#der');

// Función para filtrar productos
function filterProducts(filter) {
    // Seleccionamos todos los productos
    const products = document.querySelectorAll('.product'); // Asegúrate de que los productos tengan la clase 'product'
    // Limpiamos el contenedor de productos
    productContainer.innerHTML = ''; // Reseteamos el contenido del contenedor
    


    // Iteramos sobre los productos y aplicamos el filtro
    products.forEach(product => {
        const category = product.dataset.category;  // Obtenemos la categoría del producto
        if (filter === 'all' || category === filter) {
            product.style.display = 'block'; // Mostramos el producto
        } else {
            product.style.display = 'none'; // Ocultamos el producto
        }
    });
}

// Agregamos eventos a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter; // Obtenemos el filtro del botón
        filterProducts(filter);
    });
});