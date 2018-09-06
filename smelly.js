// What does it do?
// Honestly, what we have here is a little over 100 lines of fairly incomprehensible stuff.
// HINT:
//    1. What you see is a Naive Bayes Classifier.
//    2. The algorithm will use chords in songs along with their difficulty as training data.

const fs = require('fs')
// songs
const imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7']
const somewhere_over_the_rainbow = ['c', 'em', 'f', 'g', 'am']
const tooManyCooks = ['c', 'g', 'f']
const iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm']
const babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab']
const creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6']
const army = ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm']
const paperBag = ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7', 'em7', 'a7', 'f7', 'b']
const toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7']
const bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#']
const song_11 = []

let songs = []
let labels = []
let allChords = []
let labelCounts = []
let labelProbabilities = []
let chordCountsInLabels = {}
let probabilityOfChordsInLabels = {}

function train (chords, label) {
  songs.push([label, chords])
  labels.push(label)
  chords.forEach(function (chord) {
    if (!allChords.includes(chord)) {
      allChords.push(chord)
    }
  })
  if (Object.keys(labelCounts).includes(label)) {
    labelCounts[label]++
  } else {
    labelCounts[label] = 1
  }
}

function setLabelProbabilities () {
  Object.keys(labelCounts).forEach(function (label) {
    labelProbabilities[label] = labelCounts[label] / songs.length
  })
}

function setChordCountsInLabels () {
  songs.forEach(function (song) {
    if (chordCountsInLabels[song[0]] === undefined) {
      chordCountsInLabels[song[0]] = {}
    }
    song[1].forEach(function (chord) {
      if (chordCountsInLabels[song[0]][chord] > 0) {
        chordCountsInLabels[song[0]][chord]++
      } else {
        chordCountsInLabels[song[0]][chord] = 1
      }
    })
  })
}

function setProbabilityOfChordsInLabels () {
  probabilityOfChordsInLabels = chordCountsInLabels
  Object.keys(probabilityOfChordsInLabels).forEach(function (label) {
    Object.keys(probabilityOfChordsInLabels[label]).forEach(function (chord) {
      probabilityOfChordsInLabels[label][chord] = probabilityOfChordsInLabels[label][chord] / songs.length
    })
  })
}

function classify (chords) {
  console.log(labelProbabilities)
  let classified = {}
  Object.keys(labelProbabilities).forEach(function (label) {
    let first = labelProbabilities[label] + 1.01
    chords.forEach(function (chord) {
      let probabilityOfChordInLabel = probabilityOfChordsInLabels[label][chord]
      if (probabilityOfChordInLabel) {
        first = first * (probabilityOfChordInLabel + 1.01)
      }
    })
    classified[label] = first
  })
  console.log(classified)
}

train(imagine, 'easy')
train(somewhere_over_the_rainbow, 'easy')
train(tooManyCooks, 'easy')
train(iWillFollowYouIntoTheDark, 'medium')
train(babyOneMoreTime, 'medium')
train(creep, 'medium')
train(paperBag, 'hard')
train(toxic, 'hard')
train(bulletproof, 'hard')

setLabelProbabilities()
setChordCountsInLabels()
setProbabilityOfChordsInLabels()

classify(['d', 'g', 'e', 'dm'])
classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m'])
