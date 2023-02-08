let value: string | undefined | null = null;
console.log(typeof value);
value = "hello"
console.log(typeof value);
value = undefined;
console.log(typeof value);

//nulish coalesence

function printmilage(milage: number | null | undefined){
    console.log(`milage: ${milage ?? 'not available'}`);
}
printmilage(null);
printmilage(0);