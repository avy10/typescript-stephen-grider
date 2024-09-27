interface Profile {
  name: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge: (age: number) => void;
}

// do recall const todo = res.data as Todo in F:\LEARN AVY\TypeScript Stephen Grider\typescript-stephen-grider\gettingStarted01\fetchjson\index.ts
const profile: Profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES 2015 destructuring
// const {age} : number = profile // WRONG
// We have to list out the structure of the profile and the different properties that we want it to have

const { age }: { age: number } = profile;

// If we want to use destructuring then we have to write the expected structure of the object that is present on the right hand side

// so we expect the profile value to have a structure that is an object with the age property that is a number

// Destructuring out lat and lng

// const {coords : {lat, lng}} = profile; // JS WAY
// we have to mirror the object structure that we expect profile to be
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
