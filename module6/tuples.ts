// Tuples
// Tuples are array-like structure where each element represents some property of a record
// a tuple usually contains multiple different properties to describe one single thing
// usually inside of a tuple we will mix and match many different types data inside there

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi = ["brown", true, 40];
// type annotation would be => const pepsi : (string | boolean | number) = ....

// we will add on annotation to this
const cola: [string, boolean, number] = ["brown", true, 40];
// now this is tuple
// inside the [] we are gonna write specific order of types of elements inside of this tuple

// now we are saying that this array is going to always have a very consistent ordering of elements inside of it i.e. always a string, then a boolean then a number

// we will get error if we change the order of things
// cola[0] = 40 // error, bcz this is supposed to be a string not a number

// we can create type alias as well. Type alias is an alternate way to write Type-annotation

//
type Drink = [string, boolean, number]; // This does not create an array because we have the type keyword in it.
//  Instead it is creating the idea of a tuple inside of our application

// it is a brand new type that we can freely use in any place that we would normally put a type, for example, in a type annotation

// so we can manually write out all the different types right here
const fanta: Drink = ["orange", true, 55];
const tea: Drink = ["brown", false, 10];
