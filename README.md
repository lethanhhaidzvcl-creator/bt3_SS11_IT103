| Tiêu chí so sánh | Function Declaration | Function Expression | Arrow Function (=>) |
| :--- | :--- | :--- | :--- |
| **Cơ chế Hoisting** | **Có (Đầy đủ)**<br>- Được nâng cả tên và thân hàm lên đầu scope.<br>- Có thể gọi hàm trước khi định nghĩa. | **Không**<br>- Phụ thuộc vào từ khóa `const`/`let`.<br>- Gọi trước khi định nghĩa sẽ báo lỗi ReferenceError. | **Không**<br>- Phải định nghĩa hoàn chỉnh trước khi gọi. |
| **Cú pháp** | - Dài dòng.<br>- Bắt buộc dùng từ khóa `function` và tên hàm. | - Gán hàm (ẩn danh/có tên) vào một biến (`const`/`let`). | - Ngắn gọn, hiện đại.<br>- Hỗ trợ ẩn từ khóa `return` (implicit return) khi viết 1 dòng. |
| **Con trỏ `this`** | **Động**<br>- `this` phụ thuộc vào đối tượng gọi hàm (context lúc thực thi). | **Động**<br>- Tương tự như Function Declaration. | **Tĩnh (Lexical this)**<br>- Kế thừa `this` từ phạm vi bao ngoài (không bị thay đổi). |
| **Đối tượng `arguments`** | **Có sẵn**<br>- Tự động gom toàn bộ tham số truyền vào hàm. | **Có sẵn**<br>- Tương tự Function Declaration. | **Không có**<br>- Phải sử dụng Rest Parameters (`...args`) để thay thế. |
| **Khuyến nghị** | Dùng cho các hàm tiện ích toàn cục (global utility). | Dùng khi cần kiểm soát thứ tự gọi hàm tuyến tính. | **Khuyến nghị chính (ES6+)** cho callback, hàm xử lý mảng và logic CRUD. |
