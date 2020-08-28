import { ProtectedDataEvent, ProtectedDataListener } from './ProtectedData';

interface FakeEventSubscription {
  remove: () => void;
}

export class ProtectedDataIOS {

  static emit(e: ProtectedDataEvent): void {}

  static addChangeListener(_listener: ProtectedDataListener): FakeEventSubscription {
    return { remove: () => () => null };
  }
}

