class Observer {
    constructor() {
      this.subscribers = [];
    }
    
    subscribe(callback) {
      this.subscribers.push(callback);
    }
    
    unsubscribe(callback) {
      this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
    }
    
    notify() {
      this.subscribers.forEach(subscriber => subscriber());
    }
  }

  export {Observer}