class Foo {
    constructor(name){
        this.name = name
    }

    display(){
        console.log(this.name);
    }
}

var foo = new Foo('Saurabh');
foo.display(); // Saurabh

// var display = foo.display;
// display(); // Saurabh

function testThis() {
    console.log(this)
}
testThis()
