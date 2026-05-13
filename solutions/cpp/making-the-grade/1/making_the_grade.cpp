#include <array>
#include <string>
#include <vector>
#include <cmath>

std::vector<int> round_down_scores(std::vector<double> student_scores) {
    std::vector<int> output{};
    
    int student_scores_len = student_scores.size();
    for (int i = 0; i < student_scores_len; i++) {
        output.push_back(std::floor(student_scores[i]));
    }
    
    return output;
}

int count_failed_students(std::vector<int> student_scores) {
    int count = 0;
    
    for (int i = 0; i < student_scores.size(); i++) {
        if (student_scores[i] <= 40) count++;
    }
    
    return count;
}

std::array<int, 4> letter_grades(int highest_score) {
    int distance = (highest_score - 40) / 4;

    std::array<int, 4> grades{41};
    for (int i = 1; i < 4; i++) {
        grades[i] = grades[i - 1] + distance;
    }
    
    return grades;
}

// Organize the student's rank, name, and grade information in ascending order.
std::vector<std::string> student_ranking(std::vector<int> student_scores, std::vector<std::string> student_names) {
    std::vector<std::string> output{};

    for (int i = 0; i < student_scores.size(); i++) {
        output.push_back(std::to_string(i + 1) + ". " + student_names[i] + ": " + std::to_string(student_scores[i]));
    }
    
    return output;
}

std::string perfect_score(std::vector<int> student_scores, std::vector<std::string> student_names) {
    std::string highest_scorer{""};

    int i = 0;
    while (i < student_scores.size()) {
        if (student_scores[i] == 100) {
            highest_scorer = student_names[i];
            break;
        }
        i++;
    }
    
    return highest_scorer;
}
