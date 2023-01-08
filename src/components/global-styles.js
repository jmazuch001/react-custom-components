import { create } from 'domain'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root{
--primary: purple;
--mainBorder: 1px solid red;
--white: #fff;
}

body {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f4f8;
}


`

export default GlobalStyles