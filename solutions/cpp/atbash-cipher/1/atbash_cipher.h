#pragma once

#include <cctype>
#include <string>

namespace atbash_cipher {

    std::string encode(std::string text);
    std::string decode(std::string code);

}
