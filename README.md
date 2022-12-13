# 100 Uruguayos Dicen

My sister, who is a teacher, asked me to help her with one of her activities. She wanted to play with her students a tv game.

100 Uruguayos Dicen is a game which is based on 100 Argentinos Dicen TV show.

The instructions to play are really easy. You will need at least 3 people: one host and two participants. The host would be the one that prepares the questions and its answers, and shows them to the participants. The idea is that the answers are hidden and both players have to guess all the cards. The participant that guesses more answers win.

## Usage

Once you open the page, you will see two buttons: _Jugar_ and _Configurar_. The first one would be disabled as you don't have any questions prepared. So the first step is to go to the configuration page and add the first question by pressing the _"Agregar pregunta"_ button.

A new card will be added, where you can set the question value and the first answer. As you write the answer, a new input would be added. If you want to remove an answer, please leave the input empty. Also you can remove the entire question by pressing the _"Eliminar"_ button next to the question value.

Below the questions box, you will see 4 control buttons:
1. **_Guardar_**: Save your configuration into the browser storage.
2. **_Exportar_**: Export your configuration into a json file.
3. **_Cargar_**: Import a json file with the configuration you save by clicking the previous button.
4. **_Limpiar_**: Clear all questions and their answers.

Once you finished setting the game, you can go back to the home screen by clicking the arrow in the very top of the page and click _"Jugar"_. You will see the first question and its hidden answers. When a player says a word or phrase which is fairly equal to one of the answers, you can click it and the text will be revealed.

Lastly, you can navigate through the questions by the controls you have below the answers: _Anterior_ and _Siguiente_.

## Installation

Just clone it and run ```ng serve -o```.
You would need to install packages by running ```npm i```.
Please, make sure you have both Node.js and Angular-CLI installed.

## Demo

You can see a demo in [nicoovillarr.github.io](https://nicoovillarr.github.io).
