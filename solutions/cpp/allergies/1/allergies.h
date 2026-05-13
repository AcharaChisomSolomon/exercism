#pragma once

#include <string>
#include <unordered_set>
#include <map>

namespace allergies {

    class allergy_test {
        public:
            allergy_test(int number);
            bool is_allergic_to(std::string allergy);
            std::unordered_set<std::string> get_allergies();
    
        private:
            int allergy_val = 0;
            std::unordered_set<std::string> allergies;
            std::map<int, std::string> allergy_map;
    
            void fill_allergies(); 
    };

}
