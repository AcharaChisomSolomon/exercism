#include "protein_translation.h"

namespace protein_translation {

    std::vector<std::string> proteins(std::string sequence) {
        std::vector<std::string> output{};

        int i = 0;
        while (i < int(sequence.size())) {
            std::string curr_protein = protein(sequence.substr(i, 3));
            if (curr_protein == "STOP") {
                break;
            }
            output.push_back(curr_protein);
            i += 3;
        }

        return output;
    }
    

    std::string protein(std::string sequence) {
        if (sequence == "AUG") {
            return "Methionine";
        }
        else if (sequence == "UUU" || sequence == "UUC") {
            return "Phenylalanine";
        }
        else if (sequence == "UUA" || sequence == "UUG") {
            return "Leucine";
        }
        else if (sequence == "UCU" || sequence == "UCC" || 
                 sequence == "UCA" || sequence == "UCG") {
            return "Serine";
        }
        else if (sequence == "UAU" || sequence == "UAC") {
            return "Tyrosine";
        }
        else if (sequence == "UGU" || sequence == "UGC") {
            return "Cysteine";
        }
        else if (sequence == "UGG") {
            return "Tryptophan";
        }
        else if (sequence == "UAA" || sequence == "UAG" || sequence == "UGA") {
            return "STOP";
        }
        else {
            return "STOP";        // or "Invalid codon"
        }
    }

}
