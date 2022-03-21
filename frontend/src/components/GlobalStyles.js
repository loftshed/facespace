import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
    :root {
        --primary-color: ${COLORS.primaryAccentClr};
        --accent-bg-color: rgba(204, 85, 0, 0.1);
        --page-horizontal-padding: 20px;
        --header-height: 50px;
        --max-content-width: 1200px;      
        --user-img-width: 120px;
        font-family: 'Josefin Sans', sans-serif;
    }

    ////////////////////////////////////////////
    // ˅˅˅ from josh w. comeau css reset  ˅˅˅ //
    ////////////////////////////////////////////

    html, body {
        height: 100%;
        user-select: none;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: ${COLORS.backgroundClr};
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    ////////////////////////////////////////////
    // ˄˄˄ from josh w. comeau css reset  ˄˄˄ //
    ////////////////////////////////////////////

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
        color: ${COLORS.headingsClr};
    }
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 28px;
    }
    h3 {
        font-size: 24px;
        /* text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-thickness: 2px;
        text-decoration-color: ${COLORS.secondaryAccentClr}; */
    }
`;
