import { ProtectedDataEvent, ProtectedDataListener } from './ProtectedData';

interface FakeEventSubscription {
  remove: () => void;
}

export class ProtectedData {

  static emit(e: ProtectedDataEvent): void {}

  static addChangeListener(_listener: ProtectedDataListener): FakeEventSubscription {
    return { remove: () => () => null };
  }
}

