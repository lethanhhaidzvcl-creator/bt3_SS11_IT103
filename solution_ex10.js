
console.log("=== 1. FUNCTION DECLARATION ===");

sayHello();

function sayHello() {
    console.log("Xin chào Smart Home!");
}

console.log("=== 2. FUNCTION EXPRESSION ===");

const showDevice = function() {
    console.log("Thiết bị: Điều hòa");
};

showDevice();

console.log("=== 3. ARROW FUNCTION ===");

const showPower = (power) => {
    console.log("Công suất: " + power + "W");
};

showPower(1500);

console.log("=== 4. TEST UPDATE DEVICE ===");

let devices = [
    {
        id: "DEV_001",
        name: "Điều hòa",
        isActive: true,
        powerWatts: 1500
    }
];

const updateDevice = (list, id, updateData) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (updateData.isActive !== undefined) {
                list[i].isActive = updateData.isActive;
            }

            if (updateData.powerWatts !== undefined) {
                list[i].powerWatts = updateData.powerWatts;
            }

            return true;
        }
    }

    return false;
};

let result = updateDevice(devices, "DEV_001", {
    isActive: false,
    powerWatts: 0
});

console.log("Cập nhật thành công:", result);
console.table(devices);