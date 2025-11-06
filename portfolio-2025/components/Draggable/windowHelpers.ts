import { IWindowStyleParams } from "./types";

export const getWindowTop = (params: IWindowStyleParams
) => {
    const { isMaximized, snappedState, top } = params;
    if (isMaximized || snappedState) return 0;
    return top;
};

export const getWindowLeft = (params: IWindowStyleParams) => {
    const { isMaximized, snappedState, screenSize, left } = params;
    if (snappedState === 'left') return 0;
    if (snappedState === 'right') return screenSize.width / 2;
    if (isMaximized) return 0;
    return left;
};

export const getWindowWidth = (params: IWindowStyleParams) => {
    const { isMaximized, snappedState, screenSize, size } = params;
    if (isMaximized) return screenSize.width;
    if (snappedState) return screenSize.width / 2;
    return size.width;
};

export const getWindowHeight = (params: IWindowStyleParams) => {
    const { isMaximized, snappedState, screenSize, size } = params;
    if (isMaximized) return "90vh";
    if (snappedState) return screenSize.height * 0.95;
    return size.height;
};
