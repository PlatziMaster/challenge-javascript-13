# Challenge - Combinator Flip

Hay muchas formas de controlar los argumentos de una función en JS, la idea del reto es que crear una función que reciba una función y la ejecute con los argumentos al revés.


# Ejemplo

```js
function print(a, b) {
  return `${a} - ${b}`;
}
print(1, 3) // 1 - 3
flip(print(1, 3)) // 3 - 1
```

### Instalación
```
npm install
```

### test
```
npm run test
```

### Enviar solución de reto
Debes hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Licencia
challenge-javascript-08 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).