import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Event()
  someEvent: EventEmitter<void>;

  render() {
    return <button onClick={() => this.someEvent.emit()}></button>;
  }
}
