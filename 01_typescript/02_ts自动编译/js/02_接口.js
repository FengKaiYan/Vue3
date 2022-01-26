(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '东方',
        lastName: '之子'
    };
    console.log(showFullName(person));
})();
