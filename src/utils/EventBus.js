export class EventBus {
  constructor(events) {
    this.map = {}
  }

  subscribe(event, handler) {
    this.map[event] = handler;
  }

  call(event, data) {
    this.map[event](data);
  }

}