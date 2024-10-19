#include <iostream>
#include "math.h"

using namespace std;

int main()
{
    double x, Y, start, end, step;
    cout << "Input start: ";
    cin >> start;
    cout << "Input end: ";
    cin >> end;
    cout << "Input step: ";
    cin >> step;
    cout << "*****WHILE*****\n";
    x = start;
    while (x <= end + step / 2) {
        Y = pow(x, 5) + pow(x, 1. / 2) - 3;
        cout << x << "\t" << Y << endl;
        x += step;
    }
    cout << "***DO..WHILE***\n";
    x = start;
    do {
        Y = pow(x, 5) + pow(x, 1. / 2) - 3;
        cout << x << "\t" << Y << endl;
        x += step;
    }
    while (x <= end + step / 2);
}