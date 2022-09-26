// Define a function called `shuffle`
// that receives an array of integers (int[])
// and shuffles the elements

#include <stdlib.h>
#include <stdio.h>

void shuffle (int* array, size_t n) {

    // printf("\n%ld\n", n);

    for (int i = 0; i < n; i++) {
        size_t j = i + rand() / (RAND_MAX / (n - i) + 1);
        int t = array[j];
        array[j] = array[i];
        array[i] = t;
        printf("\n%d\n", t);
    }

}

int main (int argc, char **argv) {

    int array[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};

    size_t n = sizeof(array)/sizeof(array[0]);

    shuffle( array, n );

    return 0;
}
