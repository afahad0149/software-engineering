// Define a function called `shuffle`
// that receives an array of integers (int[])
// and shuffles the elements

#include <stdlib.h>
#include <stdio.h>

int* shuffle (int* array, size_t arr_size) {

    printf("\n%ld\n", arr_size);

    int* result = (int*)malloc(arr_size*sizeof(int));

    for (int i = 0; i < arr_size; i++) {
        size_t j = i + rand() / (RAND_MAX / (arr_size - i) + 1);
        int t = array[j];
        array[j] = array[i];
        array[i] = t;
        printf("\n%d\n", t);
    }

    return array;

}

int main (int argc, char **argv) {

    int array[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
    size_t arr_size = sizeof(array)/sizeof(array[0]);

    int *new_array;
    new_array = shuffle( array, arr_size );
    size_t newarr_size = sizeof(new_array)/sizeof(new_array[0]);

    printf("\n%ld\n",newarr_size);

    return 0;
}
