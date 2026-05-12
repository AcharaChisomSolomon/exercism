#include "raindrops.h"

namespace raindrops {

    std::string convert(int number) {
        std::string line = "";

        if (number % 3 == 0) {
            line = line + "Pling";
        }
        if (number % 5 == 0) {
            line = line + "Plang";
        }
        if (number % 7 == 0) {
            line = line + "Plong";
        }

        if (line == "") {
            return std::to_string(number);
        } else {
            return line;
        }
    }

}
