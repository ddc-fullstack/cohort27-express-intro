interface Foo {
	fooId: number
	fooValue : string
}

function doSomething(foo : Foo) {
	return {...foo, fooBar: "world"}
}

doSomething({fooId:1, fooValue: "djdjdj"});