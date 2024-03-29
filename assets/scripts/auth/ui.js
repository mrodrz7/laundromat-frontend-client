'use strict'

const store = require('../store')
const showDropoffsTemplate = require('../templates/dropoff-listing.handlebars')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successful sign in')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#getDropoffsButton').show()
  $('#clearDropoffsButton').show()
  $('#create-dropoffs').show()
  $('#update-dropoffs').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.content').html('')
  $('#getDropoffsButton').hide()
  $('#change-password').hide()
  $('#createDropoffsButton').hide()
  $('#clearDropoffsButton').hide()
  $('#create-dropoffs').hide()
  $('#update-dropoffs').hide()
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successful password change')
  $('#message').removeClass()
  $('#message').addClass('Success')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error changing password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

// Dropoff ui

const getDropoffsSuccess = (data) => {
  const showDropoffsHtml = showDropoffsTemplate({
    dropoffs: data.dropoffs
  })
  $('.content').html('')
  $('.content').append(showDropoffsHtml)
  $('form').trigger('reset')
}

const createDropoffsSuccess = function () {
  $('#message').text('Created successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const updateDropoffsSuccess = function () {
  $('#message').text('Updated Dropoff Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const clearDropoffs = () => {
  $('.content').empty()
}

const failure = (error) => {
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  signOutFailure,
  changePasswordFailure,
  getDropoffsSuccess,
  createDropoffsSuccess,
  clearDropoffs,
  updateDropoffsSuccess,
  failure
}
