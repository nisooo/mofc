// our function
const addToList = (list) => {
    return list.push([5]); 
    // if we use this tests will fail because .push mutates the array
    return list.concat([5]); 
    // if we use this tests will pass because .concat does not mutate
    }
    // this is a test function
    const testAddToList = () => {
    const before = [];
    const after = [5];
    // check for mutations
    deepFreeze(before);
    // check if result is deeply equal to our expected result
    expect(
         add(before)
       ).toEqual(after)
    }
    testAdd();
    console.log(‘tests pass’)