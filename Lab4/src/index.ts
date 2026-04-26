import promptSync from "prompt-sync";
import { readFileSync, writeFileSync } from "fs";

// Variant 16
// Відкрити будь-який текстовий файл та записати до іншого файлу кожне слово вихідного файлу та частоту
// його зустрічі у файлі

const prompt = promptSync({ sigint: true });
const file_path: string = prompt("Enter the file path: ");
const file_name: string = prompt("Enter the file name: ");

console.log(`The file path you entered is: ${file_path}`);
console.log(`The file name you entered is: ${file_name}`);

const wordFrequency = new Map<string, number>();

try {
    console.log("Reading from file...\n");
    const data: string = readFileSync(file_path, "utf-8");
    const words: string[] = data.split(/\s+/).filter(Boolean);

    for (const word of words) {
        wordFrequency.set(word, (wordFrequency.get(word) ?? 0) + 1);
    }
} catch (error) {
    console.error("Failed to read file. Does it exist?");
    process.exit(2);
}

if (wordFrequency.size > 0) {
    wordFrequency.forEach((count, word) => {
        console.log(`${word}: ${count}`);
    });
}
let wordFrequencyList: string[] = [];
try {
    console.log("\nWriting to file...\n");
    wordFrequency.forEach((count, word) => {
        wordFrequencyList.push(`${word}: ${count}`);
    });
    // 'utf-8' ensures the text is encoded correctly
    const dataToWrite = wordFrequencyList.join("\n");
    writeFileSync(file_name, dataToWrite, "utf-8");
    console.log("File written successfully!");
} catch (error) {
    console.error("Failed to write the file:", error);
}
