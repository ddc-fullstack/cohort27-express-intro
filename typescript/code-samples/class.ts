class Foo {
	private fooId;
	private fooValue;
	constructor(fooId :number, fooValue : string) {
		console.log(fooId);
		this.fooId = fooId;
		this.fooValue = fooValue;
	}
}


const foo : Foo = new Foo(1, "hello");

function doSomething(foo : Foo) {
	return {...foo, fooBar: "world"}
}

const bar : any = {fooId:1, fooValue: "djdjdj"};
doSomething(bar);