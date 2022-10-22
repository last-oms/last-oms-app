import { Order } from './order';

describe('Order', () => {
  it('should be instantiable through Order.create', () => {
    expect(Order.create()).toBeInstanceOf(Order);
  });
});
