#include "difference_of_squares.h"

namespace difference_of_squares {

    int square_of_sum (int number) {
        int sum = 0;

        int i = 0;
        while (i <= number) {
            sum += i;
            i++;
        }

        return sum * sum;
    }
    
    int sum_of_squares(int number) {
        int sum = 0;

        int i = 0;
        while (i <= number) {
            sum += i * i;
            i++;
        }

        return sum;
    }
    
    int difference    (int number) {
        return square_of_sum(number) - sum_of_squares(number);
    }

}
