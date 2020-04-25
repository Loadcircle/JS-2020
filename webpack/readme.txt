Para COMENZAR con webpack
primero npm init para iniciarlizar el npm y crear el package.json 

luego npm install webpack --save-dev para instalar a desarrollo
npm install webpack-cli --save-dev

ejecutar webpack -> webpack 'ruta del archivo'

si esta global ejecutar directamente
si esta en el proyecto, ir a node_modules\.bin\webpack con \\


tambien se puede hacer creando un archivo de codigo webpack.config.js 
y luego ejecutar webpack node_modules\.bin\webpack o webpack global

se puede crear el script "webpack --mode development" en el package para
ejecutar webpack en modo desarrollo