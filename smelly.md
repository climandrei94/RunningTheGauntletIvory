# Code smells
  * Use only one still on the all program, for example, only "for" or only "forEach" . I prefer forEach because of readability.
    ```javascript
    for (var i = 0; i < chords.length; i++){
      if(!allChords.includes(chords[i])){
        allChords.push(chords[i]);
      }
    }
    ```
      To
    ```javascript
    chords.forEach(function (chord) {
      if (!allChords.includes(chord)) {
        allChords.push(chord)
      }
    })
    ````
  * 
# Anti-patterns
  * Double negation
  * Names of variables must be sugestive; Examples: i -> chord
    ```javascript
    for (var i = 0; i < chords.length; i++)
    ```
    To
    ```javascript
    chords.forEach(function (chord)
    ```
    * Also applied on : setChordCountsInLabels, setProbabilityOfChordsInLabels, classify

  * Use var++ instead of var = var + 1
    ```javascript
    labelCounts[label] = labelCounts[label] + 1;
    ```
    To
    ```javascript
    labelCounts[label]++
    ```
    * Also applied on : setChordCountsInLabels
  * Unnecessary variables
    ```javascript
      let ttal = labelProbabilities
    ```

# Nonsens code
  * multiply with 1
    ```javascript
    probabilityOfChordsInLabels[i][j] = probabilityOfChordsInLabels[i][j] * 1.0 / songs.length
    ```
    To
    ```javascript
      probabilityOfChordsInLabels[label][chord] = probabilityOfChordsInLabels[label][chord] / songs.length
    ```
  * I don't know what this is supose to do
    ```javascript
      if (probabilityOfChordInLabel === undefined) {
        first + 1.01
      } else {
        first = first * (probabilityOfChordInLabel + 1.01)
      }
    ```
    To
    ```
      if (probabilityOfChordInLabel) {
        first = first * (probabilityOfChordInLabel + 1.01)
      }
    ```
  * I can't find a reason to use a function to get the legth of a global variable
    ```javascript
      let numberOfSongs = getNumberOfSongs()
    ```
# I like to to respect some rulles when i write code :
  * No comma
  * No unnecessary spaces
  * All variables must be declared
  * For declarations of variables I like to use let because is more strict than var or const for those who doesn't change
  * Top-down approach
