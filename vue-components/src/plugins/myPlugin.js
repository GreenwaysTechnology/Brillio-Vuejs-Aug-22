
//every plugin is object 

export const myPlugin = {
    install(app, options) {
        //configure application
        //plugin logic: plugin reads data 
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase();
        }
        app.config.globalProperties.$lowercase = key => {
            return key.toLowerCase();
        }
    }
};