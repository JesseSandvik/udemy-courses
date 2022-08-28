function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jane"});