let instances = [];

const defaults = {
        delay: 200,
        callback: null
    };

const StormComponentPrototype = {
        init() {
            this.DOMElement.addEventListener('click', this.handleClick.bind(this), false);
        },
        handleClick(e) {
            console.log(e.target, 'I\'ve been clicked');
        }
    };

const init = (sel, opts) => {
    let els = [].slice.call(document.querySelectorAll(sel));
    
    if(!els.length) {
        throw new Error('Boilerplate cannot be initialised, no augmentable elements found');
    }
    
    //Array.from(arr, fn)?
    els.forEach((el, i) => {
        instances[i] = Object.assign(Object.create(StormComponentPrototype), {
            DOMElement: el,
            settings: Object.assign({}, defaults, opts)
        });
        //add further objects as assign arguments for object composition
        instances[i].init();
    });
    return instances;
}

const reload = (els, opts) =>  {
    destroy();
    init(els, opts);
}

const destroy = () => {
    instances = [];  
}

//export default { init }
const StormComponentBoilerplate = {init};

export default StormComponentBoilerplate;


