
// // mapped types maps a type to the iteratable values

// type mypropss =  string | number;


// type mappednew = {
//     [p in mypropss]: string
// }

// basically we are creating a new mapped type that assigns different type to already assigned type


// type FeatureFlags = {
//     darkMode: () => void;
//     newUserProfile: () => void;
//   };

// type newMappedType<T> = {
//     [p in keyof T]: boolean
// }

// type myResult = newMappedType<FeatureFlags>



// mapped = > tracing one on another

// item mapping
// const arr = [1,2,3,4]
// const arr1 = arr.map(Math.sqrt) 

// console.log(arr1)

// typescript mapping => type mapping


type Shumail = 'Beautiful' | 'Gorgeous';

type MappedShumail = {
    [p in Shumail]: 'Female'
}

// type Vishav = 'Male' & 'ugly' & string; // can't do mapping of types on intersection

// type MappedVishav = {
//     [v in Vishav] : "idiot"
// }


type MappedShumail1 = {
    [s in Shumail]: s
}

// generic type mapping

type MappedShumail2<T> = {
    [s in Shumail] : T
}

type newType = MappedShumail2<string>


type MappedNew<Myprops extends string | number > ={
    [p in Myprops]: boolean

}
type newmap = MappedNew<number>


// how record works
type Shum<p extends keyof any, T> = {
    [P in p]: T;
};