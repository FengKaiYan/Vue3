(()=>{
    interface IPerson {
        firstName: string
        lastName: string
    }
    
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName
    }

    const person = {
        firstName: '东方',
        lastName: '之子'
    }

    console.log(showFullName(person))
})()