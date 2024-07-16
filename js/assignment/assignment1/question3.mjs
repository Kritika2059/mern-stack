const canEnterRoom = (age) => {
    if (age < 18) {
        return "You can enter the room.";
    } else {
        return "You cannot enter the room.";
    }
};

console.log(canEnterRoom(15)); 
console.log(canEnterRoom(20)); 