var $iA2ta$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $iA2ta$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9233cea927cb9637$export$2e2bcd8739ae039);
var $e79265b20a0a7db1$exports = {};

$parcel$export($e79265b20a0a7db1$exports, "default", () => $e79265b20a0a7db1$export$2e2bcd8739ae039, (v) => $e79265b20a0a7db1$export$2e2bcd8739ae039 = v);


const $e79265b20a0a7db1$var$OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
};
const $e79265b20a0a7db1$var$EmptyDisplay = /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)("div", {}, void 0, false, {
    fileName: "src/lib/InfiniteScroll.tsx",
    lineNumber: 9,
    columnNumber: 22
}, undefined);
const $e79265b20a0a7db1$var$InfiniteScroll = ({ loader: loader , endDisplay: endDisplay , onEnd: onEnd , hasMore: hasMore , children: children  })=>{
    const loadingRef = (0, $iA2ta$react.useRef)(null);
    const observer = (0, $iA2ta$react.useRef)();
    observer.current = new IntersectionObserver(handleObserver, $e79265b20a0a7db1$var$OPTIONS);
    const [isIntersecting, setIsIntersecting] = (0, $iA2ta$react.useState)(false);
    function handleObserver(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return setIsIntersecting(false);
        setIsIntersecting(true);
    }
    (0, $iA2ta$react.useEffect)(()=>{
        // Perform fetch operation if loader container is in view
        if (isIntersecting) hasMore && onEnd(); // call onEnd method if more content exist
    }, [
        isIntersecting
    ]);
    (0, $iA2ta$react.useEffect)(()=>{
        // initialize observer
        window.addEventListener("DOMContentLoaded", ()=>{
            const { current: current  } = loadingRef;
            observer.current?.observe(current);
        });
        return ()=>{
            observer.current?.disconnect();
        };
    }, [
        loadingRef
    ]);
    return /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)("div", {
        className: "infinite-scroll__container",
        children: [
            /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)("div", {
                className: "infinite-scroll__items",
                children: children
            }, void 0, false, {
                fileName: "src/lib/InfiniteScroll.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)("div", {
                className: "infinite-scroll__loader-container",
                ref: loadingRef,
                children: hasMore ? loader : endDisplay
            }, void 0, false, {
                fileName: "src/lib/InfiniteScroll.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/lib/InfiniteScroll.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, undefined);
};
$e79265b20a0a7db1$var$InfiniteScroll.defaultProps = {
    endDisplay: $e79265b20a0a7db1$var$EmptyDisplay,
    loader: $e79265b20a0a7db1$var$EmptyDisplay
};
var $e79265b20a0a7db1$export$2e2bcd8739ae039 = $e79265b20a0a7db1$var$InfiniteScroll;


var $9233cea927cb9637$export$2e2bcd8739ae039 = (0, $e79265b20a0a7db1$exports.default);


//# sourceMappingURL=main.js.map
