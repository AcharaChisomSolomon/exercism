#include "darts.h"

namespace darts {

    int score(double x, double y) {
    double radius = std::hypot(x, y);

    if (radius <= 1.0) return 10;
    if (radius <= 5.0) return 5;
    if (radius <= 10.0) return 1;
    return 0;
}

}
