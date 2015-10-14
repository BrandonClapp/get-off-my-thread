function setTimeout_main() {
    console.log('Entering main');
    
    // setTimeout will still block main thread.
    setTimeout(tasks.expensiveTaskA(), 0);
    setTimeout(tasks.expensiveTaskB(), 0);

    console.log('main finished');
}