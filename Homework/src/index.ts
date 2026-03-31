const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function printWithDelay(msg: string, seconds: number): Promise<void> {
    while (true) {
        await sleep(seconds * 1000);
        console.log(msg);
    }
    
}

printWithDelay("It is 1", 1); // if use await we are waiting until the method ends
printWithDelay("It is 2", 2);
printWithDelay("It is 3", 3);
await sleep(6 * 1000);

import { Worker, isMainThread, workerData } from 'node:worker_threads';

if (isMainThread) {
  const createThread = (msg: string, time: number) => {
    new Worker(new URL(import.meta.url), { workerData: { msg, time } });
  };

  createThread("Thread 1", 1);
  createThread("Thread 2", 2);
  createThread("Thread 3", 3);
  
  console.log("Main thread is free!");
} else {
  const { msg, time } = workerData;
  
  setTimeout(() => {
    console.log(`${msg} finished on a separate thread`);
  }, time * 1000);
}