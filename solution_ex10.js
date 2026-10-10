// ==========================================
// 1. DEMO VỀ HOISTING (CƠ CHẾ NÂNG BIẾN)
// ==========================================

console.log('=== 1. KIỂM TRA HOISTING ===');

// A. Function Declaration: Gọi được trước khi viết định nghĩa
console.log('Gọi trước khi khai báo (Declaration):', getDeviceStatus()); 

function getDeviceStatus() {
  return 'Đèn phòng khách: ON';
}

// B. Function Expression & Arrow Function: KHÔNG thể gọi trước khi định nghĩa
// Nếu bạn bỏ comment 2 dòng dưới, JS sẽ báo lỗi ReferenceError ngay lập tức.
// console.log(getPowerExpression(10, 2));
// console.log(getPowerArrow(10, 2));

const getPowerExpression = function(voltage, current) {
  return voltage * current;
};

const getPowerArrow = (voltage, current) => voltage * current;

console.log('Gọi sau khi khai báo (Expression):', getPowerExpression(220, 5));
console.log('Gọi sau khi khai báo (Arrow):', getPowerArrow(220, 5));


// ==========================================
// 2. DEMO VỀ CON TRỎ "this"
// ==========================================

console.log('\n=== 2. KIỂM TRA CON TRỎ THIS ===');

const smartSwitch = {
  name: 'Công tắc thông minh',
  brand: 'Xiaomi',

  // Hàm thường: `this` trỏ đúng vào object smartSwitch
  showInfoRegular: function() {
    console.log(`[Regular] Thiết bị: ${this.name} - Hãng: ${this.brand}`);
  },

  // Arrow Function: `this` bị lấy từ ngữ cảnh bên ngoài (lexical this) -> undefined
  showInfoArrow: () => {
    console.log(`[Arrow] Thiết bị: ${this?.name} - Hãng: ${this?.brand}`);
  }
};

smartSwitch.showInfoRegular();
smartSwitch.showInfoArrow();


// ==========================================
// 3. DEMO VỀ ĐỐI TƯỢNG "arguments"
// ==========================================

console.log('\n=== 3. KIỂM TRA ARGUMENTS ===');

function sumPowerDeclaration() {
  // `arguments` gom tất cả tham số truyền vào mà không cần khai báo trước
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  return total;
}

// Arrow Function không có `arguments`, phải xài Rest Parameter (...args)
const sumPowerArrow = (...args) => {
  return args.reduce((acc, cur) => acc + cur, 0);
};

console.log('Tổng công suất (Declaration):', sumPowerDeclaration(15, 45, 100));
console.log('Tổng công suất (Arrow + Rest):', sumPowerArrow(15, 45, 100));
