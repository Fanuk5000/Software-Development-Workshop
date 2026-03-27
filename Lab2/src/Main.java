// Variant 9

import java.util.Scanner;

void main() {
    Scanner scanner = new Scanner(System.in);
    IO.println("------------------------ Task 1 ------------------------");
    //Задано два натуральних числа - двозначне і тризначне. Вивести різницю сум цифр цих чисел.
    String num1;
    String num2;
    while (true) {
        IO.print("\nEnter first number of len 2: ");
        num1 = scanner.nextLine();

        IO.print("\nEnter second number of len 3: ");
        num2 = scanner.nextLine();
        if (num1.length() == 2 && num2.length() == 3) {
            break;
        }
        if (num1.length() != 2) {
            IO.println("Length of first number is not two");
        }
        if (num2.length() != 3) {
            IO.println("Length of first number is not three");
        }
    }
    int sum_digits1 = 0;
    int sum_digits2 = 0;

    for (char digit : num1.toCharArray()) {
        sum_digits1 += Character.getNumericValue(digit);
    }
    for (char digit : num2.toCharArray()) {
        sum_digits2 += Character.getNumericValue(digit);
    }
    IO.println("The difference in sum of digits:");
    IO.println(sum_digits2 - sum_digits1);
    IO.println("------------------------ Task 2 ------------------------");
    // Змініть текст наступним чином: вставте в кожне речення після заданого k-го символу заданий рядок
    IO.println("Enter some text(default to use lorem ipsum...)");
    String text = scanner.nextLine();
    if (Objects.equals(text, "default") || text.length() < 20) {
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
    // looks for space and if has one of symbols is a sentence
    String[] sentences = text.split("(?<=[.!?])\\s+");

    int min_length = 999999999;
    for (String sentence : sentences) {
        int sentence_len = sentence.length();
        if (sentence_len < min_length){
            min_length = sentence_len;
        }
    }
    // %n is like \n
    System.out.printf("The min length is %d if number is more than it, nothing will be replaced%n", min_length);
    IO.print("\nEnter k (number of characters after which will be replacements): ");
    int k = Integer.parseInt(scanner.nextLine());


    IO.print("Enter the string to insert: ");
    String insertString = scanner.nextLine();

    IO.println("\nOriginal text:\n" + text);

    StringBuilder result = new StringBuilder();

    for (String sentence : sentences) {
        if (sentence.length() >= k) {
            result.append(sentence.substring(0, k)) // diapasone from of text from 0 to k
                    .append(insertString)
                    .append(sentence.substring(k));
        } else {
            result.append(sentence);
        }
        result.append(" ");
    }

    IO.println("\nModified text:\n" + result.toString().trim());

    scanner.close();
}

