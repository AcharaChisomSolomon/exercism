#include "allergies.h"

namespace allergies {

    allergy_test::allergy_test(int number) : allergy_val(number) {
        allergy_map = {
            {1,   "eggs"},
            {2,   "peanuts"},
            {4,   "shellfish"},
            {8,   "strawberries"},
            {16,  "tomatoes"},
            {32,  "chocolate"},
            {64,  "pollen"},
            {128, "cats"}
        };

        fill_allergies();
    }

    void allergy_test::fill_allergies() {
        allergies.clear();

        for (const auto& pair : allergy_map) {
            int allergen_value = pair.first;
            const std::string& allergen_name = pair.second;

            if ((allergy_val & allergen_value) != 0) {
                allergies.insert(allergen_name);
            }
        }
    }

    bool allergy_test::is_allergic_to(std::string allergy) {
        return allergies.count(allergy) >= 1;
    }

    std::unordered_set<std::string> allergy_test::get_allergies() {
        return allergies;
    }

} 
