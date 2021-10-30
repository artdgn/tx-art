// drawing
import { fidenzaDraw } from './fidenza.js'
import { eccentrics2Draw } from './eccentrics2'
import { squiggleDraw } from './squiggle'
import { energyDraw } from './energy'
import { gravityDraw } from './gravity'
import { skultpuurDraw } from './skulptuur'
import { watercolorsDraw } from './watercolors'
import { drawUtopia } from './utopia'
import { drawVoid } from './void'
import { drawRinascita } from './rinascita'
import { drawAlienInsects } from './alienInsects'
import { drawUltrawave369 } from './ultrawave369'
import { drawMeridian } from './meridian'
import { drawBlanschke } from './blanschke'
import { drawFlowers } from './flowers'
// import { draw720minutes } from './draw720minutes'
// import { drawRapture } from './rapture'
// import { drawObicera } from './obicera'

export const drawFuncs = {

    // p5
    "fidenza": fidenzaDraw,
    "eccentrics2": eccentrics2Draw,
    "squiggle": squiggleDraw,
    "energy": energyDraw,
    "gravity": gravityDraw,
    "watercolors": watercolorsDraw,
    "rinascita": drawRinascita,
    "alien-insects": drawAlienInsects,
    "ultrawave369": drawUltrawave369,
    "blanschke-ballet": drawBlanschke,
    "flowers": drawFlowers,

    // webgl
    "skulptuur": skultpuurDraw,
    "utopia": drawUtopia,
    "void": drawVoid,
    "meridian": drawMeridian,

    // don't work
    // "720minutes": draw720minutes,
    // "rapture": drawRapture,
    // "obicera": drawObicera,
}
