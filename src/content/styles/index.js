// drawing
import { fidenzaDraw } from './fidenza.js'
import { eccentrics2Draw } from './eccentrics2'
import { squiggleDraw } from './squiggle'
import { energyDraw } from './energy'
import { gravityDraw } from './gravity'
import { skultpuurDraw } from './skulptuur'
import { watercolorsDraw } from './watercolors'
// import { draw720minutes } from './draw720minutes'
import { drawUtopia } from './utopia'
import { drawVoid } from './void'

export const drawFuncs = {
    "fidenza": fidenzaDraw,
    "eccentrics2": eccentrics2Draw,
    "squiggle": squiggleDraw,
    "energy": energyDraw,
    "gravity": gravityDraw,
    "skulptuur": skultpuurDraw,
    "watercolors": watercolorsDraw,
    // "720minutes": draw720minutes,
    "utopia": drawUtopia,
    "void": drawVoid,
}
