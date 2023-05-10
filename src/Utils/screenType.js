export const screenType = (width) => {
    const resolution = width;
    const isMobile = resolution <= 600;
    const isTablet = resolution > 600 && resolution <= 900;
    const isDesktop = !isMobile && !isTablet;

    return { isMobile, isTablet, isDesktop };
}
