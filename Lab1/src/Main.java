//No9
//
//Дано матрицю A(2,3). Визначити числа, що зустрічаються в цій матриці більше одного
//разу. Результати вивести на екран у вигляді:
//        - матриця A;
//- числа, що зустрічаються в цій матриці більше одного разу.
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

static void printMatrix(int[][] mat) {
    for (int[] row : mat) {
        for (int element : row) {
            IO.print(element + " ");
        }
        IO.println();
    }
}
static List<Integer> findRepeats(int[][] mat) {
    List<Integer> oftenValues = new ArrayList<>();
    Map<Integer, Integer> repeats = new HashMap<>();
    for (int[] row : mat) {
        for (int element : row) {
            repeats.put(element, repeats.getOrDefault(element, 0) + 1);
        }
    }
    int maxValue = Collections.max(repeats.values());
    for (Map.Entry<Integer, Integer> entry : repeats.entrySet()) {
        if (entry.getValue() == maxValue) {
            oftenValues.add(entry.getKey());
        }
    }
    return oftenValues;
}

void main() {

    int[][] matrix = {
            {5, 6, 7},
            {8, 9, 7}
    };
    printMatrix(matrix);
    List<Integer> oftenValues = findRepeats(matrix);
    for (Integer number : oftenValues) {
        IO.println(number);
    }
}
