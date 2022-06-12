import { ReactElement } from "react";
declare const InfiniteScroll: {
    ({ loader, endDisplay, onEnd, hasMore, children }: {
        loader: ReactElement;
        endDisplay: ReactElement;
        hasMore: Boolean;
        onEnd: () => void;
        children: ReactElement[];
    }): JSX.Element;
    defaultProps: {
        endDisplay: JSX.Element;
        loader: JSX.Element;
    };
};
export default InfiniteScroll;

//# sourceMappingURL=types.d.ts.map
