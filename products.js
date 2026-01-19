// ============================================
// QUẢN LÝ PRODUCTS - HOÀN THÀNH TẤT CẢ YÊU CẦU
// ============================================

// ===== CÂU 1: Khai báo constructor function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

console.log('========== CÂU 1: Constructor Function Product ==========');
console.log('✓ Đã khai báo constructor function Product');

// ===== CÂU 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, 2+ danh mục =====
const products = [
    new Product(1, 'Laptop Dell', 15000000, 5, 'Electronics', true),
    new Product(2, 'iPhone 15', 25000000, 3, 'Electronics', true),
    new Product(3, 'Áo thun cotton', 250000, 20, 'Fashion', true),
    new Product(4, 'Quần jeans', 500000, 15, 'Fashion', false),
    new Product(5, 'Tai nghe Bluetooth', 1500000, 0, 'Accessories', true),
    new Product(6, 'Chuột wireless', 350000, 10, 'Accessories', true),
    new Product(7, 'Bàn phím cơ', 2000000, 2, 'Accessories', true)
];

console.log('\n========== CÂU 2: Mảng Products ==========');
console.log('Danh sách 7 sản phẩm từ 3 danh mục (Electronics, Fashion, Accessories):');
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - ${product.category} - ${product.quantity} cái`);
});

// ===== CÂU 3: Tạo mảng mới chỉ chứa name, price =====
console.log('\n========== CÂU 3: Mảng chỉ chứa Name và Price ==========');
const productNamePrice = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log(productNamePrice);

// ===== CÂU 4: Lọc ra các sản phẩm còn hàng (quantity > 0) =====
console.log('\n========== CÂU 4: Sản phẩm còn hàng (quantity > 0) ==========');
const inStockProducts = products.filter(product => product.quantity > 0);
console.log(`Có ${inStockProducts.length} sản phẩm còn hàng:`);
inStockProducts.forEach(product => {
    console.log(`- ${product.name}: ${product.quantity} cái`);
});

// ===== CÂU 5: Kiểm tra có ít nhất 1 sản phẩm có giá trên 30 triệu =====
console.log('\n========== CÂU 5: Kiểm tra sản phẩm có giá >= 30 triệu ==========');
const hasPriceAbove30M = products.some(product => product.price >= 30000000);
console.log(`Có ít nhất 1 sản phẩm có giá >= 30 triệu? ${hasPriceAbove30M ? '✓ CÓ' : '✗ KHÔNG'}`);
if (hasPriceAbove30M) {
    const expensiveProducts = products.filter(p => p.price >= 30000000);
    expensiveProducts.forEach(p => console.log(`  - ${p.name}: ${p.price.toLocaleString()} VND`));
} else {
    console.log('Tất cả sản phẩm đều dưới 30 triệu');
}

// ===== CÂU 6: Kiểm tra tất cả sản phẩm Accessories có isAvailable = true =====
console.log('\n========== CÂU 6: Kiểm tra sản phẩm Accessories ==========');
const accessoriesProducts = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);
console.log(`Tất cả sản phẩm Accessories đang được bán (isAvailable = true)? ${allAccessoriesAvailable ? '✓ CÓ' : '✗ KHÔNG'}`);
console.log('Chi tiết sản phẩm Accessories:');
accessoriesProducts.forEach(p => {
    console.log(`- ${p.name}: Trạng thái = ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
});

// ===== CÂU 7: Tính tổng giá trị kho hàng (price × quantity) =====
console.log('\n========== CÂU 7: Tổng giá trị kho hàng ==========');
const totalInventoryValue = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);
console.log(`Tổng giá trị kho hàng: ${totalInventoryValue.toLocaleString()} VND`);
console.log('Chi tiết từng sản phẩm:');
products.forEach(product => {
    const value = product.price * product.quantity;
    console.log(`- ${product.name}: ${value.toLocaleString()} VND (${product.price.toLocaleString()} × ${product.quantity})`);
});

// ===== CÂU 8: Duyệt mảng products và in ra: Tên - Danh mục - Trạng thái =====
console.log('\n========== CÂU 8: Duyệt mảng sản phẩm (for...of) ==========');
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
}

// ===== CÂU 9: Dùng for...in để in tên thuộc tính và giá trị =====
console.log('\n========== CÂU 9: Dùng for...in (ví dụ sản phẩm đầu tiên) ==========');
console.log(`Thuộc tính của sản phẩm: "${products[0].name}"`);
for (const key in products[0]) {
    console.log(`- ${key}: ${products[0][key]}`);
}

// ===== CÂU 10: Lấy danh sách tên sản phẩm đang bán và còn hàng =====
console.log('\n========== CÂU 10: Danh sách sản phẩm đang bán và còn hàng ==========');
const availableAndInStock = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log(`Danh sách ${availableAndInStock.length} sản phẩm đang bán và còn hàng:`);
availableAndInStock.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

// ===== TỔNG KẾT =====
console.log('\n========== TỔNG KẾT ==========');
console.log(`✓ Đã hoàn thành tất cả 10 câu yêu cầu`);
console.log(`✓ Tổng sản phẩm: ${products.length}`);
console.log(`✓ Sản phẩm còn hàng: ${inStockProducts.length}`);
console.log(`✓ Sản phẩm đang bán và còn hàng: ${availableAndInStock.length}`);
console.log(`✓ Tổng giá trị kho: ${totalInventoryValue.toLocaleString()} VND`);
