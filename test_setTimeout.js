function setTimeout_main() {
    console.log('Entering main');
    
    // setTimeout will not block main thread immediately.
    // but it will eventually execute the tasks sequentially (blocking)
    setTimeout(tasks.expensiveTaskA, 0);
    setTimeout(tasks.expensiveTaskB, 0);

    console.log('main finished');
}