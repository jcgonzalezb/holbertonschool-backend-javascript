var UserAccount = /** @class */ (function () {
    function UserAccount(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    return UserAccount;
}());
var user1 = new UserAccount("Alex", "Murphy", 30, "Detroit");
var user2 = new UserAccount("John", "Constantine", 32, "Los Angeles");
var list = [user1, user2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "lightgray";
table.appendChild(tbody);
list.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
