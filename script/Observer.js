class Observer{
    constructor(callback, sender){
        this.sender  = sender;
        this.callback = callback;          
    }
    notify(){
        this.callback(this.sender);       
    }
}

class Subject{
    constructor(){
        this.observers = [];
    }
    subscribe(observer){
        this.observers.push(observer);
    }
    unSubscribe(observer){
        this.observers = this.observers.filter(item => item !== observer );
    }
    notifyOberservers(){
        this.observers.forEach(element => {
            element.notify();
        });
    }
}
