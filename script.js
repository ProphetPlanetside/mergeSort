// MergeSort starting pseudocode:

// if array length < 2
//     return
// else   
//     sort left half of elements
//     sort right half of elements
//     merge sorted halves

// Take in a single array and return the sorted version of that array, using mergeSort recursion.
function mergeSort (finalArr) {
    // If the array is down to 1 element, return that array. A single element is already sorted.
    if(finalArr.length < 2)
        return finalArr;
    else {
        // mergeSort the first half of the array
        let array1 = mergeSort(finalArr.slice(0, Math.round(finalArr.length / 2)));
        // mergeSort the second half of the array
        let array2 = mergeSort(finalArr.slice(Math.round(finalArr.length / 2), finalArr.length));
        // merge those 2 sorted array halves
        finalArr = merge(array1, array2);
    }
    return finalArr;
}

// This function merges 2 arrays into 1 sorted array, assuming the arrays that
// are passed in are already sorted themselves. The mergeSort function above 
// ensures that the arrays passed in will be sorted already. The ++'s in this
// function increments the variable up by 1 AFTER the statements complete.
function merge (array1, array2) {
    let mergedArray = [], i = 0, j = 0, k = 0, firstArrayDone = false;
    // This condition makes sure the loop doesn't iterate if array1 and array 2 
    // have already both been iterated through.
    while (k < array1.length + array2.length - 1) {
        if(array1[i] < array2[j])
            mergedArray[k++] = array1[i++];
        else
            mergedArray[k++] = array2[j++];
        // These 2 if statements should break out of the while loop if one array 
        // has been fully iterated through.
        if(i == array1.length) {
            firstArrayDone = true;
            break;
        }
        if(j == array2.length) {
            // firstArrayDone remains false in this case
            break;
        }
    }
    // Now we have to add all elements of the 2nd array, if the 1st has been
    // fully iterated through, and the 2nd array still has elements left.
    if(firstArrayDone) {
        while(j < array2.length)
            mergedArray[k++] = array2[j++];
    }
    else {
        while(i < array1.length)
            mergedArray[k++] = array1[i++];
    }
    return mergedArray;
}

// Test the mergeSort function.
// let a = [20, 3, 12, 1, 19, 18, 5, -3, 100];
// console.log(mergeSort(a));