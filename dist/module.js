import {jsxDEV as $4MPRY$jsxDEV} from "react/jsx-dev-runtime";
import {useRef as $4MPRY$useRef, useState as $4MPRY$useState, useEffect as $4MPRY$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $8ec1571f23520e94$exports = {};

$parcel$export($8ec1571f23520e94$exports, "default", () => $8ec1571f23520e94$export$2e2bcd8739ae039, (v) => $8ec1571f23520e94$export$2e2bcd8739ae039 = v);


const $8ec1571f23520e94$var$OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
};
const $8ec1571f23520e94$var$EmptyDisplay = /*#__PURE__*/ (0, $4MPRY$jsxDEV)("div", {}, void 0, false, {
    fileName: "src/lib/InfiniteScroll.tsx",
    lineNumber: 9,
    columnNumber: 22
}, undefined);
const $8ec1571f23520e94$var$InfiniteScroll = ({ loader: loader , endDisplay: endDisplay , onEnd: onEnd , hasMore: hasMore , children: children  })=>{
    const loadingRef = (0, $4MPRY$useRef)(null);
    const observer = (0, $4MPRY$useRef)();
    observer.current = new IntersectionObserver(handleObserver, $8ec1571f23520e94$var$OPTIONS);
    const [isIntersecting, setIsIntersecting] = (0, $4MPRY$useState)(false);
    function handleObserver(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return setIsIntersecting(false);
        setIsIntersecting(true);
    }
    (0, $4MPRY$useEffect)(()=>{
        // Perform fetch operation if loader container is in view
        if (isIntersecting) hasMore && onEnd(); // call onEnd method if more content exist
    }, [
        isIntersecting
    ]);
    (0, $4MPRY$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $4MPRY$jsxDEV)("div", {
        className: "infinite-scroll__container",
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsxDEV)("div", {
                className: "infinite-scroll__items",
                children: children
            }, void 0, false, {
                fileName: "src/lib/InfiniteScroll.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $4MPRY$jsxDEV)("div", {
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
$8ec1571f23520e94$var$InfiniteScroll.defaultProps = {
    endDisplay: $8ec1571f23520e94$var$EmptyDisplay,
    loader: $8ec1571f23520e94$var$EmptyDisplay
};
var $8ec1571f23520e94$export$2e2bcd8739ae039 = $8ec1571f23520e94$var$InfiniteScroll;


var $090815f5086f7f29$export$2e2bcd8739ae039 = (0, $8ec1571f23520e94$exports.default);


export {$090815f5086f7f29$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
