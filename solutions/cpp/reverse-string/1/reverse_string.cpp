#include "reverse_string.h"

namespace reverse_string {

    std::string reverse_string(std::string word) {
        std::string output{""};
        for (int i = word.size() - 1; i >= 0; i--) {
            output = output + word[i];
        }
        return output;
    }

}
