
import universal, { setHasBabelPlugin } from '/builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)
const t_1 = universal(import('../src/components/home/Home'), universalOptions)
const t_2 = universal(import('../src/components/units/soft/Soft'), universalOptions)
const t_3 = universal(import('../src/components/units/science/Science'), universalOptions)
const t_4 = universal(import('../src/components/units/games/Games'), universalOptions)
const t_5 = universal(import('../src/components/units/iot/IoT'), universalOptions)
const t_6 = universal(import('../src/components/units/school/School'), universalOptions)
const t_7 = universal(import('../src/components/units/media/Media'), universalOptions)
const t_8 = universal(import('../src/components/contact-us/ContactUs'), universalOptions)
const t_9 = universal(import('../src/components/about-us/AboutUs'), universalOptions)


// Template Map
export default {
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
'../src/components/home/Home': t_1,
'../src/components/units/soft/Soft': t_2,
'../src/components/units/science/Science': t_3,
'../src/components/units/games/Games': t_4,
'../src/components/units/iot/IoT': t_5,
'../src/components/units/school/School': t_6,
'../src/components/units/media/Media': t_7,
'../src/components/contact-us/ContactUs': t_8,
'../src/components/about-us/AboutUs': t_9
}

export const notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404"
