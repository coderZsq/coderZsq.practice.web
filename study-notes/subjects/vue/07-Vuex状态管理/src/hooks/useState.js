import { mapState } from 'vuex';
import { useMapper } from './useMapper';

export function useState(mapper) {
  return useMapper(mapper, mapState);
}
