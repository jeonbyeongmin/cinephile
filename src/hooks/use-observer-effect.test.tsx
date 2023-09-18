import { render } from '@testing-library/react';
import { useRef } from 'react';
import { useObserverEffect } from './use-observer-effect';

// 테스트 헬퍼
const observerMap = new Map<Element, any>();
const instanceMap = new Map<Element, any>();

function intersect(element: Element, isIntersecting: boolean) {
  const callback = observerMap.get(element);
  if (callback) {
    callback([{ isIntersecting, target: element, intersectionRatio: isIntersecting ? 1 : -1 }]);
  }
}

function getObserverOf(element: Element): IntersectionObserver {
  return instanceMap.get(element);
}

// 테스트
describe('`useObserverEffect` 유닛 테스트', () => {
  beforeEach(() => {
    // @ts-ignore
    global.IntersectionObserver = jest.fn(
      (callback: IntersectionObserverCallback, options: IntersectionObserverInit) => {
        const instance = {
          thresholds: Array.isArray(options.threshold) ? options.threshold : [options.threshold],
          root: options.root,
          rootMargin: options.rootMargin,
          observe: jest.fn((element: Element) => {
            instanceMap.set(element, instance);
            observerMap.set(element, callback);
          }),
          unobserve: jest.fn((element: Element) => {
            instanceMap.delete(element);
            observerMap.delete(element);
          }),
          disconnect: jest.fn(),
          takeRecords: {},
        };

        return instance;
      }
    );
  });

  afterEach(() => {
    // @ts-ignore
    global.IntersectionObserver.mockReset();
    instanceMap.clear();
    observerMap.clear();
  });

  const TestComponent = ({ callback, isReady }: { callback: any; isReady?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    useObserverEffect(callback, ref.current, { isReady });

    return <div data-testid="wrapper" ref={ref} />;
  };

  test('`element`가 정의되어 있고, `isReady`의 초기값은 `true`이므로 `IntersectObserver` 인스턴스가 생성되어야 한다.', () => {
    // Given
    const callback = jest.fn();

    // When
    const { getByTestId } = render(<TestComponent callback={callback} />);
    const wrapper = getByTestId('wrapper');
    const instance = getObserverOf(wrapper);

    // Then
    expect(instance.observe).toHaveBeenCalledWith(wrapper);
  });

  test('`element`가 정의되어 있고, `isReady`가 `true`면 `IntersectObserver` 인스턴스가 생성되어야 한다.', () => {
    // Given
    const callback = jest.fn();

    // When
    const { getByTestId } = render(<TestComponent callback={callback} isReady={true} />);
    const wrapper = getByTestId('wrapper');
    const instance = getObserverOf(wrapper);

    // Then
    expect(instance.observe).toHaveBeenCalledWith(wrapper);
  });

  test('`element`가 정의되어 있고, `isReady`가 `false`면 `IntersectObserver` 인스턴스가 생성되면 안된다.', () => {
    // Given
    const callback = jest.fn();

    // When
    const { getByTestId } = render(<TestComponent callback={callback} isReady={false} />);
    const wrapper = getByTestId('wrapper');
    const instance = getObserverOf(wrapper);

    // Then
    expect(instance).toBeUndefined();
  });

  test('인터섹트가 되기 전에는 `callback`이 호출되면 안된다.', () => {
    // Given
    const callback = jest.fn();

    // When
    const { getByTestId } = render(<TestComponent callback={callback} />);
    const wrapper = getByTestId('wrapper');
    intersect(wrapper, false);

    // Then
    expect(callback).not.toHaveBeenCalled();

    // When
    intersect(wrapper, true);

    // Then
    expect(callback).toHaveBeenCalled();
  });

  test('언마운트되면 `IntersectObserver` 인스턴스는 `disconnect` 되어야 한다.', () => {
    // Given
    const callback = jest.fn();

    // When
    const { getByTestId, unmount } = render(<TestComponent callback={callback} />);
    const wrapper = getByTestId('wrapper');
    unmount();

    // Then
    expect(getObserverOf(wrapper).disconnect).toHaveBeenCalledTimes(1);
  });
});
