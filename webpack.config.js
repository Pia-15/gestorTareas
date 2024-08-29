const path = require ('path');

module.exports = {
    mode:'development',
entry: './src/index.js', //punto de entrada de la aplicación 
output:{
    filename: 'bundle.js', // nombre del archivo de sañlida 
    path: path.resolve(__dirname,'dist'), // Carpeta de salida 
}, 
module: {
    rules: [ 
        {
            test: /\.css$/, // Regex para identificar archivos css
            use:['style-loader', 'css-loader'], // Loaders para procesar archivos  CSS  
                },
                {
            test: /\.js$/, //Regex para identificar archivos JS
            exclude: /node_modules/, // excluir la carpeta node_modules 
            use: {
                loader: 'babel-loader', // Loader para llevar JS moderno a Js antiguo para que sea compatible con todos lo navegadores.
                options: {
                    presets: ['@babel/preset-env'],
                   },
               },
            }, 
        ],
   },    
   devtool:'source-map', // Generar source maps para facilitar la depuración 
   devServer: {
        static:{ 
            directory:path.resolve(__dirname,"dist")
        },
    
    compress: true, //Habilitar compresión gzip
    port:9000, //Puerto del servidor de desarrollo
   },
};