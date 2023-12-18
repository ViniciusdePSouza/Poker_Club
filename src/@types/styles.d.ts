import 'styled-components'
import theme from 'src/theme/index.ts'

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {} 
}